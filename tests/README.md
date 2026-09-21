# Pruebas locales de Mis Gastos

Requisitos: Node.js 22 o posterior y Chrome/Chromium instalado. No se usan cuentas,
credenciales reales, SQL ni llamadas a Supabase. No se necesitan paquetes npm.

```bash
node --check app.js
node --check service-worker.js
node tests/service-worker.test.cjs
node tests/run-browser.cjs
```

El ejecutor de navegador usa `/usr/bin/google-chrome`. Para otro ejecutable:

```bash
CHROME_BIN=/ruta/a/chromium node tests/run-browser.cjs
```

Las suites de categorías, distribución por método y reset conservan las pruebas
funcionales de las fases anteriores. `regressions.test.js` añade cambios de sesión
con respuestas tardías, escrituras pendientes, doble envío, paginación por debajo
y por encima del límite de 1.000 filas, métodos históricos y ajustes accesibles.

El navegador ejecuta todas las suites con viewports de 390 y 1440 píxeles.
Capturas y resultados se guardan en un directorio temporal cuya ruta se imprime.
Se pueden seleccionar suites: `node tests/run-browser.cjs payments regressions`.

El HTML de prueba incorpora los archivos del proyecto con un cliente Supabase y
Chart.js simulados. La única sustitución del código de aplicación intercepta la
recarga de página para comprobar el éxito del reset sin perder las aserciones.
El service worker se prueba por separado con Fetch/Response y Cache Storage
simulado, incluyendo fallos HTTP, red ausente y cachés de otras aplicaciones.

Quedan para la comprobación manual la entrega de correos, las políticas reales de
Supabase, la recarga con sesión persistida y la actualización de una PWA instalada.
