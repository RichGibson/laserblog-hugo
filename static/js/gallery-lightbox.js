(function () {
  'use strict';

  /* ── State ── */
  var items = [];   /* [{thumb, large, alt}] */
  var current = 0;

  /* ── Helper ── */
  function navBtnCss(side) {
    return [
      'position:absolute', 'top:50%', 'transform:translateY(-50%)',
      side, 'background:rgba(0,0,0,0.45)', 'border:none', 'color:#fff',
      'font-size:52px', 'line-height:1', 'cursor:pointer',
      'padding:6px 18px', 'border-radius:6px',
      'user-select:none', 'font-family:sans-serif',
      'transition:background 0.15s'
    ].join(';');
  }

  /* ── Build overlay ── */
  var overlay = document.createElement('div');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.style.cssText = [
    'display:none', 'position:fixed', 'inset:0',
    'background:rgba(0,0,0,0.93)', 'z-index:10000',
    'align-items:center', 'justify-content:center',
    'flex-direction:column'
  ].join(';');

  var img = document.createElement('img');
  img.style.cssText = [
    'max-width:88vw', 'max-height:84vh',
    'object-fit:contain', 'border-radius:4px',
    'box-shadow:0 0 48px rgba(0,0,0,0.9)',
    'display:block'
  ].join(';');
  overlay.appendChild(img);

  /* counter: "12 / 139" */
  var counter = document.createElement('div');
  counter.style.cssText = [
    'position:absolute', 'top:14px', 'left:50%',
    'transform:translateX(-50%)',
    'color:#ddd', 'font-size:13px', 'font-family:sans-serif',
    'background:rgba(0,0,0,0.5)', 'padding:2px 12px',
    'border-radius:12px', 'white-space:nowrap'
  ].join(';');
  overlay.appendChild(counter);

  /* caption */
  var caption = document.createElement('p');
  caption.style.cssText = [
    'position:absolute', 'bottom:14px', 'left:50%',
    'transform:translateX(-50%)', 'margin:0',
    'color:#ccc', 'font-size:13px', 'text-align:center',
    'max-width:80vw', 'font-family:sans-serif',
    'text-shadow:0 1px 4px rgba(0,0,0,0.9)'
  ].join(';');
  overlay.appendChild(caption);

  /* close button */
  var closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.style.cssText = [
    'position:absolute', 'top:10px', 'right:14px',
    'background:none', 'border:none', 'color:#eee',
    'font-size:36px', 'cursor:pointer', 'line-height:1',
    'padding:4px 10px', 'font-family:sans-serif'
  ].join(';');
  overlay.appendChild(closeBtn);

  /* prev / next buttons */
  var prevBtn = document.createElement('button');
  prevBtn.innerHTML = '&#8249;';
  prevBtn.setAttribute('aria-label', 'Previous photo');
  prevBtn.style.cssText = navBtnCss('left:10px');
  overlay.appendChild(prevBtn);

  var nextBtn = document.createElement('button');
  nextBtn.innerHTML = '&#8250;';
  nextBtn.setAttribute('aria-label', 'Next photo');
  nextBtn.style.cssText = navBtnCss('right:10px');
  overlay.appendChild(nextBtn);

  /* ── Show / close ── */
  function show(index) {
    if (!items.length) return;
    current = (index + items.length) % items.length;
    var item = items[current];

    img.src = item.large;
    img.onerror = function () { img.src = item.thumb; img.onerror = null; };
    caption.textContent = item.alt || '';
    counter.textContent = (current + 1) + '\u2009/\u2009' + items.length;

    var multi = items.length > 1;
    prevBtn.style.display = multi ? '' : 'none';
    nextBtn.style.display = multi ? '' : 'none';

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    /* preload neighbours */
    if (multi) {
      [1, -1].forEach(function (d) {
        var n = items[(current + d + items.length) % items.length];
        (new Image()).src = n.large;
      });
    }
  }

  function close() {
    overlay.style.display = 'none';
    img.src = '';
    document.body.style.overflow = '';
  }

  /* ── Events ── */
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  closeBtn.addEventListener('click', close);

  prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    show(current - 1);
  });
  nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    show(current + 1);
  });

  document.addEventListener('keydown', function (e) {
    if (overlay.style.display === 'none') return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   show(current - 1);
    if (e.key === 'ArrowRight')  show(current + 1);
  });

  /* ── Derive large path from thumb path ── */
  function thumbToLarge(src) {
    return src
      .replace('/thumb/', '/large/')
      .replace('/thumbnail/', '/large/')
      .replace('/thumbs/', '/large/');
  }

  /* ── Init ── */
  function init() {
    document.body.appendChild(overlay);

    /* 1. Photo-grid galleries (all our Hugo photo project pages) */
    var grids = document.querySelectorAll('.photo-grid');
    if (grids.length) {
      grids.forEach(function (grid) {
        grid.querySelectorAll('img').forEach(function (el) {
          var thumbSrc = el.src;
          var largeSrc = thumbToLarge(thumbSrc);
          var idx = items.length;
          items.push({ thumb: thumbSrc, large: largeSrc, alt: el.alt });
          el.style.cursor = 'zoom-in';
          el.addEventListener('click', function (e) {
            e.preventDefault();
            show(idx);
          });
        });
      });
      return; /* don't also scan for .thumbnail or loose imgs on same page */
    }

    /* 2. Old Lightroom static galleries: .thumbnail divs with img.thumb */
    var thumbDivs = document.querySelectorAll('.thumbnail');
    if (thumbDivs.length) {
      thumbDivs.forEach(function (div) {
        var thumbImg = div.querySelector('img.thumb');
        if (!thumbImg) return;
        var thumbSrc = thumbImg.src;
        var largeSrc = thumbToLarge(thumbSrc);
        var idx = items.length;
        items.push({ thumb: thumbSrc, large: largeSrc, alt: thumbImg.alt });
        div.style.cursor = 'zoom-in';
        div.onclick = null;
        var link = div.querySelector('a');
        if (link) link.onclick = function (e) { e.preventDefault(); };
        div.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          show(idx);
        });
      });
      return;
    }

    /* 3. Regular post images — inline, not in any gallery */
    document.querySelectorAll('.post-content img').forEach(function (el) {
      if (el.closest('a')) return;
      var idx = items.length;
      items.push({ thumb: el.src, large: el.src, alt: el.alt });
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', function () { show(idx); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
