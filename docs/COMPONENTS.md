# Documentación de Componentes

Esta guía documenta todos los componentes del proyecto, sus props, uso y ejemplos.

## 📋 Índice

- [Componentes de Layout](#componentes-de-layout)
- [Componentes de Sección](#componentes-de-sección)
- [Componentes de Presentación](#componentes-de-presentación)
- [Componentes de Iconos](#componentes-de-iconos)

---

## Componentes de Layout

### App

**Archivo**: `src/App.jsx`

**Descripción**: Componente raíz que orquesta toda la aplicación.

**Props**: Ninguna

**Estructura**:

```jsx
<>
  <Header />
  <main>
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Contact />
    <Footer />
    <ScrollTop />
  </main>
</>
```

**Estilos**: `App.css`

---

### Header

**Archivo**: `src/components/Header.jsx`

**Descripción**: Barra de navegación principal con enlaces a todas las secciones.

**Props**: Ninguna

**Características**:

- Navegación sticky
- Enlaces de scroll suave a secciones
- Responsive

**Estructura**:

```jsx
<header className='header'>
  <nav>
    <a href='#projects'>Proyectos</a>
    <a href='#experience'>Experiencia</a>
    <a href='#skills'>Habilidades</a>
    <a href='#contact'>Contacto</a>
  </nav>
</header>
```

**Estilos**: `Header.css`

---

### Footer

**Archivo**: `src/components/Footer.jsx`

**Descripción**: Pie de página con información de copyright.

**Props**: Ninguna

**Estructura**:

```jsx
<footer className='footer'>
  <p>© 2024 Kristian Cifuentes</p>
</footer>
```

**Estilos**: `Footer.css`

---

## Componentes de Sección

### About

**Archivo**: `src/components/About.jsx`

**Descripción**: Sección "Sobre Mí" con información personal y profesional.

**Props**:

| Prop   | Tipo     | Requerido | Descripción              |
| ------ | -------- | --------- | ------------------------ |
| `foto` | `string` | ✅        | URL de la foto de perfil |

**Uso**:

```jsx
import foto_Portfolio from './assets/img/Portfolio_Foto.avif'

;<About foto={foto_Portfolio} />
```

**Características**:

- Foto de perfil
- Título profesional
- Enlaces a redes sociales (GitHub, LinkedIn)
- Botones de descarga de CV y contacto
- Descripción personal
- Indicador de disponibilidad

**Estructura**:

```jsx
<section className='about'>
  <div className='about-information'>
    <img src={foto} alt='Foto de Kristian Cifuentes' />
    <h2>Desarrollador Web Frontend</h2>
    <Badge name='Github' link='...' svg={<ComponentGithub />} />
    <Badge name='LinkedIn' link='...' svg={<ComponentLinkedIn />} />
    <a href={cv}>Curriculum</a>
    <a href='mailto:...'>Contacto</a>
  </div>
  <div className='about-aboutMe'>
    <h1>Kristian Cifuentes</h1>
    <p>Descripción...</p>
  </div>
</section>
```

**Estilos**: `About.css`

---

### Projects

**Archivo**: `src/components/Projects.jsx`

**Descripción**: Galería de proyectos destacados.

**Props**: Ninguna (datos definidos internamente)

**Datos de Proyecto**:

```javascript
{
  id: number,
  image: string,      // URL de la imagen
  title: string,      // Título del proyecto
  description: string, // Descripción detallada
  linkSite: string,   // URL del sitio en vivo
  linkCode: string    // URL del repositorio
}
```

**Uso**:

```jsx
<Projects />
```

**Proyectos Actuales**:

1. SPA VIDEOGAMES
2. ONLINE STORE WITH REACT
3. KANBAN BOARD APP

**Estructura**:

```jsx
<section id='projects' className='projects'>
  <h2>Proyectos/</h2>
  <div className='projects-container'>
    {projects.map((project) => (
      <ProjectItem
        key={project.id}
        srcImg={project.image}
        title={project.title}
        description={project.description}
        linkSite={project.linkSite}
        linkCode={project.linkCode}
      />
    ))}
  </div>
</section>
```

**Estilos**: `Projects.css`

---

### Experience

**Archivo**: `src/components/Experience.jsx`

**Descripción**: Sección de experiencia laboral.

**Props**:

| Prop     | Tipo      | Requerido | Descripción                    |
| -------- | --------- | --------- | ------------------------------ |
| `svgImg` | `element` | ✅        | Componente SVG para decoración |

**Uso**:

```jsx
import { ComponentExperience } from './components/icons/ComponentExperience'

;<Experience svgImg={<ComponentExperience />} />
```

**Fuente de Datos**: `src/helpers/experience.json`

**Estructura de Datos**:

```json
{
  "Experiencia": [
    {
      "id": 1,
      "company": "Nombre de la empresa",
      "date": "Mes-Año",
      "position": "Cargo",
      "description": "Descripción de responsabilidades"
    }
  ]
}
```

**Estructura**:

```jsx
<section id='experience' className='experience'>
  <h2>Experiencia/</h2>
  <div className='experience-container'>
    {data.Experiencia.map((item) => (
      <ItemExperience
        key={item.id}
        svg={svgImg}
        company={item.company}
        date={item.date}
        position={item.position}
        description={item.description}
      />
    ))}
  </div>
</section>
```

**Estilos**: `Experience.css`

---

### Skills

**Archivo**: `src/components/Skills.jsx`

**Descripción**: Sección de habilidades técnicas.

**Props**: Ninguna (datos definidos internamente)

**Datos de Habilidad**:

```javascript
{
  id: number,
  name: string,    // Nombre de la tecnología
  svg: element     // Componente SVG del icono
}
```

**Uso**:

```jsx
<Skills />
```

**Habilidades Actuales**:

- HTML
- CSS
- JavaScript
- React
- Git
- GitHub
- Tailwind CSS
- React Router

**Estructura**:

```jsx
<section id='skills'>
  <h2>Habilidades/</h2>
  <div className='skills-container'>
    {skills.map((skill) => (
      <Tag key={skill.id} name={skill.name} svg={skill.svg} />
    ))}
  </div>
</section>
```

**Estilos**: `Skills.css`

---

### Contact

**Archivo**: `src/components/Contact.jsx`

**Descripción**: Formulario de contacto con validación y reCAPTCHA.

**Props**: Ninguna

**Características**:

- Validación de campos
- Integración con reCAPTCHA v2
- Indicador de carga
- Mensajes de éxito/error
- Envío por email

**Campos del Formulario**:

- Nombre (requerido)
- Email (requerido, validación de formato)
- Asunto (requerido)
- Mensaje (requerido)

**Estados**:

```javascript
{
  loading: boolean,    // Indica si está enviando
  response: object,    // Respuesta del servidor
  captchaValid: boolean // Validación de reCAPTCHA
}
```

**Estructura**:

```jsx
<section id='contact' className='contact'>
  <h2>Contacto/</h2>
  <form onSubmit={handleSubmit}>
    <input type='text' name='name' required />
    <input type='email' name='email' required />
    <input type='text' name='subject' required />
    <textarea name='message' required />
    <ReCaptcha onChange={handleCaptcha} />
    <button type='submit'>Enviar</button>
  </form>
  {loading && <Loader />}
</section>
```

**Estilos**: `Contact.css`

---

## Componentes de Presentación

### Badge

**Archivo**: `src/components/Badge.jsx`

**Descripción**: Insignia para enlaces a redes sociales.

**Props**:

| Prop   | Tipo      | Requerido | Descripción             |
| ------ | --------- | --------- | ----------------------- |
| `name` | `string`  | ✅        | Nombre de la red social |
| `link` | `string`  | ✅        | URL del perfil          |
| `svg`  | `element` | ✅        | Icono SVG               |

**Uso**:

```jsx
<Badge
  name='Github'
  link='https://github.com/KristianC8'
  svg={<ComponentGithub />}
/>
```

**Estructura**:

```jsx
<a href={link} target='_blank' rel='noopener noreferrer' className='badge'>
  {svg}
  <span>{name}</span>
</a>
```

**Estilos**: `Badge.css`

---

### Tag

**Archivo**: `src/components/Tag.jsx`

**Descripción**: Etiqueta para mostrar habilidades técnicas.

**Props**:

| Prop   | Tipo      | Requerido | Descripción                |
| ------ | --------- | --------- | -------------------------- |
| `name` | `string`  | ✅        | Nombre de la tecnología    |
| `svg`  | `element` | ✅        | Icono SVG de la tecnología |

**Uso**:

```jsx
<Tag name='React' svg={<IconReact />} />
```

**Estructura**:

```jsx
<div className='tag'>
  {svg}
  <span>{name}</span>
</div>
```

**Estilos**: `Tag.css`

---

### ProjectItem

**Archivo**: `src/components/ProjectItem.jsx`

**Descripción**: Tarjeta individual de proyecto.

**Props**:

| Prop          | Tipo     | Requerido | Descripción                   |
| ------------- | -------- | --------- | ----------------------------- |
| `srcImg`      | `string` | ✅        | URL de la imagen del proyecto |
| `title`       | `string` | ✅        | Título del proyecto           |
| `description` | `string` | ✅        | Descripción del proyecto      |
| `linkSite`    | `string` | ✅        | URL del sitio en vivo         |
| `linkCode`    | `string` | ✅        | URL del repositorio           |

**Uso**:

```jsx
<ProjectItem
  srcImg='https://example.com/image.jpg'
  title='Mi Proyecto'
  description='Descripción del proyecto...'
  linkSite='https://proyecto.com'
  linkCode='https://github.com/user/repo'
/>
```

**Estructura**:

```jsx
<article className='project-item'>
  <img src={srcImg} alt={title} />
  <div className='project-info'>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className='project-links'>
      <a href={linkSite} target='_blank'>
        Ver Sitio
      </a>
      <a href={linkCode} target='_blank'>
        Ver Código
      </a>
    </div>
  </div>
</article>
```

**Estilos**: `ProjectItem.css`

---

### ItemExperience

**Archivo**: `src/components/ItemExperience.jsx`

**Descripción**: Item individual de experiencia laboral.

**Props**:

| Prop          | Tipo      | Requerido | Descripción                      |
| ------------- | --------- | --------- | -------------------------------- |
| `svg`         | `element` | ✅        | Icono decorativo                 |
| `company`     | `string`  | ✅        | Nombre de la empresa             |
| `date`        | `string`  | ✅        | Fecha (Mes-Año)                  |
| `position`    | `string`  | ✅        | Cargo desempeñado                |
| `description` | `string`  | ✅        | Descripción de responsabilidades |

**Uso**:

```jsx
<ItemExperience
  svg={<ComponentExperience />}
  company='Empresa XYZ'
  date='Enero-2023'
  position='Desarrollador Frontend'
  description='Responsabilidades...'
/>
```

**Estructura**:

```jsx
<article className='item-experience'>
  {svg}
  <div className='experience-content'>
    <h3>{company}</h3>
    <span className='date'>{date}</span>
    <h4>{position}</h4>
    <p>{description}</p>
  </div>
</article>
```

**Estilos**: `ItemExperience.css`

---

### Loader

**Archivo**: `src/components/Loader.jsx`

**Descripción**: Indicador de carga animado.

**Props**: Ninguna

**Uso**:

```jsx
{
  loading && <Loader />
}
```

**Estructura**:

```jsx
<div className='loader'>
  <div className='spinner'></div>
</div>
```

**Estilos**: `Loader.css`

---

### ScrollTop

**Archivo**: `src/components/ScrollTop.jsx`

**Descripción**: Botón flotante para volver al inicio de la página.

**Props**: Ninguna

**Características**:

- Aparece al hacer scroll
- Animación suave al hacer clic
- Posición fija en la esquina inferior derecha

**Estado**:

```javascript
{
  isVisible: boolean // Muestra/oculta el botón
}
```

**Uso**:

```jsx
<ScrollTop />
```

**Estructura**:

```jsx
<button
  className={`scroll-top ${isVisible ? 'visible' : ''}`}
  onClick={scrollToTop}
  aria-label='Volver arriba'
>
  ↑
</button>
```

**Estilos**: `ScrollTop.css`

---

## Componentes de Iconos

Todos los iconos están ubicados en `src/components/icons/` y son componentes SVG.

### Iconos de Redes Sociales

#### ComponentGithub

**Archivo**: `src/components/icons/ComponentGithub.jsx`

**Descripción**: Icono de GitHub

**Props**: Ninguna (o props estándar de SVG)

**Uso**:

```jsx
import { ComponentGithub } from './icons/ComponentGithub'

;<ComponentGithub />
```

#### ComponentLinkedIn

**Archivo**: `src/components/icons/ComponentLinkedIn.jsx`

**Descripción**: Icono de LinkedIn

**Uso**:

```jsx
import { ComponentLinkedIn } from './icons/ComponentLinkedIn'

;<ComponentLinkedIn />
```

### Iconos de Tecnologías

#### IconHtml

**Archivo**: `src/components/icons/IconHtml.jsx`

**Descripción**: Icono de HTML5

#### IconCss

**Archivo**: `src/components/icons/IconCss.jsx`

**Descripción**: Icono de CSS3

#### IconJavaScript

**Archivo**: `src/components/icons/IconJavaScript.jsx`

**Descripción**: Icono de JavaScript

#### IconReact

**Archivo**: `src/components/icons/IconReact.jsx`

**Descripción**: Icono de React

#### IconGit

**Archivo**: `src/components/icons/IconGit.jsx`

**Descripción**: Icono de Git

#### IconGitHub

**Archivo**: `src/components/icons/IconGitHub.jsx`

**Descripción**: Icono de GitHub (versión para habilidades)

#### IconTailwind

**Archivo**: `src/components/icons/IconTailwind.jsx`

**Descripción**: Icono de Tailwind CSS

#### IconReactRouter

**Archivo**: `src/components/icons/IconReactRouter.jsx`

**Descripción**: Icono de React Router

### Otros Iconos

#### ComponentCV

**Archivo**: `src/components/icons/ComponentCV.jsx`

**Descripción**: Icono de documento/CV

#### ComponetContact

**Archivo**: `src/components/icons/ComponetContact.jsx`

**Descripción**: Icono de contacto/email

#### ComponentExperience

**Archivo**: `src/components/icons/ComponentExperience.jsx`

**Descripción**: Icono decorativo para experiencia

#### IconClick

**Archivo**: `src/components/icons/IconClick.jsx`

**Descripción**: Icono de click/interacción

---

## Helpers y Utilidades

### helpHTTP

**Archivo**: `src/helpers/helpHTTP.js`

**Descripción**: Helper para realizar peticiones HTTP con fetch.

**Exporta**: Función `helpHTTP()`

**Métodos**:

#### get(url, options)

Realiza una petición GET

**Parámetros**:

- `url` (string): URL del endpoint
- `options` (object, opcional): Opciones adicionales

**Retorna**: Promise

**Ejemplo**:

```javascript
import { helpHTTP } from './helpers/helpHTTP'

const http = helpHTTP()

http.get('https://api.example.com/data').then((response) => {
  if (!response.err) {
    console.log(response)
  }
})
```

#### post(url, options)

Realiza una petición POST

**Parámetros**:

- `url` (string): URL del endpoint
- `options` (object): Debe incluir `body` con los datos

**Ejemplo**:

```javascript
const data = { name: 'John', email: 'john@example.com' }

http
  .post('https://api.example.com/submit', {
    body: data,
    headers: { 'Content-Type': 'application/json' }
  })
  .then((response) => {
    console.log(response)
  })
```

#### put(url, options)

Realiza una petición PUT

#### del(url, options)

Realiza una petición DELETE

**Características**:

- Manejo automático de errores HTTP
- Configuración de headers por defecto
- Soporte para AbortController
- Conversión automática de body a JSON

---

## Convenciones de Nomenclatura

### Componentes

- **PascalCase**: `MyComponent.jsx`
- **Exportación nombrada**: `export const MyComponent = () => {}`

### Archivos CSS

- **Mismo nombre que el componente**: `MyComponent.css`
- **Clases en kebab-case**: `.my-component`

### Props

- **camelCase**: `myProp`, `isVisible`, `onClick`

### Constantes

- **UPPER_SNAKE_CASE**: `API_URL`, `MAX_ITEMS`

### Funciones

- **camelCase**: `handleClick`, `fetchData`

---

## Buenas Prácticas

### 1. Validación de Props

Siempre usa PropTypes para validar props:

```jsx
import PropTypes from 'prop-types'

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  onClick: PropTypes.func
}
```

### 2. Destructuración de Props

Destructura props en los parámetros:

```jsx
export const MyComponent = ({ title, description }) => {
  // ...
}
```

### 3. Atributos de Accesibilidad

Incluye atributos para accesibilidad:

```jsx
<button aria-label='Cerrar modal' onClick={handleClose}>
  ×
</button>
```

### 4. Enlaces Externos

Usa `target="_blank"` con `rel="noopener noreferrer"`:

```jsx
<a href='https://example.com' target='_blank' rel='noopener noreferrer'>
  Enlace
</a>
```

### 5. Optimización de Imágenes

Usa formatos modernos y atributos alt:

```jsx
<img src='image.avif' alt='Descripción significativa' loading='lazy' />
```

---

## Ejemplos de Uso Completo

### Crear una Nueva Sección

```jsx
// 1. Crear el componente
// src/components/NewSection.jsx
import './NewSection.css'

export const NewSection = () => {
  return (
    <section id="new-section" className="new-section">
      <h2>Nueva Sección/</h2>
      <div className="new-section-content">
        {/* Contenido */}
      </div>
    </section>
  )
}

// 2. Crear los estilos
// src/components/NewSection.css
.new-section {
  padding: 4rem 2rem;
}

.new-section-content {
  max-width: 1200px;
  margin: 0 auto;
}

// 3. Importar en App.jsx
import { NewSection } from './components/NewSection'

function App() {
  return (
    <>
      <Header />
      <main>
        {/* ... otras secciones */}
        <NewSection />
      </main>
    </>
  )
}
```

### Añadir un Nuevo Proyecto

```jsx
// En Projects.jsx
const projects = [
  // ... proyectos existentes
  {
    id: 4,
    image: 'https://example.com/new-project.jpg',
    title: 'NUEVO PROYECTO',
    description: 'Descripción del nuevo proyecto...',
    linkSite: 'https://nuevo-proyecto.com',
    linkCode: 'https://github.com/user/nuevo-proyecto'
  }
]
```

### Añadir una Nueva Habilidad

```jsx
// 1. Crear el icono SVG
// src/components/icons/IconNewTech.jsx
export const IconNewTech = () => <svg viewBox='0 0 24 24'>{/* SVG path */}</svg>

// 2. Añadir a Skills.jsx
import { IconNewTech } from './icons/IconNewTech'

const skills = [
  // ... habilidades existentes
  {
    id: 9,
    name: 'Nueva Tecnología',
    svg: <IconNewTech />
  }
]
```

---

**Última actualización**: Noviembre 2025
