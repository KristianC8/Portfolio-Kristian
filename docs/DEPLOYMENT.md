# Guía de Despliegue

Esta guía detalla cómo desplegar el portfolio en diferentes plataformas.

## 📋 Tabla de Contenidos

- [Preparación para Producción](#preparación-para-producción)
- [Cloudflare Pages (Recomendado)](#cloudflare-pages-recomendado)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [GitHub Pages](#github-pages)
- [Servidor Propio](#servidor-propio)
- [Variables de Entorno](#variables-de-entorno)
- [Optimizaciones Post-Deploy](#optimizaciones-post-deploy)

---

## 🚀 Preparación para Producción

Antes de desplegar, asegúrate de:

### 1. Verificar el Build Local

```bash
# Limpiar caché y node_modules (opcional)
rm -rf node_modules package-lock.json
npm install

# Ejecutar linter
npm run lint

# Crear build de producción
npm run build

# Previsualizar build
npm run preview
```

### 2. Checklist Pre-Deploy

- [ ] No hay errores de ESLint
- [ ] El build se completa sin errores
- [ ] La preview funciona correctamente
- [ ] Todas las imágenes cargan
- [ ] Los enlaces externos funcionan
- [ ] El formulario de contacto funciona
- [ ] reCAPTCHA está configurado
- [ ] Meta tags están actualizados
- [ ] robots.txt está configurado

### 3. Optimizar Assets

```bash
# Las imágenes ya deben estar optimizadas
# Formatos recomendados: AVIF, WebP, JPG

# Verificar tamaño del build
du -sh dist/
```

---

## ☁️ Cloudflare Pages (Recomendado)

**Plataforma actual del proyecto**

### Ventajas

- ✅ CDN global ultra-rápido
- ✅ SSL automático
- ✅ Deploy automático desde Git
- ✅ Rollback fácil
- ✅ Analytics integrado
- ✅ Gratis para proyectos personales

### Configuración Inicial

1. **Crear cuenta en Cloudflare Pages**

   - Ve a [pages.cloudflare.com](https://pages.cloudflare.com)
   - Inicia sesión o crea una cuenta

2. **Conectar Repositorio**

   - Click en "Create a project"
   - Conecta tu cuenta de GitHub
   - Selecciona el repositorio `Portfolio-Kristian`

3. **Configurar Build Settings**

   ```
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

4. **Variables de Entorno** (si las necesitas)

   - Ve a Settings → Environment variables
   - Añade las variables necesarias

5. **Deploy**
   - Click en "Save and Deploy"
   - Espera a que termine el build (~2-3 minutos)

### Deploy Automático

Cada push a la rama `main` desplegará automáticamente:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### Custom Domain

1. **Añadir Dominio Personalizado**

   - Ve a Custom domains
   - Click en "Set up a custom domain"
   - Sigue las instrucciones para configurar DNS

2. **Configurar DNS**
   ```
   Type: CNAME
   Name: @
   Target: portfolio-kristian-55z.pages.dev
   ```

### Rollback

Si algo sale mal:

1. Ve a Deployments
2. Encuentra el deployment anterior
3. Click en "Rollback to this deployment"

---

## 🌐 Netlify

### Configuración

1. **Crear cuenta en Netlify**

   - Ve a [netlify.com](https://netlify.com)

2. **Nuevo Sitio desde Git**

   - Click en "New site from Git"
   - Conecta GitHub
   - Selecciona el repositorio

3. **Build Settings**

   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Crear archivo `netlify.toml`** (opcional)

   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200

   [build.environment]
     NODE_VERSION = "18"
   ```

5. **Deploy**
   - Click en "Deploy site"

### CLI Deploy (Alternativo)

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## ▲ Vercel

### Configuración

1. **Crear cuenta en Vercel**

   - Ve a [vercel.com](https://vercel.com)

2. **Importar Proyecto**

   - Click en "New Project"
   - Import desde GitHub
   - Selecciona el repositorio

3. **Configuración Automática**

   - Vercel detecta Vite automáticamente
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy**
   - Click en "Deploy"

### CLI Deploy (Alternativo)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Configuración Avanzada

Crear `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 📄 GitHub Pages

### Opción 1: GitHub Actions (Recomendado)

1. **Crear archivo de workflow**

   `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Configurar GitHub Pages**

   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

3. **Actualizar `vite.config.js`**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/Portfolio-Kristian/' // Nombre del repositorio
   })
   ```

### Opción 2: Deploy Manual

```bash
# Instalar gh-pages
npm install -D gh-pages

# Añadir scripts en package.json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Deploy
npm run deploy
```

---

## 🖥 Servidor Propio

### Requisitos

- Node.js 16+ instalado
- Nginx o Apache
- Certificado SSL (Let's Encrypt recomendado)

### Opción 1: Servir Build Estático con Nginx

1. **Build del proyecto**

   ```bash
   npm run build
   ```

2. **Copiar archivos al servidor**

   ```bash
   scp -r dist/* user@server:/var/www/portfolio
   ```

3. **Configurar Nginx**

   `/etc/nginx/sites-available/portfolio`:

   ```nginx
   server {
       listen 80;
       server_name tudominio.com;

       root /var/www/portfolio;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Caché para assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|avif|webp)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

4. **Habilitar sitio**

   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

5. **Configurar SSL con Let's Encrypt**
   ```bash
   sudo certbot --nginx -d tudominio.com
   ```

### Opción 2: Servir con Node.js

1. **Instalar serve**

   ```bash
   npm install -g serve
   ```

2. **Servir build**

   ```bash
   serve -s dist -l 3000
   ```

3. **Usar PM2 para mantener activo**
   ```bash
   npm install -g pm2
   pm2 serve dist 3000 --spa --name portfolio
   pm2 save
   pm2 startup
   ```

---

## 🔐 Variables de Entorno

### Para reCAPTCHA

Si usas variables de entorno para reCAPTCHA:

1. **Crear archivo `.env`** (no commitear)

   ```env
   VITE_RECAPTCHA_SITE_KEY=tu_site_key_aqui
   ```

2. **Usar en el código**

   ```javascript
   const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
   ```

3. **Configurar en la plataforma**
   - **Cloudflare Pages**: Settings → Environment variables
   - **Netlify**: Site settings → Environment variables
   - **Vercel**: Settings → Environment Variables

### Variables Comunes

```env
# reCAPTCHA
VITE_RECAPTCHA_SITE_KEY=6Lc...

# API Endpoints (si los usas)
VITE_API_URL=https://api.example.com

# Analytics (si los usas)
VITE_GA_ID=G-XXXXXXXXXX
```

---

## ⚡ Optimizaciones Post-Deploy

### 1. Verificar Rendimiento

**Lighthouse**

```bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Ejecutar audit
lighthouse https://tu-sitio.com --view
```

**Objetivos**:

- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### 2. Configurar CDN

Si usas Cloudflare:

- Habilita Auto Minify (JS, CSS, HTML)
- Habilita Brotli compression
- Configura caché rules

### 3. Monitoreo

**Google Analytics**

```html
<!-- Añadir en index.html -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'G-XXXXXXXXXX')
</script>
```

**Cloudflare Web Analytics**

- Gratis y respetuoso con la privacidad
- Ve a Analytics → Web Analytics

### 4. SEO

**Verificar en Google Search Console**

1. Añade tu sitio
2. Verifica propiedad
3. Envía sitemap (si tienes)
4. Monitorea indexación

**Open Graph Testing**

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 5. Seguridad

**Headers de Seguridad**

Para Netlify (`netlify.toml`):

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

Para Vercel (`vercel.json`):

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Completo

`.github/workflows/ci-cd.yml`:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Test build
        run: npm run preview &

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v3

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: portfolio-kristian
          directory: dist
```

---

## 📊 Checklist Post-Deploy

Después de desplegar, verifica:

- [ ] El sitio carga correctamente
- [ ] Todas las páginas/secciones funcionan
- [ ] Las imágenes se muestran
- [ ] Los enlaces externos funcionan
- [ ] El formulario de contacto envía emails
- [ ] reCAPTCHA funciona
- [ ] El sitio es responsive (móvil, tablet, desktop)
- [ ] SSL/HTTPS está activo
- [ ] No hay errores en la consola del navegador
- [ ] Meta tags se muestran correctamente (compartir en redes)
- [ ] El sitio aparece en Google (después de unos días)
- [ ] Analytics está funcionando (si lo configuraste)

---

## 🆘 Troubleshooting

### Build Falla

```bash
# Limpiar caché
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Imágenes no Cargan

- Verifica que las rutas sean correctas
- Asegúrate de que las imágenes estén en `src/assets/`
- Usa imports en lugar de rutas relativas

### Formulario no Funciona

- Verifica la configuración de reCAPTCHA
- Revisa las variables de entorno
- Verifica CORS si usas API externa

### Estilos Rotos

- Verifica que `base` en `vite.config.js` sea correcto
- Asegúrate de que los archivos CSS se importen correctamente

---

**¡Tu portfolio está listo para el mundo! 🚀**
