# Arquitectura del Proyecto

Este documento describe la arquitectura y las decisiones de diseño del portfolio de Kristian Cifuentes.

## 📐 Visión General

El proyecto es una **Single Page Application (SPA)** construida con React y Vite, diseñada para mostrar información profesional de manera atractiva y eficiente.

### Principios de Diseño

1. **Simplicidad**: Código limpio y fácil de mantener
2. **Rendimiento**: Optimización de carga y experiencia de usuario
3. **Modularidad**: Componentes reutilizables y desacoplados
4. **Accesibilidad**: Cumplimiento de estándares web
5. **SEO**: Optimización para motores de búsqueda

## 🏗 Arquitectura de Componentes

### Diagrama de Componentes

```
App
├── Header (Navegación)
├── Main
│   ├── About (Sobre Mí)
│   │   ├── Badge (x2 - Redes sociales)
│   │   └── Iconos SVG
│   ├── Projects (Proyectos)
│   │   └── ProjectItem (x3 - Tarjetas de proyecto)
│   ├── Experience (Experiencia)
│   │   └── ItemExperience (x2 - Items de experiencia)
│   ├── Skills (Habilidades)
│   │   └── Tag (x8 - Etiquetas de habilidades)
│   ├── Contact (Contacto)
│   │   ├── reCaptcha
│   │   └── Loader
│   ├── Footer (Pie de página)
│   └── ScrollTop (Botón scroll)
```

### Tipos de Componentes

#### 1. Componentes de Layout

**Propósito**: Estructurar la página principal

- `App.jsx` - Componente raíz que orquesta toda la aplicación
- `Header.jsx` - Barra de navegación sticky
- `Footer.jsx` - Pie de página con información adicional

#### 2. Componentes de Sección

**Propósito**: Representar secciones principales del portfolio

- `About.jsx` - Información personal y profesional
- `Projects.jsx` - Galería de proyectos destacados
- `Experience.jsx` - Historial laboral
- `Skills.jsx` - Tecnologías y habilidades
- `Contact.jsx` - Formulario de contacto

#### 3. Componentes de Presentación

**Propósito**: Elementos reutilizables de UI

- `Badge.jsx` - Insignias para redes sociales
- `Tag.jsx` - Etiquetas de habilidades
- `ProjectItem.jsx` - Tarjeta individual de proyecto
- `ItemExperience.jsx` - Item de experiencia laboral
- `Loader.jsx` - Indicador de carga
- `ScrollTop.jsx` - Botón flotante de scroll

#### 4. Componentes de Iconos

**Propósito**: SVGs encapsulados como componentes

Ubicados en `src/components/icons/`:

- `ComponentGithub.jsx`
- `ComponentLinkedIn.jsx`
- `ComponentCV.jsx`
- `IconHtml.jsx`, `IconCss.jsx`, `IconJavaScript.jsx`
- `IconReact.jsx`, `IconGit.jsx`, etc.

**Ventajas**:

- Fácil reutilización
- Control de props (color, tamaño)
- Mejor rendimiento que imágenes

## 📊 Flujo de Datos

### Patrón de Datos

El proyecto utiliza principalmente **props drilling** para pasar datos, dado que es una aplicación pequeña sin necesidad de gestión de estado compleja.

```
App.jsx
  ↓ (props)
About.jsx ← foto_Portfolio
  ↓ (props)
Badge.jsx ← name, link, svg

Experience.jsx ← svgImg
  ↓ (props + data)
ItemExperience.jsx ← company, date, position, description
```

### Fuentes de Datos

1. **Datos Estáticos en Componentes**

   - Proyectos definidos en `Projects.jsx`
   - Habilidades definidas en `Skills.jsx`

2. **Datos en JSON**

   - Experiencia laboral en `src/helpers/experience.json`

3. **Assets Importados**
   - Imágenes desde `src/assets/img/`
   - PDF del CV desde `src/assets/pdf/`

## 🎨 Sistema de Estilos

### Estrategia de CSS

**CSS Modular por Componente**

- Cada componente tiene su propio archivo CSS
- Nomenclatura BEM-like para clases
- Variables CSS globales en `index.css`

### Estructura de Estilos

```
index.css (Estilos globales)
├── Variables CSS
├── Reset CSS
├── Estilos base
└── Utilidades

Component.css (Estilos específicos)
├── .component (contenedor)
├── .component-element (elementos)
└── .component-modifier (modificadores)
```

### Variables CSS Principales

```css
:root {
  /* Colores */
  --color-primary: ...
  --color-secondary: ...
  --color-text: ...
  --color-background: ...

  /* Espaciado */
  --spacing-sm: ...
  --spacing-md: ...
  --spacing-lg: ...

  /* Tipografía */
  --font-family: 'Maven Pro', sans-serif;
  --font-size-base: ...
  --font-size-lg: ...
}
```

## 🔧 Helpers y Utilidades

### helpHTTP.js

**Propósito**: Abstracción de peticiones HTTP con fetch

**Funcionalidades**:

- Configuración de headers por defecto
- Manejo de errores HTTP
- Soporte para diferentes métodos (GET, POST, PUT, DELETE)
- Abortar peticiones

