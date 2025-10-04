// gsap-animations.js
// GSAP animations for geometric shapes and gradient

document.addEventListener('DOMContentLoaded', function () {
  gsap.fromTo("#gradient-circle",
    { scale: 0.7, opacity: 0 },
    { scale: 1, opacity: 0.8, duration: 1.2, ease: "power2.out" }
  );

  function animateShape(id, props) {
    const el = document.getElementById(id);
    if (!el) return;
    // Idle floating animation
    gsap.to(el, {
      y: '+=20',
      repeat: -1,
      yoyo: true,
      duration: 2 + Math.random(),
      ease: 'sine.inOut',
    });
    // Hover animation
    el.addEventListener('mouseenter', () => {
      gsap.to(el, { ...props, duration: 0.7, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.7, ease: 'power2.out' });
    });
  }

  animateShape('shape-circle', { x: 40, y: -30, scale: 1.2, rotation: 30 });
  animateShape('shape-square', { x: -50, y: 40, scale: 1.3, rotation: -45 });
  animateShape('shape-triangle', { x: 30, y: 30, scale: 1.15, rotation: 60 });
});
