/*
  WoW Forever Compendium - shared interface script.

  Every page loads, in order:
    assets/icons.js   window.ICONS   all drawn icons, by name
    assets/site.js    window.SITE    the left rail (classes and professions)
    data/<page>.js    window.PAGE    the text and data for that page  <- edit text here
    assets/ui.js      this file      builds the rail, windows, tooltips and bar

  Text entries in the Log and trade-skill windows use a simple "body" list:
    "A plain string"                       a paragraph
    { "h": "Heading" }                     a heading
    { "h4": "Name", "note": "small line" } a sub-heading with an optional small-caps line
    { "list": ["one", "two"] }             a bulleted list
    { "table": [["Head", "Head"], ["a", "b"]] }   a table, first row is the header
    { "link": "Text", "page": "tinker" }   a link to another page of the site
*/
(function boot() {
  if (!document.body) { document.addEventListener('DOMContentLoaded', boot); return; }

  var P = window.PAGE, SITE = window.SITE, ICONS = window.ICONS || {};
  var B = document.body;
  var ROOT = P.root || '';                 // '' on index.html, '../' on pages/*.html
  B.classList.add('wow');
  if (P.kind !== 'class') B.classList.add('still');
  B.style.setProperty('--cc', P.color);

  /* ------------------------------------------------------------ helpers */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function icon(name) { return (name && ICONS[name]) || ''; }
  function pageHref(key) { return key === 'home' ? ROOT + 'index.html' : ROOT + 'pages/' + key + '.html'; }

  /* Roster (data/roster.js): the one list of which races play which classes. "auto" values read from it. */
  var ROSTER = window.ROSTER || {};
  var CLASS_ORDER = ['Warrior', 'Paladin', 'Hunter', 'Rogue', 'Priest', 'Shaman', 'Mage', 'Warlock', 'Druid',
                     'Tinker', 'Illusionist', 'Bard', 'Necromancer', 'Warden', "Bloodsworn"];
  function classesOf(race) {
    for (var fac in ROSTER) if (ROSTER[fac][race]) return ROSTER[fac][race].length ? ROSTER[fac][race].join(', ') : 'TBD';
    return 'TBD';
  }
  function racesOf(cls, fac) {
    var list = ROSTER[fac] || {}, out = Object.keys(list).filter(function (r) { return list[r].indexOf(cls) >= 0; });
    return out.length ? out.join(', ') : 'TBD';
  }
  /* Fill an "auto" cell. context is the entry title: a race (for "Classes") or a class (for "Alliance"/"Horde"). */
  function autoCell(label, value, context) {
    if (value !== 'auto') return value;
    if (label === 'Classes') return classesOf(context);
    if (label === 'Alliance' || label === 'Horde') return racesOf(context, label);
    return value;
  }
  function rosterTable() {
    return [['Class', 'Alliance', 'Horde']].concat(CLASS_ORDER.map(function (c) { return [c, racesOf(c, 'Alliance'), racesOf(c, 'Horde')]; }));
  }
  var store = {
    get: function (k) { try { return JSON.parse(localStorage.getItem('wfui:' + k)); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem('wfui:' + k, JSON.stringify(v)); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem('wfui:' + k); } catch (e) {} }
  };

  /* Render a "body" list (see the top of this file) into HTML. */
  function renderBody(title, body) {
    var h = '<h2>' + esc(title) + '</h2>';
    (body || []).forEach(function (b) {
      if (typeof b === 'string') { h += '<p>' + esc(b) + '</p>'; return; }
      if (b.h) h += '<h3>' + esc(b.h) + '</h3>';
      if (b.h4) h += '<h4>' + esc(b.h4) + '</h4>';
      if (b.note) h += '<p class="sub">' + esc(b.note) + '</p>';
      if (b.text) h += '<p>' + esc(b.text) + '</p>';
      if (b.list) h += '<ul>' + b.list.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      var tbl = b.roster === 'by-class' ? rosterTable() : b.table;
      if (tbl) h += '<table>' + tbl.map(function (row, i) {
        return '<tr>' + row.map(function (c, j) {
          var t = i === 0 ? 'th' : 'td';
          if (j === 1 && row.length === 2) c = autoCell(row[0], c, title);
          return '<' + t + '>' + esc(c) + '</' + t + '>';
        }).join('') + '</tr>';
      }).join('') + '</table>';
      if (b.link) h += '<p class="go"><a href="' + esc(pageHref(b.page)) + '">' + esc(b.link) + '</a></p>';
    });
    return h;
  }

  /* ------------------------------------------------------------ tooltip */
  var tip = el('div'); tip.id = 'tip'; tip.hidden = true; B.appendChild(tip);
  var tipFor = null;
  function placeTip(x, y) {
    var w = tip.offsetWidth, h = tip.offsetHeight, px = x + 16, py = y - h - 10;
    if (px + w > innerWidth - 8) px = Math.max(8, x - w - 12);
    if (py < 8) py = Math.min(innerHeight - h - 8, y + 18);
    tip.style.left = px + 'px'; tip.style.top = Math.max(8, py) + 'px';
  }
  function showTip(html, x, y, e) { if (!html) return; tip.innerHTML = html; tip.hidden = false; tipFor = e; placeTip(x, y); }
  function hideTip() { tip.hidden = true; tipFor = null; }
  function bindTip(e, fn) {
    e.addEventListener('mouseenter', function (ev) { showTip(fn(), ev.clientX, ev.clientY, e); });
    e.addEventListener('mousemove', function (ev) { if (tipFor === e) placeTip(ev.clientX, ev.clientY); });
    e.addEventListener('mouseleave', hideTip);
    e.addEventListener('focus', function () { var r = e.getBoundingClientRect(); showTip(fn(), r.right, r.top, e); });
    e.addEventListener('blur', hideTip);
    e.addEventListener('click', function (ev) { var r = e.getBoundingClientRect(); showTip(fn(), ev.clientX || r.right, ev.clientY || r.top, e); });
  }
  document.addEventListener('click', function (e) { if (tipFor && !tipFor.contains(e.target)) hideTip(); });
  function simpleTip(n, d, sub) {
    return '<div class="n">' + esc(n) + '</div>' + (sub ? '<div class="gr">' + esc(sub) + '</div>' : '') + (d ? '<div class="y">' + esc(d) + '</div>' : '');
  }

  /* ------------------------------------------------------------ left rail */
  var rail = el('nav', 'rail'); rail.setAttribute('aria-label', 'Classes and professions');
  SITE.rail.forEach(function (r) {
    if (r.separator) { rail.appendChild(el('hr')); return; }
    var a = el('a', '', icon(r.icon));
    a.href = pageHref(r.key); a.setAttribute('aria-label', r.name);
    if (r.key === P.key) a.setAttribute('aria-current', 'page');
    bindTip(a, function () { return simpleTip(r.name, r.tip, r.sub); });
    rail.appendChild(a);
  });
  B.appendChild(rail);

  /* ------------------------------------------------------------ windows
     Windows are absolutely placed inside .wins. Drag by the title bar,
     resize with the grip in the bottom-right corner, double-click the title bar
     to put a window back to its default size. Position and size are remembered
     in this browser only. */
  var wins = el('div', 'wins'); B.appendChild(wins);
  var W = {}, slots = {}, zTop = 10, order = [];
  var NARROW = 760;

  function mkWin(id, title, w, portrait, sub) {
    var s = el('section', 'win'); s.id = 'w-' + id; s.hidden = true;
    s.style.setProperty('--w', w + 'px'); s._w = w;
    s.setAttribute('aria-label', title);
    s.innerHTML =
      '<div class="portrait">' + portrait + '</div>' +
      '<div class="titlebar" title="Drag to move. Double-click to reset.">' + esc(title) + '</div>' +
      '<button class="close" type="button" aria-label="Close ' + esc(title) + '">&#10005;</button>' +
      '<div class="subhead">' + (sub || '') + '</div>' +
      '<div class="grip" title="Drag to resize" aria-hidden="true"></div>';
    s.querySelector('.close').addEventListener('click', function () { toggle(id, false); });
    wins.appendChild(s); W[id] = s; order.push(id);
    makeMovable(s, id);
    return s;
  }

  function bounds() { return { w: wins.clientWidth, h: wins.clientHeight }; }
  function clampWin(s) {
    var b = bounds(), w = s.offsetWidth, l = parseFloat(s.style.left) || 0, t = parseFloat(s.style.top) || 0;
    l = Math.min(Math.max(l, 70 - w), b.w - 90);
    t = Math.min(Math.max(t, 14), b.h - 40);
    s.style.left = l + 'px'; s.style.top = t + 'px';
  }
  function save(s, id) {
    var o = { l: parseFloat(s.style.left), t: parseFloat(s.style.top) };
    if (s.classList.contains('sized')) { o.w = parseFloat(s.style.width); o.h = parseFloat(s.style.height); }
    store.set(P.key + ':' + id, o);
  }
  function setSize(s, w, h) {
    s.classList.add('sized'); s.style.width = w + 'px'; s.style.height = h + 'px';
    if (s._onSize) s._onSize(w, h);
  }
  function resetWin(s, id) {
    s.classList.remove('sized'); s.style.width = ''; s.style.height = ''; s._placed = false;
    if (s._onSize) s._onSize(null, null);
    store.del(P.key + ':' + id); place(s, id);
  }
  function front(s) { s.style.zIndex = ++zTop; }

  // Default spot: to the right of the windows already open, or cascaded.
  function place(s, id) {
    if (s._placed) { clampWin(s); return; }
    s._placed = true;
    var b = bounds(), saved = store.get(P.key + ':' + id);
    if (b.w < NARROW) {
      s.style.left = '8px'; s.style.top = '18px';
      s.style.setProperty('--w', Math.min(s._w, b.w - 16) + 'px');
      return;
    }
    if (saved) {
      s.style.left = saved.l + 'px'; s.style.top = saved.t + 'px';
      if (saved.w && saved.h) setSize(s, Math.min(saved.w, b.w), Math.min(saved.h, b.h));
      clampWin(s); return;
    }
    var x = 18;
    order.forEach(function (k) {
      var o = W[k]; if (o === s || o.hidden || !o._placed) return;
      x = Math.max(x, (parseFloat(o.style.left) || 0) + o.offsetWidth + 26);
    });
    var w = s.offsetWidth || s._w;
    if (x + w > b.w) { var n = order.indexOf(id); x = 30 + n * 34; s.style.top = (30 + n * 34) + 'px'; }
    else s.style.top = '22px';
    s.style.left = x + 'px';
    clampWin(s);
  }

  function makeMovable(s, id) {
    var bar = s.querySelector('.titlebar'), grip = s.querySelector('.grip');
    s.addEventListener('pointerdown', function () { front(s); });
    function drag(handle, onMove) {
      handle.addEventListener('pointerdown', function (e) {
        if (e.button !== 0) return;
        e.preventDefault(); hideTip();
        var sx = e.clientX, sy = e.clientY;
        var start = { l: parseFloat(s.style.left) || 0, t: parseFloat(s.style.top) || 0, w: s.offsetWidth, h: s.offsetHeight };
        handle.setPointerCapture(e.pointerId); s.classList.add('moving'); B.classList.add('dragging');
        function move(ev) { onMove(start, ev.clientX - sx, ev.clientY - sy); }
        function up() {
          handle.removeEventListener('pointermove', move); handle.removeEventListener('pointerup', up); handle.removeEventListener('pointercancel', up);
          s.classList.remove('moving'); B.classList.remove('dragging'); save(s, id);
        }
        handle.addEventListener('pointermove', move); handle.addEventListener('pointerup', up); handle.addEventListener('pointercancel', up);
      });
    }
    drag(bar, function (st, dx, dy) { s.style.left = (st.l + dx) + 'px'; s.style.top = (st.t + dy) + 'px'; clampWin(s); });
    drag(grip, function (st, dx, dy) {
      var b = bounds();
      var w = Math.max(s._minW || 300, Math.min(st.w + dx, b.w - st.l - 4));
      var h = Math.max(s._minH || 240, Math.min(st.h + dy, b.h - st.t - 4));
      setSize(s, w, h);
    });
    bar.addEventListener('dblclick', function () { resetWin(s, id); });
  }

  function toggle(id, on) {
    var s = W[id]; if (!s) return;
    var show = on === undefined ? s.hidden : on;
    if (show && bounds().w < NARROW) {
      Object.keys(W).forEach(function (k) { if (k !== id) { W[k].hidden = true; if (slots[k]) slots[k].setAttribute('aria-pressed', 'false'); } });
    }
    s.hidden = !show;
    if (slots[id]) slots[id].setAttribute('aria-pressed', String(show));
    hideTip();
    if (show) { place(s, id); front(s); }
  }
  addEventListener('resize', function () { Object.keys(W).forEach(function (k) { if (!W[k].hidden) clampWin(W[k]); }); });

  /* ------------------------------------------------------------ list + parchment window
     Used by the Design Log, the Professions trade window and the home class list. */
  function listWin(id, def) {
    var s = mkWin(id, def.title, def.width || 400, def.portrait,
      '<span>' + esc(def.sub || '') + '</span><span class="tanline">' + esc(def.right || '') + '</span>');
    var wrap = el('div', (def.layout === 'trade' ? 'trade' : 'qlog') + ' wbody');
    var list = el('div', 'inset qlist'), text = el('div', 'inset qtext');
    wrap.appendChild(list); wrap.appendChild(text);
    s.insertBefore(wrap, s.querySelector('.grip'));
    var rows = [], items = [];
    def.groups.forEach(function (g) {
      list.appendChild(el('div', 'qhead', '&#9662; ' + esc(g.group)));
      g.entries.forEach(function (it) {
        var b = el('button', 'qrow', '<span>' + (it.options ? '<i class="qcaret">&#9656;</i> ' : '') + esc(it.title) + '</span><span>' + esc(it.tag || '') + '</span>');
        b.type = 'button';
        var i = items.length;
        list.appendChild(b); rows.push(b); items.push(it);
        if (!it.options) { b.addEventListener('click', function () { pick(i); }); return; }
        /* An entry with "options" is a dropdown: clicking it shows its overview and opens its sub-entries. */
        var subs = it.options.map(function (op) {
          var sb = el('button', 'qrow qsub', '<span>' + esc(op.title) + '</span><span>' + esc(op.tag || '') + '</span>');
          sb.type = 'button'; sb.hidden = true;
          var j = items.length;
          sb.addEventListener('click', function () { pick(j); });
          list.appendChild(sb); rows.push(sb); items.push(op);
          return sb;
        });
        b.setAttribute('aria-expanded', 'false');
        b.addEventListener('click', function () {
          var open = b.getAttribute('aria-expanded') !== 'true';
          b.setAttribute('aria-expanded', String(open));
          subs.forEach(function (sb) { sb.hidden = !open; });
          pick(i);
        });
      });
    });
    function pick(i) {
      text.innerHTML = renderBody(items[i].title, items[i].body);
      text.scrollTop = 0;
      rows.forEach(function (r, j) { r.setAttribute('aria-selected', String(i === j)); });
    }
    pick(0);
  }

  /* ------------------------------------------------------------ spellbook */
  var spellIndex = {};
  function bookWin(bk) {
    var s = mkWin('book', P.name + ' Spellbook', 420, icon(P.icon), '<span id="bk-name"></span><span class="tanline" id="bk-role"></span>');
    var page = el('div', 'inset book wbody'), tabs = el('div', 'tabs');
    tabs.setAttribute('role', 'tablist');
    s.insertBefore(page, s.querySelector('.grip')); s.appendChild(tabs); s.classList.add('tabbed');
    bk.pages.forEach(function (pg) {
      pg.sections.forEach(function (sec) {
        sec.spells.forEach(function (sp) { if (!spellIndex[sp.name] || !pg.main) spellIndex[sp.name] = sp; });
      });
    });
    function spellTip(sp, pg) {
      return '<div class="n">' + esc(sp.name) + '</div><div class="w"><span>' + esc(sp.cost || '') + '</span><span class="gr">' + esc(pg.tab) + '</span></div><div class="y">' + esc(sp.text) + '</div>';
    }
    function draw(i) {
      var pg = bk.pages[i];
      page.innerHTML = ''; page.scrollTop = 0;
      document.getElementById('bk-name').innerHTML = '<b>' + esc(pg.title) + '</b>';
      document.getElementById('bk-role').textContent = pg.role;
      if (pg.main) {
        page.appendChild(el('div', 'crest full', '<div class="cicon">' + icon(P.icon) + '</div><div><h2>' + esc(P.name) + '</h2><p>Class Design</p></div>'));
        page.appendChild(el('p', 'pagehead', esc(pg.text)));
        page.appendChild(el('dl', 'facts', pg.facts.map(function (f) { return '<dt>' + esc(f[0]) + '</dt><dd>' + esc(autoCell(f[0], f[1], P.name)) + '</dd>'; }).join('')));
      } else {
        page.appendChild(el('div', 'crest full',
          '<div class="cicon"><div class="sicon big" style="--sc:' + pg.color + '">' + esc(pg.title[0]) + '</div></div>' +
          '<div><h2>' + esc(pg.title) + '</h2><p>' + esc(pg.role) + ' Specialization</p></div>'));
        page.appendChild(el('p', 'pagehead full', esc(pg.text)));
      }
      pg.sections.forEach(function (sec) {
        page.appendChild(el('h3', 'full', esc(sec.heading)));
        sec.spells.forEach(function (sp) {
          var b = el('button', 'spell',
            '<span class="sicon">' + (icon(sp.icon) || esc(sp.name[0])) + '</span>' +
            '<span><span class="sname">' + esc(sp.name) + '</span><span class="sline">' + esc(sp.cost || '') + '</span></span>');
          b.type = 'button'; b.style.setProperty('--sc', pg.color || P.color);
          bindTip(b, function () { return spellTip(sp, pg); });
          page.appendChild(b);
        });
      });
      Array.prototype.forEach.call(tabs.children, function (t, j) { t.setAttribute('aria-selected', String(i === j)); });
    }
    bk.pages.forEach(function (pg, i) {
      var t = el('button', 'tab' + (pg.main ? ' main' : ''), esc(pg.tab));
      t.type = 'button'; t.setAttribute('role', 'tab');
      t.addEventListener('click', function () {
        draw(i);
        var st = document.getElementById('tab-' + pg.spec); if (st) st.click();   // switch the simulation too
      });
      tabs.appendChild(t);
    });
    draw(0);
  }

  /* ------------------------------------------------------------ talents */
  function talentWin(TD) {
    var MAXPTS = 51, pts = {}, cur = 0, unlearn = false, trees = TD.trees;
    var s = mkWin('tal', 'Talents', 372, '', '<span id="tal-name"></span><span>Points: <b id="tal-spent">0</b></span>');
    s._minW = 280; s._minH = 320;
    var g = el('div', 'inset tgrid wbody');
    var foot = el('div', 'tfoot',
      '<span>Talent points left: <b id="tal-left">51</b></span>' +
      '<button class="rbtn minus" type="button" id="tal-un">Unlearn: Off</button>' +
      '<button class="rbtn" type="button" id="tal-reset">Reset</button>');
    var tabs = el('div', 'tabs');
    s.insertBefore(g, s.querySelector('.grip')); s.insertBefore(foot, s.querySelector('.grip')); s.appendChild(tabs); s.classList.add('tabbed');
    // Icons grow and shrink with the window.
    s._onSize = function (w, h) {
      if (!w) { s.style.removeProperty('--slot'); return; }
      var slot = Math.min((w - 44) / (4 + 3 * 0.62), (h - 150) / (7 + 6 * 0.33));
      s.style.setProperty('--slot', Math.max(28, Math.min(96, slot)) + 'px');
    };
    trees.forEach(function (t) { t.talents.forEach(function (a) { pts[a.id] = 0; }); });
    function spent(t) { return t.talents.reduce(function (n, a) { return n + pts[a.id]; }, 0); }
    function total() { return trees.reduce(function (n, t) { return n + spent(t); }, 0); }
    function rankText(a, r) {
      return a.text.replace(/\{([^}]*)\}/g, function (_, v) { var p = v.split('/'); return p[Math.min(r, p.length) - 1]; });
    }
    function canRemove(t, a) {
      if (!pts[a.id]) return false;
      pts[a.id]--; var ok = true;
      t.talents.forEach(function (b) {
        if (pts[b.id] > 0) {
          var below = t.talents.reduce(function (n, c) { return n + (c.tier < b.tier ? pts[c.id] : 0); }, 0);
          if (below < (b.tier - 1) * 5) ok = false;
        }
      });
      pts[a.id]++; return ok;
    }
    function state(t, a) {
      if (pts[a.id] >= a.ranks) return 'maxed';
      if (spent(t) < (a.tier - 1) * 5 || (total() >= MAXPTS && !pts[a.id])) return pts[a.id] ? 'avail' : 'locked';
      return 'avail';
    }
    function talTip(t, a) {
      var r = pts[a.id], need = (a.tier - 1) * 5;
      var h = '<div class="n">' + esc(a.name) + '</div><div>Rank ' + r + '/' + a.ranks + '</div>';
      if (a.spell) h += '<div>' + esc(a.spell) + '</div>';
      if (spent(t) < need) h += '<div class="r">Requires ' + need + ' points in ' + esc(t.name) + ' Talents</div>';
      h += '<div class="y">' + esc(rankText(a, Math.max(r, 1))) + '</div>';
      if (r > 0 && r < a.ranks) h += '<div class="nx">Next rank:</div><div class="y">' + esc(rankText(a, r + 1)) + '</div>';
      if (r < a.ranks && spent(t) >= need && total() < MAXPTS) h += '<div class="g">Click to learn</div>';
      else if (r >= a.ranks) h += '<div class="gr">Right-click to unlearn</div>';
      return h;
    }
    function counts() {
      document.getElementById('tal-spent').textContent = spent(trees[cur]);
      document.getElementById('tal-left').textContent = MAXPTS - total();
      Array.prototype.forEach.call(tabs.children, function (b, i) {
        b.textContent = trees[i].name + ' (' + spent(trees[i]) + ')';
        b.setAttribute('aria-selected', String(i === cur));
      });
    }
    function refresh() {
      var t = trees[cur];
      Array.prototype.forEach.call(g.children, function (b) {
        var a = b._a; b.className = 'tal ' + state(t, a);
        b.querySelector('.rank').textContent = pts[a.id] + '/' + a.ranks;
        if (tipFor === b) tip.innerHTML = talTip(t, a);
      });
      counts();
    }
    function draw() {
      var t = trees[cur];
      g.style.setProperty('--acc', t.color); g.innerHTML = '';
      s.querySelector('.portrait').innerHTML = icon(t.id + '-emblem');
      document.getElementById('tal-name').innerHTML = '<b>' + esc(t.name) + '</b> &nbsp;' + esc(t.role);
      t.talents.forEach(function (a) {
        var b = el('button', 'tal ' + state(t, a), icon(a.id) + '<span class="rank">' + pts[a.id] + '/' + a.ranks + '</span>');
        b.type = 'button'; b.style.gridRow = a.tier; b.style.gridColumn = a.column + 1;
        b.setAttribute('aria-label', a.name); b._a = a;
        bindTip(b, function () { return talTip(t, a); });
        function remove() { if (canRemove(t, a)) { pts[a.id]--; refresh(); } }
        b.addEventListener('click', function () {
          if (unlearn) return remove();
          if (pts[a.id] < a.ranks && spent(t) >= (a.tier - 1) * 5 && total() < MAXPTS) { pts[a.id]++; refresh(); }
        });
        b.addEventListener('contextmenu', function (e) { e.preventDefault(); remove(); });
        g.appendChild(b);
      });
      counts();
    }
    trees.forEach(function (t, i) {
      var b = el('button', 'tab'); b.type = 'button';
      b.addEventListener('click', function () { cur = i; hideTip(); draw(); });
      tabs.appendChild(b);
    });
    document.getElementById('tal-reset').addEventListener('click', function () { Object.keys(pts).forEach(function (k) { pts[k] = 0; }); refresh(); });
    document.getElementById('tal-un').addEventListener('click', function () { unlearn = !unlearn; this.textContent = 'Unlearn: ' + (unlearn ? 'On' : 'Off'); });
    draw();
  }

  /* ------------------------------------------------------------ build this page's windows */
  var BANG = '<div class="bang">!</div>';
  var micro = [];
  if (P.spellbook) {
    bookWin(P.spellbook);
    micro.push({ id: 'book', key: 'p', glyph: '&#10070;', label: 'Spells', name: 'Spellbook', tip: 'The class design, its specializations and their abilities.' });
  }
  if (P.kind === 'class') {
    if (P.talents) talentWin(P.talents);
    micro.push({ id: 'tal', key: 'n', glyph: '&#10022;', label: 'Talents', name: 'Talents',
      tip: P.talents ? 'Spend 51 talent points across three trees.' : 'Talents have not yet been written for this class.', disabled: !P.talents });
  }
  if (P.trade) {
    listWin('trade', { title: P.trade.title, portrait: icon(P.icon), sub: P.trade.sub, right: P.trade.right, groups: P.trade.groups, layout: 'trade', width: P.trade.width || 620 });
    W.trade._minW = 360;
    micro.push({ id: 'trade', key: 'p', glyph: P.trade.glyph || '&#9874;', label: P.trade.button, name: P.trade.title, tip: P.trade.tip });
  }
  if (P.log) {
    var n = P.log.reduce(function (c, g) { return c + g.entries.length; }, 0);
    listWin('log', { title: 'Design Log', portrait: BANG, sub: P.logTitle || P.name, right: 'Entries: ' + n, groups: P.log, width: 400 });
    micro.push({ id: 'log', key: 'l', glyph: '!', label: 'Log', name: 'Design Log', tip: 'Mechanics, lore and unsettled matters.' });
  }

  /* ------------------------------------------------------------ action bar */
  var bar = document.querySelector('.ui .bar');
  var scaleTarget;
  if (!bar) {
    bar = el('div', 'stonebar'); bar.setAttribute('role', 'toolbar'); B.appendChild(bar); scaleTarget = bar;
  } else {
    scaleTarget = document.querySelector('.ui .bottom') || bar;
    bar.appendChild(el('span', 'bardiv'));
    var cx = document.querySelector('.ui .codex');
    if (cx) cx.insertBefore(el('div', 'uport', icon(P.icon)), cx.firstChild);
    var simBtns = Array.prototype.slice.call(bar.querySelectorAll('button'));
    var nameOf = function (b) {
      var c = b.cloneNode(true);
      Array.prototype.forEach.call(c.querySelectorAll('kbd, small, i, .gl'), function (x) { x.remove(); });
      return c.textContent.trim();
    };
    var deco = function () {
      simBtns.forEach(function (b) {
        var nm = nameOf(b); if (b._n === nm) return; b._n = nm;
        var gl = b.querySelector('.gl'); if (!gl) { gl = el('span', 'gl'); b.appendChild(gl); }
        var sp = spellIndex[nm];
        gl.innerHTML = sp && icon(sp.icon) ? icon(sp.icon) : esc(nm[0] || '');
        b.setAttribute('aria-label', nm);
      });
    };
    simBtns.forEach(function (b) {
      bindTip(b, function () {
        var nm = nameOf(b), sm = b.querySelector('small'), sp = spellIndex[nm];
        return '<div class="n">' + esc(nm) + '</div><div>' + esc(sm ? sm.textContent : '') + '</div>' + (sp ? '<div class="y">' + esc(sp.text) + '</div>' : '');
      });
    });
    deco();
    new MutationObserver(deco).observe(bar, { subtree: true, childList: true, characterData: true });
  }
  scaleTarget.classList.add('scalable');

  micro.forEach(function (m) {
    var b = el('button', 'slot mb', '<kbd>' + m.key.toUpperCase() + '</kbd><span class="gl">' + m.glyph + '</span><small class="keep">' + esc(m.label) + '</small>');
    b.type = 'button'; b.setAttribute('aria-pressed', 'false'); b.setAttribute('aria-label', m.name);
    if (m.disabled) { b.setAttribute('aria-disabled', 'true'); b.classList.add('off'); }
    bindTip(b, function () { return simpleTip(m.name, m.tip); });
    b.addEventListener('click', function () { if (!m.disabled) toggle(m.id); });
    bar.appendChild(b); slots[m.id] = b;
  });
  if (P.help) {
    var q = el('button', 'slot mb', '<span class="gl">?</span><small class="keep">Help</small>');
    q.type = 'button'; q.setAttribute('aria-label', 'Help');
    bindTip(q, function () { return simpleTip('Controls', P.help); });
    bar.appendChild(q);
  }

  // Bar size: the + and - buttons scale the whole bar. Remembered in this browser.
  var scale = store.get('barscale') || 1;
  function applyScale() {
    scale = Math.round(Math.min(1.8, Math.max(0.6, scale)) * 10) / 10;
    document.documentElement.style.setProperty('--barscale', scale);
    store.set('barscale', scale);
  }
  var sc = el('span', 'scaler');
  [['+', 'Larger action bar', 0.1], ['−', 'Smaller action bar', -0.1]].forEach(function (d) {
    var b = el('button', 'sbtn', d[0]); b.type = 'button'; b.setAttribute('aria-label', d[1]);
    bindTip(b, function () { return simpleTip(d[1], 'Size: ' + Math.round(scale * 100) + '%'); });
    b.addEventListener('click', function (e) {
      e.stopPropagation(); scale += d[2]; applyScale();
      if (tipFor === b) tip.innerHTML = simpleTip(d[1], 'Size: ' + Math.round(scale * 100) + '%');
    });
    sc.appendChild(b);
  });
  bar.appendChild(sc);
  applyScale();

  /* ------------------------------------------------------------ keys and opening state */
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key.toLowerCase();
    if (k === 'escape') { Object.keys(W).forEach(function (id) { toggle(id, false); }); return; }
    if (k === '+' || k === '=') { scale += 0.1; applyScale(); return; }
    if (k === '-') { scale -= 0.1; applyScale(); return; }
    micro.forEach(function (m) { if (m.key === k && !m.disabled) toggle(m.id); });
  });
  (P.openOnLoad || []).forEach(function (id, i) { if (bounds().w >= NARROW || i === 0) toggle(id, true); });
})();
