(()=>{'use strict';
const ua=navigator.userAgent||'';
const realMobile=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
const tablet=/iPad|Tablet|PlayBook|Silk/i.test(ua)||(realMobile&&Math.min(screen.width,screen.height)>=600);
document.documentElement.classList.toggle('nl-real-mobile',realMobile&&!tablet);
document.documentElement.classList.toggle('nl-real-tablet',tablet);
document.documentElement.classList.toggle('nl-real-touch',realMobile||tablet||(('ontouchstart'in window)&&navigator.maxTouchPoints>0));
const css=`
/* NEXT LEVEL — responsive v7: real-device first, independent of browser "Desktop site" */
*,*::before,*::after{box-sizing:border-box}
html,body{width:100%!important;min-width:0!important;max-width:100%!important;overflow-x:hidden!important}
#app,.shell,.main,.main>*{min-width:0!important;max-width:100%!important;box-sizing:border-box}
img,svg,video,canvas{max-width:100%!important;height:auto}
.hero{isolation:isolate!important;overflow:hidden!important;width:100%!important;min-width:0!important}
.hero-copy{position:relative!important;z-index:20!important;min-width:0!important;width:100%!important;max-width:100%!important}
.hero h1{position:relative!important;z-index:30!important;color:#fff!important;opacity:1!important;visibility:visible!important;max-width:100%!important;overflow-wrap:normal!important;word-break:normal!important}
.hero h1 span{position:relative!important;z-index:31!important;display:inline!important;color:#fff!important;opacity:1!important;visibility:visible!important;filter:none!important;text-shadow:none!important}
.hero:before,.hero:after{z-index:0!important;pointer-events:none!important}
.hero-visual{position:relative!important;z-index:5!important;min-width:0!important;max-width:100%!important}
.hero-visual .level-orbit{max-width:100%!important;max-height:100%!important}
.course-grid,.challenge-grid,.game-modes,.stats-grid,.steps,.lesson-grid{min-width:0!important}
.course-card,.challenge-card,.mode-card,.stat-card,.lesson-card{min-width:0!important;max-width:100%!important}
.course-body,.lesson-content,.challenge-card>div,.section-head,.topbar,.topbar>div{min-width:0!important;max-width:100%!important}
.course-body h3,.challenge-card h3,.lesson-content h3,.topbar h1{overflow-wrap:anywhere!important}
/* REAL PHONES: this rule uses the user-agent class, so Android "Desktop site" cannot break the layout. */
html.nl-real-mobile body,html.nl-real-tablet body{overflow-x:hidden!important}
html.nl-real-mobile .shell,html.nl-real-tablet .shell{display:block!important;width:100%!important;min-height:100dvh!important}
html.nl-real-mobile .sidebar,html.nl-real-tablet .sidebar{display:none!important}
html.nl-real-mobile .mobile-header,html.nl-real-tablet .mobile-header{display:flex!important;position:sticky!important;top:0!important;left:0!important;width:100%!important;height:60px!important;z-index:4000!important;padding:0 14px!important}
html.nl-real-mobile .main,html.nl-real-tablet .main{margin:0!important;width:100%!important;max-width:100%!important;padding:18px 14px 94px!important}
html.nl-real-mobile .hero,html.nl-real-tablet .hero{display:grid!important;grid-template-columns:minmax(0,1fr)!important;align-items:stretch!important;gap:12px!important;padding:25px 18px!important;min-height:0!important;border-radius:24px!important}
html.nl-real-mobile .hero h1,html.nl-real-tablet .hero h1{font-size:clamp(34px,10.5vw,52px)!important;line-height:.98!important;letter-spacing:-.045em!important;margin:16px 0!important}
html.nl-real-mobile .hero-copy>p,html.nl-real-tablet .hero-copy>p{font-size:13px!important;line-height:1.55!important;max-width:100%!important}
html.nl-real-mobile .hero-actions,html.nl-real-tablet .hero-actions{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:9px!important;width:100%!important}
html.nl-real-mobile .hero-actions .btn,html.nl-real-tablet .hero-actions .btn{width:100%!important;max-width:none!important}
html.nl-real-mobile .hero-visual,html.nl-real-tablet .hero-visual{height:220px!important;min-height:220px!important;width:100%!important;display:grid!important;place-items:center!important;margin:0!important}
html.nl-real-mobile .level-orbit,html.nl-real-tablet .level-orbit{width:min(220px,66vw)!important;height:min(220px,66vw)!important}
html.nl-real-mobile .level-core,html.nl-real-tablet .level-core{width:100px!important;height:100px!important}
html.nl-real-mobile .level-core strong,html.nl-real-tablet .level-core strong{font-size:38px!important}
html.nl-real-mobile .orbit-card,html.nl-real-tablet .orbit-card{font-size:8px!important;padding:7px 9px!important}
html.nl-real-mobile .card-a,html.nl-real-tablet .card-a{right:-4px!important;top:14px!important}
html.nl-real-mobile .card-b,html.nl-real-tablet .card-b{left:-4px!important;bottom:14px!important}
html.nl-real-mobile .cusco-lines,html.nl-real-tablet .cusco-lines{display:none!important}
html.nl-real-mobile .stats-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
html.nl-real-mobile .course-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px!important}
html.nl-real-mobile .challenge-grid,html.nl-real-mobile .challenge-grid.full{grid-template-columns:1fr!important}
html.nl-real-mobile .game-modes{grid-template-columns:1fr!important}
html.nl-real-mobile .steps{grid-template-columns:1fr!important}
html.nl-real-mobile .steps>div{border-left:0!important;border-top:1px solid #343741!important;padding:14px 0!important}
html.nl-real-tablet .stats-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
html.nl-real-tablet .course-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
html.nl-real-tablet .challenge-grid,html.nl-real-tablet .challenge-grid.full{grid-template-columns:repeat(2,minmax(0,1fr))!important}
html.nl-real-tablet .game-modes{grid-template-columns:repeat(2,minmax(0,1fr))!important}
/* Real phone landscape: keep the shell mobile, but use both horizontal halves safely. */
@media (orientation:landscape){
 html.nl-real-mobile .main,html.nl-real-tablet .main{padding:10px 16px 18px!important}
 html.nl-real-mobile .mobile-header,html.nl-real-tablet .mobile-header{height:50px!important}
 html.nl-real-mobile .hero,html.nl-real-tablet .hero{grid-template-columns:minmax(0,1.08fr) minmax(210px,.72fr)!important;align-items:center!important;padding:18px 20px!important;gap:14px!important;min-height:245px!important}
 html.nl-real-mobile .hero h1,html.nl-real-tablet .hero h1{font-size:clamp(30px,6vw,44px)!important;margin:9px 0!important}
 html.nl-real-mobile .hero-copy>p,html.nl-real-tablet .hero-copy>p{font-size:11px!important;line-height:1.4!important}
 html.nl-real-mobile .hero-actions,html.nl-real-tablet .hero-actions{flex-direction:row!important;flex-wrap:wrap!important}
 html.nl-real-mobile .hero-actions .btn,html.nl-real-tablet .hero-actions .btn{width:auto!important;flex:1 1 130px!important}
 html.nl-real-mobile .hero-visual,html.nl-real-tablet .hero-visual{height:205px!important;min-height:205px!important}
 html.nl-real-mobile .level-orbit,html.nl-real-tablet .level-orbit{width:190px!important;height:190px!important}
 html.nl-real-mobile .level-core,html.nl-real-tablet .level-core{width:88px!important;height:88px!important}
 html.nl-real-mobile .level-core strong,html.nl-real-tablet .level-core strong{font-size:33px!important}
 html.nl-real-mobile .course-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}
 html.nl-real-mobile .stats-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important}
 html.nl-real-mobile .game-modes{grid-template-columns:repeat(2,minmax(0,1fr))!important}
}
/* Browser-width fallback for non-UA-identified tablets/phones. */
@media (max-width:900px){.sidebar{display:none!important}.main{margin:0!important;width:100%!important;max-width:100%!important;padding:18px 14px 94px!important}.hero{grid-template-columns:1fr!important;min-height:0!important}.hero h1{font-size:clamp(34px,10vw,52px)!important}.hero-actions{flex-direction:column!important}.hero-actions .btn{width:100%!important}.hero-visual{height:230px!important;min-height:230px!important}}
@media (max-width:430px){.course-grid{grid-template-columns:1fr!important}.hero h1{font-size:clamp(33px,11vw,46px)!important}.hero-visual{height:205px!important;min-height:205px!important}.level-orbit{width:200px!important;height:200px!important}.level-core{width:96px!important;height:96px!important}}
@media (prefers-reduced-motion:reduce){*,*::before,*:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
`;
function install(){if(document.getElementById('nl-platform-responsive-v7'))return;const s=document.createElement('style');s.id='nl-platform-responsive-v7';s.textContent=css;document.head.appendChild(s);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();