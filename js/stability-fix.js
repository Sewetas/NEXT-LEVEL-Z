(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  function cleanDuplicateGameUI() {
    const app = $('#app');
    if (!app) return false;

    // interactive.js used to build a second, incompatible game system.
    // games.js is now the single source of truth for the Juegos page.
    $$('.game-hero,.game-modes,.history-list,.empty', app).forEach(el => {
      const legacySection = el.closest('.section');
      (legacySection || el).remove();
    });

    const legacyHub = $('#gameMount', app)?.closest('section.nx-card');
    if (legacyHub) legacyHub.remove();

    const arsenal = $$('[data-game="ludo"]', app).find(el => el.closest('section.nx-card'))?.closest('section.nx-card');
    if (arsenal) arsenal.remove();

    return !!$('.nl-games-shell', app);
  }

  function hardenMobileLayout() {
    if ($('#nl-stability-style')) return;
    const style = document.createElement('style');
    style.id = 'nl-stability-style';
    style.textContent = `
      html,body,#app{max-width:100%;min-width:0;overflow-x:hidden}
      #app,.shell,.main{box-sizing:border-box}
      img,svg,video,canvas{max-width:100%}
      .main{min-width:0}
      .nl-game-modal{touch-action:pan-y}
      .nl-game-panel{min-width:0;box-sizing:border-box}
      .nl-ludo-board{width:min(100%,560px);height:auto}
      .nl-game-card,.nl-game-welcome,.nl-game-stat{min-width:0}
      .nl-game-card h3,.nl-game-card p,.nl-game-welcome h2,.nl-game-welcome p{overflow-wrap:anywhere}
      .nl-mobile-nav{position:fixed!important;left:10px!important;right:10px!important;bottom:max(10px,env(safe-area-inset-bottom))!important;z-index:2000!important;display:grid!important;grid-template-columns:repeat(5,minmax(0,1fr));gap:2px;padding:7px 5px!important;min-height:58px;box-sizing:border-box;border-radius:20px;background:rgba(255,255,255,.94);backdrop-filter:blur(16px);box-shadow:0 12px 34px rgba(45,35,84,.16);border:1px solid rgba(114,87,255,.10)}
      .nl-mobile-nav a{min-width:0;display:grid;place-items:center;gap:2px;text-decoration:none;color:#777389;font:800 10px/1.1 Quicksand,Nunito,system-ui,sans-serif;padding:5px 2px;border-radius:13px}
      .nl-mobile-nav a span{font-size:20px;line-height:1}
      .nl-mobile-nav a.active{color:#6f55e7;background:#f3efff}
      @media(max-width:700px){
        .main{width:100%!important;max-width:100%!important;margin-left:0!important;padding:18px 14px 92px!important}
        .topbar{width:100%;max-width:100%;gap:12px}
        .topbar h1{font-size:clamp(1.65rem,7vw,2.15rem)!important;line-height:1.1}
        .topbar p{font-size:.94rem;line-height:1.45}
        .nl-games-shell{width:100%;max-width:100%}
        .nl-games-intro{grid-template-columns:1fr!important}
        .nl-game-grid{grid-template-columns:1fr!important}
        .nl-game-card{min-height:0!important;padding:18px!important}
        .nl-game-welcome{padding:20px!important}
        .nl-game-stats{grid-template-columns:1fr 1fr!important}
        .nl-game-panel{width:100%;max-width:100%;max-height:calc(100dvh - 16px);padding:15px!important;border-radius:20px!important}
        .nl-game-top{gap:8px}
        .nl-game-top h2{font-size:1.25rem!important}
        .nl-options{grid-template-columns:1fr!important}
        .nl-ludo{grid-template-columns:1fr!important}
        .nl-ludo-board{width:100%!important;max-width:520px!important;margin-inline:auto}
        .nl-ludo-controls{width:100%}
        .nl-die{width:72px;height:72px;font-size:2.6rem}
        .nl-jenga{grid-template-columns:1fr!important}
        .jenga-stage{min-height:270px!important;padding:12px!important}
        .jenga-tower{width:min(280px,92%)!important}
        .nl-experiment{grid-template-columns:1fr!important}
      }
      @media(max-width:380px){
        .main{padding-left:10px!important;padding-right:10px!important}
        .nl-mobile-nav{left:6px!important;right:6px!important}
        .nl-mobile-nav a{font-size:9px}
        .nl-mobile-nav a span{font-size:18px}
        .nl-game-stat{padding:12px!important}
        .nl-game-stat b{font-size:1rem!important}
      }
      @media(orientation:landscape) and (max-height:600px){
        .nl-mobile-nav{display:none!important}
        .main{padding:12px 14px 20px!important}
        .nl-game-panel{max-height:calc(100dvh - 10px)!important}
      }
    `;
    document.head.appendChild(style);
  }

  function run() {
    hardenMobileLayout();
    cleanDuplicateGameUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else run();

  const observer = new MutationObserver(() => {
    if (cleanDuplicateGameUI()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(() => observer.disconnect(), 3000);
})();
