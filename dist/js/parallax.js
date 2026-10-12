window.initParallax = function () {
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var hero = document.querySelector('.hero');
  var object = document.getElementById('hero-object');
  var contact = document.getElementById('kontak');
  var heroVisible = true;
  var scheduled = false;
  var cursorX = 0, cursorY = 0;
  function update() {
    scheduled = false;
    if (motion.matches || !heroVisible) { object.style.removeProperty('transform'); return; }
    var offset = Math.min(window.scrollY * 0.1, 32);
    object.style.transform = 'translate3d(' + cursorX + 'px,' + (offset + cursorY) + 'px,0)';
  }
  function requestUpdate() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }
  if ('IntersectionObserver' in window) {
    var visibility = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.target === hero) { heroVisible = entry.isIntersecting; document.body.classList.toggle('hero-in-view', heroVisible); requestUpdate(); }
        else document.body.classList.toggle('contact-in-view', entry.isIntersecting);
      });
    });
    visibility.observe(hero); visibility.observe(contact);
  }
  window.addEventListener('scroll', requestUpdate, { passive: true });
  hero.addEventListener('pointermove', function (event) {
    if (motion.matches || !window.matchMedia('(pointer: fine)').matches) return;
    var bounds = hero.getBoundingClientRect();
    cursorX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 24;
    cursorY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 24;
    requestUpdate();
  });
  hero.addEventListener('pointerleave', function () { cursorX = 0; cursorY = 0; requestUpdate(); });
  motion.addEventListener('change', requestUpdate);
};