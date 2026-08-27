(() => {
 'use strict';
 const KEY='nextLevelStateV3';
 const COURSE_IDS=['matematica','comunicacion','ciencia','sociales'];
 const defaults=()=>({
  user:null,xp:0,puntos:0,nivel:1,racha:0,ultimoDia:null,
  progreso:{matematica:0,comunicacion:0,ciencia:0,sociales:0},
  completados:{temas:[],retos:[],preguntas:[]},
  resultados:[],insignias:[],preferencias:{cursos:[]},
  stats:{actividades:0,temas:0,retos:0,quizzes:0,porCurso:{matematica:0,comunicacion:0,ciencia:0,sociales:0}},createdAt:Date.now()
 });
 const num=(v,min=0,max=Number.MAX_SAFE_INTEGER)=>{const n=Number(v);return Number.isFinite(n)?Math.min(max,Math.max(min,n)):min;};
 const cleanArray=(v)=>Array.isArray(v)?v.filter(x=>typeof x==='string').slice(0,500):[];
 function normalize(base,data){
  const out={...base,...(data&&typeof data==='object'?data:{})};
  out.xp=num(out.xp);out.puntos=num(out.puntos);out.nivel=num(out.nivel,1,20);out.racha=num(out.racha,0,9999);
  out.progreso={...base.progreso,...(data?.progreso||{})};
  COURSE_IDS.forEach(id=>out.progreso[id]=num(out.progreso[id],0,100));
  out.completados={...base.completados,...(data?.completados||{})};
  out.completados.temas=cleanArray(out.completados.temas);out.completados.retos=cleanArray(out.completados.retos);out.completados.preguntas=cleanArray(out.completados.preguntas);
  out.insignias=cleanArray(out.insignias);out.preferencias={...base.preferencias,...(data?.preferencias||{})};out.preferencias.cursos=cleanArray(out.preferencias.cursos).filter(id=>COURSE_IDS.includes(id));
  out.resultados=Array.isArray(out.resultados)?out.resultados.slice(-50):[];
  out.stats={...base.stats,...(data?.stats||{})};out.stats.actividades=num(out.stats.actividades);out.stats.temas=num(out.stats.temas);out.stats.retos=num(out.stats.retos);out.stats.quizzes=num(out.stats.quizzes);out.stats.porCurso={...base.stats.porCurso,...(out.stats.porCurso||{})};
  COURSE_IDS.forEach(id=>out.stats.porCurso[id]=num(out.stats.porCurso[id]));
  if(out.user&&typeof out.user==='object')out.user={nombre:String(out.user.nombre||'Estudiante').trim().slice(0,30),grado:String(out.user.grado||'1.º de secundaria').slice(0,40)};else out.user=null;
  return out;
 }
 function load(){try{const raw=localStorage.getItem(KEY);if(!raw)return defaults();return normalize(defaults(),JSON.parse(raw));}catch(e){return defaults();}}
 function save(s){const safe=normalize(defaults(),s);try{localStorage.setItem(KEY,JSON.stringify(safe));window.dispatchEvent(new CustomEvent('nl:change',{detail:safe}));}catch(e){console.warn('NEXT LEVEL: no se pudo guardar el progreso local.',e);}return safe;}
 function update(fn){const s=load();fn(s);return save(s);}
 function reset(){try{localStorage.removeItem(KEY);}catch(e){console.warn('NEXT LEVEL: no se pudo reiniciar el almacenamiento.',e);}return load();}
 window.NLStorage={KEY,load,save,update,reset};
})();
