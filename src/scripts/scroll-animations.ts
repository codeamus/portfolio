/**
 * Scroll Reveal Animations
 * Initializes ScrollReveal for premium animation effects
 * Motion Intensity: HIGH
 */

export function initScrollReveal() {
  // Check if ScrollReveal is available
  if (typeof (window as any).ScrollReveal === 'undefined') {
    console.warn('ScrollReveal not loaded');
    return;
  }

  const ScrollReveal = (window as any).ScrollReveal;

  // Reset ScrollReveal instances
  const sr = ScrollReveal({
    distance: '30px',
    duration: 800,
    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    delay: 100,
    reset: false,
    viewFactor: 0.15,
    scale: 1,
    opacity: 0,
  });

  // Reveal animations for different elements
  sr.reveal('.scroll-reveal-fade', {
    distance: '0px',
    opacity: 0,
  });

  sr.reveal('.scroll-reveal-up', {
    origin: 'bottom',
    distance: '30px',
  });

  sr.reveal('.scroll-reveal-left', {
    origin: 'left',
    distance: '50px',
  });

  sr.reveal('.scroll-reveal-right', {
    origin: 'right',
    distance: '50px',
  });

  sr.reveal('.scroll-reveal-scale', {
    distance: '0px',
    scale: 0.9,
  });

  // Special stagger effect for lists
  sr.reveal('.stagger-item', {
    distance: '30px',
    origin: 'bottom',
    interval: 150,
  });

  sr.reveal('.card-premium', {
    distance: '30px',
    origin: 'bottom',
    interval: 100,
  });

  sr.reveal('section', {
    distance: '0px',
    opacity: 1,
  });
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', initScrollReveal);

// Reinitialize after Astro transitions (for client-side navigation)
document.addEventListener('astro:after-swap', initScrollReveal);
