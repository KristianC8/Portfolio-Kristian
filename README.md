# Portfolio Kristian Cifuentes

![Portfolio Preview](https://iili.io/fqTejB2.png)

Portfolio personal de Kristian Cifuentes - Desarrollador Web Frontend. Aquí encontrarás mis proyectos, un poco sobre mí, experiencia y habilidades.

🌐 **[Ver Portfolio en Vivo](https://portfolio-kristian-55z.pages.dev/)**

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Secciones del Portfolio](#-secciones-del-portfolio)
- [Componentes Principales](#-componentes-principales)
- [Optimizaciones](#-optimizaciones)
- [Documentación](#-documentación)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

## ✨ Características

- 🎨 **Diseño Moderno y Responsivo**: Interfaz atractiva que se adapta a todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Carga rápida con imágenes optimizadas en formato AVIF/WebP
- 🔍 **SEO Optimizado**: Meta tags y Open Graph para mejor visibilidad en buscadores
- 📱 **Mobile First**: Diseñado primero para dispositivos móviles
- 🎯 **Navegación Fluida**: Scroll suave entre secciones
- 📧 **Formulario de Contacto**: Integración con reCAPTCHA para seguridad
- 🌐 **Multilenguaje**: Preparado para español (actualmente en ES)
- ♿ **Accesible**: Cumple con estándares de accesibilidad web

## 🛠 Tecnologías

### Core

- **React 18.2.0** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite 7.2.1** - Build tool de nueva generación para desarrollo frontend

### Estilos

- **CSS3** - Vanilla CSS con variables CSS personalizadas
- **@fontsource/maven-pro** - Tipografía personalizada

### Herramientas de Desarrollo

- **ESLint** - Linter para mantener código limpio y consistente
- **@vitejs/plugin-react-swc** - Plugin de Vite con SWC para compilación rápida
- **vite-plugin-robots** - Generación automática de robots.txt

### Otros

- **PropTypes** - Validación de tipos en componentes React

## 📁 Estructura del Proyecto

```
project-portfolio/
├── public/                 # Archivos públicos estáticos
├── src/
│   ├── assets/            # Recursos (imágenes, PDFs, etc.)
│   │   ├── img/          # Imágenes del proyecto
│   │   └── pdf/          # Curriculum en PDF
│   ├── components/        # Componentes React
│   │   ├── icons/        # Componentes de iconos SVG
│   │   ├── reCaptcha/    # Componente de reCAPTCHA
│   │   ├── About.jsx     # Sección "Sobre mí"
│   │   ├── Contact.jsx   # Formulario de contacto
│   │   ├── Experience.jsx # Experiencia laboral
│   │   ├── Footer.jsx    # Pie de página
│   │   ├── Header.jsx    # Encabezado/navegación
│   │   ├── Projects.jsx  # Galería de proyectos
│   │   ├── Skills.jsx    # Habilidades técnicas
│   │   └── ...          # Otros componentes
│   ├── helpers/          # Funciones auxiliares y datos
│   │   ├── experience.json  # Datos de experiencia
│   │   └── helpHTTP.js     # Helper para peticiones HTTP
│   ├── hooks/            # Custom hooks
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos del componente App
│   ├── index.css         # Estilos globales
│   └── main.jsx          # Punto de entrada
├── docs/                 # Documentación técnica
│   ├── ARCHITECTURE.md   # Arquitectura del proyecto
│   ├── COMPONENTS.md     # Documentación de componentes
│   ├── DEPLOYMENT.md     # Guías de despliegue
│   ├── FAQ.md            # Preguntas frecuentes
│   ├── STYLE_GUIDE.md    # Guía de estilo de código
│   └── README.md         # Índice de documentación
├── index.html            # HTML principal
├── package.json          # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
├── .eslintrc.cjs         # Configuración de ESLint
├── CONTRIBUTING.md       # Guía de contribución
├── CHANGELOG.md          # Historial de cambios
├── LICENSE               # Licencia MIT
└── README.md             # Este archivo
```

## 🚀 Instalación

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/KristianC8/Portfolio-Kristian.git
   cd project-portfolio
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**

   El proyecto se abrirá automáticamente en `http://localhost:5173`

## 📜 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 📄 Secciones del Portfolio

### 1. **Header (Navegación)**

- Navegación principal con enlaces a todas las secciones
- Diseño sticky para fácil acceso

### 2. **About (Sobre Mí)**

- Foto de perfil
- Título profesional
- Enlaces a redes sociales (GitHub, LinkedIn)
- Botones de descarga de CV y contacto
- Descripción personal y profesional
- Indicador de disponibilidad

### 3. **Projects (Proyectos)**

Muestra 3 proyectos destacados:

- **SPA VIDEOGAMES**: Single Page Application con Vanilla JavaScript
- **ONLINE STORE**: E-commerce con React y Tailwind CSS
- **KANBAN BOARD APP**: Aplicación full-stack con Spring Boot y React

Cada proyecto incluye:

- Imagen representativa
- Descripción detallada
- Enlaces al sitio en vivo
- Enlace al código fuente en GitHub

### 4. **Experience (Experiencia)**

Experiencia laboral profesional:

- **Thomas Processing & Systems** - Analista de Desarrollo para Calidad
- **Tata Consultancy Services (TCS)** - Testing Analyst

### 5. **Skills (Habilidades)**

Tecnologías y herramientas:

- HTML5
- CSS3
- JavaScript
- React
- Git
- GitHub
- Tailwind CSS
- React Router

### 6. **Contact (Contacto)**

- Formulario de contacto funcional
- Integración con reCAPTCHA v2
- Validación de campos
- Envío de emails

### 7. **Footer**

- Información de copyright
- Enlaces adicionales

### 8. **Scroll to Top**

- Botón flotante para volver al inicio
- Aparece al hacer scroll

## 🧩 Componentes Principales

### Componentes de Presentación

- `Header.jsx` - Barra de navegación
- `About.jsx` - Información personal
- `Projects.jsx` - Lista de proyectos
- `ProjectItem.jsx` - Tarjeta individual de proyecto
- `Experience.jsx` - Contenedor de experiencia
- `ItemExperience.jsx` - Item individual de experiencia
- `Skills.jsx` - Contenedor de habilidades
- `Tag.jsx` - Etiqueta de habilidad individual
- `Contact.jsx` - Formulario de contacto
- `Footer.jsx` - Pie de página
- `ScrollTop.jsx` - Botón scroll to top

### Componentes Auxiliares

- `Badge.jsx` - Insignia para redes sociales
- `Loader.jsx` - Indicador de carga
- `icons/` - Componentes SVG de iconos

### Helpers

- `helpHTTP.js` - Funciones para peticiones HTTP
- `experience.json` - Datos estructurados de experiencia

## ⚡ Optimizaciones

### Rendimiento

- ✅ Imágenes en formato AVIF/WebP para menor peso
- ✅ Lazy loading de imágenes
- ✅ Preconnect a dominios externos
- ✅ Build optimizado con Vite
- ✅ Minificación de CSS y JavaScript

### SEO

- ✅ Meta tags descriptivos
- ✅ Open Graph tags para redes sociales
- ✅ Título y descripción optimizados
- ✅ Estructura semántica HTML5
- ✅ robots.txt configurado

### Accesibilidad

- ✅ Atributos alt en imágenes
- ✅ Etiquetas semánticas
- ✅ Contraste de colores adecuado
- ✅ Navegación por teclado

## 📚 Documentación

Documentación técnica completa disponible en la carpeta `/docs`:

- **[Arquitectura](./docs/ARCHITECTURE.md)** - Diseño técnico y decisiones de arquitectura
- **[Componentes](./docs/COMPONENTS.md)** - Documentación detallada de todos los componentes
- **[Despliegue](./docs/DEPLOYMENT.md)** - Guías de despliegue para múltiples plataformas
- **[FAQ](./docs/FAQ.md)** - Preguntas frecuentes y soluciones
- **[Guía de Estilo](./docs/STYLE_GUIDE.md)** - Convenciones de código y buenas prácticas
- **[Índice de Docs](./docs/)** - Navegación completa de toda la documentación

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

Para más detalles, consulta [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](./LICENSE) para más detalles.

## 📧 Contacto

**Kristian Cifuentes**

- 🌐 Portfolio: [https://portfolio-kristian-55z.pages.dev/](https://portfolio-kristian-55z.pages.dev/)
- 💼 LinkedIn: [Kristian Dario Cifuentes Vera](https://www.linkedin.com/in/kristian-dario-cifuentes-vera-bb24b5159/)
- 🐙 GitHub: [@KristianC8](https://github.com/KristianC8)
- 📧 Email: kristian.cifuentesv@gmail.com

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella en GitHub!

**Hecho con ❤️ por Kristian Cifuentes**
