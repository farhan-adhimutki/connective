window.initReveal = function () {
  var elements = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      el.style.willChange = 'transform, opacity';
      el.classList.add('is-visible');
      observer.unobserve(el);
      setTimeout(function () { el.style.removeProperty('will-change'); }, 1700);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  elements.forEach(function (el) {
    el.style.setProperty('--reveal-delay', Math.min(Number(el.dataset.delay) || 0, 600) + 'ms');
    observer.observe(el);
  });
};