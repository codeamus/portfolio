/**
 * Scroll Reveal Animations - Intersection Observer based
 * Lightweight, no CDN dependency, Astro-friendly
 * Motion Intensity: HIGH
 */

export function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay || '0';

          setTimeout(() => {
            el.classList.add('revealed');
          }, parseInt(delay));

          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}

// Run on load and after Astro page transitions
if (typeof window !== 'undefined') {
  // Use requestAnimationFrame to ensure DOM is ready
  const init = () => requestAnimationFrame(initScrollReveal);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('astro:after-swap', init);
}
