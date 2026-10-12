(function () {
  var root = document.documentElement;
  var seen = false;
  try { seen = sessionStorage.getItem('connective-visited') === '1'; } catch (_) {}
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');
  if (!seen && !reduced) {
    root.classList.add('is-loading');
    window.setTimeout(function () { root.classList.remove('is-loading'); }, 1080);
  }
  try { sessionStorage.setItem('connective-visited', '1'); } catch (_) {}
  // Fail open when the main scripts fail or are slow.
  window.setTimeout(function () {
    if (!root.classList.contains('app-ready')) {
      root.classList.remove('js', 'is-loading');
    }
  }, 1500);
})();