window.INSIGNIAS = [
 {id:'primer-paso',icon:'🏆',nombre:'Primer paso',desc:'Completa tu primera actividad.',cond:s=>s.stats.actividades>=1},
 {id:'explorador',icon:'📚',nombre:'Explorador',desc:'Completa 4 temas de aprendizaje.',cond:s=>s.stats.temas>=4},
 {id:'racha',icon:'🔥',nombre:'Racha',desc:'Mantén una racha de 3 días.',cond:s=>s.racha>=3},
 {id:'matematico',icon:'🧠',nombre:'Cerebro matemático',desc:'Obtén 80% o más en Matemática.',cond:s=>(s.progreso.matematica||0)>=80},
 {id:'comunicador',icon:'✍️',nombre:'Gran comunicador',desc:'Obtén 80% o más en Comunicación.',cond:s=>(s.progreso.comunicacion||0)>=80},
 {id:'cientifico',icon:'🔬',nombre:'Joven científico',desc:'Completa 3 actividades de Ciencia.',cond:s=>s.stats.porCurso.ciencia>=3},
 {id:'entorno',icon:'🌎',nombre:'Conoce tu entorno',desc:'Completa 3 retos contextualizados.',cond:s=>s.stats.retos>=3},
 {id:'nivel3',icon:'🚀',nombre:'Siguiente nivel',desc:'Alcanza el nivel 3.',cond:s=>s.nivel>=3}
];
