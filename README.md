# NEXT LEVEL — MVP educativo completo

Aplicación web educativa estática para estudiantes que pasan de primaria a secundaria. Está construida con HTML5, CSS3 y JavaScript moderno, sin frameworks ni backend.

## Estructura

- `index.html` — Inicio
- `pages/aprender.html` — Cursos y temas
- `pages/juegos.html` — Quizzes
- `pages/retos.html` — Retos contextualizados
- `pages/progreso.html` — Dashboard de progreso
- `pages/perfil.html` — Perfil y preferencias
- `css/` — estilos
- `js/` — lógica de aplicación y almacenamiento
- `data/` — cursos, preguntas, retos e insignias

## Ejecutar en VS Code

1. Descomprime el ZIP.
2. Abre la carpeta `NEXT-LEVEL-COMPLETE` en VS Code.
3. Instala Live Server (Ritwick Dey), si no lo tienes.
4. Abre `index.html`.
5. Clic derecho → `Open with Live Server`.

También puedes abrir `index.html` directamente en el navegador.

## Funcionalidades

- Registro local de estudiante.
- Personalización por cursos de interés.
- 4 cursos y 16 temas completos.
- Explicaciones, ejemplos, contexto y comprobación.
- 24 preguntas para quizzes.
- Quiz mixto y quizzes por curso.
- 12 retos prácticos.
- XP, puntos, niveles y rachas.
- 8 insignias automáticas.
- Dashboard de progreso.
- Recomendaciones según rendimiento.
- Historial de partidas.
- Perfil editable.
- Preferencias.
- Reinicio de progreso.
- Persistencia con LocalStorage.
- Responsive para PC, tablet y celular.

## Reiniciar datos manualmente

Desde Perfil → Reiniciar todo. También puedes borrar la clave `nextLevelStateV3` del almacenamiento local del navegador.

## Importante

La personalización funciona localmente en el navegador. No hay cuentas reales ni servidor. Es intencional: permite presentar un MVP funcional sin depender de backend.
