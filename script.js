// Simple FAQ toggle (visual "+" indicator as seen in the design; PDF shows a static state,
// this just adds a light interactive affordance without altering the visual design).
document.querySelectorAll('.faq-item').forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
  });
});
