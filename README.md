# AIRECO S.A.S. — Landing corporativa

Landing page en español para **AIRECO S.A.S.**, empresa colombiana de ingeniería, suministro, instalación y mantenimiento de sistemas de aire acondicionado y ventilación mecánica.

El proyecto presenta los servicios, sectores atendidos, proceso de trabajo, experiencia técnica, preguntas frecuentes y canales de contacto de AIRECO. La experiencia visual sigue el sistema de marca AIRECO 2026 y está optimizada para escritorio y dispositivos móviles.

> [!IMPORTANT]
> El formulario de contacto actual es demostrativo: valida los campos en el navegador y muestra una confirmación, pero **no envía ni almacena información**. Debe conectarse a un correo, CRM o API antes de publicar la web como canal comercial definitivo.

## Contenido

- [Inicio rápido](#inicio-rápido)
- [Comandos disponibles](#comandos-disponibles)
- [Tecnologías](#tecnologías)
- [Arquitectura del proyecto](#arquitectura-del-proyecto)
- [Dónde editar el contenido](#dónde-editar-el-contenido)
- [Configuración y variables importantes](#configuración-y-variables-importantes)
- [Sistema visual](#sistema-visual)
- [SEO y datos estructurados](#seo-y-datos-estructurados)
- [Formulario de contacto](#formulario-de-contacto)
- [Validación y calidad](#validación-y-calidad)
- [Despliegue en producción](#despliegue-en-producción)
- [Lista de verificación antes de publicar](#lista-de-verificación-antes-de-publicar)
- [Mantenimiento futuro](#mantenimiento-futuro)

## Inicio rápido

### Requisitos

- Node.js `>= 22.13.0`
- npm, incluido con Node.js
- Git, recomendado para controlar cambios y despliegues

### Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd aireco_landing_page
npm ci
```

Para un entorno de desarrollo donde se estén actualizando dependencias puede usarse `npm install`; en CI y despliegues reproducibles se recomienda `npm ci` porque respeta exactamente `package-lock.json`.

### Desarrollo local

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). El servidor incluye recarga automática al modificar los archivos.

### Comprobación antes de entregar

```bash
npm run lint
npm run build
```

### Ejecutar el build localmente

```bash
npm run start
```

Ejecutar `npm run build` antes de `npm run start`.

## Comandos disponibles

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo de Vinext/Vite. |
| `npm run build` | Genera el build de producción en `dist/`. |
| `npm run start` | Ejecuta localmente el build generado. |
| `npm run lint` | Analiza TypeScript, React, accesibilidad y reglas de Next.js. |
| `npm test` | Ejecuta el build y las pruebas actuales. Ver la advertencia de pruebas heredadas. |
| `npm run db:generate` | Genera migraciones de Drizzle si en el futuro se activa D1. |

## Tecnologías

| Capa | Tecnología | Función |
| --- | --- | --- |
| Interfaz | React 19 | Componentes, estado del menú, animaciones de entrada y confirmación del formulario. |
| Estructura web | API de Next.js App Router | `app/layout.tsx`, metadatos, `next/image` y convenciones de rutas. |
| Runtime/build | Vinext `1.0.0-beta.2` | Compatibilidad de Next.js sobre Vite y Cloudflare Workers. |
| Bundler | Vite 8 | Desarrollo local y compilación. |
| Lenguaje | TypeScript 5.9 | Tipado estricto del proyecto. |
| Estilos | Tailwind CSS 4 + CSS propio | Tailwind se carga desde PostCSS; el diseño principal está implementado en `app/globals.css`. |
| Iconos | Lucide React | Iconografía técnica y de interfaz. |
| Hosting | OpenAI Sites / Cloudflare Workers | Empaquetado y ejecución del sitio en producción. |
| Datos opcionales | Drizzle ORM + Cloudflare D1 | Incluidos en el starter, pero no están activos en la landing actual. |
| Calidad | ESLint 9 | Reglas de React, hooks, accesibilidad, TypeScript y Core Web Vitals. |

Las versiones exactas instaladas están fijadas en `package.json` y `package-lock.json`. No actualizar Vinext, Vite, React o el plugin de Cloudflare de forma aislada: comprobar compatibilidad entre ellos y ejecutar lint y build después de cualquier actualización.

## Arquitectura del proyecto

```text
aireco_landing_page/
├── app/
│   ├── globals.css          # Sistema visual, layout, responsive y animaciones
│   ├── layout.tsx           # Metadatos, favicon, Open Graph y JSON-LD
│   ├── page.tsx             # Toda la landing, contenido e interacciones
│   └── chatgpt-auth.ts      # Helpers opcionales de autenticación de Sites
├── public/
│   ├── fonts/               # Montserrat y Poppins en WOFF2
│   ├── aireco-logo*.png     # Logos de marca
│   ├── aireco-isotipo.png   # Isotipo y favicon
│   ├── aireco-project-*.jpg # Fotografías de proyectos/equipo
│   └── og.png               # Imagen social para Open Graph y X
├── worker/index.ts          # Entrada del Cloudflare Worker e imágenes optimizadas
├── build/                   # Plugin que empaqueta metadatos de Sites
├── db/                      # Base preparada para D1/Drizzle; actualmente vacía
├── examples/d1/             # Ejemplo opcional; no forma parte de la landing activa
├── tests/                   # Pruebas heredadas del starter
├── .openai/hosting.json     # Identidad del proyecto y bindings de Sites
├── vite.config.ts           # Vinext, Vite, Cloudflare y bindings locales
├── eslint.config.mjs        # Reglas de calidad y accesibilidad
├── postcss.config.mjs       # Integración de Tailwind CSS
├── tsconfig.json            # TypeScript estricto y alias `@/*`
└── package.json             # Scripts y dependencias
```

`dist/`, `.next/`, `.vinext/`, `.wrangler/` y `node_modules/` son salidas o cachés locales y no deben editarse ni versionarse.

La carpeta `artifacts/` contiene capturas y entregables visuales; no interviene en el funcionamiento ni en el build del sitio.

## Dónde editar el contenido

La landing es actualmente una sola ruta y concentra su contenido en `app/page.tsx`.

| Contenido | Ubicación |
| --- | --- |
| Correo, dirección, teléfonos y WhatsApp | Constante `CONTACT` al inicio de `app/page.tsx`. |
| Servicios | Arreglo `services`. |
| Sectores atendidos | Arreglo `sectors`. |
| Etapas del proceso | Arreglo `process`. |
| Preguntas frecuentes | Arreglo `faqs`. |
| Titulares y textos de secciones | JSX del componente `Home`. |
| Fotografías de proyectos | `public/aireco-project-01.jpg` a `public/aireco-project-05.jpg`. |
| Logos | Versiones vectoriales activas en `public/brand/`; los PNG originales se conservan como respaldo. |
| Título, descripción y previsualización social | `app/layout.tsx`. |
| Estilos y breakpoints | `app/globals.css`. |

Al cambiar teléfonos, correo, dirección o dominio, revisar también `structuredData` en `app/layout.tsx`; esos datos se encuentran tanto en el contenido visible como en el JSON-LD para buscadores.

Las imágenes públicas se referencian desde la raíz, por ejemplo `/aireco-project-01.jpg`. Mantener nombres estables evita enlaces rotos. Si se reemplaza una imagen, conservar una resolución adecuada, optimizar su peso y verificar el texto alternativo correspondiente.

## Configuración y variables importantes

### Estado actual

La landing **no requiere variables de entorno de negocio** para funcionar. No existe un `.env.example` porque no hay API, CRM, correo transaccional ni almacenamiento conectados.

Las siguientes configuraciones sí son relevantes:

| Configuración | Ubicación | Estado |
| --- | --- | --- |
| Datos de contacto | `CONTACT` en `app/page.tsx` | Estáticos en código. |
| Dominio base de metadatos | `metadataBase` en `app/layout.tsx` | `https://aireco-sas.com`. |
| URL del negocio en JSON-LD | `structuredData.url` en `app/layout.tsx` | Actualmente usa `https://www.aireco-sas.com/`; debe unificarse con el dominio canónico elegido. |
| ID del proyecto Sites | `.openai/hosting.json` | Ya asignado; no cambiar ni copiar a otro sitio por accidente. |
| Binding D1 | `.openai/hosting.json` → `d1` | `null`; no hay base de datos activa. |
| Binding R2 | `.openai/hosting.json` → `r2` | `null`; no hay almacenamiento de archivos activo. |
| Logs locales de Wrangler | Scripts de `package.json` y `vite.config.ts` | Se guardan dentro de `.wrangler/`. No son secretos. |

`vite.config.ts` también consulta `CODEX_SANDBOX` para adaptar la observación de archivos dentro de Codex y define internamente `WRANGLER_WRITE_LOGS`, `WRANGLER_LOG_PATH` y `MINIFLARE_REGISTRY_PATH`. Normalmente no es necesario configurarlas manualmente.

### Si se conecta el formulario

Crear un `.env.example` sin valores sensibles y documentar solo los nombres necesarios. Una integración podría requerir, por ejemplo:

```dotenv
# Ejemplos; estas variables todavía no existen en la implementación actual.
CONTACT_FORM_ENDPOINT=
CRM_API_URL=
CRM_API_TOKEN=
CONTACT_NOTIFICATION_EMAIL=
```

Recomendaciones de seguridad:

- Nunca guardar tokens, claves o webhooks reales en Git.
- No exponer secretos con el prefijo `NEXT_PUBLIC_`.
- Procesar el formulario en una ruta de servidor/Worker, no directamente desde el navegador cuando se necesite una credencial.
- Validar y normalizar los datos también en el servidor.
- Añadir protección contra spam y limitación de solicitudes.
- Gestionar las variables de producción como secretos o valores del entorno de Sites.
- Mantener `.env` y `.env.local` fuera de Git; `.gitignore` ya excluye `.env*`.

### D1 y R2 opcionales

La estructura admite Cloudflare D1 y R2, pero la landing no los usa. Activarlos únicamente si existe una necesidad concreta:

- D1: registros, solicitudes o contenido estructurado persistente.
- R2: archivos o imágenes subidos por usuarios/administradores.

Si se activa D1, declarar el binding lógico en `.openai/hosting.json`, definir el esquema en `db/schema.ts`, generar migraciones con `npm run db:generate` y revisar el SQL antes de desplegar. No usar el ejemplo de `examples/d1/` como código de producción sin adaptarlo y probarlo.

## Sistema visual

La fuente de verdad del diseño está en `app/globals.css` y en los activos de `public/`. La identidad actual corresponde al sistema de marca AIRECO 2026.

### Paleta principal

| Token | Color | Uso |
| --- | --- | --- |
| `--yellow` | `#FCEF16` | CTA, acentos, foco y elementos de énfasis. |
| `--steel` | `#2C768B` | Elementos técnicos, estados y contraste secundario. |
| `--graphite` | `#263238` | Fondos oscuros y texto principal. |
| `--white` / `--warm` | `#F2F4F5` | Fondos claros y superficies. |
| `--concrete` | `#888888` | Texto y detalles secundarios. |
| `--muted` | `#4A545B` | Contenido de menor jerarquía. |

### Tipografía

- **Montserrat 700**: titulares y cifras de alto impacto.
- **Poppins 400/700**: cuerpo, navegación, etiquetas y elementos de interfaz.
- Las fuentes están autoalojadas en `public/fonts/`; no dependen de Google Fonts.

### Principios de interfaz

- Superficies planas, geometría técnica y contraste alto.
- Amarillo reservado para acciones y énfasis; azul acero como lenguaje técnico.
- Iconografía de Lucide React.
- Animaciones de entrada con `.reveal` e `IntersectionObserver`.
- Navegación responsive con menú móvil.
- Breakpoints principales en `1100px`, `760px` y `420px`.
- Respeto de `prefers-reduced-motion` y estilos visibles de foco para teclado.

Antes de introducir nuevos colores, sombras o tipografías, reutilizar los tokens existentes. Si se agregan tokens, declararlos en `:root` y evitar colores repetidos sin significado.

> [!NOTE]
> Algunas reglas recientes usan `--technical` y `--aireco-gray`, pero esos tokens aún no están declarados en `:root`. Los navegadores ignoran esas propiedades cuando no hay fallback. Conviene definir ambos tokens o reemplazarlos por tokens existentes en una futura limpieza visual.

## SEO y datos estructurados

`app/layout.tsx` incluye:

- título y descripción globales;
- palabras clave;
- metadatos Open Graph;
- tarjeta de X/Twitter;
- imagen social `public/og.png`;
- iconos de marca;
- idioma `es`;
- JSON-LD de tipo `ProfessionalService`.

Al cambiar marca, dominio, teléfono, dirección o propuesta de valor, actualizar en conjunto los metadatos y el JSON-LD.

Pendientes antes de una publicación pública definitiva:

1. Elegir un único dominio canónico: con `www` o sin `www`.
2. Unificar `metadataBase`, `structuredData.url` y todos los enlaces absolutos.
3. Añadir una URL canónica explícita.
4. Crear `robots.txt`.
5. Crear `sitemap.xml`.
6. Verificar `og.png` y sus dimensiones después de cambios de marca.
7. Conectar enlaces reales para Política de privacidad y Tratamiento de datos.
8. Configurar redirección permanente entre la variante `www` y la variante sin `www`.
9. Validar el JSON-LD con una herramienta de resultados enriquecidos.

## Formulario de contacto

El formulario está implementado como componente cliente en `app/page.tsx`.

Flujo actual:

1. El navegador valida los campos requeridos.
2. `submitForm()` ejecuta `event.preventDefault()`.
3. El estado local `sent` cambia a `true`.
4. Se muestra el mensaje “Solicitud preparada”.

No existe petición HTTP, persistencia, envío de correo ni conexión a CRM. Recargar la página elimina el estado.

Para producción se recomienda:

1. Crear un endpoint de servidor o Worker.
2. Validar el payload en el servidor.
3. Enviar la solicitud al CRM/correo autorizado.
4. Guardar solo los datos necesarios y definir una política de retención.
5. Añadir manejo de errores y estados de carga.
6. Añadir protección contra spam/rate limiting.
7. Registrar eventos de conversión sin exponer datos personales.
8. Mantener el consentimiento de tratamiento de datos y enlazar la política aplicable.

## Validación y calidad

Antes de integrar cambios:

```bash
npm run lint
npm run build
git diff --check
```

Validación manual recomendada:

- Carga inicial sin errores en consola.
- Navegación por anclas y header al hacer scroll.
- Menú móvil: abrir, cerrar y seleccionar una sección.
- CTA de WhatsApp, correo, teléfonos y pagos en línea.
- Formulario con campos válidos e inválidos.
- FAQ con teclado y pantalla táctil.
- Diseño en escritorio, tableta y móvil.
- Contraste, foco visible y navegación completa con teclado.
- Modo `prefers-reduced-motion`.
- Ausencia de imágenes rotas y textos alternativos adecuados.

### Pruebas heredadas

`tests/rendered-html.test.mjs` pertenece al starter original y todavía espera una pantalla de carga y dependencias que ya no representan esta landing. Por lo tanto, `npm test` **no debe considerarse una validación confiable del proyecto actual** hasta reemplazar esas pruebas.

Prioridad futura: crear pruebas que validen el título de AIRECO, el contenido principal, los metadatos, los enlaces críticos y el comportamiento del formulario.

## Despliegue en producción

### Opción recomendada: OpenAI Sites

El proyecto ya está asociado a un Site mediante `.openai/hosting.json`. El flujo recomendado es publicar con Sites desde Codex para que la plataforma conserve el proyecto, empaquete el Worker y gestione el acceso y los valores del entorno.

Preparación local:

```bash
npm ci
npm run lint
npm run build
```

El build genera `dist/`, incluyendo el servidor de Cloudflare Worker y una copia de los metadatos de Sites. Después, solicitar en Codex el despliegue de este proyecto indicando si debe conservarse privado o publicarse con el acceso existente. Para un sitio público o compartido, confirmar el nivel de acceso antes del despliegue.

Puntos importantes:

- Conservar el `project_id` actual de `.openai/hosting.json` para actualizar el mismo Site.
- No guardar secretos dentro de `.openai/hosting.json`; allí solo deben vivir `project_id` y bindings lógicos de D1/R2.
- Configurar valores y secretos de producción mediante Sites.
- Desplegar únicamente después de un build exitoso.
- Verificar el estado final del despliegue y abrir la URL exacta publicada.
- Si se conecta un dominio propio, configurar redirecciones y canonical después de definir la variante oficial.

### Cloudflare por fuera de Sites

El runtime es compatible con Cloudflare Workers, pero este repositorio **no incluye actualmente un `wrangler.jsonc` de despliegue independiente**. Por ello, no se debe asumir que `npx wrangler deploy` funcionará sin preparación adicional.

Para migrar a un despliegue administrado directamente en Cloudflare habría que:

1. Crear y versionar una configuración de Wrangler para el Worker y los assets de `dist/`.
2. Configurar el binding `ASSETS` y la capacidad de transformación de imágenes usada por `worker/index.ts`.
3. Declarar D1/R2 solo si se activan.
4. Configurar secretos y variables en Cloudflare.
5. Ejecutar el build y probar el Worker en un entorno de staging.
6. Configurar dominio, DNS, redirects, caché y observabilidad.

No mezclar el flujo de Sites y un flujo directo de Wrangler sin definir claramente cuál plataforma controla el proyecto de producción.

## Lista de verificación antes de publicar

- [ ] Confirmar todos los teléfonos, correo, dirección y enlace de WhatsApp.
- [ ] Conectar el formulario a un backend real y probar recepción de punta a punta.
- [ ] Publicar y enlazar Política de privacidad y Tratamiento de datos.
- [ ] Elegir el dominio canónico (`www` o sin `www`) y unificar las URLs.
- [ ] Añadir canonical, `robots.txt` y `sitemap.xml`.
- [ ] Reemplazar textos o casos provisionales por información aprobada.
- [ ] Verificar permisos de uso de fotografías, logos y testimonios/casos.
- [ ] Ejecutar lint y build.
- [ ] Probar escritorio y móvil en navegadores actuales.
- [ ] Revisar accesibilidad con teclado y movimiento reducido.
- [ ] Revisar Open Graph, favicon y JSON-LD.
- [ ] Definir analítica y eventos de conversión respetando privacidad.
- [ ] Definir responsable de monitoreo, formularios y actualizaciones.
- [ ] Confirmar el nivel de acceso del Site antes de desplegar.
- [ ] Probar la URL publicada y los canales de contacto reales.

## Mantenimiento futuro

### Cambios de contenido

- Mantener los arreglos de contenido al inicio de `app/page.tsx` mientras la web siga siendo una landing de una sola ruta.
- Si el contenido comienza a cambiar con frecuencia, migrarlo a archivos tipados o a un CMS en vez de aumentar el tamaño de `page.tsx`.
- No publicar cifras, certificaciones, clientes o casos sin aprobación y respaldo verificable.

### Evolución técnica

- Dividir `app/page.tsx` en componentes por sección cuando aumente la complejidad.
- Dividir `app/globals.css` por capas o componentes si continúa creciendo.
- Definir los tokens CSS faltantes `--technical` y `--aireco-gray`.
- Reemplazar las pruebas heredadas por pruebas propias de AIRECO.
- Cambiar el nombre genérico `site-creator-vinext-starter` en `package.json` cuando se formalice el repositorio.
- Implementar monitoreo de errores y disponibilidad en producción.
- Revisar dependencias periódicamente, especialmente Vinext por ser una versión beta.
- Probar el build antes de aceptar actualizaciones automáticas de dependencias.

### Repositorios y copias

Este README corresponde al proyecto original `aireco_landing_page`. Si existe una copia independiente —por ejemplo `aireco_web_page`— tratarla como otro checkout: sincronizar cambios de forma explícita y no asumir que ambos directorios se actualizan automáticamente.

### Revisión periódica sugerida

- Mensual: verificar formulario, teléfonos, WhatsApp, correo y enlaces externos.
- Trimestral: revisar contenido, casos de éxito, dependencias, rendimiento y accesibilidad.
- Después de cada despliegue: comprobar URL, metadatos, formulario, navegación móvil y analítica.
- Después de cambios de marca: actualizar logos, tipografías, tokens, favicon, `og.png` y metadatos en la misma entrega.

## Estado funcional resumido

- Landing de una sola página: activa.
- Responsive y navegación móvil: activos.
- Animaciones y soporte de movimiento reducido: activos.
- SEO social y JSON-LD: implementados parcialmente.
- Formulario con envío real: pendiente.
- Base de datos D1: no activa.
- Almacenamiento R2: no activo.
- Autenticación ChatGPT: helper disponible, no usado por la landing.
- Despliegue directo con Wrangler: no configurado.
- Pruebas automatizadas propias de AIRECO: pendientes.
