// FAQ toggle (feedback visual do "+" girando; conteúdo do design permanece estático)
document.querySelectorAll('.faq-item').forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
  });
});

// ===================== MOTION: barra fixa com sombra ao rolar =====================
var headerInner = document.querySelector('.site-header');
if (headerInner) {
  var toggleHeaderShadow = function () {
    headerInner.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  toggleHeaderShadow();
  window.addEventListener('scroll', toggleHeaderShadow, { passive: true });
}

// ===================== MOTION: entrada do Hero =====================
// O hero fica acima da dobra, então a sequência dispara no carregamento,
// não ao rolar a página.
requestAnimationFrame(function () {
  requestAnimationFrame(function () {
    document.body.classList.add('hero-ready');
  });
});

// ===================== MOTION: reveal ao rolar =====================
var revealTargets = document.querySelectorAll('.reveal, .reveal-stagger');

if ('IntersectionObserver' in window && revealTargets.length) {
  var revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealTargets.forEach(function (el) { revealObserver.observe(el); });
} else {
  // Fallback: navegadores sem IntersectionObserver mostram tudo direto
  revealTargets.forEach(function (el) { el.classList.add('in-view'); });
}
