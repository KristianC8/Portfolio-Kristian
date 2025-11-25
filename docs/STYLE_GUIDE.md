# Guía de Estilo de Código

Esta guía establece las convenciones de código para mantener consistencia en el proyecto.

## 📋 Tabla de Contenidos

- [JavaScript/React](#javascriptreact)
- [CSS](#css)
- [Estructura de Archivos](#estructura-de-archivos)
- [Nomenclatura](#nomenclatura)
- [Comentarios](#comentarios)
- [Imports](#imports)
- [Buenas Prácticas](#buenas-prácticas)

---

## JavaScript/React

### Componentes Funcionales

**✅ Hacer**: Usar componentes funcionales con hooks

```jsx
export const MiComponente = ({ titulo, descripcion }) => {
  const [estado, setEstado] = useState(false)

  return (
    <div className='mi-componente'>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  )
}
```

**❌ No hacer**: Usar componentes de clase

```jsx
// Evitar
class MiComponente extends React.Component {
  render() {
    return <div>...</div>
  }
}
```

### Exportaciones

**✅ Hacer**: Usar exportaciones nombradas

```jsx
export const Header = () => {
  // ...
}
```

**❌ No hacer**: Usar exportaciones por defecto

```jsx
// Evitar
export default function Header() {
  // ...
}
```

**Razón**: Las exportaciones nombradas facilitan el refactoring y el autocompletado.

### Destructuración de Props

**✅ Hacer**: Destructurar props en los parámetros

```jsx
export const Badge = ({ name, link, svg }) => {
  return (
    <a href={link}>
      {svg}
      <span>{name}</span>
    </a>
  )
}
```

**❌ No hacer**: Acceder a props directamente

```jsx
// Evitar
export const Badge = (props) => {
  return (
    <a href={props.link}>
      {props.svg}
      <span>{props.name}</span>
    </a>
  )
}
```

### PropTypes

**✅ Hacer**: Siempre validar props con PropTypes

```jsx
import PropTypes from 'prop-types'

export const ProjectItem = ({ title, description, linkSite }) => {
  // ...
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkSite: PropTypes.string.isRequired
}
```

**Tipos comunes**:

```jsx
PropTypes.string // String
PropTypes.number // Number
PropTypes.bool // Boolean
PropTypes.array // Array
PropTypes.object // Object
PropTypes.func // Function
PropTypes.element // React element
PropTypes.node // Cualquier cosa renderizable
PropTypes.string.isRequired // Requerido
```

### Hooks

**✅ Hacer**: Declarar hooks al inicio del componente

```jsx
export const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    // ...
  }, [])

  return (
    // ...
  )
}
```

**❌ No hacer**: Hooks condicionales o en loops

```jsx
// ❌ NUNCA hacer esto
if (condition) {
  const [state, setState] = useState(false)
}
```

### Event Handlers

**✅ Hacer**: Nombrar handlers con prefijo `handle`

```jsx
export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // ...
  }

  const handleChange = (e) => {
    // ...
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
    </form>
  )
}
```

### Condicionales en JSX

**✅ Hacer**: Usar operador ternario o AND lógico

```jsx
// Operador ternario
{
  isLoading ? <Loader /> : <Content />
}

// AND lógico
{
  isVisible && <Component />
}
```

**❌ No hacer**: Usar if-else dentro de JSX

```jsx
// Evitar
{
  if (isLoading) {
    return <Loader />
  } else {
    return <Content />
  }
}
```

### Mapeo de Arrays

**✅ Hacer**: Siempre incluir key única

```jsx
{
  projects.map((project) => (
    <ProjectItem
      key={project.id}
      title={project.title}
      description={project.description}
    />
  ))
}
```

**❌ No hacer**: Usar índice como key (si el orden puede cambiar)

```jsx
// Evitar si el orden de items puede cambiar
{
  projects.map((project, index) => <ProjectItem key={index} {...project} />)
}
```

### Fragmentos

**✅ Hacer**: Usar fragmentos cortos cuando no necesites key

```jsx
return (
  <>
    <Header />
    <Main />
    <Footer />
  </>
)
```

**✅ Hacer**: Usar Fragment completo cuando necesites key

```jsx
return (
  <React.Fragment key={item.id}>
    <Component />
  </React.Fragment>
)
```

---

## CSS

### Nomenclatura de Clases

**✅ Hacer**: Usar kebab-case y prefijos descriptivos

```css
/* Componente base */
.project-item {
  /* ... */
}

/* Elementos del componente */
.project-item-title {
  /* ... */
}

.project-item-description {
  /* ... */
}

/* Modificadores */
.project-item--featured {
  /* ... */
}
```

**❌ No hacer**: camelCase o snake_case en CSS

```css
/* Evitar */
.projectItem {
}
.project_item {
}
```

### Organización de Propiedades

**✅ Hacer**: Agrupar propiedades por categoría

```css
.mi-componente {
  /* Posicionamiento */
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;

  /* Box model */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem;
  margin: 0 auto;

  /* Tipografía */
  font-family: var(--font-family);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text);

  /* Visual */
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Animación */
  transition: all 0.3s ease;
}
```

### Variables CSS

**✅ Hacer**: Usar variables para valores reutilizables

```css
:root {
  --color-primary: #3b82f6;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --border-radius: 8px;
}

.card {
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
}
```

**❌ No hacer**: Hardcodear valores repetidos

```css
/* Evitar */
.card {
  padding: 1rem;
  border-radius: 8px;
}

.button {
  padding: 1rem;
  border-radius: 8px;
}
```

### Media Queries

**✅ Hacer**: Mobile First approach

```css
/* Estilos base (móvil) */
.header {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .header {
    padding: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .header {
    padding: 2rem;
  }
}
```

**❌ No hacer**: Desktop First

```css
/* Evitar */
.header {
  padding: 2rem;
}

@media (max-width: 1024px) {
  .header {
    padding: 1.5rem;
  }
}
```

### Selectores

**✅ Hacer**: Usar clases específicas

```css
.project-item-title {
  font-size: 1.5rem;
}
```

**❌ No hacer**: Selectores demasiado específicos o genéricos

```css
/* Evitar - demasiado específico */
div.project-item > div > h3.title {
  font-size: 1.5rem;
}

/* Evitar - demasiado genérico */
h3 {
  font-size: 1.5rem;
}
```

---

## Estructura de Archivos

### Organización de Componentes

```
src/
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── About.jsx
│   ├── About.css
│   └── icons/
│       ├── IconReact.jsx
│       └── IconGit.jsx
├── helpers/
│   ├── helpHTTP.js
│   └── experience.json
├── hooks/
│   └── useCustomHook.js
├── assets/
│   ├── img/
│   └── pdf/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### Nombres de Archivos

**Componentes React**:

- PascalCase: `Header.jsx`, `ProjectItem.jsx`
- Extensión `.jsx` para componentes

**Archivos CSS**:

- Mismo nombre que el componente: `Header.css`

**Helpers/Utilidades**:

- camelCase: `helpHTTP.js`, `formatDate.js`

**Archivos de datos**:

- camelCase: `experience.json`, `projects.json`

---

## Nomenclatura

### Variables

**✅ Hacer**: camelCase descriptivo

```javascript
const userName = 'John'
const isLoading = false
const projectList = []
const maxRetries = 3
```

**❌ No hacer**: Nombres cortos o confusos

```javascript
// Evitar
const n = 'John'
const flag = false
const arr = []
const x = 3
```

### Constantes

**✅ Hacer**: UPPER_SNAKE_CASE para constantes globales

```javascript
const API_URL = 'https://api.example.com'
const MAX_ITEMS = 10
const DEFAULT_TIMEOUT = 5000
```

### Funciones

**✅ Hacer**: camelCase con verbo descriptivo

```javascript
const fetchData = () => {}
const handleClick = () => {}
const validateEmail = () => {}
const formatDate = () => {}
```

**❌ No hacer**: Nombres vagos

```javascript
// Evitar
const doStuff = () => {}
const process = () => {}
const data = () => {}
```

### Componentes

**✅ Hacer**: PascalCase

```javascript
export const Header = () => {}
export const ProjectItem = () => {}
export const IconReact = () => {}
```

### Booleanos

**✅ Hacer**: Prefijos is/has/should

```javascript
const isVisible = true
const hasError = false
const shouldUpdate = true
const canEdit = false
```

---

## Comentarios

### Cuándo Comentar

**✅ Hacer**: Comentar código complejo o no obvio

```javascript
// Calcular el promedio ponderado de las calificaciones
const weightedAverage =
  scores.reduce((acc, score, index) => {
    return acc + score * weights[index]
  }, 0) / totalWeight
```

**✅ Hacer**: Documentar funciones complejas

```javascript
/**
 * Envía un email de contacto
 * @param {Object} formData - Datos del formulario
 * @param {string} formData.name - Nombre del remitente
 * @param {string} formData.email - Email del remitente
 * @param {string} formData.message - Mensaje
 * @returns {Promise<Object>} Respuesta del servidor
 */
const sendEmail = async (formData) => {
  // ...
}
```

**❌ No hacer**: Comentar código obvio

```javascript
// Evitar
// Incrementar contador
counter++

// Establecer loading a true
setLoading(true)
```

### Comentarios TODO

**✅ Hacer**: Usar formato estándar

```javascript
// TODO: Implementar validación de email
// FIXME: Corregir bug en el scroll
// HACK: Solución temporal hasta refactorizar
// NOTE: Este código es necesario por compatibilidad
```

---

## Imports

### Orden de Imports

**✅ Hacer**: Agrupar y ordenar imports

```javascript
// 1. Imports de React/librerías externas
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// 2. Imports de componentes
import { Header } from './components/Header'
import { Footer } from './components/Footer'

// 3. Imports de helpers/utilidades
import { helpHTTP } from './helpers/helpHTTP'

// 4. Imports de assets
import logo from './assets/img/logo.svg'

// 5. Imports de estilos
import './App.css'
```

### Imports Absolutos vs Relativos

**✅ Hacer**: Usar imports relativos para archivos cercanos

```javascript
// Mismo directorio o subdirectorio
import { Badge } from './Badge'
import { IconReact } from './icons/IconReact'
```

**✅ Hacer**: Considerar alias para imports profundos (configurar en vite.config.js)

```javascript
// Con alias configurado
import { helpHTTP } from '@/helpers/helpHTTP'
import { Header } from '@/components/Header'
```

---

## Buenas Prácticas

### DRY (Don't Repeat Yourself)

**✅ Hacer**: Extraer lógica repetida

```javascript
// Crear helper reutilizable
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('es-ES')
}

// Usar en múltiples lugares
<span>{formatDate(project.date)}</span>
<span>{formatDate(experience.date)}</span>
```

**❌ No hacer**: Duplicar código

```javascript
// Evitar
<span>{new Date(project.date).toLocaleDateString('es-ES')}</span>
<span>{new Date(experience.date).toLocaleDateString('es-ES')}</span>
```

### Single Responsibility

**✅ Hacer**: Un componente, una responsabilidad

```javascript
// ✅ Componente enfocado
export const Badge = ({ name, link, svg }) => {
  return (
    <a href={link} className='badge'>
      {svg}
      <span>{name}</span>
    </a>
  )
}

// ✅ Otro componente enfocado
export const Tag = ({ name, svg }) => {
  return (
    <div className='tag'>
      {svg}
      <span>{name}</span>
    </div>
  )
}
```

**❌ No hacer**: Componente que hace demasiado

```javascript
// Evitar - componente que maneja múltiples responsabilidades
export const SocialAndSkills = ({ socials, skills, projects }) => {
  // Demasiadas responsabilidades
}
```

### Accesibilidad

**✅ Hacer**: Incluir atributos de accesibilidad

```javascript
<button
  aria-label="Cerrar modal"
  onClick={handleClose}
>
  ×
</button>

<img
  src={photo}
  alt="Foto de perfil de Kristian Cifuentes"
/>

<a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  title="Ver proyecto en GitHub"
>
  Ver código
</a>
```

### Performance

**✅ Hacer**: Optimizar renders

```javascript
// Memoizar valores calculados
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data)
}, [data])

// Memoizar callbacks
const handleClick = useCallback(() => {
  doSomething(id)
}, [id])
```

**✅ Hacer**: Lazy loading de imágenes

```javascript
<img src={image} alt={alt} loading='lazy' />
```

### Seguridad

**✅ Hacer**: Sanitizar inputs del usuario

```javascript
const handleSubmit = (e) => {
  e.preventDefault()

  // Validar y sanitizar datos
  const sanitizedData = {
    name: DOMPurify.sanitize(formData.name),
    email: validateEmail(formData.email),
    message: DOMPurify.sanitize(formData.message)
  }

  sendData(sanitizedData)
}
```

**✅ Hacer**: Usar rel="noopener noreferrer" en enlaces externos

```javascript
<a href={externalLink} target='_blank' rel='noopener noreferrer'>
  Enlace externo
</a>
```

---

## Herramientas

### ESLint

El proyecto usa ESLint para mantener código consistente.

**Ejecutar linter**:

```bash
npm run lint
```

**Auto-fix**:

```bash
npm run lint -- --fix
```

### Prettier (Opcional)

Si quieres usar Prettier:

```bash
npm install -D prettier
```

`.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

---

## Checklist de Código Limpio

Antes de hacer commit, verifica:

- [ ] Nombres de variables/funciones son descriptivos
- [ ] No hay código comentado innecesario
- [ ] PropTypes están definidos
- [ ] Imports están organizados
- [ ] No hay console.logs olvidados
- [ ] Código está formateado consistentemente
- [ ] No hay warnings de ESLint
- [ ] Componentes tienen una sola responsabilidad
- [ ] CSS está organizado y sin duplicados
- [ ] Atributos de accesibilidad están presentes

---

**Mantener código limpio es responsabilidad de todos. ¡Gracias por seguir estas guías! 🚀**
