/* ===================================================================
   Рендер сторінки з assets/content.js + перемикання мови.
   Мова зберігається в localStorage і в адресі (?lang=en).
   =================================================================== */
(function () {
  "use strict";

  var LANGS = ["uk", "en"];
  var lang = detectLang();
  var theme = storedTheme();          /* "light" | "dark" | null (як у системі) */

  function detectLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(q) > -1) return q;
    try {
      var s = localStorage.getItem("lang");
      if (LANGS.indexOf(s) > -1) return s;
    } catch (e) {}
    return (navigator.language || "uk").toLowerCase().indexOf("uk") === 0 ? "uk" : "en";
  }

  /* ---------------- Тема: світла / темна ---------------- */
  function storedTheme() {
    try {
      var v = localStorage.getItem("theme");
      if (v === "light" || v === "dark") return v;
    } catch (e) {}
    return null;
  }

  function systemDark() {
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }

  function effectiveTheme() { return theme || (systemDark() ? "dark" : "light"); }

  function applyTheme() {
    var root = document.documentElement;
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", effectiveTheme() === "dark" ? "#0B100E" : "#0E5C49");
  }

  function toggleTheme() {
    theme = effectiveTheme() === "dark" ? "light" : "dark";
    try { localStorage.setItem("theme", theme); } catch (e) {}
    applyTheme();
    paintThemeBtn();
  }

  /* t() повертає потрібну мову; якщо рядок один — віддає його як є */
  function t(v) {
    if (v === null || v === undefined) return "";
    if (typeof v === "string") return v;
    return v[lang] !== undefined ? v[lang] : (v.uk || "");
  }

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  var num = function (i) { return String(i + 1).padStart(2, "0"); };

  /* Скільки місця займає кадр у сітці — за цим браузер обирає файл із srcset.
     Сітка: дві колонки з проміжком 16 px усередині смуги завширшки 1080 px,
     нижче 700 px — одна колонка. */
  var SIZES_CELL = "(max-width:700px) calc(100vw - 32px), " +
                   "(max-width:1140px) calc((100vw - 80px) / 2), 500px";
  var SIZES_WIDE = "(max-width:700px) calc(100vw - 32px), " +
                   "(max-width:1140px) calc(100vw - 64px), 1016px";

  /* ---------------- Шапка ---------------- */
  function renderHero() {
    var h = CONTENT.hero;

    var photo = el("div", { class: "hero__photo" }, [
      el("img", { src: "assets/photo.png", alt: t(h.photoAlt), width: "132", height: "132" })
    ]);

    var title = el("div", {}, [
      el("p", { class: "silk hero__eyebrow", text: t(CONTENT.ui.eyebrow) }),
      el("h1", { text: t(h.name) }),
      el("p", { class: "hero__role", html: esc(t(h.role)) + "<em>Altium Designer · STM32 · Power electronics</em>" })
    ]);

    var spec = el("dl", { class: "spec" }, [
      specCell(t(h.cityLabel), document.createTextNode(t(h.city))),
      specCell(t(h.mailLabel), mailLink(h.email)),
      specCell(t(h.phoneLabel), el("a", { href: "tel:" + h.phoneHref, text: h.phone })),
      specCell(t(h.bornLabel), document.createTextNode(t(h.born)))
    ]);

    var facts = el("ul", { class: "facts" }, CONTENT.facts.map(function (f) {
      return el("li", {}, [el("b", { text: f.n }), el("span", { text: t(f.label) })]);
    }));

    return el("header", { class: "hero" }, [
      el("div", { class: "wrap" }, [
        el("div", { class: "hero__grid" }, [title, photo]),
        spec, facts
      ])
    ]);
  }

  function specCell(label, valueNode) {
    var dd = el("dd", {});
    dd.appendChild(valueNode);
    return el("div", {}, [el("dt", { class: "silk", text: label }), dd]);
  }

  function mailLink(mail) {
    var wrap = document.createDocumentFragment();
    wrap.appendChild(el("a", { href: "mailto:" + mail, text: mail }));
    var btn = el("button", { class: "copybtn", type: "button", text: t(CONTENT.ui.copy) });
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var done = function () {
        btn.textContent = t(CONTENT.ui.copied);
        setTimeout(function () { btn.textContent = t(CONTENT.ui.copy); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mail).then(done, fallbackCopy);
      } else {
        fallbackCopy();
      }
      /* Старі браузери й небезпечний контекст: виділяємо адресу, щоб скопіювати вручну */
      function fallbackCopy() {
        var r = document.createRange();
        r.selectNodeContents(btn.previousSibling || btn.parentNode);
        var sel = window.getSelection();
        sel.removeAllRanges(); sel.addRange(r);
      }
    });
    wrap.appendChild(btn);
    return wrap;
  }

  /* ---------------- Загальний каркас розділу ---------------- */
  function sec(id, no, heading, body) {
    return el("section", { class: "section", id: id }, [
      el("div", { class: "wrap" }, [
        el("div", { class: "section__head" }, [
          el("span", { class: "section__num", text: no }),
          el("h2", { text: heading })
        ]),
        body
      ])
    ]);
  }

  /* ---------------- Досвід / освіта ---------------- */
  function trackList(items) {
    return el("ol", { class: "track" }, items.map(function (it) {
      var top = el("div", { class: "entry__top" }, [
        el("span", { class: "entry__date", text: t(it.date) }),
        it.tag ? el("span", { class: "entry__tag", text: t(it.tag) }) : null
      ]);
      var bullets = el("ul", {}, (it.bullets || []).map(function (b) {
        return el("li", { text: t(b) });
      }));
      var links = (it.links && it.links.length)
        ? el("div", { class: "entry__links" }, it.links.map(function (l) {
            return el("a", { href: l.href, target: "_blank", rel: "noopener", text: t(l.label) + " ↗" });
          }))
        : null;
      return el("li", { class: "entry reveal" }, [
        top,
        el("h3", { text: t(it.title) }),
        el("p", { class: "entry__org", text: t(it.org) }),
        bullets, links
      ]);
    }));
  }

  /* ---------------- Навички ---------------- */
  function skillsGrid() {
    return el("div", { class: "skills" }, CONTENT.skills.map(function (s) {
      return el("div", { class: "skill reveal" }, [
        el("h3", { text: t(s.group) }),
        el("p", { text: t(s.text) }),
        el("ul", { class: "tags" }, s.items.map(function (i) { return el("li", { text: t(i) }); }))
      ]);
    }));
  }

  /* ---------------- Плати ---------------- */
  function boards() {
    var wrapEl = el("div", {}, []);
    wrapEl.appendChild(el("p", { class: "lede measure", text: t(CONTENT.ui.boardsIntro), style: "margin-bottom:32px" }));

    CONTENT.projects.forEach(function (p, i) {
      /* Список кадрів проєкту — щоб у повноекранному режимі гортати стрілками */
      var shots = p.images.map(function (im) {
        var mm = (typeof MEDIA !== "undefined" && MEDIA[im.src]) || null;
        return { src: im.src, thumb: (mm && mm.t) ? mm.t : im.src, cap: t(im.cap) };
      });

      var gallery = el("div", { class: "gallery" }, p.images.map(function (im, k) {
        /* Браузеру даємо обидва файли: легку копію та оригінал. На звичайному
           екрані він візьме копію, на щільному — оригінал без стиснення.
           Ширина й висота задані, щоб сторінка не стрибала під час завантаження. */
        var m = (typeof MEDIA !== "undefined" && MEDIA[im.src]) || null;
        var img = el("img", {
          src: m && m.t ? m.t : im.src,
          srcset: m && m.t ? (m.t + " " + m.tw + "w, " + im.src + " " + m.w + "w") : null,
          sizes: im.wide ? SIZES_WIDE : SIZES_CELL,
          width: m ? m.w : null,
          height: m ? m.h : null,
          alt: t(im.cap), loading: "lazy", decoding: "async"
        });
        var btn = el("button", { class: "shot", type: "button", "aria-label": t(im.cap) }, [img]);
        btn.addEventListener("click", function () { openViewer(shots, k); });
        return el("figure", { class: im.wide ? "wide" : "" }, [
          btn, el("figcaption", { text: t(im.cap) })
        ]);
      }));

      wrapEl.appendChild(el("article", { class: "board reveal", id: p.id }, [
        el("div", { class: "board__head" }, [
          el("span", { class: "board__num", text: num(i) }),
          el("h3", { text: t(p.title) })
        ]),
        el("p", { class: "board__meta", text: t(p.meta) }),
        el("ul", { class: "tags", style: "margin-bottom:20px" }, p.chips.map(function (c) {
          return el("li", { text: t(c) });
        })),
        el("ul", { class: "board__notes" }, p.notes.map(function (n) { return el("li", { text: t(n) }); })),
        el("p", { class: "role" }, [
          el("b", { text: t(CONTENT.ui.role) }),
          document.createTextNode(t(p.role))
        ]),
        gallery,
        p.footnote ? el("p", { class: "board__foot", text: t(p.footnote) }) : null
      ]));
    });
    return wrapEl;
  }

  /* ---------------- Публікації / гранти / відзнаки ---------------- */
  function pubList() {
    return el("ul", { class: "list" }, CONTENT.publications.map(function (p) {
      var body = p.href
        ? el("span", {}, [el("a", { href: p.href, target: "_blank", rel: "noopener", text: t(p.text) + " ↗" })])
        : el("span", { text: t(p.text) });
      return el("li", {}, [el("span", { class: "yr", text: p.year }), body]);
    }));
  }

  function plainList(arr) {
    return el("ul", { class: "plain" }, arr.map(function (x) {
      if (x.href) {
        return el("li", {}, [el("a", { href: x.href, target: "_blank", rel: "noopener", text: t(x) + " ↗" })]);
      }
      return el("li", { text: t(x) });
    }));
  }

  function langList() {
    return el("ul", { class: "langs" }, CONTENT.languages.map(function (l) {
      return el("li", {}, [
        el("b", { text: t(l.name) }),
        el("span", { class: "lvl", text: l.level }),
        t(l.note) ? el("small", { text: t(l.note) }) : null
      ]);
    }));
  }

  /* ---------------- Верхня панель ---------------- */
  var themeBtn;

  function topbar() {
    var u = CONTENT.ui;
    var nav = el("nav", { class: "nav", "aria-label": t(u.menuLabel) }, [
      navLink("#about", t(u.navAbout)),
      navLink("#experience", t(u.navExp)),
      navLink("#education", t(u.navEdu)),
      navLink("#skills", t(u.navSkills)),
      navLink("#boards", t(u.navBoards)),
      navLink("#publications", t(u.navPubs)),
      navLink("#more", t(u.navMore))
    ]);

    var langBox = el("div", { class: "lang", role: "group", "aria-label": t(u.langLabel) }, LANGS.map(function (L) {
      var b = el("button", { type: "button", "aria-pressed": String(L === lang), text: L.toUpperCase() });
      b.addEventListener("click", function () { setLang(L); });
      return b;
    }));

    var cv = el("a", { class: "btn", href: t(u.cvFile), target: "_blank", rel: "noopener" }, [
      iconDownload(), document.createTextNode(t(u.cvButton))
    ]);

    themeBtn = el("button", { class: "themebtn", type: "button" });
    themeBtn.addEventListener("click", toggleTheme);
    paintThemeBtn();

    return el("div", { class: "topbar" }, [
      el("div", { class: "topbar__in" }, [
        el("a", { class: "mark", href: "#top", text: "V. LYSIUK" }),
        nav,
        el("div", { class: "tools" }, [langBox, themeBtn, cv])
      ])
    ]);
  }

  /* Кнопка теми показує, куди перемкне: у світлій — місяць, у темній — сонце */
  function paintThemeBtn() {
    if (!themeBtn) return;
    var dark = effectiveTheme() === "dark";
    var label = t(dark ? CONTENT.ui.themeToLight : CONTENT.ui.themeToDark);
    themeBtn.innerHTML = "";
    themeBtn.appendChild(dark ? iconSun() : iconMoon());
    themeBtn.setAttribute("aria-label", label);
    themeBtn.setAttribute("title", label);
  }

  function svgIcon(paths) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 16 16"); s.setAttribute("fill", "none");
    s.setAttribute("stroke", "currentColor"); s.setAttribute("stroke-width", "1.5");
    s.setAttribute("stroke-linecap", "round"); s.setAttribute("stroke-linejoin", "round");
    s.setAttribute("aria-hidden", "true");
    s.innerHTML = paths;
    return s;
  }

  function iconMoon() {
    return svgIcon('<path d="M13.5 9.6A5.6 5.6 0 0 1 6.4 2.5a5.8 5.8 0 1 0 7.1 7.1Z"/>');
  }

  function iconSun() {
    return svgIcon('<circle cx="8" cy="8" r="3.1"/><path d="M8 1.2v1.5M8 13.3v1.5M1.2 8h1.5M13.3 8h1.5M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M12.8 3.2l-1.1 1.1M4.3 11.7l-1.1 1.1"/>');
  }

  function navLink(href, label) {
    return el("a", { href: href, text: label });
  }

  function iconDownload() {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 16 16"); s.setAttribute("fill", "none");
    s.setAttribute("stroke", "currentColor"); s.setAttribute("stroke-width", "1.6");
    s.setAttribute("stroke-linecap", "round"); s.setAttribute("stroke-linejoin", "round");
    s.setAttribute("aria-hidden", "true");
    s.innerHTML = '<path d="M8 2v8m0 0 3-3M8 10 5 7"/><path d="M2.5 11.5v1a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-1"/>';
    return s;
  }

  /* ---------------- Підвал ---------------- */
  function footer() {
    var u = CONTENT.ui, h = CONTENT.hero;
    return el("footer", { class: "foot" }, [
      el("div", { class: "wrap" }, [
        el("div", { class: "foot__in" }, [
          el("p", { text: t(u.footerNote) }),
          el("div", { class: "foot__links" }, [
            el("a", { href: "mailto:" + h.email, text: h.email }),
            el("a", { href: t(u.cvFile), target: "_blank", rel: "noopener", text: t(u.cvButton) }),
            el("a", { href: "portfolio/portfolio.pdf", target: "_blank", rel: "noopener", text: t(u.boardsPdf) }),
            el("a", { href: "https://github.com/sharwy4/vlad_lysiuk_sv", target: "_blank", rel: "noopener", text: "GitHub" })
          ])
        ])
      ])
    ]);
  }

  /* ---------------- Перегляд зображення ---------------- */
  var viewer, viewerImg, viewerCap, viewerCount, viewerClose, viewerPrev, viewerNext;
  var shotList = [], shotIdx = 0, lastFocus;

  function buildViewer() {
    viewerImg = el("img", { alt: "" });
    viewerCap = el("figcaption", {});
    viewerCount = el("span", { class: "viewer__count" });
    viewerClose = el("button", { class: "viewer__close", type: "button", text: "×" });
    viewerPrev = el("button", { class: "viewer__nav viewer__nav--prev", type: "button", text: "‹" });
    viewerNext = el("button", { class: "viewer__nav viewer__nav--next", type: "button", text: "›" });

    viewerClose.addEventListener("click", closeViewer);
    viewerPrev.addEventListener("click", function (e) { e.stopPropagation(); step(-1); });
    viewerNext.addEventListener("click", function (e) { e.stopPropagation(); step(1); });
    /* Клік по самому зображенню не закриває — закриває лише тло */
    viewerImg.addEventListener("click", function (e) { e.stopPropagation(); });

    viewer = el("div", { class: "viewer", role: "dialog", "aria-modal": "true" }, [
      viewerClose, viewerPrev, viewerNext, viewerImg,
      el("div", { class: "viewer__bar" }, [viewerCap, viewerCount])
    ]);
    viewer.addEventListener("click", closeViewer);
    document.body.appendChild(viewer);
  }

  function paintViewerLabels() {
    var u = CONTENT.ui;
    viewerClose.setAttribute("aria-label", t(u.close));
    viewerPrev.setAttribute("aria-label", t(u.prevImage));
    viewerNext.setAttribute("aria-label", t(u.nextImage));
  }

  var shotSeq = 0;

  function showShot() {
    var s = shotList[shotIdx];
    /* Спершу показуємо легку копію (вона вже в кеші), потім підміняємо повною */
    if (s.thumb && s.thumb !== s.src) {
      var mine = ++shotSeq;
      viewerImg.src = s.thumb;
      var full = new Image();
      full.onload = function () { if (mine === shotSeq) viewerImg.src = s.src; };
      full.src = s.src;
    } else {
      shotSeq++;
      viewerImg.src = s.src;
    }
    viewerImg.alt = s.cap;
    viewerCap.textContent = s.cap;
    viewerCount.textContent = (shotIdx + 1) + " / " + shotList.length;
    var many = shotList.length > 1;
    viewerPrev.style.display = many ? "" : "none";
    viewerNext.style.display = many ? "" : "none";
    viewerCount.style.display = many ? "" : "none";
  }

  function step(d) {
    if (shotList.length < 2) return;
    shotIdx = (shotIdx + d + shotList.length) % shotList.length;
    showShot();
  }

  function openViewer(list, idx) {
    lastFocus = document.activeElement;
    shotList = list; shotIdx = idx;
    paintViewerLabels();
    showShot();
    viewer.setAttribute("open", "");
    document.body.style.overflow = "hidden";
    viewerClose.focus();
  }

  function closeViewer() {
    if (!viewer.hasAttribute("open")) return;
    viewer.removeAttribute("open");
    viewerImg.src = "";
    document.body.style.overflow = "";
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }

  document.addEventListener("keydown", function (e) {
    if (!viewer.hasAttribute("open")) return;
    if (e.key === "Escape") { closeViewer(); return; }
    if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    /* Фокус не випускаємо за межі вікна перегляду */
    if (e.key === "Tab") {
      var f = [viewerClose, viewerPrev, viewerNext].filter(function (b) { return b.style.display !== "none"; });
      var i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });

  /* ---------------- Мова ---------------- */
  function setLang(L) {
    if (L === lang) return;
    lang = L;
    try { localStorage.setItem("lang", L); } catch (e) {}
    var url = new URL(location.href);
    url.searchParams.set("lang", L);
    history.replaceState(null, "", url);
    render(true);
    if (viewer.hasAttribute("open")) { paintViewerLabels(); }
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* ---------------- Складання сторінки ---------------- */
  function render(keepScroll) {
    var u = CONTENT.ui;
    var y = keepScroll ? window.scrollY : 0;
    document.documentElement.lang = lang;
    document.title = t(u.siteTitle);

    var root = document.getElementById("app");
    root.innerHTML = "";

    root.appendChild(el("a", { class: "skip", href: "#top", text: t(u.skipLink) }));
    root.appendChild(topbar());
    root.appendChild(el("main", { id: "top" }, [
      renderHero(),
      sec("about", "01", t(u.sectionAbout), el("p", { class: "lede measure", text: t(CONTENT.about) })),
      sec("experience", "02", t(u.sectionExp), trackList(CONTENT.experience)),
      sec("education", "03", t(u.sectionEdu), trackList(CONTENT.education)),
      sec("skills", "04", t(u.sectionSkills), skillsGrid()),
      sec("boards", "05", t(u.sectionBoards), boards()),
      sec("publications", "06", t(u.sectionPubs), pubList()),
      sec("more", "07", t(u.sectionGrants), el("div", {}, [
        plainList(CONTENT.grants),
        el("div", { class: "cols", style: "margin-top:48px" }, [
          el("div", {}, [
            el("h3", { class: "silk", text: t(u.sectionAwards), style: "margin:0 0 16px" }),
            plainList(CONTENT.awards)
          ]),
          el("div", {}, [
            el("h3", { class: "silk", text: t(u.sectionLangs), style: "margin:0 0 16px" }),
            langList()
          ])
        ])
      ]))
    ]));
    root.appendChild(footer());

    observe(keepScroll);
    spy();

    /* Після зміни мови лишаємось на тому самому місці сторінки */
    if (keepScroll) window.scrollTo(0, y);
  }

  /* Поява блоків під час прокручування */
  var revealTimer;

  function observe(showAll) {
    clearTimeout(revealTimer);
    if (showAll || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .06 });
    document.querySelectorAll(".reveal").forEach(function (n) { io.observe(n); });

    /* Підстраховка: якщо спостерігач чомусь не спрацював, показуємо все одно */
    revealTimer = setTimeout(function () {
      var first = document.querySelector(".reveal");
      if (first && !first.classList.contains("in")) revealAll();
    }, 2500);
  }

  function revealAll() {
    document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("in"); });
  }

  /* Підсвічування поточного розділу в меню */
  function spy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = map[en.target.id];
        if (!a) return;
        if (en.isIntersecting) {
          links.forEach(function (l) { l.removeAttribute("aria-current"); });
          a.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }

  document.documentElement.classList.add("js");
  applyTheme();
  buildViewer();
  render();

  /* Якщо тема не вибрана вручну — слідкуємо за системною */
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onScheme = function () { if (!theme) { applyTheme(); paintThemeBtn(); } };
    if (mq.addEventListener) mq.addEventListener("change", onScheme);
    else if (mq.addListener) mq.addListener(onScheme);
  }
})();
