(() => {
  'use strict';

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const page = document.body?.dataset?.page || 'home';

  function addScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'nl-scroll-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      bar.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function addAmbientParticles() {
    if (prefersReduced) return;
    const layer = document.createElement('div');
    layer.className = 'nl-particles';
    layer.setAttribute('aria-hidden', 'true');
    const symbols = ['✦', '·', '✧', '•', '✦', '◇'];
    for (let i = 0; i < 18; i += 1) {
      const el = document.createElement('span');
      el.textContent = symbols[i % symbols.length];
      el.style.setProperty('--x', `${Math.random() * 100}%`);
      el.style.setProperty('--y', `${Math.random() * 100}%`);
      el.style.setProperty('--delay', `${Math.random() * -12}s`);
      el.style.setProperty('--duration', `${8 + Math.random() * 10}s`);
      el.style.setProperty('--size', `${8 + Math.random() * 10}px`);
      layer.appendChild(el);
    }
    document.body.appendChild(layer);
  }

  function addReveal() {
    const targets = document.querySelectorAll('.card,.course-card,.challenge-card,.mode-card,.stat-card,.panel,.lesson-card,.section,.how,.recommendation,.game-hero,.challenge-banner,.progress-hero,.profile-hero');
    if (!targets.length) return;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('nl-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('nl-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    targets.forEach((el, index) => {
      el.classList.add('nl-reveal');
      el.style.setProperty('--reveal-delay', `${Math.min(index * 45, 360)}ms`);
      observer.observe(el);
    });
  }

  function addTilt() {
    if (prefersReduced || !window.matchMedia('(pointer:fine)').matches) return;
    document.querySelectorAll('.course-card,.challenge-card,.mode-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        card.style.setProperty('--rx', `${(0.5 - py) * 4}deg`);
        card.style.setProperty('--ry', `${(px - 0.5) * 4}deg`);
        card.classList.add('nl-tilting');
      });
      card.addEventListener('pointerleave', () => {
        card.classList.remove('nl-tilting');
        card.style.removeProperty('--rx');
        card.style.removeProperty('--ry');
      });
    });
  }

  function addRipple() {
    document.addEventListener('click', event => {
      const button = event.target.closest('.btn, .filter, .nav-item');
      if (!button || prefersReduced) return;
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'nl-ripple';
      const size = Math.max(rect.width, rect.height) * 1.2;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      button.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 600);
    });
  }

  function addKeyboardFocus() {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop').forEach(modal => modal.remove());
      }
    });
  }

  function addLevelCelebrationObserver() {
    if (prefersReduced || !('MutationObserver' in window)) return;
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          const modal = node.matches('.modal-backdrop') ? node : node.querySelector?.('.modal-backdrop');
          if (modal && /SUBISTE DE NIVEL|nivel/i.test(modal.textContent || '')) confetti();
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function confetti() {
    const colors = ['#6957ff','#ff6f91','#45cbea','#59d9b4','#ffd45c','#ffffff'];
    const wrap = document.createElement('div');
    wrap.className = 'nl-confetti';
    wrap.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 34; i += 1) {
      const piece = document.createElement('i');
      piece.style.setProperty('--c', colors[i % colors.length]);
      piece.style.setProperty('--x', `${Math.random() * 100}%`);
      piece.style.setProperty('--dx', `${(Math.random() - .5) * 260}px`);
      piece.style.setProperty('--delay', `${Math.random() * 180}ms`);
      piece.style.setProperty('--rot', `${Math.random() * 720 - 360}deg`);
      wrap.appendChild(piece);
    }
    document.body.appendChild(wrap);
    window.setTimeout(() => wrap.remove(), 2200);
  }

  function addGreetingBadge() {
    const topbar = document.querySelector('.topbar');
    if (!topbar || page === 'leccion' || page === 'reto') return;
    const badge = document.createElement('div');
    badge.className = 'nl-focus-badge';
    badge.innerHTML = '<span>✦</span><b>Aprende jugando</b><small>Tu progreso cuenta</small>';
    const actions = topbar.querySelector('.top-actions');
    if (actions) actions.prepend(badge);
  }

  function init() {
    addScrollProgress();
    addAmbientParticles();
    addReveal();
    addTilt();
    addRipple();
    addKeyboardFocus();
    addLevelCelebrationObserver();
    addGreetingBadge();
    document.body.classList.add('nl-enhanced');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
