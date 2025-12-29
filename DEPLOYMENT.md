# 🚀 Guía Completa de Despliegue a Producción

Esta guía te llevará paso a paso desde tu código local hasta tener tu portfolio en producción atrayendo clientes.

## 📋 Tabla de Contenidos
1. [Pre-requisitos](#pre-requisitos)
2. [Preparar el Proyecto](#preparar-el-proyecto)
3. [Subir a GitHub](#subir-a-github)
4. [Desplegar en Vercel](#desplegar-en-vercel)
5. [Configurar Variables de Entorno](#configurar-variables-de-entorno)
6. [Configurar Dominio Personalizado](#configurar-dominio-personalizado)
7. [SEO y Marketing](#seo-y-marketing)
8. [Monitoreo y Analytics](#monitoreo-y-analytics)
9. [Próximos Pasos](#próximos-pasos)

---

## 1. Pre-requisitos

Antes de comenzar, asegúrate de tener:

- ✅ Cuenta en [GitHub](https://github.com)
- ✅ Cuenta en [Vercel](https://vercel.com) (puedes usar tu cuenta de GitHub)
- ✅ Cuenta en [Resend](https://resend.com) con API key activa
- ✅ Git instalado en tu computadora
- ✅ El proyecto funcionando localmente

---

## 2. Preparar el Proyecto

### 2.1 Verificar que todo funciona localmente

```bash
# Instalar dependencias (si no lo has hecho)
npm install

# Ejecutar en modo desarrollo
npm run dev

# Probar el build de producción
npm run build
npm start
```

### 2.2 Verificar archivos importantes

Asegúrate de que estos archivos existen:
- ✅ `.gitignore` - Para no subir archivos sensibles
- ✅ `.env.example` - Ejemplo de variables de entorno
- ✅ `README.md` - Documentación del proyecto

### 2.3 Personalizar tu información

Antes de desplegar, personaliza:

**`app/layout.tsx`** - Metadata SEO:
```typescript
export const metadata: Metadata = {
  title: "Tu Nombre - Desarrollador Web",
  description: "Tu descripción profesional",
  // ... más metadata
}
```

**`components/Hero.tsx`** - Tu nombre y contacto

**`components/About.tsx`** - Tu biografía

**`components/Projects.tsx`** - Tus proyectos reales

**`components/Footer.tsx`** - Tus redes sociales

---

## 3. Subir a GitHub

### 3.1 Inicializar Git (si no lo has hecho)

```bash
# Navega a tu proyecto
cd /Users/fersanz/Desktop/portfolio-landing

# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Portfolio landing page with contact form"
```

### 3.2 Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Click en el botón **"+"** → **"New repository"**
3. Nombre sugerido: `portfolio-landing` o `mi-portfolio`
4. Descripción: "Portfolio profesional con formulario de contacto"
5. Déjalo como **Público** (para mejor SEO y visibilidad)
6. **NO** inicialices con README (ya tienes uno)
7. Click en **"Create repository"**

### 3.3 Conectar y subir tu código

GitHub te mostrará comandos. Usa estos:

```bash
# Agregar el repositorio remoto (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/portfolio-landing.git

# Renombrar la rama a main (si es necesario)
git branch -M main

# Subir tu código
git push -u origin main
```

🎉 ¡Tu código ya está en GitHub!

---

## 4. Desplegar en Vercel

Vercel es la plataforma creada por el equipo de Next.js. Es la mejor opción para desplegar aplicaciones Next.js.

### 4.1 Conectar Vercel con GitHub

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Sign Up"** o **"Log In"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tus repositorios

### 4.2 Importar tu proyecto

1. En el dashboard de Vercel, click en **"Add New..."** → **"Project"**
2. Busca tu repositorio `portfolio-landing`
3. Click en **"Import"**

### 4.3 Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Next.js:

- **Framework Preset**: Next.js (detectado automáticamente)
- **Root Directory**: `./` (dejar por defecto)
- **Build Command**: `next build` (automático)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install` (automático)

**¡NO HAGAS DEPLOY TODAVÍA!** Primero configura las variables de entorno.

---

## 5. Configurar Variables de Entorno

### 5.1 En Vercel (ANTES del primer deploy)

1. En la página de configuración del proyecto, busca **"Environment Variables"**
2. Agrega estas variables:

```
RESEND_API_KEY=tu_api_key_de_resend
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=tu-email@ejemplo.com
```

**Importante:**
- `RESEND_API_KEY`: Tu API key de [Resend](https://resend.com/api-keys)
- `FROM_EMAIL`: Email verificado en Resend (usa `onboarding@resend.dev` para pruebas)
- `TO_EMAIL`: Tu email donde recibirás los mensajes de contacto

3. Selecciona los ambientes: **Production**, **Preview**, y **Development**
4. Click en **"Add"** para cada variable

### 5.2 Ahora sí, ¡Deploy!

1. Click en **"Deploy"**
2. Espera 1-2 minutos mientras Vercel:
   - Clona tu repositorio
   - Instala dependencias
   - Construye tu aplicación
   - La despliega en su CDN global

🎉 **¡Tu portfolio está en línea!**

Vercel te dará una URL como: `https://portfolio-landing-xxx.vercel.app`

---

## 6. Configurar Dominio Personalizado (Opcional pero Recomendado)

### 6.1 ¿Por qué un dominio personalizado?

- ✅ Más profesional: `tudominio.com` vs `proyecto-xxx.vercel.app`
- ✅ Mejor para SEO
- ✅ Más fácil de recordar para clientes
- ✅ Aumenta la confianza

### 6.2 Comprar un dominio

Opciones recomendadas:
- [Namecheap](https://namecheap.com) - $8-12/año
- [Google Domains](https://domains.google) - $12/año
- [GoDaddy](https://godaddy.com) - $12-15/año
- [Vercel Domains](https://vercel.com/domains) - Integración directa

Sugerencias de dominio:
- `tunombre.com`
- `tunombre.dev`
- `tunombre.tech`
- `tunombredev.com`

### 6.3 Conectar dominio a Vercel

1. En tu proyecto de Vercel, ve a **"Settings"** → **"Domains"**
2. Click en **"Add"**
3. Ingresa tu dominio: `tudominio.com`
4. Vercel te dará instrucciones DNS específicas

**Configuración DNS típica:**

En tu proveedor de dominio, agrega estos registros:

```
Tipo: A
Nombre: @
Valor: 76.76.21.21

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

5. Espera 24-48 horas para propagación DNS (usualmente es más rápido)
6. Vercel configurará SSL automáticamente (HTTPS)

---

## 7. SEO y Marketing

### 7.1 Optimización SEO

Tu proyecto ya tiene buenas bases SEO, pero verifica:

**✅ Metadata en `app/layout.tsx`:**
```typescript
export const metadata: Metadata = {
  title: "Tu Nombre - Desarrollador Web Full Stack",
  description: "Desarrollador web especializado en React, Next.js y Node.js. Creo aplicaciones web modernas y escalables.",
  keywords: ["desarrollador web", "react", "next.js", "tu ciudad"],
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Tu Nombre - Desarrollador Web",
    description: "Portfolio profesional",
    url: "https://tudominio.com",
    siteName: "Tu Nombre Portfolio",
    images: [
      {
        url: "https://tudominio.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
}
```

**✅ Crear `public/robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://tudominio.com/sitemap.xml
```

**✅ Crear `app/sitemap.ts`:**
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tudominio.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

### 7.2 Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu dominio
3. Verifica la propiedad (Vercel facilita esto)
4. Envía tu sitemap: `https://tudominio.com/sitemap.xml`

### 7.3 Estrategias de Marketing

**Redes Sociales:**
- 📱 LinkedIn: Comparte tu portfolio, actualiza tu perfil
- 🐦 Twitter/X: Comparte proyectos y aprendizajes
- 📸 Instagram: Muestra tu proceso de desarrollo
- 💼 GitHub: Mantén tu perfil activo

**Plataformas de Freelance:**
- [Fiverr](https://fiverr.com) - Crea gigs de tus servicios
- [Upwork](https://upwork.com) - Perfil profesional con link a tu portfolio
- [Freelancer](https://freelancer.com)
- [Workana](https://workana.com) - Popular en Latinoamérica

**Networking Local:**
- Meetups de desarrolladores en tu ciudad
- Grupos de Facebook/WhatsApp de emprendedores
- Cámaras de comercio locales
- Universidades (ofrecer charlas)

**Content Marketing:**
- Blog técnico (puedes agregarlo a tu portfolio)
- YouTube: Tutoriales cortos
- LinkedIn Articles: Comparte conocimiento

---

## 8. Monitoreo y Analytics

### 8.1 Vercel Analytics (Gratis)

1. En tu proyecto de Vercel, ve a **"Analytics"**
2. Click en **"Enable"**
3. Instala el paquete:

```bash
npm install @vercel/analytics
```

4. Agrega en `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 8.2 Google Analytics (Opcional)

1. Crea una cuenta en [Google Analytics](https://analytics.google.com)
2. Obtén tu Measurement ID (G-XXXXXXXXXX)
3. Agrega en `app/layout.tsx`:

```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 8.3 Monitoreo de Emails

En tu dashboard de [Resend](https://resend.com):
- Ve cuántos emails se han enviado
- Revisa tasas de entrega
- Verifica errores

---

## 9. Próximos Pasos

### 9.1 Mejoras Inmediatas

**Semana 1:**
- [ ] Personalizar toda la información del portfolio
- [ ] Agregar tus proyectos reales con capturas
- [ ] Configurar dominio personalizado
- [ ] Verificar que el formulario de contacto funciona
- [ ] Compartir en redes sociales

**Semana 2:**
- [ ] Crear perfiles en plataformas de freelance
- [ ] Configurar Google Analytics
- [ ] Optimizar imágenes y performance
- [ ] Agregar más proyectos al portfolio

**Mes 1:**
- [ ] Escribir 2-3 artículos en LinkedIn
- [ ] Contactar 10 empresas locales
- [ ] Unirte a grupos de networking
- [ ] Pedir testimonios de clientes anteriores

### 9.2 Funcionalidades Futuras

**Blog:**
- Agregar sección de blog para SEO
- Escribir sobre tecnologías que dominas
- Compartir casos de estudio

**Portfolio Interactivo:**
- Demos en vivo de proyectos
- Videos explicativos
- Testimonios de clientes

**Automatización:**
- Respuestas automáticas a emails
- Calendario de reuniones integrado (Calendly)
- CRM simple para leads

**Monetización:**
- Productos digitales (templates, cursos)
- Consultoría por hora
- Paquetes de servicios

### 9.3 Mantenimiento

**Mensual:**
- Revisar analytics
- Actualizar proyectos
- Verificar que todo funciona
- Responder comentarios/mensajes

**Trimestral:**
- Actualizar tecnologías
- Mejorar diseño basado en feedback
- Agregar nuevas funcionalidades
- Revisar SEO

---

## 🎯 Checklist Final de Lanzamiento

Antes de promocionar tu portfolio, verifica:

- [ ] ✅ Todo el contenido está personalizado (sin textos de ejemplo)
- [ ] ✅ Formulario de contacto funciona y recibes emails
- [ ] ✅ Todos los links de redes sociales funcionan
- [ ] ✅ Imágenes de proyectos cargadas y optimizadas
- [ ] ✅ Metadata SEO configurada correctamente
- [ ] ✅ Dominio personalizado configurado (opcional)
- [ ] ✅ Analytics instalado y funcionando
- [ ] ✅ Sitio probado en móvil, tablet y desktop
- [ ] ✅ Velocidad de carga optimizada (< 3 segundos)
- [ ] ✅ Sin errores en consola del navegador
- [ ] ✅ Perfil de LinkedIn actualizado con link al portfolio
- [ ] ✅ Perfiles en plataformas de freelance creados

---

## 🆘 Solución de Problemas

### El deploy falla en Vercel

**Error: Build failed**
```bash
# Localmente, verifica que el build funciona:
npm run build

# Si falla, revisa los errores y corrígelos
# Luego haz commit y push:
git add .
git commit -m "Fix build errors"
git push
```

### Los emails no llegan

1. Verifica las variables de entorno en Vercel
2. Revisa el dashboard de Resend para errores
3. Verifica que el `FROM_EMAIL` está verificado en Resend
4. Revisa la carpeta de spam

### El dominio no funciona

1. Espera 24-48 horas para propagación DNS
2. Verifica los registros DNS en tu proveedor
3. Usa [whatsmydns.net](https://whatsmydns.net) para verificar propagación
4. Contacta soporte de Vercel si persiste

### Cambios no se reflejan

1. Vercel despliega automáticamente cada push a `main`
2. Espera 1-2 minutos después del push
3. Limpia caché del navegador (Cmd+Shift+R en Mac)
4. Verifica en el dashboard de Vercel que el deploy fue exitoso

---

## 📞 Recursos y Soporte

- **Documentación Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Documentación Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Documentación Resend**: [resend.com/docs](https://resend.com/docs)
- **Comunidad Next.js**: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

## 🎉 ¡Felicidades!

Si has llegado hasta aquí, tu portfolio está listo para atraer clientes. Recuerda:

1. **Consistencia**: Actualiza regularmente tu portfolio
2. **Networking**: Conecta con otros profesionales
3. **Calidad**: Mejor pocos proyectos excelentes que muchos mediocres
4. **Paciencia**: Los primeros clientes pueden tardar, pero llegarán
5. **Aprendizaje**: Sigue mejorando tus habilidades

**¡Mucho éxito con tu portfolio! 🚀**

