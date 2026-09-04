(()=>{'use strict';
const css=`
/* NEXT LEVEL — platform responsive v6
   Handles real mobile, tablets and mobile browsers using “Desktop site”. */
html,body{width:100%!important;max-width:100%!important;min-width:0!important;overflow-x:hidden!important}
#app,.shell,.main,.main>*{box-sizing:border-box;min-width:0;max-width:100%}
img,svg,video,canvas{max-width:100%;height:auto}
.hero h1,.hero h1 span,.topbar h1,h1,h2,h3,h4,p{overflow-wrap:anywhere;word-break:normal}
.hero h1 span{color:#fff!important;opacity:1!important;visibility:visible!important}
.hero{isolation:isolate}.hero-copy,.hero-visual{min-width:0!important;position:relative;z-index:2}.hero-copy{max-width:100%}.hero-visual{overflow:visible}.hero:before,.hero:after{pointer-events:none!important;z-index:0!important}
/* Any touch device must use a touch-friendly shell even if its browser reports desktop width. */
@media (max-width:900px), (hover:none) and (pointer:coarse){
 .shell{display:block!important;min-height:100dvh!important;width:100%!important}
 .sidebar{display:none!important}
 .mobile-header{display:flex!important;position:sticky!important;top:0!important;left:0!important;width:100%!important;height:64px!important;z-index:4000!important;padding:0 16px!important;box-sizing:border-box!important}
 .mobile-header .brand{min-width:0!important;max-width:calc(100% - 58px)!important;overflow:hidden!important;white-space:nowrap!important}
 .main{margin:0!important;width:100%!important;max-width:100%!important;padding:22px 16px 94px!important}
 .topbar{width:100%!important;min-width:0!important;gap:14px!important;align-items:center!important}
 .topbar>div:first-child{min-width:0!important;max-width:100%!important}
 .top-actions{flex:0 0 auto!important}
 .hero{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;min-height:0!important;padding:30px 22px!important;border-radius:24px!important;gap:18px!important;overflow:hidden!important}
 .hero-copy{width:100%!important;max-width:100%!important}
 .hero h1{font-size:clamp(34px,10vw,52px)!important;line-height:.98!important;margin:17px 0!important;max-width:100%!important;letter-spacing:-.04em!important}
 .hero-copy>p{font-size:14px!important;line-height:1.55!important;max-width:55ch!important}
 .hero-actions{display:flex!important;width:100%!important;flex-wrap:wrap!important;gap:9px!important}
 .hero-actions .btn{min-width:0!important;flex:1 1 180px!important}
 .hero-visual{width:100%!important;height:250px!important;min-height:250px!important;display:grid!important;place-items:center!important;margin:0!important}
 .level-orbit{width:min(250px,72vw)!important;height:min(250px,72vw)!important;max-width:100%!important}
 .level-core{width:min(120px,35vw)!important;height:min(120px,35vw)!important}
 .level-core strong{font-size:clamp(38px,11vw,46px)!important}
 .orbit-card{font-size:9px!important;padding:8px 10px!important}
 .card-a{right:-2px!important;top:22px!important}.card-b{left:-2px!important;bottom:24px!important}
 .cusco-lines{display:none!important}
 .stats-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;width:100%!important}
 .course-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;width:100%!important}
 .challenge-grid,.challenge-grid.full{grid-template-columns:repeat(2,minmax(0,1fr))!important;width:100%!important}
 .game-modes{grid-template-columns:repeat(2,minmax(0,1fr))!important;width:100%!important}
 .lesson-grid{grid-template-columns:1fr!important;width:100%!important}
 .how{grid-template-columns:1fr!important;width:100%!important}
 .steps{grid-template-columns:repeat(3,minmax(0,1fr))!important}
 .recommendation{width:100%!important;min-width:0!important;flex-wrap:wrap!important}
 .recommendation .btn{margin-left:0!important}
 .course-heading{grid-template-columns:auto minmax(0,1fr) auto!important}
 .course-heading>div{min-width:0!important}
 .course-heading>strong{grid-column:auto!important}
 .modal-backdrop,.game-modal,.v2-modal{padding:10px!important;overflow:auto!important}
 .modal-card,.game-modal>*,.v2-modal-box,.result-card{width:min(100%,760px)!important;max-width:calc(100vw - 20px)!important;max-height:calc(100dvh - 20px)!important;overflow:auto!important;box-sizing:border-box!important}
 .nl-mobile-nav{position:fixed!important;left:10px!important;right:10px!important;bottom:max(10px,env(safe-area-inset-bottom))!important;width:auto!important;max-width:none!important;z-index:5000!important}
 .learning-list .lesson-card{min-width:0!important}
}
/* Narrow phones */
@media (max-width:600px), (hover:none) and (pointer:coarse) and (max-width:700px){
 .main{padding:16px 13px 96px!important}
 .topbar{margin-bottom:22px!important}.topbar h1{font-size:clamp(26px,8vw,34px)!important}.top-actions .streak-chip{display:none!important}
 .hero{padding:26px 18px!important;border-radius:22px!important;gap:8px!important}
 .hero h1{font-size:clamp(35px,11vw,49px)!important}
 .hero-copy>p{font-size:13px!important}.hero-actions{flex-direction:column!important}.hero-actions .btn{width:100%!important;flex:0 0 auto!important}
 .hero-visual{height:230px!important;min-height:230px!important}.level-orbit{width:min(235px,70vw)!important;height:min(235px,70vw)!important}.level-core{width:112px!important;height:112px!important}
 .course-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:10px!important}.course-body{padding:13px!important}.course-body h3{font-size:16px!important}.course-body p{font-size:11px!important;min-height:0!important}
 .challenge-grid,.challenge-grid.full{grid-template-columns:1fr!important}.game-modes{grid-template-columns:1fr 1fr!important}.steps{grid-template-columns:1fr!important}.steps>div{border-left:0!important;border-top:1px solid #343741!important;padding:15px 0!important}
 .course-heading{grid-template-columns:auto minmax(0,1fr)!important}.course-heading>strong{grid-column:2!important;justify-self:start!important}.course-heading h2{font-size:21px!important}
 .summary-card{grid-template-columns:1fr 1fr!important}.history-item{grid-template-columns:1fr!important}.profile-grid,.two-col,.challenge-detail-grid{grid-template-columns:1fr!important}
}
@media (max-width:430px){
 .course-grid{grid-template-columns:1fr!important}.stats-grid{gap:8px!important}.hero-visual{height:215px!important;min-height:215px!important}.level-orbit{width:205px!important;height:205px!important}.level-core{width:100px!important;height:100px!important}.level-core strong{font-size:38px!important}
}
/* Landscape phones: prioritize horizontal breathing room without restoring desktop sidebar. */
@media (orientation:landscape) and (max-height:600px) and (hover:none), (orientation:landscape) and (max-height:600px) and (pointer:coarse){
 .mobile-header{height:54px!important}.main{padding:12px 18px 78px!important}.hero{grid-template-columns:minmax(0,1.05fr) minmax(230px,.75fr)!important;min-height:260px!important;padding:22px!important;gap:16px!important}.hero h1{font-size:clamp(30px,6vw,44px)!important}.hero-copy>p{font-size:12px!important}.hero-actions{flex-direction:row!important}.hero-actions .btn{width:auto!important;flex:0 1 auto!important}.hero-visual{height:220px!important;min-height:220px!important}.level-orbit{width:210px!important;height:210px!important}.level-core{width:100px!important;height:100px!important}.orbit-card{font-size:8px!important}.nl-mobile-nav{display:none!important}.stats-grid{grid-template-columns:repeat(4,minmax(0,1fr))!important}.course-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important}.game-modes{grid-template-columns:repeat(3,minmax(0,1fr))!important}.challenge-grid,.challenge-grid.full{grid-template-columns:repeat(2,minmax(0,1fr))!important}.steps{grid-template-columns:repeat(3,minmax(0,1fr))!important}
}
/* Ultra-short screens */
@media (max-height:430px) and (hover:none), (max-height:430px) and (pointer:coarse){.hero-visual{height:185px!important;min-height:185px!important}.level-orbit{width:175px!important;height:175px!important}.level-core{width:84px!important;height:84px!important}.level-core strong{font-size:32px!important}.orbit-card{display:none!important}}
`;
function install(){if(document.getElementById('nl-platform-responsive-v6'))return;const s=document.createElement('style');s.id='nl-platform-responsive-v6';s.textContent=css;document.head.appendChild(s);const touch=matchMedia('(hover:none), (pointer:coarse)').matches||matchMedia('(max-width:900px)').matches;if(touch&&document.body.dataset.page){ensureMobileNav();}}
function ensureMobileNav(){if(document.querySelector('.nl-mobile-nav'))return;const base=document.body.dataset.page==='home'?'':'../';const items=[['home','Inicio','⌂'],['aprender','Aprender','◈'],['juegos','Juegos','◆'],['retos','Retos','⚡'],['progreso','Progreso','◒']];const nav=document.createElement('nav');nav.className='nl-mobile-nav';nav.setAttribute('aria-label','Navegación principal móvil');nav.innerHTML=items.map(([id,label,icon])=>`<a href="${base}${id==='home'?'index.html':`pages/${id}.html`}" class="${document.body.dataset.page===id?'active':''}"><span aria-hidden="true">${icon}</span><small>${label}</small></a>`).join('');document.body.appendChild(nav);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();