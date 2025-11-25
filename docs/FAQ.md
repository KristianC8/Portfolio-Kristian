# Preguntas Frecuentes (FAQ)

Respuestas a las preguntas más comunes sobre el proyecto.

## 📋 Tabla de Contenidos

- [General](#general)
- [Instalación y Configuración](#instalación-y-configuración)
- [Desarrollo](#desarrollo)
- [Componentes](#componentes)
- [Estilos](#estilos)
- [Despliegue](#despliegue)
- [Problemas Comunes](#problemas-comunes)
- [Personalización](#personalización)

---

## General

### ¿Qué es este proyecto?

Es un portfolio personal desarrollado con React y Vite que muestra proyectos, experiencia laboral, habilidades técnicas y un formulario de contacto. Está optimizado para rendimiento, SEO y accesibilidad.

### ¿Puedo usar este proyecto como plantilla?

Sí, el proyecto está bajo licencia MIT. Puedes usarlo como base para tu propio portfolio. Solo asegúrate de:

- Cambiar la información personal
- Actualizar los proyectos
- Modificar los enlaces a redes sociales
- Personalizar los estilos según tu preferencia

### ¿Qué tecnologías se utilizan?

- **React 18.2.0** - Framework de UI
- **Vite 7.2.1** - Build tool
- **CSS3** - Estilos (Vanilla CSS, sin frameworks)
- **PropTypes** - Validación de tipos
- **ESLint** - Linter de código

### ¿Por qué Vite en lugar de Create React App?

Vite ofrece:

- ⚡ Inicio de servidor instantáneo
- 🔥 Hot Module Replacement (HMR) ultra rápido
- 📦 Build optimizado con Rollup
- 🎯 Mejor rendimiento en desarrollo
- 🔧 Configuración más simple

---

## Instalación y Configuración

### ¿Qué versión de Node.js necesito?

Node.js 16 o superior. Recomendamos usar la versión LTS más reciente.

Verificar versión:

```bash
node --version
```

### ¿Puedo usar yarn en lugar de npm?

Sí, el proyecto es compatible con yarn:

```bash
# Instalar dependencias
yarn install

# Iniciar desarrollo
yarn dev

# Build
yarn build
```

### ¿Cómo configuro el proyecto por primera vez?

```bash
# 1. Clonar el repositorio
git clone https://github.com/KristianC8/Portfolio-Kristian.git

# 2. Entrar al directorio
cd project-portfolio

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

### ¿Necesito configurar variables de entorno?

No es estrictamente necesario para desarrollo local. Las variables de entorno son opcionales y se usan principalmente para:

- reCAPTCHA site key (si quieres cambiarla)
- API endpoints (si añades backend propio)
- Analytics IDs

---

## Desarrollo

### ¿Cómo inicio el servidor de desarrollo?

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:5173`

### ¿Cómo cambio el puerto de desarrollo?

En `package.json`, modifica el script:

```json
{
  "scripts": {
    "dev": "vite --port 3000"
  }
}
```

O usa la flag directamente:

```bash
npm run dev -- --port 3000
```

### ¿Cómo hago un build de producción?

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

### ¿Cómo previsualizo el build de producción?

```bash
npm run preview
```

### ¿Cómo ejecuto el linter?

```bash
npm run lint
```

Para auto-fix de errores:

```bash
npm run lint -- --fix
```

### ¿Puedo usar TypeScript?

El proyecto actualmente usa JavaScript. Para migrar a TypeScript:

1. Instalar dependencias:

```bash
npm install -D typescript @types/react @types/react-dom
```

2. Renombrar archivos `.jsx` a `.tsx`

3. Crear `tsconfig.json`

4. Actualizar imports y añadir tipos

---

## Componentes

### ¿Cómo añado un nuevo componente?

1. Crear archivo en `src/components/`:

```jsx
// src/components/MiComponente.jsx
import './MiComponente.css'
import PropTypes from 'prop-types'

export const MiComponente = ({ titulo }) => {
  return (
    <div className='mi-componente'>
      <h2>{titulo}</h2>
    </div>
  )
}

MiComponente.propTypes = {
  titulo: PropTypes.string.isRequired
}
```

2. Crear archivo CSS:

```css
/* src/components/MiComponente.css */
.mi-componente {
  padding: 2rem;
}
```

3. Importar en `App.jsx`:

```jsx
import { MiComponente } from './components/MiComponente'

function App() {
  return (
    <>
      <MiComponente titulo='Hola' />
    </>
  )
}
```

### ¿Por qué usar exportación nombrada en lugar de default?

Las exportaciones nombradas ofrecen:

- ✅ Mejor autocompletado en IDEs
- ✅ Refactoring más seguro
- ✅ Nombres consistentes en imports
- ✅ Tree shaking más efectivo

### ¿Debo usar PropTypes o TypeScript?

El proyecto usa PropTypes. Son suficientes para validación básica. TypeScript ofrece más seguridad de tipos pero requiere más configuración.

---

## Estilos

### ¿Por qué Vanilla CSS en lugar de Tailwind o CSS-in-JS?

Razones:

- 🎯 Control total sobre los estilos
- 📦 Bundle más pequeño
- 🎨 Mejor para diseños únicos
- 📚 Más fácil de aprender para principiantes
- 🔧 Sin dependencias adicionales

### ¿Cómo funcionan las variables CSS?

Las variables globales están en `src/index.css`:

```css
:root {
  --color-primary: #3b82f6;
  --spacing-md: 1rem;
}
```

Uso:

```css
.mi-clase {
  color: var(--color-primary);
  padding: var(--spacing-md);
}
```

### ¿Puedo usar Tailwind CSS?

Sí, puedes instalarlo:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Pero tendrías que refactorizar todos los estilos existentes.

### ¿Cómo organizo los estilos?

Cada componente tiene su propio archivo CSS:

```
src/
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── About.jsx
│   └── About.css
```

Estilos globales van en `src/index.css`

### ¿Cómo hago el diseño responsive?

Usa media queries en los archivos CSS:

```css
/* Mobile first */
.mi-componente {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .mi-componente {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .mi-componente {
    padding: 3rem;
  }
}
```

---

## Despliegue

### ¿Dónde está desplegado actualmente?

En Cloudflare Pages: https://portfolio-kristian-55z.pages.dev/

### ¿Cuál es la mejor plataforma para desplegar?

Depende de tus necesidades:

- **Cloudflare Pages**: Mejor rendimiento global, CDN ultra-rápido
- **Netlify**: Excelente DX, muchas integraciones
- **Vercel**: Perfecto para proyectos React/Next.js
- **GitHub Pages**: Gratis y simple, ideal para proyectos personales

### ¿El despliegue es automático?

Sí, con Cloudflare Pages, Netlify o Vercel, cada push a `main` despliega automáticamente.

### ¿Cómo configuro un dominio personalizado?

Cada plataforma tiene su proceso:

**Cloudflare Pages**:

1. Ve a Custom domains
2. Añade tu dominio
3. Configura DNS según las instrucciones

**Netlify**:

1. Domain settings → Add custom domain
2. Configura DNS

**Vercel**:

1. Settings → Domains
2. Añade dominio y configura DNS

### ¿Necesito configurar SSL?

No, todas las plataformas modernas (Cloudflare, Netlify, Vercel) incluyen SSL automático y gratuito.

---

## Problemas Comunes

### El servidor de desarrollo no inicia

**Solución**:

```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Las imágenes no cargan

**Problema**: Rutas incorrectas

**Solución**: Importa las imágenes en lugar de usar rutas relativas:

```jsx
// ❌ No hacer
;<img src='./assets/img/foto.jpg' />

// ✅ Hacer
import foto from './assets/img/foto.jpg'
;<img src={foto} />
```

### El build falla

**Soluciones**:

1. Verificar errores de ESLint:

```bash
npm run lint
```

2. Limpiar y reconstruir:

```bash
rm -rf dist
npm run build
```

3. Verificar que no haya imports faltantes

### Los estilos no se aplican

**Soluciones**:

1. Verifica que el archivo CSS esté importado:

```jsx
import './MiComponente.css'
```

2. Verifica la especificidad de las clases CSS

3. Inspecciona en DevTools para ver qué estilos se aplican

### El formulario de contacto no funciona

**Soluciones**:

1. Verifica la configuración de reCAPTCHA
2. Revisa la consola del navegador para errores
3. Verifica que el endpoint de envío sea correcto
4. Asegúrate de que las variables de entorno estén configuradas

### Error: "Cannot find module"

**Solución**:

```bash
npm install
```

Si persiste, verifica que el import sea correcto:

```jsx
// ✅ Correcto
import { MiComponente } from './components/MiComponente'

// ❌ Incorrecto
import MiComponente from './components/MiComponente'
```

---

## Personalización

### ¿Cómo cambio los colores del sitio?

Edita las variables CSS en `src/index.css`:

```css
:root {
  --color-primary: #tu-color;
  --color-secondary: #tu-color;
  --color-background: #tu-color;
  --color-text: #tu-color;
}
```

### ¿Cómo añado más proyectos?

Edita `src/components/Projects.jsx`:

```jsx
const projects = [
  // ... proyectos existentes
  {
    id: 4,
    image: 'URL_de_la_imagen',
    title: 'TÍTULO DEL PROYECTO',
    description: 'Descripción...',
    linkSite: 'https://proyecto.com',
    linkCode: 'https://github.com/user/repo'
  }
]
```

### ¿Cómo actualizo mi experiencia laboral?

Edita `src/helpers/experience.json`:

```json
{
  "Experiencia": [
    {
      "id": 3,
      "company": "Nueva Empresa",
      "date": "Mes-Año",
      "position": "Cargo",
      "description": "Descripción..."
    }
  ]
}
```

### ¿Cómo añado más habilidades?

1. Crea el icono SVG en `src/components/icons/`
2. Añade a `src/components/Skills.jsx`:

```jsx
import { IconNuevaTech } from './icons/IconNuevaTech'

const skills = [
  // ... habilidades existentes
  {
    id: 9,
    name: 'Nueva Tecnología',
    svg: <IconNuevaTech />
  }
]
```

### ¿Cómo cambio la fuente?

1. Instala la fuente desde fontsource:

```bash
npm install @fontsource/nombre-fuente
```

2. Importa en `src/main.jsx`:

```jsx
import '@fontsource/nombre-fuente'
```

3. Actualiza la variable CSS en `src/index.css`:

```css
:root {
  --font-family: 'Nombre Fuente', sans-serif;
}
```

### ¿Cómo añado una nueva sección?

1. Crea el componente:

```jsx
// src/components/NuevaSeccion.jsx
export const NuevaSeccion = () => {
  return (
    <section id='nueva-seccion'>
      <h2>Nueva Sección/</h2>
      {/* Contenido */}
    </section>
  )
}
```

2. Importa en `App.jsx`:

```jsx
import { NuevaSeccion } from './components/NuevaSeccion'

function App() {
  return (
    <main>
      {/* ... otras secciones */}
      <NuevaSeccion />
    </main>
  )
}
```

3. Añade enlace en `Header.jsx`:

```jsx
<a href='#nueva-seccion'>Nueva Sección</a>
```

### ¿Cómo cambio la información personal?

Edita `src/components/About.jsx`:

- Cambia el nombre
- Actualiza la descripción
- Modifica los enlaces a redes sociales
- Reemplaza la foto de perfil
- Actualiza el CV

---

## ❓ Más Preguntas

Si tienes más preguntas:

1. **Revisa la documentación**:

   - [README.md](./README.md)
   - [ARCHITECTURE.md](./ARCHITECTURE.md)
   - [COMPONENTS.md](./COMPONENTS.md)

2. **Busca en Issues**: [GitHub Issues](https://github.com/KristianC8/Portfolio-Kristian/issues)

3. **Crea un nuevo Issue**: Si no encuentras respuesta

4. **Contacto directo**: kristian.cifuentesv@gmail.com

---

**Última actualización**: Noviembre 2025
