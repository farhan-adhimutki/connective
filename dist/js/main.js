(function () {
  try {
    initContacts();
    initReveal();
    initParallax();
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.getElementById('main-nav');
    function closeMenu(restoreFocus) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Buka menu');
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      if (restoreFocus) toggle.focus();
    }
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
    });
    nav.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () { closeMenu(false); }); });
    document.addEventListener('keydown', function (event) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (event.key === 'Escape') closeMenu(true);
      if (event.key === 'Tab') {
        var links = nav.querySelectorAll('a');
        if (event.shiftKey && document.activeElement === toggle) { event.preventDefault(); links[links.length - 1].focus(); }
        else if (!event.shiftKey && document.activeElement === links[links.length - 1]) { event.preventDefault(); toggle.focus(); }
      }
    });
    document.addEventListener('click', function (event) { if (!event.target.closest('.site-header')) closeMenu(false); });
    window.matchMedia('(min-width: 768px)').addEventListener('change', function (event) { if (event.matches) closeMenu(false); });
    var header = document.getElementById('header'), bar = document.querySelector('.scroll-progress');
    var links = Array.from(nav.querySelectorAll('a'));
    var sections = links.map(function (link) { return document.querySelector(link.getAttribute('href')); });
    var pending = false;
    function updateScroll() {
      pending = false;
      var scroll = window.scrollY;
      var available = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (available > 0 ? Math.min(scroll / available, 1) : 0) + ')';
      header.classList.toggle('scrolled', scroll > 20);
      var active = -1;
      sections.forEach(function (section, index) { if (section.getBoundingClientRect().top <= 180) active = index; });
      links.forEach(function (link, index) {
        link.classList.toggle('active', index === active);
        if (index === active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
    }
    window.addEventListener('scroll', function () { if (!pending) { pending = true; requestAnimationFrame(updateScroll); } }, { passive: true });
    window.addEventListener('resize', updateScroll, { passive: true });
    document.getElementById('year').textContent = new Date().getFullYear();
    updateScroll();
    document.documentElement.classList.add('app-ready');
  } catch (error) {
    document.documentElement.classList.remove('js', 'is-loading');
    console.error('Connective initialization:', error);
  }
})();