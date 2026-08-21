(() => {
 const KEY='nextLevelStateV3';
 const defaults=()=>({
  user:null,xp:0,puntos:0,nivel:1,racha:0,ultimoDia:null,
  progreso:{matematica:0,comunicacion:0,ciencia:0,sociales:0},
  completados:{temas:[],retos:[],preguntas:[]},
  resultados:[],insignias:[],preferencias:{cursos:[]},stats:{actividades:0,temas:0,retos:0,quizzes:0,porCurso:{matematica:0,comunicacion:0,ciencia:0,sociales:0}},createdAt:Date.now()
 });
 function load(){try{const raw=localStorage.getItem(KEY);if(!raw)return defaults();return merge(defaults(),JSON.parse(raw));}catch(e){return defaults();}}
 function merge(base,data){const out={...base,...data};out.progreso={...base.progreso,...(data.progreso||{})};out.completados={...base.completados,...(data.completados||{})};out.preferencias={...base.preferencias,...(data.preferencias||{})};out.stats={...base.stats,...(data.stats||{}),porCurso:{...base.stats.porCurso,...((data.stats||{}).porCurso||{})}};return out;}
 function save(s){localStorage.setItem(KEY,JSON.stringify(s));window.dispatchEvent(new CustomEvent('nl:change',{detail:s}));return s;}
 function update(fn){const s=load();fn(s);return save(s);}
 function reset(){localStorage.removeItem(KEY);return load();}
 window.NLStorage={KEY,load,save,update,reset};
})();
