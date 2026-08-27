(() => {
  'use strict';

  const ready = () => {
    const style = document.createElement('style');
    style.textContent = `
      .stats-grid > .stats-grid{display:contents}
      .nl-skip{position:fixed;left:12px;top:12px;z-index:10000;transform:translateY(-180%);padding:10px 14px;border-radius:12px;background:#17152b;color:#fff;font-weight:800;text-decoration:none;transition:transform .2s}
      .nl-skip:focus{transform:translateY(0)}
      .nl-health{position:fixed;right:14px;bottom:14px;z-index:9998;max-width:310px;padding:12px 14px;border-radius:16px;background:#fff;box-shadow:0 14px 35px rgba(30,25,70,.16);border:1px solid rgba(108,76,255,.14);font-size:13px;color:#4b465d}
      .nl-health strong{display:block;color:#17152b;margin-bottom:3px}.nl-health.ok{border-left:4px solid #35c98a}.nl-health.warn{border-left:4px solid #ffc857}
      @media(max-width:600px){.nl-health{right:10px;bottom:76px;max-width:calc(100vw - 20px)}}
    `;
    document.head.appendChild(style);

    const app = document.getElementById('app');
    if (!app) return;

    const skip = document.createElement('a');
    skip.className = 'nl-skip';
    skip.href = '#app';
    skip.textContent = 'Saltar al contenido';
    document.body.prepend(skip);

    // Recover gracefully from malformed/old local state.
    try {
      if (window.NLStorage) {
        const state = NLStorage.load();
        NLStorage.save(state);
      }
    } catch (error) {
      console.warn('NEXT LEVEL: estado local reparado con valores predeterminados.', error);
    }

    // Catch unexpected runtime failures and show a useful recovery action instead of a blank screen.
    window.addEventListener('error', (event) => {
      if (!event.error) return;
      let box = document.querySelector('.nl-health');
      if (!box) {
        box = document.createElement('div');
        box.className = 'nl-health warn';
        document.body.appendChild(box);
      }
      box.innerHTML = '<strong>La página necesita actualizarse</strong><span>Tu progreso está guardado localmente. Recarga la página para continuar.</span>';
      setTimeout(() => box.remove(), 7000);
    });

    // Avoid dead-looking links caused by accidental empty hrefs.
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href === '' || href === '#') {
        event.preventDefault();
        link.setAttribute('aria-disabled', 'true');
      }
    });

    // Keep dynamic content accessible to assistive technologies.
    const observer = new MutationObserver(() => {
      document.querySelectorAll('.toast').forEach(toast => {
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
      });
      document.querySelectorAll('.modal-backdrop').forEach(modal => {
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
      });
    });
    observer.observe(document.body, {childList:true, subtree:true});

    document.body.classList.add('nl-quality-checked');
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, {once:true});
  else ready();
})();
