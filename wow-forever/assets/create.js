/*
  WoW Forever - Character Creation.

  Loads, in order:
    three.js (r128)            3D preview
    assets/icons.js            window.ICONS    new-class icons
    data/races.js              window.RACES    race text, factions, classes  (edit text there)
    data/create.js             window.CREATE   original races, classes, silhouettes, models
    assets/create.js           this file

  Every figure here is an original placeholder silhouette built from simple shapes.
  A race or form with a "model" path loads that .glb instead.
*/
(function () {
  'use strict';
  var C = window.CREATE, R = window.RACES || { trade: { groups: [] } }, ICONS = window.ICONS || {};
  var $ = function (id) { return document.getElementById(id); };

  /* ================================================================ helpers */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  function pageHref(key) { return key === 'home' ? '../index.html' : key + '.html'; }
  function renderBody(body) {
    var h = '';
    (body || []).forEach(function (b) {
      if (typeof b === 'string') { h += '<p>' + esc(b) + '</p>'; return; }
      if (b.h) h += '<h3>' + esc(b.h) + '</h3>';
      if (b.h4) h += '<h4>' + esc(b.h4) + '</h4>';
      if (b.note) h += '<p class="sub">' + esc(b.note) + '</p>';
      if (b.text) h += '<p>' + esc(b.text) + '</p>';
      if (b.list) h += '<ul>' + b.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      if (b.table) h += '<table>' + b.table.map(function (row, i) {
        return '<tr>' + row.map(function (c) { var t = i === 0 ? 'th' : 'td'; return '<' + t + '>' + esc(c) + '</' + t + '>'; }).join('') + '</tr>';
      }).join('') + '</table>';
      if (b.link) h += '<p><a href="' + esc(pageHref(b.page)) + '">' + esc(b.link) + '</a></p>';
    });
    return h;
  }
  /* Two-column tables ("Faction", "Classes", ...) become a lookup. */
  function factsOf(body) {
    var f = {};
    (body || []).forEach(function (b) {
      if (b && b.table && b.table[0] && b.table[0].length === 2) {
        b.table.slice(1).forEach(function (r) { f[r[0]] = r[1]; });
      }
    });
    return f;
  }
  function findEntry(title) {
    var hit = null;
    (R.trade && R.trade.groups || []).forEach(function (g) {
      g.entries.forEach(function (e) { if (!hit && e.title === title) hit = e; });
    });
    return hit;
  }

  /* ================================================================ data */
  var classByName = {};
  C.classes.forEach(function (c) { classByName[c.name.toLowerCase()] = c; });

  function classesFrom(text) {
    if (!text || /^\s*TBD/i.test(text)) return null;          // not decided yet
    return text.split(',').map(function (s) { return classByName[s.trim().toLowerCase()]; })
      .filter(Boolean).map(function (c) { return c.key; });
  }

  var RACES = [];
  C.races.forEach(function (item) {
    var entry = item.from ? findEntry(item.from) : null;
    if (item.from && !entry) return;                         // removed from races.js
    var forms;
    if (entry && entry.options) {
      var cfgs = item.forms || {}, keys = Object.keys(cfgs);
      forms = entry.options.map(function (o, j) {
        // match by title; if a sub-race was renamed in races.js, fall back to the same position
        var cfg = cfgs[o.title] || cfgs[keys[j]] || {};
        return { name: o.title, body: o.body, cfg: cfg };
      });
    } else {
      forms = [{ name: item.name || entry.title, body: entry ? entry.body : item.body, cfg: item }];
    }
    forms.forEach(function (f) {
      var facts = factsOf(f.body);
      var fac = (facts.Faction || '').toLowerCase();
      f.faction = fac === 'horde' ? 'horde' : fac === 'alliance' ? 'alliance' : (item.faction === 'horde' ? 'horde' : 'alliance');
      f.classes = classesFrom(facts.Classes);
      f.look = f.cfg.look || {};
      f.model = f.cfg.model || '';
      f.iconSrc = f.cfg.icon || '';
    });
    RACES.push({ id: item.id, name: item.name || entry.title, group: item.faction, forms: forms, formIdx: 0 });
  });

  /* ================================================================ original SVG art */
  function frame(id, color, inner) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><radialGradient id="cg-' + id +
      '" cx=".5" cy=".35" r=".8"><stop offset="0" stop-color="' + color + '" stop-opacity=".45"/><stop offset="1" stop-color="#0b0a0c"/></radialGradient></defs>' +
      '<rect width="64" height="64" fill="#0b0a0c"/><rect width="64" height="64" fill="url(#cg-' + id + ')"/>' +
      '<g fill="' + color + '" stroke="#000" stroke-width="1.5" stroke-linejoin="round">' + inner + '</g>' +
      '<rect x="1.5" y="1.5" width="61" height="61" rx="5" fill="none" stroke="' + color + '" stroke-opacity=".6" stroke-width="1.5"/></svg>';
  }
  var GLYPH = {
    warrior: '<path d="M30 8 H34 V40 L32 44 L30 40Z"/><path d="M21 40 H43 V45 H21Z"/><path d="M29.5 45 H34.5 V54 H29.5Z"/><circle cx="32" cy="57" r="3"/>',
    paladin: '<path d="M16 12 H48 V27 H16Z"/><path d="M29 27 H35 V57 H29Z"/><path d="M27 40 H37 V44 H27Z"/>',
    hunter: '<path d="M22 7 Q50 32 22 57" fill="none" stroke-width="5" stroke="#000"/><path d="M22 7 Q50 32 22 57" fill="none" stroke-width="3"/><path d="M22 7 V57" fill="none" stroke-width="1.2"/><path d="M12 31 H48 V33 H12Z"/><path d="M54 32 L45 26 V38Z"/>',
    rogue: '<g transform="rotate(40 32 32)"><path d="M32 4 L37 14 V38 H27 V14Z"/><path d="M22 38 H42 V43 H22Z"/><path d="M29 43 H35 V55 H29Z"/></g>',
    priest: '<circle cx="32" cy="32" r="9"/><path d="M32 6 L35 20 H29Z M32 58 L29 44 H35Z M6 32 L20 29 V35Z M58 32 L44 35 V29Z M13 13 L24 22 L22 24Z M51 51 L40 42 L42 40Z M51 13 L42 24 L40 22Z M13 51 L22 40 L24 42Z"/>',
    shaman: '<path d="M37 5 L17 36 H30 L23 59 L47 25 H34 L41 5Z"/>',
    mage: '<path d="M32 5 C46 20 50 31 45 43 C41 53 23 53 19 43 C15 33 23 26 26 16 C29 25 33 27 32 5Z"/><path d="M32 30 C37 36 38 41 35 46 C33 49 30 49 29 46 C27 42 30 38 32 30Z" fill="#0b0a0c" stroke="none"/>',
    warlock: '<path d="M12 12 C12 34 23 45 32 45 C41 45 52 34 52 12 C47 28 40 34 32 34 C24 34 17 28 12 12Z"/><circle cx="32" cy="52" r="4"/>',
    druid: '<ellipse cx="32" cy="41" rx="11" ry="9"/><circle cx="19" cy="27" r="5"/><circle cx="27" cy="19" r="5"/><circle cx="37" cy="19" r="5"/><circle cx="45" cy="27" r="5"/>'
  };
  function classIcon(c) {
    if (ICONS['rail-' + c.key]) return ICONS['rail-' + c.key];
    return frame(c.key, c.color, GLYPH[c.key] || '<circle cx="32" cy="32" r="12"/>');
  }
  var CREST = {
    alliance: '<svg viewBox="0 0 64 64"><path d="M32 4 L54 11 V30 C54 44 44 54 32 60 C20 54 10 44 10 30 V11Z" fill="#1f3d7a" stroke="#d9b25a" stroke-width="3"/><path d="M32 16 L36 28 L48 30 L36 33 L32 46 L28 33 L16 30 L28 28Z" fill="#d9b25a"/></svg>',
    horde: '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26" fill="#6e160e" stroke="#c9873a" stroke-width="3"/><path d="M20 16 L27 48 L23 49Z M30 13 L34 51 L30 51Z M40 15 L39 49 L35 48Z" fill="#e8b04a" stroke="#000" stroke-width="1"/></svg>',
    split: '<svg viewBox="0 0 64 64"><path d="M32 4 V60 C20 54 10 44 10 30 V11Z" fill="#1f3d7a"/><path d="M32 4 L54 11 V30 C54 44 44 54 32 60Z" fill="#6e160e"/><path d="M32 4 L54 11 V30 C54 44 44 54 32 60 C20 54 10 44 10 30 V11Z" fill="none" stroke="#d9b25a" stroke-width="3"/></svg>'
  };
  document.querySelectorAll('[data-crest]').forEach(function (n) { n.innerHTML = CREST[n.getAttribute('data-crest')]; });

  /* ================================================================ 3D: figures */
  var hasGL = !!window.THREE && (function () {
    try { var c = document.createElement('canvas'); return !!(c.getContext('webgl') || c.getContext('experimental-webgl')); } catch (e) { return false; }
  })();
  var FCOL = { alliance: '#6fa8ff', horde: '#ff6a45' };

  var V, GEO, RIM_VS, RIM_FS;
  if (hasGL) {
    V = function (x, y, z) { return new THREE.Vector3(x, y, z); };
    GEO = { s: new THREE.SphereGeometry(1, 18, 14), k: new THREE.ConeGeometry(1, 1, 10) };
    RIM_VS = 'varying vec3 vN; varying vec3 vV;' +
      'void main(){ vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }';
    RIM_FS = 'uniform vec3 uBase; uniform vec3 uRim; uniform float uFade; varying vec3 vN; varying vec3 vV;' +
      'void main(){ vec3 n = normalize(vN); float f = 1.0 - max(dot(n, normalize(vV)), 0.0);' +
      ' float rim = pow(f, 2.3); float top = max(n.y, 0.0) * 0.07;' +
      ' gl_FragColor = vec4(uBase + vec3(top) + uRim * rim * 1.3, uFade); }';
  }
  function rimMat(color) {
    return new THREE.ShaderMaterial({
      uniforms: { uBase: { value: new THREE.Color(0x07080b) }, uRim: { value: new THREE.Color(color) }, uFade: { value: 1 } },
      vertexShader: RIM_VS, fragmentShader: RIM_FS, transparent: true
    });
  }

  var DEFAULT_LOOK = {
    height: 1, bulk: 1, legs: 1, head: 1, neck: 1, jaw: 1, armLen: 1, arms: 1, hunch: 0, belly: 0,
    lower: 'biped', ears: null, tusks: 0, snout: 0, nose: 0, beard: 0, tendrils: 0, thorns: 0,
    horns: null, hair: null, hairSize: 1, tail: null, claws: false, glow: false, eyes: null, rim: null
  };

  /* Build a figure, about 1.8 units tall at height 1, facing +z. */
  function buildFigure(look, faction) {
    var L = Object.assign({}, DEFAULT_LOOK, look || {});
    var rimC = L.rim || FCOL[faction];
    var mat = rimMat(rimC);
    var glowMat = new THREE.MeshBasicMaterial({ color: L.eyes || rimC, transparent: true });
    var B = L.bulk, AL = L.armLen, AT = L.arms, hs = L.head;
    var root = new THREE.Group(), body = new THREE.Group();
    root.add(body);
    var P = { tail: [], arms: [], mats: [mat, glowMat] };

    function ball(par, m, x, y, z, sx, sy, sz) {
      var o = new THREE.Mesh(GEO.s, m); o.position.set(x, y, z);
      o.scale.set(sx, sy == null ? sx : sy, sz == null ? sx : sz); par.add(o); return o;
    }
    function rod(par, a, b, r1, r2) {
      var d = new THREE.Vector3().subVectors(b, a), len = d.length();
      var o = new THREE.Mesh(new THREE.CylinderGeometry(r2, r1, 1, 12), mat);
      o.userData.own = true;
      o.scale.set(1, len, 1); o.position.copy(a).addScaledVector(d, 0.5);
      o.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize()); par.add(o); return o;
    }
    function spike(par, m, base, dir, len, r) {
      var d = dir.clone().normalize(), o = new THREE.Mesh(GEO.k, m);
      o.scale.set(r, len, r); o.position.copy(base).addScaledVector(d, len / 2);
      o.quaternion.setFromUnitVectors(V(0, 1, 0), d); par.add(o); return o;
    }
    function chain(par, pts, r0, r1, n, m) {
      var curve = new THREE.CatmullRomCurve3(pts), out = [];
      for (var i = 0; i < n; i++) {
        var t = i / (n - 1), p = curve.getPoint(t);
        out.push(ball(par, m || mat, p.x, p.y, p.z, r0 + (r1 - r0) * t));
      }
      return out;
    }
    var seed = 7;
    function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }

    /* ---------- lower body */
    var baseY, s;
    if (L.lower === 'serpent') {
      baseY = 0.95;
      var tp = [V(0, 0.95, 0), V(0, 0.62, -0.04), V(0, 0.28, -0.18), V(0, 0.13, -0.52), V(0.34, 0.1, -0.74),
                V(0.58, 0.09, -0.42), V(0.42, 0.08, -0.05), V(0.12, 0.07, 0.12), V(-0.12, 0.06, 0.1)];
      P.tail = chain(body, tp, 0.16 * B, 0.025, 30);
      P.tail.forEach(function (b) { b.userData.base = b.position.clone(); });
      P.serpent = true;
    } else if (L.lower === 'deer') {
      baseY = 1.02;
      ball(body, mat, 0, 0.98, -0.36, 0.17 * B, 0.18, 0.42);
      for (s = -1; s <= 1; s += 2) {
        var fx = s * 0.1 * B;
        rod(body, V(fx, 0.92, -0.06), V(fx, 0.5, -0.03), 0.06 * B, 0.04);
        rod(body, V(fx, 0.5, -0.03), V(fx, 0.06, -0.05), 0.04, 0.025);
        ball(body, mat, fx, 0.04, -0.04, 0.035, 0.04, 0.05);
        rod(body, V(fx, 0.95, -0.66), V(fx, 0.56, -0.56), 0.08 * B, 0.05);
        rod(body, V(fx, 0.56, -0.56), V(fx, 0.3, -0.74), 0.045, 0.035);
        rod(body, V(fx, 0.3, -0.74), V(fx, 0.06, -0.7), 0.035, 0.025);
        ball(body, mat, fx, 0.04, -0.69, 0.035, 0.04, 0.05);
      }
      spike(body, mat, V(0, 1.05, -0.76), V(0, 0.5, -1), 0.14, 0.04);
    } else {
      var lg = L.legs;
      baseY = 0.95 * lg;
      for (s = -1; s <= 1; s += 2) {
        var x = s * 0.1 * B;
        if (L.lower === 'digi') {
          rod(body, V(x, baseY, 0), V(x * 1.1, baseY * 0.6, 0.11), 0.09 * B, 0.065 * B);
          ball(body, mat, x * 1.1, baseY * 0.6, 0.11, 0.065 * B);
          rod(body, V(x * 1.1, baseY * 0.6, 0.11), V(x * 1.1, baseY * 0.28, -0.1), 0.06 * B, 0.045 * B);
          rod(body, V(x * 1.1, baseY * 0.28, -0.1), V(x * 1.1, 0.06, -0.03), 0.045 * B, 0.04 * B);
          ball(body, mat, x * 1.1, 0.045, -0.01, 0.05 * B, 0.045, 0.065);
        } else {
          rod(body, V(x, baseY, 0), V(x * 1.08, baseY * 0.52, 0.02), 0.088 * B, 0.066 * B);
          ball(body, mat, x * 1.08, baseY * 0.52, 0.02, 0.066 * B);
          rod(body, V(x * 1.08, baseY * 0.52, 0.02), V(x * 1.08, 0.08, -0.01), 0.062 * B, 0.045 * B);
          ball(body, mat, x * 1.08, 0.045, 0.045, 0.05 * B, 0.04, 0.1);
        }
      }
    }

    /* ---------- tail */
    if (L.tail === 'thin') {
      chain(body, [V(0, baseY - 0.02, -0.1), V(0, baseY - 0.25, -0.32), V(0, baseY - 0.55, -0.4), V(0.04, baseY - 0.75, -0.32)], 0.03, 0.018, 12);
      ball(body, mat, 0.04, baseY - 0.8, -0.3, 0.045, 0.07, 0.045);
    } else if (L.tail === 'bushy') {
      chain(body, [V(0, baseY, -0.1), V(0, baseY - 0.15, -0.35), V(0, baseY - 0.32, -0.52), V(0, baseY - 0.4, -0.66)], 0.07, 0.04, 12);
    }

    /* ---------- upper body: everything above the hips leans with the hunch */
    var spine = new THREE.Group();
    spine.position.set(0, baseY, L.lower === 'deer' ? 0.02 : 0);
    var hunchX = L.hunch * 0.55;
    spine.rotation.x = hunchX;
    body.add(spine);
    ball(spine, mat, 0, 0.02, 0, 0.17 * B, 0.13, 0.13 * B);
    rod(spine, V(0, 0.05, 0), V(0, 0.36, 0), 0.135 * B, 0.165 * B);
    var chest = ball(spine, mat, 0, 0.46, 0, 0.23 * B, 0.2, 0.15 * B);
    if (L.belly) ball(spine, mat, 0, 0.24, 0.06 * L.belly, 0.19 * B, 0.19 * L.belly + 0.02, 0.17 * B);
    var shY = 0.58, shX = 0.21 * B;
    var shR = 0.075 * Math.sqrt(B * AT);
    ball(spine, mat, -shX, shY, 0, shR, 0.075, shR);
    ball(spine, mat, shX, shY, 0, shR, 0.075, shR);

    /* arms hang straight down whatever the hunch */
    for (s = -1; s <= 1; s += 2) {
      var arm = new THREE.Group();
      arm.position.set(s * (shX + 0.02), shY, 0);
      arm.rotation.x = -hunchX;
      arm.rotation.z = s * 0.12;
      arm.userData.side = s;
      spine.add(arm);
      var el = V(s * 0.02, -0.3 * AL, 0.0), wr = V(s * 0.03, -0.58 * AL, 0.06);
      rod(arm, V(0, 0, 0), el, 0.055 * Math.sqrt(B) * AT, 0.047 * Math.sqrt(B) * AT);
      ball(arm, mat, el.x, el.y, el.z, 0.047 * Math.sqrt(B) * AT);
      rod(arm, el, wr, 0.047 * Math.sqrt(B) * AT, 0.036 * Math.sqrt(B) * AT);
      ball(arm, mat, wr.x, wr.y - 0.03, wr.z, 0.045 * Math.sqrt(B) * AT, 0.06, 0.04 * AT);
      if (L.claws) for (var c = -1; c <= 1; c++) spike(arm, mat, V(wr.x + c * 0.02, wr.y - 0.07, wr.z + 0.01), V(0, -1, 0.3), 0.06, 0.008);
      if (L.thorns) spike(arm, mat, V(s * 0.06, -0.22 * AL, -0.03), V(s * 0.6, 0.4, -0.6), 0.09, 0.02);
      P.arms.push(arm);
    }

    /* thorns along the shoulders and back */
    for (var t = 0; t < L.thorns; t++) {
      var a = (rnd() - 0.5) * 2.6, yy = 0.35 + rnd() * 0.3;
      var base = V(Math.sin(a) * 0.2 * B, yy, -Math.cos(a) * 0.13 * B);
      spike(spine, mat, base, V(Math.sin(a), 0.5 + rnd(), -Math.cos(a)), 0.07 + rnd() * 0.09, 0.016 + rnd() * 0.01);
    }

    /* ---------- neck and head */
    var neckLen = 0.1 * L.neck;
    rod(spine, V(0, 0.62, 0.01), V(0, 0.64 + neckLen, 0.02), 0.06 * B * Math.max(L.neck, 0.8), 0.05 * Math.max(B, 1));
    var head = new THREE.Group();
    head.position.set(0, 0.66 + neckLen + 0.09 * hs, 0.03);
    head.rotation.x = -hunchX * 0.85;
    spine.add(head);
    P.head = head; P.headX = head.rotation.x;

    ball(head, mat, 0, 0, 0, 0.105 * hs, 0.12 * hs, 0.115 * hs);
    ball(head, mat, 0, -0.06 * hs, 0.035 * hs, 0.075 * hs * L.jaw, 0.05 * hs, 0.08 * hs);
    if (L.glow) {
      ball(head, glowMat, -0.042 * hs, 0.012 * hs, 0.098 * hs, 0.016 * hs, 0.011 * hs, 0.01 * hs);
      ball(head, glowMat, 0.042 * hs, 0.012 * hs, 0.098 * hs, 0.016 * hs, 0.011 * hs, 0.01 * hs);
    }
    var D2R = Math.PI / 180;
    if (L.ears) {
      var E = L.ears, up = (E.up || 0) * D2R, bk = (E.back || 0) * D2R;
      for (s = -1; s <= 1; s += 2) {
        spike(head, mat, V(s * 0.095 * hs, (E.y || 0.01) * hs, -0.01 * hs),
          V(s * Math.cos(up) * Math.cos(bk), Math.sin(up), -Math.cos(up) * Math.sin(bk)), E.len * hs, (E.w || 0.026) * hs);
      }
    }
    if (L.tusks) for (s = -1; s <= 1; s += 2)
      spike(head, mat, V(s * 0.045 * hs, -0.075 * hs, 0.085 * hs), V(s * 0.3, 1, 0.45), L.tusks * hs, 0.016 * hs);
    if (L.snout) {
      rod(head, V(0, -0.03 * hs, 0.06 * hs), V(0, -0.05 * hs, (0.07 + L.snout * 0.17) * hs), 0.075 * hs, 0.045 * hs);
      ball(head, mat, 0, -0.045 * hs, (0.07 + L.snout * 0.17) * hs, 0.045 * hs);
    }
    if (L.nose) spike(head, mat, V(0, -0.005 * hs, 0.1 * hs), V(0, -0.35, 1), L.nose * hs, 0.025 * hs);
    if (L.beard) {
      ball(head, mat, 0, -0.085 * hs, 0.075 * hs, 0.08 * hs * B, 0.06 * hs, 0.06 * hs);
      spike(head, mat, V(0, -0.1 * hs, 0.09 * hs), V(0, -1, 0.35), L.beard * hs, 0.075 * hs * B);
    }
    if (L.tendrils) [-0.05, -0.018, 0.018, 0.05].forEach(function (x, i) {
      rod(head, V(x * hs, -0.08 * hs, 0.075 * hs), V(x * 1.3 * hs, (-0.08 - L.tendrils * (i % 3 ? 1.2 : 0.9)) * hs, 0.06 * hs), 0.012 * hs, 0.006 * hs);
    });

    /* horns */
    if (L.horns) for (s = -1; s <= 1; s += 2) {
      var h = hs;
      if (L.horns === 'draenei')
        chain(head, [V(s * 0.06 * h, 0.08 * h, -0.02 * h), V(s * 0.09 * h, 0.13 * h, -0.12 * h), V(s * 0.085 * h, 0.07 * h, -0.22 * h), V(s * 0.06 * h, -0.04 * h, -0.25 * h)], 0.032 * h, 0.012 * h, 10);
      else if (L.horns === 'broken')
        chain(head, [V(s * 0.06 * h, 0.08 * h, -0.02 * h), V(s * 0.09 * h, 0.12 * h, -0.1 * h), V(s * 0.09 * h, 0.1 * h, -0.14 * h)], 0.032 * h, 0.022 * h, 6);
      else if (L.horns === 'tauren')
        chain(head, [V(s * 0.09 * h, 0.06 * h, 0), V(s * 0.24 * h, 0.08 * h, 0.03 * h), V(s * 0.33 * h, 0.2 * h, 0.05 * h), V(s * 0.31 * h, 0.31 * h, 0.02 * h)], 0.045 * h, 0.014 * h, 12);
      else if (L.horns === 'antler') {
        var a0 = V(s * 0.05 * h, 0.1 * h, -0.02 * h), a1 = V(s * 0.12 * h, 0.27 * h, -0.05 * h), a2 = V(s * 0.16 * h, 0.4 * h, -0.08 * h);
        rod(head, a0, a1, 0.018 * h, 0.014 * h); rod(head, a1, a2, 0.014 * h, 0.008 * h);
        var b1 = V(s * 0.07 * h, 0.4 * h, 0.01 * h), b2 = V(s * 0.27 * h, 0.33 * h, -0.1 * h);
        rod(head, a1, b1, 0.012 * h, 0.007 * h); rod(head, a1, b2, 0.012 * h, 0.007 * h);
        [a2, b1, b2].forEach(function (p) { ball(head, glowMat, p.x, p.y, p.z, 0.028 * h, 0.018 * h, 0.022 * h); });
      }
    }
    if (L.horns === 'briar') for (var k = 0; k < 11; k++) {
      var ang = k / 11 * Math.PI * 2;
      spike(head, mat, V(Math.sin(ang) * 0.09 * hs, 0.07 * hs, Math.cos(ang) * 0.09 * hs),
        V(Math.sin(ang) * 0.6, 1, Math.cos(ang) * 0.6), (0.08 + (k % 3) * 0.04) * hs, 0.016 * hs);
    }

    /* hair */
    var hz = L.hairSize;
    switch (L.hair) {
      case 'short': ball(head, mat, 0, 0.03 * hs, -0.012 * hs, 0.112 * hs, 0.11 * hs, 0.122 * hs); break;
      case 'long':
        ball(head, mat, 0, 0.02 * hs, -0.015 * hs, 0.114 * hs, 0.124 * hs, 0.124 * hs);
        ball(head, mat, 0, -0.12 * hs * hz, -0.07 * hs, 0.11 * hs, 0.2 * hs * hz, 0.07 * hs);
        break;
      case 'mohawk':
        for (var m = 0; m < 5; m++) {
          var an = -0.6 + m * 0.42;
          ball(head, mat, 0, (0.1 + Math.cos(an) * 0.03) * hs, Math.sin(an) * 0.1 * hs, 0.022 * hs, 0.06 * hs * hz, 0.045 * hs);
        }
        break;
      case 'topknot':
        ball(head, mat, 0, 0.14 * hs, -0.03 * hs, 0.042 * hs);
        chain(head, [V(0, 0.15 * hs, -0.06 * hs), V(0, 0.08 * hs, -0.16 * hs), V(0, -0.08 * hs, -0.2 * hs)], 0.025 * hs, 0.012 * hs, 8);
        break;
      case 'puff':
        ball(head, mat, 0, 0.06 * hs, -0.03 * hs, 0.12 * hs, 0.1 * hs, 0.12 * hs);
        ball(head, mat, -0.13 * hs, 0.0, -0.04 * hs, 0.055 * hs);
        ball(head, mat, 0.13 * hs, 0.0, -0.04 * hs, 0.055 * hs);
        break;
      case 'wild':
        for (var w = 0; w < 9; w++) {
          var wa = -1.6 + w * 0.4;
          spike(head, mat, V(Math.sin(wa) * 0.08 * hs, 0.06 * hs, -Math.abs(Math.cos(wa)) * 0.06 * hs - 0.02 * hs),
            V(Math.sin(wa) * 0.9, 0.5 - Math.abs(Math.sin(wa)) * 0.6, -1), (0.12 + (w % 2) * 0.05) * hs, 0.03 * hs);
        }
        break;
      case 'fins':
        for (var f = 0; f < 3; f++) spike(head, mat, V(0, (0.1 - f * 0.03) * hs, (-0.03 - f * 0.05) * hs), V(0, 0.6, -1), (0.16 - f * 0.03) * hs, 0.02 * hs);
        break;
      case 'mane':
        for (var q = 0; q < 6; q++) spike(head, mat, V(0, (0.06 - q * 0.05) * hs, (-0.08 - q * 0.01) * hs), V(0, 0.2, -1), 0.1 * hs, 0.03 * hs);
        break;
    }

    P.spine = spine; P.chest = chest; P.hunchX = hunchX; P.body = body;
    root.scale.setScalar(L.height);
    root.userData.parts = P;
    return root;
  }

  function disposeObj(o) {
    o.traverse(function (n) {
      if (n.isMesh) {
        if (n.geometry && n.geometry !== GEO.s && n.geometry !== GEO.k) n.geometry.dispose();
        var ms = Array.isArray(n.material) ? n.material : [n.material];
        ms.forEach(function (m) { if (m && m.dispose) m.dispose(); });
      }
    });
  }

  /* ================================================================ 3D: stage */
  var view = $('ccView'), canvas = $('ccCanvas');
  var renderer, scene, camera, holder, current = null, groundMat, motes, moteMat, mixer = null;
  var camPos, camTgt, wantPos, wantTgt, yaw = 0.35, yawVel = 0, spin = 0, clock;

  function radialTexture(inner, outer) {
    var c = document.createElement('canvas'); c.width = c.height = 128;
    var g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, inner); gr.addColorStop(1, outer);
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  }

  function initStage() {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, 1, 0.05, 100);
    camPos = V(0, 1.2, 5); camTgt = V(0, 0.9, 0); wantPos = camPos.clone(); wantTgt = camTgt.clone();
    scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x2a1d10, 0.9));
    var sun = new THREE.DirectionalLight(0xffffff, 1.1); sun.position.set(2, 4, 3); scene.add(sun);

    holder = new THREE.Group(); scene.add(holder);

    var shadow = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.6),
      new THREE.MeshBasicMaterial({ map: radialTexture('rgba(0,0,0,.75)', 'rgba(0,0,0,0)'), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.002; scene.add(shadow);
    groundMat = new THREE.MeshBasicMaterial({ map: radialTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0)'), transparent: true,
      opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending });
    var ground = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 4.4), groundMat);
    ground.rotation.x = -Math.PI / 2; ground.position.y = 0.001; scene.add(ground);
    scene.userData.shadow = shadow; scene.userData.ground = ground;

    var n = 140, pos = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) {
      var r = 0.5 + Math.random() * 2.2, a = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(a) * r; pos[i * 3 + 1] = Math.random() * 3.2; pos[i * 3 + 2] = Math.sin(a) * r - 0.6;
    }
    var mg = new THREE.BufferGeometry(); mg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    moteMat = new THREE.PointsMaterial({ size: 0.03, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending });
    motes = new THREE.Points(mg, moteMat); scene.add(motes);

    clock = new THREE.Clock();
    resize();
    window.addEventListener('resize', resize);
    bindRotate();
    requestAnimationFrame(tick);
  }

  function resize() {
    var w = view.clientWidth || 1, h = view.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }

  function frameFigure(obj) {
    obj.updateMatrixWorld(true);
    var box = new THREE.Box3().setFromObject(obj), top = Math.max(box.max.y, 0.5);
    var dist = top * 2.45 / Math.min(1, camera.aspect * 1.25);
    wantTgt.set(0, top * 0.5, 0);
    wantPos.set(0, top * 0.58, dist);
    var sc = Math.max(top / 1.8, 0.6);
    scene.userData.shadow.scale.setScalar(sc);
    scene.userData.ground.scale.setScalar(sc);
    motes.scale.setScalar(sc);
  }

  function setFigure(obj, faction) {
    if (current) { holder.remove(current); disposeObj(current); }
    mixer = null;
    current = obj;
    obj.userData.born = clock ? clock.elapsedTime : 0;
    holder.add(obj);
    var col = new THREE.Color(FCOL[faction]);
    groundMat.color.copy(col); moteMat.color.copy(col);
    frameFigure(obj);
  }

  function animateFigure(obj, t) {
    var P = obj.userData.parts;
    var age = t - (obj.userData.born || 0), fade = Math.min(1, age / 0.45);
    if (P) {
      P.mats.forEach(function (m) { if (m.uniforms) m.uniforms.uFade.value = fade; else m.opacity = fade; });
      var br = Math.sin(t * 1.6);
      P.chest.scale.y = 0.2 * (1 + 0.025 * br);
      P.spine.rotation.x = P.hunchX + 0.012 * br;
      P.head.rotation.y = 0.2 * Math.sin(t * 0.33);
      P.head.rotation.x = P.headX + 0.03 * Math.sin(t * 0.5);
      P.arms.forEach(function (a) { a.rotation.z = a.userData.side * (0.12 + 0.02 * br); });
      if (P.serpent) {
        var n = P.tail.length;
        P.tail.forEach(function (b, i) { b.position.x = b.userData.base.x + Math.sin(t * 1.7 - i * 0.35) * 0.04 * (i / n); });
        P.body.position.y = 0.015 * br;
      }
    }
  }

  function tick() {
    requestAnimationFrame(tick);
    var dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
    yaw += (yawVel + spin) * dt; yawVel *= Math.pow(0.04, dt);
    holder.rotation.y = yaw;
    if (current) animateFigure(current, t);
    if (mixer) mixer.update(dt);
    var p = motes.geometry.attributes.position;
    for (var i = 0; i < p.count; i++) { var y = p.getY(i) + dt * 0.12; p.setY(i, y > 3.2 ? 0 : y); }
    p.needsUpdate = true;
    camPos.lerp(wantPos, 1 - Math.pow(0.002, dt)); camTgt.lerp(wantTgt, 1 - Math.pow(0.002, dt));
    camera.position.copy(camPos); camera.lookAt(camTgt);
    renderer.render(scene, camera);
  }

  function bindRotate() {
    var drag = false, lastX = 0, lastT = 0;
    canvas.addEventListener('pointerdown', function (e) { drag = true; lastX = e.clientX; lastT = performance.now(); canvas.setPointerCapture(e.pointerId); yawVel = 0; });
    canvas.addEventListener('pointermove', function (e) {
      if (!drag) return;
      var dx = e.clientX - lastX, now = performance.now(), dts = Math.max((now - lastT) / 1000, 0.001);
      yaw += dx * 0.012; yawVel = dx * 0.012 / dts * 0.6; lastX = e.clientX; lastT = now;
    });
    var end = function () { drag = false; };
    canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
    function hold(btn, dir) {
      var on = function (e) { e.preventDefault(); spin = dir * 2.2; }, off = function () { spin = 0; };
      btn.addEventListener('pointerdown', on); btn.addEventListener('pointerup', off); btn.addEventListener('pointerleave', off);
      btn.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); yaw += dir * 0.4; } });
    }
    hold($('rotL'), -1); hold($('rotR'), 1);
  }

  /* ---------- your own models (.glb) */
  var gltfReady = null, loadToken = 0;
  function needGLTF() {
    if (gltfReady) return gltfReady;
    gltfReady = new Promise(function (ok, fail) {
      if (THREE.GLTFLoader) return ok();
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js';
      s.onload = function () { ok(); }; s.onerror = fail;
      document.head.appendChild(s);
    });
    return gltfReady;
  }
  function loadModel(form, token) {
    var note = $('ccLoading'); note.hidden = false;
    needGLTF().then(function () {
      new THREE.GLTFLoader().load(form.model, function (g) {
        if (token !== loadToken) return;
        note.hidden = true;
        var obj = g.scene;
        var box = new THREE.Box3().setFromObject(obj), size = box.getSize(V(0, 0, 0));
        var want = 1.8 * ((form.look && form.look.height) || 1), k = want / (size.y || 1);
        var wrap = new THREE.Group(); wrap.add(obj);
        obj.scale.setScalar(k);
        var c = box.getCenter(V(0, 0, 0));
        obj.position.set(-c.x * k, -box.min.y * k, -c.z * k);
        setFigure(wrap, form.faction);
        if (g.animations && g.animations.length) {
          mixer = new THREE.AnimationMixer(obj);
          var clip = g.animations.filter(function (a) { return /idle|stand/i.test(a.name); })[0] || g.animations[0];
          mixer.clipAction(clip).play();
        }
      }, undefined, function () { if (token === loadToken) note.hidden = true; });
    }, function () { note.hidden = true; });
  }

  /* ---------- race icons, rendered from the same silhouettes */
  var shot = null;
  function portraitFor(form) {
    if (form.iconSrc) return form.iconSrc;
    if (form.portrait) return form.portrait;
    try {
      if (!shot) {
        var r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
        r.setPixelRatio(1); r.setSize(112, 112);
        shot = { r: r, scene: new THREE.Scene(), cam: new THREE.PerspectiveCamera(30, 1, 0.01, 20) };
      }
      var fig = buildFigure(form.look, form.faction);
      fig.rotation.y = 0.55;
      shot.scene.add(fig);
      fig.updateMatrixWorld(true);
      var hb = new THREE.Box3().setFromObject(fig.userData.parts.head);
      var c = hb.getCenter(V(0, 0, 0)), sz = hb.getSize(V(0, 0, 0)), d = Math.max(sz.x, sz.y, sz.z) * 2.1;
      shot.cam.position.set(c.x + d * 0.05, c.y + d * 0.04, c.z + d);
      shot.cam.lookAt(c.x, c.y - sz.y * 0.05, c.z);
      shot.r.render(shot.scene, shot.cam);
      form.portrait = shot.r.domElement.toDataURL('image/png');
      shot.scene.remove(fig); disposeObj(fig);
      return form.portrait;
    } catch (e) { return ''; }
  }

  /* ================================================================ UI */
  var raceBtns = [], classBtns = {}, sel = { race: 0, cls: null };
  function form() { var r = RACES[sel.race]; return r.forms[r.formIdx]; }

  function buildRaceButtons() {
    var dest = { alliance: $('raceAlliance'), horde: $('raceHorde'), split: $('raceSplit') };
    RACES.forEach(function (r, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'cc-icon';
      b.setAttribute('data-faction', r.group);
      var names = r.forms.length > 1 ? r.name + ' (' + r.forms.map(function (f) { return f.name; }).join(', ') + ')' : r.name;
      b.title = names; b.setAttribute('aria-label', names);
      b.innerHTML = '<span class="cc-letter">' + esc(r.name.charAt(0)) + '</span>' +
        (r.forms.length > 1 ? '<span class="cc-forms-badge">' + r.forms.length + '</span>' : '');
      b.addEventListener('click', function () { pickRace(i); });
      (dest[r.group] || dest.alliance).appendChild(b);
      raceBtns.push(b);
    });
    if (!$('raceSplit').children.length) $('raceSplit').parentNode.hidden = true;
  }
  function setRaceIcon(i) {
    if (!hasGL) return;
    var r = RACES[i], src = portraitFor(r.forms[r.formIdx]);
    if (!src) return;
    var b = raceBtns[i], img = b.querySelector('img');
    if (!img) { img = document.createElement('img'); img.alt = ''; b.insertBefore(img, b.firstChild); var l = b.querySelector('.cc-letter'); if (l) l.remove(); }
    img.src = src;
  }

  function buildClassButtons() {
    C.classes.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'cc-icon';
      b.title = c.name; b.setAttribute('aria-label', c.name);
      b.innerHTML = classIcon(c);
      b.addEventListener('click', function () {
        if (b.getAttribute('aria-disabled') === 'true') return;
        sel.cls = c.key; refresh(false);
      });
      $('classGrid').appendChild(b);
      classBtns[c.key] = b;
    });
  }

  function pickRace(i, formIdx) {
    sel.race = i;
    if (formIdx != null) RACES[i].formIdx = formIdx;
    refresh(true);
  }

  function refresh(newFigure) {
    var r = RACES[sel.race], f = form();
    raceBtns.forEach(function (b, i) { b.setAttribute('aria-pressed', String(i === sel.race)); });
    document.body.setAttribute('data-faction', f.faction);

    $('raceName').textContent = f.name;
    $('factionCrest').innerHTML = CREST[f.faction];
    $('factionName').textContent = f.faction === 'horde' ? 'Horde' : 'Alliance';

    var tabs = $('raceForms'); tabs.innerHTML = '';
    if (r.forms.length > 1) r.forms.forEach(function (o, j) {
      var t = document.createElement('button');
      t.type = 'button'; t.className = 'cc-form'; t.setAttribute('role', 'tab');
      t.setAttribute('aria-selected', String(j === r.formIdx));
      t.innerHTML = esc(o.name) + (r.group === 'split' ? '<small>' + (o.faction === 'horde' ? 'Horde' : 'Alliance') + '</small>' : '');
      t.addEventListener('click', function () { if (j !== r.formIdx) pickRace(sel.race, j); });
      tabs.appendChild(t);
    });
    $('raceBody').innerHTML = renderBody(f.body);

    /* classes */
    var allowed = f.classes;
    C.classes.forEach(function (c) {
      var ok = !allowed || allowed.indexOf(c.key) >= 0;
      if (!allowed) ok = false;
      classBtns[c.key].setAttribute('aria-disabled', String(!ok));
      classBtns[c.key].title = c.name + (ok ? '' : allowed ? ' (not available to ' + f.name + ')' : ' (classes TBD)');
    });
    if (allowed && allowed.length && allowed.indexOf(sel.cls) < 0) sel.cls = allowed[0];
    Object.keys(classBtns).forEach(function (k) { classBtns[k].setAttribute('aria-pressed', String(allowed && k === sel.cls)); });

    var info = $('classInfo');
    if (!allowed || !allowed.length) {
      info.innerHTML = '<span class="cc-muted">Classes: TBD</span>';
    } else {
      var c = C.classes.filter(function (x) { return x.key === sel.cls; })[0];
      info.innerHTML = '<strong style="color:' + c.color + '">' + esc(c.name) + '</strong><span>' + esc(c.roles) + '</span>' +
        (c.page ? '<a href="' + pageHref(c.page) + '">Enter the ' + esc(c.name) + ' simulation &#8250;</a>' : '');
    }

    if (newFigure && hasGL) {
      setRaceIcon(sel.race);
      loadToken++;
      $('ccLoading').hidden = true;
      setFigure(buildFigure(f.look, f.faction), f.faction);
      if (f.model) loadModel(f, loadToken);
    }
    writeHash();
  }

  /* #race=dwarf&form=Dark%20Iron&class=warrior */
  function writeHash() {
    var r = RACES[sel.race], parts = ['race=' + r.id];
    if (r.forms.length > 1) parts.push('form=' + encodeURIComponent(form().name));
    if (sel.cls) parts.push('class=' + sel.cls);
    try { history.replaceState(null, '', '#' + parts.join('&')); } catch (e) {}
  }
  function readHash() {
    var q = {};
    location.hash.replace(/^#/, '').split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) q[p[0]] = decodeURIComponent(p[1] || ''); });
    RACES.forEach(function (r, i) {
      if (r.id !== q.race) return;
      sel.race = i;
      r.forms.forEach(function (f, j) { if (f.name === q.form) r.formIdx = j; });
    });
    if (q['class']) sel.cls = q['class'];
  }

  function toast(msg) {
    var t = $('ccToast'); t.textContent = msg; t.hidden = false;
    clearTimeout(toast.h); toast.h = setTimeout(function () { t.hidden = true; }, 3200);
  }

  /* ================================================================ start */
  buildRaceButtons();
  buildClassButtons();
  readHash();

  if (hasGL) {
    try { initStage(); } catch (e) { hasGL = false; }
  }
  if (!hasGL) {
    canvas.remove();
    var no = document.createElement('div'); no.className = 'cc-nogl';
    no.textContent = 'The 3D preview needs WebGL, which this browser has turned off.';
    view.appendChild(no);
    ['rotL', 'rotR'].forEach(function (id) { $(id).hidden = true; });
  }
  refresh(true);

  /* draw the remaining race icons a few at a time */
  if (hasGL) {
    var queue = RACES.map(function (_, i) { return i; });
    (function next() {
      if (!queue.length) return;
      setRaceIcon(queue.shift());
      setTimeout(next, 16);
    })();
  }

  $('randomBtn').addEventListener('click', function () {
    var i = Math.floor(Math.random() * RACES.length), r = RACES[i];
    r.formIdx = Math.floor(Math.random() * r.forms.length);
    var cl = r.forms[r.formIdx].classes;
    if (cl && cl.length) sel.cls = cl[Math.floor(Math.random() * cl.length)];
    yaw = 0.35;
    pickRace(i);
  });
  $('createBtn').addEventListener('click', function () {
    var name = $('charName').value.trim(), f = form();
    var c = C.classes.filter(function (x) { return x.key === sel.cls; })[0];
    if (!name) { toast('Enter a name.'); $('charName').focus(); return; }
    if (!f.classes || !f.classes.length) { toast('Classes for the ' + f.name + ' are still TBD.'); return; }
    toast(name + ', ' + f.name + ' ' + (c ? c.name : '') + '. A design mock-up; characters are not saved.');
  });
  $('charName').addEventListener('input', function (e) {
    var v = e.target.value.replace(/[^A-Za-zÀ-ſ']/g, '');
    if (v) v = v.charAt(0).toUpperCase() + v.slice(1).toLowerCase();
    if (v !== e.target.value) e.target.value = v;
  });
})();
