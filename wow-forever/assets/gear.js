/*
  WoW Forever - attachment points and gear.
  Needs three.js and data/gear.js (window.GEAR). Shared so the class simulations can dress a
  character the same way Character Creation does.

    WFGear.findSockets(obj)        attachment points in a loaded .glb (Attach_HandR, ...)
    WFGear.dress(fig, ids, ctx)    put items on a figure; returns the attachment points it lacked
    WFGear.strip(fig)              take everything off
    WFGear.markers(fig, on)        show or hide the attachment points
    WFGear.outfit(classKey)        a class's starting items
    WFGear.needGLTF()              loads three's GLTFLoader once

  A figure keeps its points in fig.userData.sockets: { handR, handL, head, shoulderR, shoulderL, back, waist }.
*/
(function () {
  'use strict';
  var T = window.THREE;
  if (!T) return;
  var DATA = window.GEAR || { items: [], outfits: {} };

  var SLOTS = ['mainhand', 'offhand', 'head', 'shoulders', 'back', 'waist'];
  var SLOT_NAMES = { mainhand: 'Main Hand', offhand: 'Off Hand', head: 'Head', shoulders: 'Shoulders', back: 'Back', waist: 'Waist' };
  var SLOT_SOCKETS = { mainhand: ['handR'], offhand: ['handL'], head: ['head'], shoulders: ['shoulderR', 'shoulderL'], back: ['back'], waist: ['waist'] };
  var BLENDER = { handR: 'Attach_HandR', handL: 'Attach_HandL', head: 'Attach_Head', shoulderR: 'Attach_ShoulderR',
                  shoulderL: 'Attach_ShoulderL', back: 'Attach_Back', waist: 'Attach_Waist' };

  var byId = {};
  (DATA.items || []).forEach(function (it) { byId[it.id] = it; });

  /* ---------- loading .glb files */
  var gltfReady = null, cache = {};
  function needGLTF() {
    if (gltfReady) return gltfReady;
    gltfReady = new Promise(function (ok, fail) {
      if (T.GLTFLoader) return ok();
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js';
      s.onload = function () { ok(); }; s.onerror = fail;
      document.head.appendChild(s);
    });
    return gltfReady;
  }
  function loadFile(url) {
    if (!cache[url]) cache[url] = needGLTF().then(function () {
      return new Promise(function (ok, fail) { new T.GLTFLoader().load(url, function (g) { ok(g.scene); }, undefined, fail); });
    });
    return cache[url];
  }

  /* ---------- attachment points in a model: Attach_HandR, Attach_HandR.001, attach-hand-r ... */
  var KEYS = {};
  Object.keys(BLENDER).forEach(function (k) { KEYS[BLENDER[k].toLowerCase().replace(/[^a-z]/g, '')] = k; });
  function findSockets(obj) {
    var out = {};
    obj.traverse(function (n) {
      var k = KEYS[(n.name || '').toLowerCase().replace(/[^a-z]/g, '')];
      if (k && !out[k]) out[k] = n;
    });
    return out;
  }

  /* ---------- placeholder items: +Y up, +Z forward, origin at the attachment point */
  var G = null;
  function geo() {
    if (G) return G;
    G = { s: new T.SphereGeometry(1, 16, 12), dome: new T.SphereGeometry(1, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2),
          c: new T.CylinderGeometry(1, 1, 1, 12), k: new T.ConeGeometry(1, 1, 10), b: new T.BoxGeometry(1, 1, 1) };
    return G;
  }
  function V(x, y, z) { return new T.Vector3(x, y, z); }
  function shape(kind, mat) {
    var g = geo(), root = new T.Group();
    function add(geom, x, y, z, sx, sy, sz) {
      var m = new T.Mesh(geom, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); root.add(m); return m;
    }
    function rod(a, b, r) {
      var d = new T.Vector3().subVectors(b, a), m = add(g.c, 0, 0, 0, r, d.length(), r);
      m.position.copy(a).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize()); return m;
    }
    switch (kind) {
      case 'staff':
        rod(V(0, -0.72, 0), V(0, 0.82, 0), 0.016);
        add(g.s, 0, 0.88, 0, 0.055, 0.07, 0.055);
        for (var i = 0; i < 3; i++) {
          var a = i / 3 * Math.PI * 2, tip = V(Math.sin(a) * 0.07, 0.98, Math.cos(a) * 0.07);
          rod(V(0, 0.8, 0), tip, 0.008);
        }
        break;
      case 'sword':
        var dir = V(0, -0.3, 1).normalize(), at = function (k) { return dir.clone().multiplyScalar(k); };
        rod(at(-0.1), at(0.06), 0.017);                                        // grip
        rod(at(0.07).add(V(-0.11, 0, 0)), at(0.07).add(V(0.11, 0, 0)), 0.014); // guard
        var blade = add(g.b, 0, 0, 0, 0.05, 0.7, 0.012);
        blade.position.copy(at(0.44)); blade.quaternion.setFromUnitVectors(V(0, 1, 0), dir);
        var pt = add(g.k, 0, 0, 0, 0.025, 0.08, 0.006);
        pt.position.copy(at(0.83)); pt.quaternion.setFromUnitVectors(V(0, 1, 0), dir);
        break;
      case 'shield':                                     // left hand, facing out (+x)
        var sh = add(g.c, 0.07, 0.1, 0.02, 0.22, 0.03, 0.22); sh.rotation.z = Math.PI / 2;
        add(g.s, 0.09, 0.1, 0.02, 0.02, 0.06, 0.06);
        break;
      case 'tome':
        add(g.b, 0.0, 0.02, 0.08, 0.05, 0.2, 0.15);
        add(g.b, -0.004, 0.02, 0.08, 0.044, 0.18, 0.152);
        break;
      case 'helm':
        add(g.dome, 0, 0.005, -0.005, 0.13, 0.15, 0.135);
        add(g.c, 0, 0.005, -0.005, 0.132, 0.025, 0.137);
        rod(V(0, 0.01, 0.13), V(0, -0.07, 0.135), 0.012);
        rod(V(0, 0.13, -0.08), V(0, 0.19, 0.06), 0.012);
        break;
      case 'pauldron':                                   // modelled for the right shoulder (-x)
        var p = add(g.dome, -0.015, 0.0, 0, 0.12, 0.09, 0.11); p.rotation.z = 0.45;
        rod(V(-0.04, 0.06, 0), V(-0.1, 0.17, 0), 0.012);
        break;
      case 'quiver':
        rod(V(0.08, -0.25, -0.05), V(-0.08, 0.22, -0.05), 0.045);
        for (var j = 0; j < 4; j++) rod(V(-0.07 + j * 0.012, 0.2, -0.05 + (j % 2) * 0.02), V(-0.1 + j * 0.012, 0.36, -0.05 + (j % 2) * 0.02), 0.005);
        break;
      case 'pouch':
        add(g.c, 0, 0, 0, 0.19, 0.04, 0.15);                // belt
        add(g.s, -0.17, -0.05, 0.07, 0.05, 0.065, 0.04);
        add(g.b, 0, 0, 0.15, 0.05, 0.05, 0.015);           // buckle
        break;
      default:
        add(g.s, 0, 0, 0, 0.05, 0.05, 0.05);
    }
    return root;
  }

  /* ---------- dressing */
  function pick(map, names) {
    if (!map) return null;
    for (var i = 0; i < names.length; i++) if (names[i] && map[names[i]]) return map[names[i]];
    return null;
  }
  function place(at, obj, fit, mirror, own) {
    var g = new T.Group(), sc = fit.scale || 1, mv = fit.move || [0, 0, 0], tr = fit.turn || [0, 0, 0], D = Math.PI / 180;
    g.userData.gear = true; g.userData.own = own;
    g.add(obj);
    g.position.set(mirror ? -mv[0] : mv[0], mv[1], mv[2]);
    g.rotation.set(tr[0] * D, (mirror ? -tr[1] : tr[1]) * D, (mirror ? -tr[2] : tr[2]) * D);
    g.scale.set(mirror ? -sc : sc, sc, sc);
    at.add(g);
    return g;
  }
  function strip(fig) {
    var off = [];
    fig.traverse(function (n) { if (n.userData.gear) off.push(n); });
    off.forEach(function (n) {
      n.parent.remove(n);
      if (n.userData.own) n.traverse(function (m) { if (m.isMesh && m.material && m.material.dispose) m.material.dispose(); });
    });
  }

  /* ctx: { names: [sub-race, race], material: function (colour) -> material for placeholders } */
  function dress(fig, ids, ctx) {
    ctx = ctx || {};
    strip(fig);
    var S = fig.userData.sockets || {}, names = ctx.names || [], missing = [];
    var token = fig.userData.dressN = (fig.userData.dressN || 0) + 1;
    (ids || []).forEach(function (id) {
      var it = byId[id];
      if (!it) return;
      var file = pick(it.files, names) || it.file, fit = pick(it.fit, names) || {};
      (SLOT_SOCKETS[it.slot] || []).forEach(function (sk) {
        var at = S[sk];
        if (!at) { if (missing.indexOf(BLENDER[sk]) < 0) missing.push(BLENDER[sk]); return; }
        var mirror = sk === 'shoulderL';
        if (file) {
          loadFile(file).then(function (scn) {
            if (fig.userData.dressN === token) place(at, scn.clone(true), fit, mirror, false);
          }, function () { console.warn('WoW Forever: could not load gear file', file); });
        } else {
          var mat = ctx.material ? ctx.material(it.color || '#e8c46a') : new T.MeshStandardMaterial({ color: it.color || '#e8c46a' });
          place(at, shape(it.shape, mat), fit, mirror, true);
        }
      });
    });
    return missing;
  }

  /* ---------- show the attachment points: red = x, green = up, blue = forward */
  function markers(fig, on) {
    var old = [];
    fig.traverse(function (n) { if (n.userData.marker) old.push(n); });
    old.forEach(function (n) { n.parent.remove(n); });
    if (!on) return;
    var S = fig.userData.sockets || {};
    Object.keys(S).forEach(function (k) {
      var g = new T.Group(); g.userData.marker = true;
      var ax = new T.AxesHelper(0.12);
      ax.material.depthTest = false; ax.material.transparent = true; ax.renderOrder = 999;
      var dot = new T.Mesh(geo().s, new T.MeshBasicMaterial({ color: 0xffffff, depthTest: false, transparent: true }));
      dot.scale.setScalar(0.014); dot.renderOrder = 999;
      g.add(ax); g.add(dot);
      S[k].add(g);
    });
  }

  function outfit(cls) { return ((DATA.outfits || {})[cls] || []).filter(function (id) { return byId[id]; }); }
  function itemsFor(slot) { return (DATA.items || []).filter(function (it) { return it.slot === slot; }); }

  window.WFGear = {
    SLOTS: SLOTS, SLOT_NAMES: SLOT_NAMES, BLENDER: BLENDER, item: function (id) { return byId[id]; },
    itemsFor: itemsFor, outfit: outfit, findSockets: findSockets,
    dress: dress, strip: strip, markers: markers, needGLTF: needGLTF
  };
})();
