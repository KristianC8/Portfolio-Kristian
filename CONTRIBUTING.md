# Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Esta guía te ayudará a entender cómo puedes colaborar de manera efectiva.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Guía de Estilo](#guía-de-estilo)
- [Estructura de Commits](#estructura-de-commits)
- [Reporte de Bugs](#reporte-de-bugs)
- [Sugerencias de Mejoras](#sugerencias-de-mejoras)

## 📜 Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas un ambiente respetuoso y profesional.

### Nuestros Estándares

- ✅ Usar lenguaje acogedor e inclusivo
- ✅ Respetar diferentes puntos de vista y experiencias
- ✅ Aceptar críticas constructivas de manera profesional
- ✅ Enfocarse en lo que es mejor para la comunidad
- ✅ Mostrar empatía hacia otros miembros de la comunidad

Para más detalles, consulta [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📚 Documentación Adicional

- [Arquitectura](./docs/ARCHITECTURE.md)
- [Componentes](./docs/COMPONENTS.md)
- [Guía de Estilo](./docs/STYLE_GUIDE.md)
- [FAQ](./docs/FAQ.md)

## 🤝 ¿Cómo puedo contribuir?

### Reportar Bugs

Si encuentras un bug, por favor:

1. **Verifica** que el bug no haya sido reportado previamente en [Issues](https://github.com/KristianC8/Portfolio-Kristian/issues)
2. **Crea un nuevo issue** con una descripción clara del problema
3. **Incluye**:
   - Pasos para reproducir el bug
   - Comportamiento esperado vs. comportamiento actual
   - Capturas de pantalla (si aplica)
   - Información del navegador y sistema operativo
   - Versión del proyecto

### Sugerir Mejoras

Para sugerir nuevas características:

1. **Verifica** que la sugerencia no exista en los issues
2. **Crea un issue** con la etiqueta "enhancement"
3. **Describe** claramente:
   - El problema que resuelve
   - La solución propuesta
   - Alternativas consideradas
   - Contexto adicional

### Pull Requests

1. **Fork** el repositorio
2. **Crea una rama** desde `main`:
   ```bash
   git checkout -b feature/nombre-descriptivo
   ```
3. **Realiza tus cambios** siguiendo la guía de estilo
4. **Prueba** tus cambios localmente
5. **Commit** tus cambios con mensajes descriptivos
6. **Push** a tu fork:
   ```bash
   git push origin feature/nombre-descriptivo
   ```
7. **Abre un Pull Request** con una descripción clara de los cambios

## 🔄 Proceso de Desarrollo

### Configuración del Entorno

```bash
# Clonar el repositorio
git clone https://github.com/KristianC8/Portfolio-Kristian.git
cd project-portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Flujo de Trabajo

1. **Actualiza tu fork** regularmente:

   ```bash
   git fetch upstream
   git merge upstream/main
   ```

2. **Trabaja en tu rama** de feature

3. **Prueba tus cambios**:

   ```bash
   npm run lint  # Verificar código
   npm run build # Verificar que compile
   ```

4. **Mantén commits pequeños y enfocados**

5. **Actualiza la documentación** si es necesario

## 🎨 Guía de Estilo

### JavaScript/React

- **Usa componentes funcionales** con hooks
- **Nombra componentes** en PascalCase: `MyComponent.jsx`
- **Nombra archivos CSS** igual que el componente: `MyComponent.css`
- **Usa PropTypes** para validación de props
- **Destructura props** en los parámetros de la función
- **Usa const** para declaraciones que no cambiarán
- **Sigue las reglas de ESLint** del proyecto

#### Ejemplo de Componente

```jsx
import PropTypes from 'prop-types'
import './MyComponent.css'

export const MyComponent = ({ title, description }) => {
  return (
    <div className='my-component'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}
```

### CSS

- **Usa nombres de clase descriptivos** en kebab-case
- **Prefija clases** con el nombre del componente
- **Organiza propiedades** en orden lógico:
  1. Posicionamiento
  2. Box model
  3. Tipografía
  4. Visual
  5. Otros

#### Ejemplo de CSS

```css
.my-component {
  /* Posicionamiento */
  position: relative;

  /* Box model */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  /* Tipografía */
  font-size: 1rem;

  /* Visual */
  background-color: var(--color-primary);
  border-radius: 8px;
}
```

### Estructura de Archivos

- **Componentes** en `src/components/`
- **Helpers** en `src/helpers/`
- **Hooks** en `src/hooks/`
- **Assets** en `src/assets/`
- **Cada componente** en su propio archivo
- **Estilos** junto al componente que los usa

## 📝 Estructura de Commits

Usa mensajes de commit claros y descriptivos siguiendo este formato:

```
tipo(alcance): descripción breve

Descripción detallada (opcional)

Closes #123
```

### Tipos de Commit

- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan el código)
- `refactor`: Refactorización de código
- `perf`: Mejoras de rendimiento
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplos

```bash
feat(projects): add new project card animation
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(header): improve navigation spacing
refactor(skills): simplify skills component logic
```

## 🐛 Reporte de Bugs

Al reportar un bug, incluye:

### Información del Entorno

- Sistema Operativo
- Navegador y versión
- Versión de Node.js
- Versión del proyecto

### Descripción del Bug

- Título claro y descriptivo
- Pasos para reproducir
- Comportamiento esperado
- Comportamiento actual
- Capturas de pantalla o videos (si aplica)

### Ejemplo de Template

```markdown
**Descripción del Bug**
Descripción clara y concisa del bug.

**Para Reproducir**
Pasos para reproducir el comportamiento:

1. Ve a '...'
2. Haz click en '...'
3. Scroll hasta '...'
4. Observa el error

**Comportamiento Esperado**
Descripción de lo que esperabas que sucediera.

**Capturas de Pantalla**
Si aplica, añade capturas de pantalla.

**Entorno:**

- OS: [ej. Windows 11]
- Navegador: [ej. Chrome 120]
- Versión: [ej. 1.0.0]

**Contexto Adicional**
Cualquier otra información relevante.
```

## 💡 Sugerencias de Mejoras

Al sugerir mejoras, considera:

### Propósito

- ¿Qué problema resuelve?
- ¿Por qué es necesario?
- ¿Quién se beneficiaría?

### Solución Propuesta

- Descripción detallada de la mejora
- Ejemplos de uso
- Mockups o wireframes (si aplica)

### Alternativas

- ¿Qué otras soluciones consideraste?
- ¿Por qué esta es la mejor opción?

## ✅ Checklist antes de Enviar PR

Antes de enviar tu Pull Request, verifica:

- [ ] El código sigue la guía de estilo del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código en áreas complejas
- [ ] He actualizado la documentación correspondiente
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He probado que mis cambios funcionan correctamente
- [ ] El proyecto compila sin errores (`npm run build`)
- [ ] El linter no muestra errores (`npm run lint`)
- [ ] Los commits tienen mensajes descriptivos

## 🙏 Agradecimientos

¡Gracias por contribuir! Tu tiempo y esfuerzo son muy apreciados.

## ❓ Preguntas

Si tienes preguntas sobre cómo contribuir, puedes:

- Abrir un issue con la etiqueta "question"
- Contactar directamente: kristian.cifuentesv@gmail.com

---

**¡Feliz codificación! 🚀**