**Uso**:

```javascript
import { helpHTTP } from './helpers/helpHTTP'

const http = helpHTTP()
http.post(url, { body: data }).then((response) => {
  // Manejar respuesta
})
```

### experience.json

**Propósito**: Datos estructurados de experiencia laboral

**Estructura**:

```json
{
  "Experiencia": [
    {
      "id": number,
      "company": string,
      "date": string,
      "position": string,
      "description": string
    }
  ]
}
```

## 🎯 Patrones de Diseño Utilizados

### 1. Component Composition

Composición de componentes pequeños y reutilizables

```jsx
<About foto={foto_Portfolio}>
  <Badge name='Github' link='...' svg={<ComponentGithub />} />
  <Badge name='LinkedIn' link='...' svg={<ComponentLinkedIn />} />
</About>
```

### 2. Props Validation

Validación de tipos con PropTypes

```jsx
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array
}
```

### 3. Separation of Concerns

Separación clara entre lógica, presentación y estilos

- `.jsx` - Lógica y estructura
- `.css` - Estilos
- `helpers/` - Funciones auxiliares

### 4. Single Responsibility

Cada componente tiene una única responsabilidad

- `Badge` - Solo mostrar una insignia
- `Tag` - Solo mostrar una etiqueta
- `ProjectItem` - Solo mostrar un proyecto

## 🚀 Optimizaciones Implementadas

### 1. Rendimiento

#### Imágenes Optimizadas

- Formato AVIF para mejor compresión
- Fallback a WebP/JPG
- Lazy loading implícito

#### Preconnect

```html
<link rel="preconnect" href="https://i.postimg.cc" />
<link rel="preconnect" href="https://www.google.com" />
```

#### Build Optimization

- Vite con SWC para compilación rápida
- Tree shaking automático
- Code splitting

### 2. SEO

#### Meta Tags

```html
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
```

#### Estructura Semántica

```jsx
<header>
<main>
  <section id="projects">
  <section id="experience">
  <section id="skills">
</main>
<footer>
```

### 3. Accesibilidad

- Atributos `alt` en todas las imágenes
- Atributos `title` en enlaces
- Etiquetas semánticas HTML5
- Navegación por teclado funcional

## 🔐 Seguridad

### reCAPTCHA v2

Implementado en el formulario de contacto para prevenir spam

**Componente**: `src/components/reCaptcha/`

**Flujo**:

1. Usuario completa formulario
2. Valida reCAPTCHA
3. Envía datos si la validación es exitosa

### Validación de Formularios

- Validación en cliente antes de envío
- Sanitización de inputs
- Prevención de inyección de código

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */

/* Mobile: < 768px (por defecto) */

/* Tablet: 768px - 1024px */
@media (min-width: 768px) {
}

/* Desktop: > 1024px */
@media (min-width: 1024px) {
}
```

### Estrategia

1. **Mobile First**: Estilos base para móvil
2. **Progressive Enhancement**: Mejoras para pantallas grandes
3. **Flexbox y Grid**: Layouts flexibles
4. **Viewport Units**: Tamaños relativos

## 🧪 Testing y Calidad

### ESLint

Configuración para mantener código consistente

**Reglas principales**:

- React hooks rules
- React refresh
- Unused variables
- Max warnings: 0

### Manual Testing Checklist

- ✅ Navegación funciona en todas las secciones
- ✅ Formulario de contacto envía correctamente
- ✅ Enlaces externos abren en nueva pestaña
- ✅ Responsive en diferentes dispositivos
- ✅ Imágenes cargan correctamente
- ✅ No hay errores en consola

## 🔄 Ciclo de Desarrollo

### Workflow

```
1. Desarrollo Local (npm run dev)
   ↓
2. Testing Manual
   ↓
3. Linting (npm run lint)
   ↓
4. Build (npm run build)
   ↓
5. Preview (npm run preview)
   ↓
6. Deploy (Cloudflare Pages)
```

### Deployment

**Plataforma**: Cloudflare Pages

**Configuración**:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 16+

**URL**: https://portfolio-kristian-55z.pages.dev/

## 📈 Métricas de Rendimiento

### Objetivos

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

### Herramientas de Medición

- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- WebPageTest

## 🔮 Futuras Mejoras

### Corto Plazo

- [ ] Implementar modo oscuro/claro
- [ ] Añadir animaciones con Framer Motion
- [ ] Implementar i18n (inglés/español)
- [ ] Añadir más proyectos

### Mediano Plazo

- [ ] Blog integrado
- [ ] Sistema de comentarios
- [ ] Analytics integrado
- [ ] PWA (Progressive Web App)

### Largo Plazo

- [ ] CMS headless para gestión de contenido
- [ ] Backend propio para formulario
- [ ] Testing automatizado (Jest, React Testing Library)
- [ ] CI/CD pipeline

## 📚 Referencias

### Tecnologías

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

### Inspiración de Diseño

- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

---

**Última actualización**: Noviembre 2025
**Mantenido por**: Kristian Cifuentes
