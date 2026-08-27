(() => {
 'use strict';
 const KEY='nextLevelStateV4';
 const COURSE_IDS=['matematica','comunicacion','ciencia','sociales'];
 const defaults=()=>({
  user:null,xp:0,puntos:0,nivel:1,racha:0,ultimoDia:null,
  progreso:{matematica:0,comunicacion:0,ciencia:0,sociales:0},
  dominio:{matematica:0,comunicacion:0,ciencia:0,sociales:0},
  actividadesPorCurso:{matematica:0,comunicacion:0,ciencia:0,sociales:0},
  precisionPorCurso:{matematica:0,comunicacion:0,ciencia:0,sociales:0},
  temasPorCurso:{matematica:0,comunicacion:0,ciencia:0,sociales:0},
  completados:{temas:[],retos:[],preguntas:[]},
  resultados:[],insignias:[],preferencias:{cursos:[]},
  stats:{actividades:0,temas:0,retos:0,quizzes:0,porCurso:{matematica:0,comunicacion:0,ciencia:0,sociales:0}},
  createdAt:Date.now()
 });
 const num=(v,min=0,max=Number.MAX_SAFE_INTEGER)=>{const n=Number(v);return Number.isFinite(n)?Math.min(max,Math.max(min,n)):min;};
 const cleanArray=v=>Array.isArray(v)?[...new Set(v.filter(x=>typeof x==='string').slice(0,500))]:[];
 const resultCourse=r=>r&&COURSE_IDS.includes(r.curso)?r.curso:null;
 const resultCorrect=r=>{if(!r||typeof r!=='object')return null;for(const k of ['correcto','correct','isCorrect','acierto','ok'])if(typeof r[k]==='boolean')return r[k];return null;};
 function recalculate(out){
  const courses=(typeof CURSOS!=='undefined'&&Array.isArray(CURSOS))?CURSOS:(window.CURSOS||[]);
  const topicIds={};COURSE_IDS.forEach(id=>topicIds[id]=new Set());
  courses.forEach(c=>(c.temas||[]).forEach(t=>topicIds[c.id]?.add(t.id)));
  const completedTopics=out.completados.temas;
  const completedSet=new Set(completedTopics);
  const completedByCourse={};COURSE_IDS.forEach(id=>completedByCourse[id]=0);
  COURSE_IDS.forEach(id=>{topicIds[id].forEach(t=>{if(completedSet.has(t))completedByCourse[id]++;});});
  const attempts={};const correct={};COURSE_IDS.forEach(id=>{attempts[id]=0;correct[id]=0;});
  for(const r of out.resultados){const c=resultCourse(r);const ok=resultCorrect(r);if(c&&ok!==null){attempts[c]++;if(ok)correct[c]++;}}
  const activityFallback=out.stats.porCurso||{};
  COURSE_IDS.forEach(id=>{
   const totalTopics=topicIds[id].size;
   const topicCompletion=totalTopics?Math.round(completedByCourse[id]/totalTopics*100):0;
   const precision=attempts[id]?Math.round(correct[id]/attempts[id]*100):0;
   const quizWeight=attempts[id]?0.4:0;
   const topicWeight=attempts[id]?0.6:1;
   let mastery=Math.round(topicCompletion*topicWeight+precision*quizWeight);
   if(!attempts[id]&&topicCompletion===0&&num(out.progreso[id])>0&&num(activityFallback[id])>0){mastery=Math.min(100,num(out.progreso[id]));}
   out.dominio[id]=mastery;
   out.progreso[id]=mastery;
   out.actividadesPorCurso[id]=attempts[id]+completedByCourse[id];
   out.precisionPorCurso[id]=precision;
   out.temasPorCurso[id]=completedByCourse[id];
  });
  out.stats.actividades=COURSE_IDS.reduce((s,id)=>s+out.actividadesPorCurso[id],0)+out.stats.retos;
  out.stats.temas=completedTopics.length;out.stats.quizzes=out.resultados.length;
  out.stats.porCurso={...out.stats.porCurso};
  COURSE_IDS.forEach(id=>out.stats.porCurso[id]=out.actividadesPorCurso[id]);
 }
 function normalize(base,data){
  const out={...base,...(data&&typeof data==='object'?data:{})};
  out.xp=num(out.xp);out.puntos=num(out.puntos);out.nivel=num(out.nivel,1,20);out.racha=num(out.racha,0,9999);
  out.completados={...base.completados,...(data?.completados||{})};
  out.completados.temas=cleanArray(out.completados.temas);out.completados.retos=cleanArray(out.completados.retos);out.completados.preguntas=cleanArray(out.completados.preguntas);
  out.insignias=cleanArray(out.insignias);out.preferencias={...base.preferencias,...(data?.preferencias||{})};out.preferencias.cursos=cleanArray(out.preferencias.cursos).filter(id=>COURSE_IDS.includes(id));
  out.resultados=Array.isArray(out.resultados)?out.resultados.filter(r=>r&&typeof r==='object').slice(-100):[];
  out.stats={...base.stats,...(data?.stats||{})};out.stats.actividades=num(out.stats.actividades);out.stats.temas=num(out.stats.temas);out.stats.retos=num(out.stats.retos);out.stats.quizzes=num(out.stats.quizzes);out.stats.porCurso={...base.stats.porCurso,...(out.stats.porCurso||{})};
  out.dominio={...base.dominio,...(data?.dominio||{})};out.actividadesPorCurso={...base.actividadesPorCurso,...(data?.actividadesPorCurso||{})};out.precisionPorCurso={...base.precisionPorCurso,...(data?.precisionPorCurso||{})};out.temasPorCurso={...base.temasPorCurso,...(data?.temasPorCurso||{})};
  out.progreso={...base.progreso,...(data?.progreso||{})};
  COURSE_IDS.forEach(id=>{out.progreso[id]=num(out.progreso[id],0,100);out.dominio[id]=num(out.dominio[id],0,100);out.actividadesPorCurso[id]=num(out.actividadesPorCurso[id]);out.precisionPorCurso[id]=num(out.precisionPorCurso[id],0,100);out.temasPorCurso[id]=num(out.temasPorCurso[id]);out.stats.porCurso[id]=num(out.stats.porCurso[id]);});
  if(out.user&&typeof out.user==='object')out.user={nombre:String(out.user.nombre||'Estudiante').trim().slice(0,30),grado:String(out.user.grado||'1.º de secundaria').slice(0,40)};else out.user=null;
  recalculate(out);
  return out;
 }
 function load(){try{const raw=localStorage.getItem(KEY);if(!raw)return defaults();return normalize(defaults(),JSON.parse(raw));}catch(e){console.warn('NEXT LEVEL: estado inválido, se inicia uno nuevo.',e);return defaults();}}
 function save(s){const safe=normalize(defaults(),s);try{localStorage.setItem(KEY,JSON.stringify(safe));window.dispatchEvent(new CustomEvent('nl:change',{detail:safe}));}catch(e){console.warn('NEXT LEVEL: no se pudo guardar el progreso local.',e);}return safe;}
 function update(fn){const s=load();fn(s);return save(s);}
 function reset(){try{localStorage.removeItem(KEY);localStorage.removeItem('nextLevelStateV3');}catch(e){console.warn('NEXT LEVEL: no se pudo reiniciar el almacenamiento.',e);}return load();}
 window.NLStorage={KEY,load,save,update,reset,recalculate};
})();
