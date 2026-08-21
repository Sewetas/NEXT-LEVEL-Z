var CURSOS = window.CURSOS = [
  {
    "id": "matematica",
    "nombre": "Matemática",
    "icon": "∑",
    "color": "violet",
    "desc": "Piensa, calcula y resuelve problemas paso a paso.",
    "temas": [
      {
        "id": "m1",
        "titulo": "Números enteros",
        "tag": "Fundamentos",
        "min": "8 min",
        "contexto": "Mercado de Cusco",
        "intro": "Los números enteros permiten representar cantidades positivas y negativas, como ganancias, deudas o cambios de temperatura.",
        "explicacion": "En la recta numérica, los números a la derecha de 0 son positivos y los de la izquierda son negativos. Para sumar enteros con el mismo signo, suma sus valores y conserva el signo. Con signos distintos, resta valores absolutos y conserva el signo del número con mayor valor absoluto.",
        "ejemplo": "Si una tienda gana S/ 35 y luego paga S/ 20 de transporte, el cambio neto es +35 − 20 = +15.",
        "pregunta": "En una excursión tienes S/ 50 y gastas S/ 18. ¿Cuánto te queda?",
        "opciones": [
          "S/ 28",
          "S/ 32",
          "S/ 38",
          "S/ 68"
        ],
        "correcta": 1,
        "feedback": "Correcto: 50 − 18 = 32.",
        "xp": 80,
        "objetivo": "Reconocer y operar números positivos y negativos en situaciones cotidianas.",
        "conceptos": [
          "positivo",
          "negativo",
          "cero",
          "valor absoluto"
        ],
        "actividad": "Ordena -3, 5, -1 y 2 de menor a mayor.",
        "transferencia": "Un saldo negativo representa una deuda o gasto mayor que el ingreso.",
        "errorComun": "Confundir el signo con el tamaño: -8 es menor que -2."
      },
      {
        "id": "m2",
        "titulo": "Fracciones en la vida real",
        "tag": "Razona",
        "min": "9 min",
        "contexto": "Receta familiar",
        "intro": "Una fracción representa partes iguales de un todo.",
        "explicacion": "El numerador indica cuántas partes tomamos y el denominador en cuántas partes iguales se divide el todo. Para sumar fracciones con el mismo denominador, suma los numeradores.",
        "ejemplo": "Si una receta usa 2/8 de taza de avena y luego 3/8, en total usa 5/8.",
        "pregunta": "¿Cuánto es 2/7 + 3/7?",
        "opciones": [
          "5/14",
          "6/7",
          "5/7",
          "1/7"
        ],
        "correcta": 2,
        "feedback": "Muy bien. Al tener el mismo denominador: 2 + 3 = 5, por eso 5/7.",
        "xp": 90,
        "objetivo": "Representar y sumar fracciones que describen partes de una cantidad.",
        "conceptos": [
          "numerador",
          "denominador",
          "partes iguales",
          "fracciones equivalentes"
        ],
        "actividad": "Dibuja mentalmente una pizza dividida en 8 partes y calcula cuánto representan 3/8 + 2/8.",
        "transferencia": "En una receta, las fracciones permiten ajustar cantidades sin perder proporción.",
        "errorComun": "Sumar denominadores cuando tienen el mismo denominador."
      },
      {
        "id": "m3",
        "titulo": "Proporcionalidad",
        "tag": "Aplica",
        "min": "10 min",
        "contexto": "Transporte urbano",
        "intro": "Dos cantidades son proporcionales cuando mantienen una relación constante.",
        "explicacion": "Puedes usar una regla de tres sencilla. Si 2 pasajes cuestan S/ 3, entonces 4 pasajes cuestan S/ 6 porque duplicamos ambas cantidades.",
        "ejemplo": "3 cuadernos cuestan S/ 12. Cada cuaderno cuesta S/ 4.",
        "pregunta": "Si 5 entradas cuestan S/ 20, ¿cuánto cuestan 8 al mismo precio?",
        "opciones": [
          "S/ 24",
          "S/ 28",
          "S/ 30",
          "S/ 32"
        ],
        "correcta": 3,
        "feedback": "Correcto. Una entrada cuesta 20/5 = 4; 8 × 4 = 32.",
        "xp": 100,
        "objetivo": "Resolver relaciones proporcionales usando una razón constante.",
        "conceptos": [
          "razón",
          "proporción",
          "regla de tres",
          "unidad"
        ],
        "actividad": "Si 4 botellas cuestan S/ 10, calcula el precio de 7 al mismo ritmo.",
        "transferencia": "Comparar precios por kilogramo ayuda a tomar mejores decisiones en un mercado.",
        "errorComun": "Multiplicar cantidades sin comprobar primero el valor por unidad."
      },
      {
        "id": "m4",
        "titulo": "Áreas y perímetros",
        "tag": "Geometría",
        "min": "9 min",
        "contexto": "Espacios escolares",
        "intro": "El perímetro mide el borde de una figura; el área mide la superficie que ocupa.",
        "explicacion": "Para un rectángulo, perímetro = 2(largo + ancho) y área = largo × ancho.",
        "ejemplo": "Un patio de 8 m por 5 m tiene área 40 m² y perímetro 26 m.",
        "pregunta": "¿Cuál es el área de un rectángulo de 9 m por 4 m?",
        "opciones": [
          "13 m²",
          "26 m²",
          "36 m²",
          "45 m²"
        ],
        "correcta": 2,
        "feedback": "Correcto: 9 × 4 = 36 m².",
        "xp": 100,
        "objetivo": "Calcular superficies y bordes de espacios rectangulares.",
        "conceptos": [
          "área",
          "perímetro",
          "largo",
          "ancho"
        ],
        "actividad": "Calcula el área y perímetro de un aula de 7 m por 5 m.",
        "transferencia": "Medir un patio permite planificar pintura, piso o cercado.",
        "errorComun": "Confundir unidades de longitud con unidades cuadradas."
      }
    ]
  },
  {
    "id": "comunicacion",
    "nombre": "Comunicación",
    "icon": "✦",
    "color": "blue",
    "desc": "Comprende textos y comunica tus ideas con claridad.",
    "temas": [
      {
        "id": "c1",
        "titulo": "Idea principal",
        "tag": "Comprensión",
        "min": "7 min",
        "contexto": "Noticias locales",
        "intro": "La idea principal expresa lo más importante que el autor quiere comunicar.",
        "explicacion": "Para encontrarla, pregunta: ¿de qué trata principalmente el texto? Los detalles, ejemplos y datos apoyan esa idea.",
        "ejemplo": "Si un texto explica cómo el transporte sostenible reduce contaminación, esa relación será probablemente la idea central.",
        "pregunta": "¿Qué pregunta ayuda mejor a identificar la idea principal?",
        "opciones": [
          "¿Qué palabra es más larga?",
          "¿De qué trata principalmente?",
          "¿Cuántos párrafos hay?",
          "¿Qué signo aparece más?"
        ],
        "correcta": 1,
        "feedback": "Exacto. La idea principal resume el asunto central del texto.",
        "xp": 80,
        "objetivo": "Identificar la idea que organiza y resume un texto.",
        "conceptos": [
          "tema",
          "idea principal",
          "detalles",
          "propósito"
        ],
        "actividad": "Lee un párrafo y exprésalo en una sola oración sin copiarlo literalmente.",
        "transferencia": "Una noticia local puede tener muchos datos, pero todos giran alrededor de una idea central.",
        "errorComun": "Elegir automáticamente el título como idea principal."
      },
      {
        "id": "c2",
        "titulo": "Inferencias",
        "tag": "Piensa más",
        "min": "8 min",
        "contexto": "Situaciones cotidianas",
        "intro": "Inferir es obtener una conclusión usando pistas del texto y conocimientos previos.",
        "explicacion": "Una inferencia no está escrita literalmente. Debe estar respaldada por evidencias del texto.",
        "ejemplo": "Si lees “Ana salió con paraguas y regresó con los zapatos mojados”, puedes inferir que probablemente llovía.",
        "pregunta": "¿Qué caracteriza a una inferencia válida?",
        "opciones": [
          "Es una opinión sin evidencia",
          "Se basa en pistas y razonamiento",
          "Siempre copia una oración",
          "No necesita contexto"
        ],
        "correcta": 1,
        "feedback": "Correcto. Inferir significa conectar pistas con razonamiento.",
        "xp": 90,
        "objetivo": "Construir conclusiones razonables a partir de pistas explícitas.",
        "conceptos": [
          "pista",
          "evidencia",
          "inferencia",
          "contexto"
        ],
        "actividad": "Escribe qué puedes inferir de una persona que lleva paraguas y zapatos mojados.",
        "transferencia": "Las inferencias ayudan a comprender mensajes que no dicen todo de forma directa.",
        "errorComun": "Confundir una inferencia con una opinión sin evidencia."
      },
      {
        "id": "c3",
        "titulo": "Argumentar una opinión",
        "tag": "Expresión",
        "min": "9 min",
        "contexto": "Vida escolar",
        "intro": "Una opinión se vuelve más sólida cuando incluye razones y evidencias.",
        "explicacion": "Una estructura útil es: postura + razón + evidencia o ejemplo + conclusión.",
        "ejemplo": "“Deberíamos tener más espacios de lectura porque leer mejora la comprensión; por ejemplo, un club semanal permite practicar de forma constante.”",
        "pregunta": "¿Qué elemento hace más sólida una opinión?",
        "opciones": [
          "Una razón respaldada por evidencia",
          "Escribirla en mayúsculas",
          "Usar muchas palabras",
          "Evitar ejemplos"
        ],
        "correcta": 0,
        "feedback": "Bien. Las razones y evidencias permiten sostener una postura.",
        "xp": 100,
        "objetivo": "Defender una postura mediante razones y evidencias.",
        "conceptos": [
          "postura",
          "razón",
          "evidencia",
          "conclusión"
        ],
        "actividad": "Escribe una opinión sobre ampliar el tiempo de lectura y añade dos razones.",
        "transferencia": "En una reunión escolar, una propuesta mejora cuando explica sus beneficios y evidencia.",
        "errorComun": "Usar emociones o ataques personales como sustituto de argumentos."
      },
      {
        "id": "c4",
        "titulo": "Conectores",
        "tag": "Escribe mejor",
        "min": "8 min",
        "contexto": "Historias de Cusco",
        "intro": "Los conectores muestran relaciones entre ideas.",
        "explicacion": "“Porque” expresa causa; “por eso” consecuencia; “sin embargo” contraste; “además” suma información.",
        "ejemplo": "“Estudié con anticipación; por eso, comprendí mejor el tema.”",
        "pregunta": "¿Qué conector expresa contraste?",
        "opciones": [
          "Además",
          "Porque",
          "Sin embargo",
          "Por eso"
        ],
        "correcta": 2,
        "feedback": "Correcto: “sin embargo” introduce una idea que contrasta con la anterior.",
        "xp": 90,
        "objetivo": "Usar conectores para mostrar relaciones lógicas entre ideas.",
        "conceptos": [
          "causa",
          "consecuencia",
          "contraste",
          "adición"
        ],
        "actividad": "Une dos oraciones usando “por eso”, “sin embargo” y “además” donde corresponda.",
        "transferencia": "Al narrar una situación del Cusco, los conectores hacen que la secuencia sea más clara.",
        "errorComun": "Elegir un conector solo porque suena bien sin mirar la relación entre ideas."
      }
    ]
  },
  {
    "id": "ciencia",
    "nombre": "Ciencia y Tecnología",
    "icon": "⌬",
    "color": "green",
    "desc": "Explora fenómenos y explica el mundo con evidencia.",
    "temas": [
      {
        "id": "ct1",
        "titulo": "Método científico",
        "tag": "Investiga",
        "min": "8 min",
        "contexto": "Experimentos escolares",
        "intro": "Investigar científicamente implica observar, preguntar, proponer explicaciones y contrastarlas con evidencia.",
        "explicacion": "Un proceso escolar puede incluir problema, hipótesis, variables, procedimiento, datos, análisis y conclusión.",
        "ejemplo": "Para saber si la luz influye en el crecimiento de una planta, compara grupos manteniendo iguales otras condiciones.",
        "pregunta": "¿Qué hace una hipótesis científica útil?",
        "opciones": [
          "No puede comprobarse",
          "Propone una explicación que puede contrastarse",
          "Es una conclusión definitiva",
          "Evita recoger datos"
        ],
        "correcta": 1,
        "feedback": "Exacto. Una hipótesis debe poder ponerse a prueba con evidencia.",
        "xp": 90,
        "objetivo": "Comprender cómo una pregunta se transforma en una investigación comprobable.",
        "conceptos": [
          "problema",
          "hipótesis",
          "variables",
          "datos",
          "conclusión"
        ],
        "actividad": "Propón una hipótesis sobre cómo cambia el crecimiento de una planta según la luz.",
        "transferencia": "Puedes observar plantas de casa o del colegio y registrar su crecimiento durante varios días.",
        "errorComun": "Presentar la hipótesis como si fuera una conclusión ya demostrada."
      },
      {
        "id": "ct2",
        "titulo": "Ecosistemas",
        "tag": "Ambiente",
        "min": "9 min",
        "contexto": "Valle y montaña",
        "intro": "Un ecosistema integra seres vivos y factores no vivos que interactúan.",
        "explicacion": "Productores, consumidores y descomponedores cumplen funciones relacionadas. El agua, suelo, luz y temperatura también influyen.",
        "ejemplo": "En una zona agrícola, las plantas dependen del suelo y agua; insectos pueden polinizarlas y otros organismos descomponen restos.",
        "pregunta": "¿Cuál es un factor abiótico?",
        "opciones": [
          "Una abeja",
          "Una planta",
          "La temperatura",
          "Un hongo"
        ],
        "correcta": 2,
        "feedback": "Correcto. La temperatura es un factor no vivo del ecosistema.",
        "xp": 90,
        "objetivo": "Explicar cómo los seres vivos interactúan entre sí y con factores no vivos.",
        "conceptos": [
          "ecosistema",
          "biótico",
          "abiótico",
          "productor",
          "consumidor"
        ],
        "actividad": "Clasifica agua, planta, abeja, suelo y temperatura como bióticos o abióticos.",
        "transferencia": "Los ecosistemas de montaña y valle dependen de agua, suelo, clima y relaciones entre especies.",
        "errorComun": "Pensar que un ecosistema está formado solamente por animales y plantas."
      },
      {
        "id": "ct3",
        "titulo": "Materia y cambios",
        "tag": "Química básica",
        "min": "8 min",
        "contexto": "Cocina",
        "intro": "La materia puede cambiar de estado o experimentar transformaciones.",
        "explicacion": "Fusión: sólido a líquido. Evaporación: líquido a gas. Condensación: gas a líquido. Algunos cambios son reversibles y otros generan nuevas sustancias.",
        "ejemplo": "El hielo que se derrite experimenta fusión; el agua que hierve se evapora.",
        "pregunta": "¿Qué cambio ocurre cuando el vapor se convierte en gotas?",
        "opciones": [
          "Fusión",
          "Condensación",
          "Solidificación",
          "Sublimación"
        ],
        "correcta": 1,
        "feedback": "Muy bien: gas a líquido es condensación.",
        "xp": 80,
        "objetivo": "Distinguir cambios de estado y reconocer cuándo ocurre una transformación de la materia.",
        "conceptos": [
          "materia",
          "fusión",
          "evaporación",
          "condensación",
          "solidificación"
        ],
        "actividad": "Describe qué ocurre con un cubo de hielo al dejarlo al sol y luego con el agua al hervir.",
        "transferencia": "En la cocina observamos cambios de estado constantemente.",
        "errorComun": "Confundir evaporación con condensación."
      },
      {
        "id": "ct4",
        "titulo": "Energía y eficiencia",
        "tag": "Tecnología",
        "min": "9 min",
        "contexto": "Hogar y escuela",
        "intro": "La energía se transforma y puede utilizarse de manera más o menos eficiente.",
        "explicacion": "La eficiencia busca obtener el resultado deseado desperdiciando menos energía. Apagar luces innecesarias y aprovechar luz natural son ejemplos cotidianos.",
        "ejemplo": "Si un aula tiene suficiente luz solar, usarla en lugar de encender todas las lámparas puede reducir consumo.",
        "pregunta": "¿Qué acción mejora la eficiencia energética?",
        "opciones": [
          "Encender luces sin necesidad",
          "Dejar equipos conectados siempre",
          "Aprovechar la luz natural",
          "Abrir el refrigerador repetidamente"
        ],
        "correcta": 2,
        "feedback": "Correcto. Aprovechar la luz natural evita un consumo innecesario.",
        "xp": 90,
        "objetivo": "Identificar transformaciones de energía y elegir acciones de uso eficiente.",
        "conceptos": [
          "energía",
          "transformación",
          "consumo",
          "eficiencia"
        ],
        "actividad": "Haz una lista de tres aparatos y describe qué transformación de energía realizan.",
        "transferencia": "En un aula se puede reducir consumo aprovechando luz natural y apagando equipos sin uso.",
        "errorComun": "Creer que ahorrar energía significa dejar de usar toda tecnología."
      }
    ]
  },
  {
    "id": "sociales",
    "nombre": "Ciencias Sociales",
    "icon": "◈",
    "color": "orange",
    "desc": "Comprende tu sociedad, territorio e historia.",
    "temas": [
      {
        "id": "s1",
        "titulo": "Territorio y geografía",
        "tag": "Ubícate",
        "min": "8 min",
        "contexto": "Cusco",
        "intro": "La geografía estudia el espacio y las relaciones entre sociedad y naturaleza.",
        "explicacion": "El territorio incluye elementos naturales y sociales. La ubicación, relieve, clima y actividades humanas influyen en cómo se organiza una región.",
        "ejemplo": "El relieve andino condiciona caminos, agricultura y formas de asentamiento.",
        "pregunta": "¿Qué analiza la geografía humana?",
        "opciones": [
          "Solo minerales",
          "Relaciones entre sociedad y espacio",
          "Solo planetas",
          "Solo animales"
        ],
        "correcta": 1,
        "feedback": "Correcto. Estudia cómo las sociedades ocupan y transforman el espacio.",
        "xp": 90,
        "objetivo": "Explicar cómo el relieve, clima y actividades humanas se relacionan en un territorio.",
        "conceptos": [
          "territorio",
          "relieve",
          "clima",
          "sociedad"
        ],
        "actividad": "Explica cómo una montaña puede influir en caminos y asentamientos.",
        "transferencia": "El relieve andino influye en transporte, agricultura, viviendas y distribución de poblaciones.",
        "errorComun": "Describir un territorio solo por su ubicación sin analizar relaciones."
      },
      {
        "id": "s2",
        "titulo": "Fuentes históricas",
        "tag": "Historia",
        "min": "9 min",
        "contexto": "Memoria local",
        "intro": "Las fuentes permiten investigar el pasado.",
        "explicacion": "Pueden ser escritas, orales, materiales, visuales o audiovisuales. Una fuente debe analizarse considerando autor, fecha, propósito y contexto.",
        "ejemplo": "Una fotografía antigua de una plaza es una fuente visual, pero necesita contexto para interpretarse.",
        "pregunta": "¿Por qué importa conocer el contexto de una fuente?",
        "opciones": [
          "Para hacerla más antigua",
          "Para interpretarla con mayor precisión",
          "Para cambiarla",
          "Para evitar analizarla"
        ],
        "correcta": 1,
        "feedback": "Exacto. El contexto ayuda a entender qué muestra y por qué fue creada.",
        "xp": 90,
        "objetivo": "Analizar fuentes históricas considerando autor, fecha, propósito y contexto.",
        "conceptos": [
          "fuente",
          "autor",
          "fecha",
          "contexto",
          "evidencia"
        ],
        "actividad": "Observa una fotografía antigua e indica qué información puedes obtener y qué no puedes asegurar.",
        "transferencia": "Una fotografía de una plaza de Cusco puede aportar pistas, pero necesita fecha y contexto para interpretarse.",
        "errorComun": "Tomar una fuente como verdad absoluta sin contrastarla."
      },
      {
        "id": "s3",
        "titulo": "Diversidad cultural",
        "tag": "Ciudadanía",
        "min": "8 min",
        "contexto": "Comunidades andinas",
        "intro": "La diversidad cultural implica reconocer distintas formas de vivir, pensar, expresarse y organizarse.",
        "explicacion": "Respetar la diversidad no significa que todas las prácticas deban aceptarse sin crítica; significa reconocer derechos, evitar discriminación y dialogar con respeto.",
        "ejemplo": "Las lenguas originarias forman parte del patrimonio cultural y deben ser valoradas.",
        "pregunta": "¿Qué actitud favorece la convivencia intercultural?",
        "opciones": [
          "Discriminar por costumbres",
          "Escuchar y respetar diferencias",
          "Imponer una cultura",
          "Evitar todo diálogo"
        ],
        "correcta": 1,
        "feedback": "Correcto. El diálogo respetuoso favorece la convivencia.",
        "xp": 90,
        "objetivo": "Reconocer la diversidad cultural como parte de una convivencia basada en derechos y respeto.",
        "conceptos": [
          "diversidad",
          "interculturalidad",
          "respeto",
          "discriminación"
        ],
        "actividad": "Menciona una práctica cultural y explica cómo puede compartirse respetando a los demás.",
        "transferencia": "Las lenguas, festividades, saberes y formas de organización forman parte de la diversidad del entorno.",
        "errorComun": "Confundir respeto cultural con aceptar cualquier conducta sin límites de derechos."
      },
      {
        "id": "s4",
        "titulo": "Ciudadanía y decisiones",
        "tag": "Participa",
        "min": "9 min",
        "contexto": "Municipio escolar",
        "intro": "La ciudadanía implica derechos, responsabilidades y participación en asuntos comunes.",
        "explicacion": "Participar responsablemente supone informarse, escuchar distintas perspectivas, argumentar y evaluar consecuencias.",
        "ejemplo": "Antes de proponer una actividad escolar, puedes identificar necesidades, consultar compañeros y evaluar recursos.",
        "pregunta": "¿Qué acción demuestra participación responsable?",
        "opciones": [
          "Decidir sin escuchar",
          "Informarse y considerar consecuencias",
          "Difundir rumores",
          "Evitar toda responsabilidad"
        ],
        "correcta": 1,
        "feedback": "Muy bien. Una decisión responsable se apoya en información y consideración de consecuencias.",
        "xp": 100,
        "objetivo": "Tomar decisiones responsables considerando información, participación y consecuencias.",
        "conceptos": [
          "ciudadanía",
          "participación",
          "evidencia",
          "consecuencia"
        ],
        "actividad": "Compara dos propuestas para mejorar un espacio escolar y decide cuál apoyar explicando por qué.",
        "transferencia": "La participación escolar puede mejorar una decisión cuando escucha distintas necesidades y evalúa consecuencias.",
        "errorComun": "Decidir por presión del grupo sin revisar información."
      }
    ]
  }
];
window.CURSOS_MAP = Object.fromEntries(CURSOS.map(c=>[c.id,c]));
