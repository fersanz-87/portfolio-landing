# 🚀 Guía Completa de SEO y Dominio Personalizado
## Para: Fer Sanz Desarrollo Web

---

## ✅ Optimizaciones SEO Ya Implementadas

### 1. **Metadata Optimizado**
- ✅ Title: "Fer Sanz Desarrollo Web | Desarrollador Full Stack"
- ✅ Description optimizada con palabras clave
- ✅ Keywords relevantes
- ✅ Open Graph para redes sociales (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Robots meta tags configurados

### 2. **Archivos SEO Creados**
- ✅ `/public/robots.txt` - Para motores de búsqueda
- ✅ `/app/sitemap.ts` - Sitemap XML automático
- ✅ `/app/manifest.ts` - Web App Manifest (PWA)
- ✅ JSON-LD Structured Data - Para rich snippets de Google

### 3. **Structured Data (Schema.org)**
- ✅ Tipo: Person
- ✅ Nombre: "Fer Sanz"
- ✅ Título: "Desarrollador Web Full Stack"
- ✅ Habilidades técnicas listadas
- ✅ Listo para rich snippets en Google

---

## 🌐 Configuración de Dominio Personalizado

### Paso 1: Agrega tu dominio en Vercel

1. Ve a tu proyecto en Vercel
2. Click en **"Settings"** (menú superior)
3. Click en **"Domains"** (menú lateral)
4. Click en **"Add"** o **"Add Domain"**
5. Ingresa tu dominio, por ejemplo:
   - `fersanz.com`
   - `fernandosanz.dev`
   - `fersanzdev.com`

### Paso 2: Configura los registros DNS

Vercel te mostrará los registros DNS que necesitas agregar. Típicamente son:

#### **Opción A: Si usas el dominio raíz (ejemplo.com)**

En tu proveedor de dominio (GoDaddy, Namecheap, Google Domains, etc.):

```
Tipo: A
Nombre: @
Valor: 76.76.21.21
TTL: 3600 (o automático)
```

#### **Opción B: Si usas www (www.ejemplo.com)**

```
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
TTL: 3600 (o automático)
```

#### **Recomendación: Configura AMBOS**

Para que funcione tanto `ejemplo.com` como `www.ejemplo.com`:

```
Registro A:
Tipo: A
Nombre: @
Valor: 76.76.21.21

Registro CNAME:
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

### Paso 3: Espera la propagación DNS

- ⏱️ **Tiempo estimado**: 5 minutos a 48 horas
- 🎯 **Usualmente**: 10-30 minutos
- 🔍 **Verificar propagación**: https://whatsmydns.net

### Paso 4: SSL Automático

Vercel configurará automáticamente el certificado SSL (HTTPS) cuando el DNS esté propagado.

---

## 📝 Actualizar URLs Después de Configurar el Dominio

Una vez que tu dominio esté activo, actualiza estas URLs en tu código:

### 1. **`app/layout.tsx`**
```typescript
metadataBase: new URL('https://tudominio.com'), // Línea 18
openGraph: {
  url: "https://tudominio.com", // Línea 32
  // ...
}
```

### 2. **`app/sitemap.ts`**
```typescript
const baseUrl = 'https://tudominio.com'; // Línea 7
```

### 3. **`app/page.tsx`**
```typescript
url: 'https://tudominio.com', // Línea 21
```

### 4. **`public/robots.txt`**
```
Sitemap: https://tudominio.com/sitemap.xml
```

**Después de actualizar, haz commit y push:**
```bash
git add .
git commit -m "Update domain URLs to custom domain"
git push vercel-repo main
```

---

## 🔍 Registrar tu Sitio en Google

### Google Search Console (ESENCIAL)

1. Ve a: https://search.google.com/search-console
2. Click en **"Agregar propiedad"**
3. Selecciona **"Prefijo de URL"**
4. Ingresa tu dominio: `https://tudominio.com`
5. **Verificación**:
   - Vercel facilita la verificación con meta tag
   - O descarga el archivo HTML y súbelo a `/public/`
6. Una vez verificado, **envía tu sitemap**:
   - Ve a "Sitemaps"
   - Agrega: `https://tudominio.com/sitemap.xml`
   - Click en "Enviar"

### Google My Business (Opcional pero recomendado)

Si ofreces servicios locales:
1. Ve a: https://www.google.com/business/
2. Crea tu perfil de empresa
3. Agrega tu sitio web
4. Verifica tu ubicación

---

## 📊 Monitoreo y Analytics

### Vercel Analytics (Gratis)

Ya que estás en Vercel, activa Analytics:

1. En tu proyecto → **"Analytics"**
2. Click en **"Enable"**
3. Instala el paquete:
```bash
npm install @vercel/analytics
```

4. Actualiza `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics (Opcional)

1. Crea cuenta en: https://analytics.google.com
2. Obtén tu ID (G-XXXXXXXXXX)
3. Agrégalo como variable de entorno en Vercel:
   - Name: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX`

---

## 🎯 Estrategias para Aparecer en Google

### 1. **Contenido de Calidad**
- ✅ Ya tienes: Información clara sobre tus servicios
- 📝 Considera agregar: Blog con artículos técnicos

### 2. **Palabras Clave Principales**
Tu sitio está optimizado para:
- "Fer Sanz"
- "Fer Sanz Desarrollo Web"
- "Desarrollador Web Full Stack"
- "Next.js developer"
- "React developer"

### 3. **Backlinks (Enlaces Entrantes)**
Agrega tu portfolio en:
- ✅ Perfil de LinkedIn
- ✅ Perfil de GitHub (README.md y website)
- ✅ Twitter/X bio
- ✅ Plataformas de freelance (Fiverr, Upwork, Workana)
- ✅ Directorios de desarrolladores
- ✅ Comunidades tech (Dev.to, Hashnode)

### 4. **Redes Sociales**
Comparte tu portfolio en:
- LinkedIn (post + actualizar perfil)
- Twitter/X
- Facebook
- Instagram (si aplica)

### 5. **Actualización Regular**
- Agrega nuevos proyectos
- Actualiza tecnologías
- Escribe blog posts (SEO orgánico)

---

## ⏱️ Timeline: ¿Cuándo apareceré en Google?

### Indexación Inicial
- **1-3 días**: Google descubre tu sitio
- **1-2 semanas**: Aparece en búsquedas de tu nombre
- **1-3 meses**: Mejora posicionamiento orgánico

### Acelerar Indexación
1. Envía sitemap en Google Search Console
2. Usa "Inspección de URL" y pide indexación manual
3. Comparte tu sitio en redes sociales
4. Crea backlinks desde tus perfiles

---

## 🧪 Verificar SEO (Herramientas)

### Antes de Lanzar
- [ ] https://www.seoptimer.com - Análisis SEO completo
- [ ] https://pagespeed.web.dev - Velocidad y performance
- [ ] https://search.google.com/test/mobile-friendly - Mobile friendly
- [ ] https://search.google.com/test/rich-results - Rich snippets

### Verificar Open Graph
- [ ] https://www.opengraph.xyz - Preview redes sociales
- [ ] https://cards-dev.twitter.com/validator - Twitter cards

---

## 📋 Checklist Final

### Pre-Lanzamiento
- [x] Metadata SEO configurado
- [x] robots.txt creado
- [x] sitemap.xml generado
- [x] Structured Data (JSON-LD) agregado
- [ ] Dominio personalizado configurado
- [ ] URLs actualizadas al dominio personalizado
- [ ] SSL activo (HTTPS)

### Post-Lanzamiento
- [ ] Google Search Console configurado
- [ ] Sitemap enviado a Google
- [ ] Vercel Analytics activado
- [ ] Portfolio agregado a LinkedIn
- [ ] Portfolio agregado a GitHub
- [ ] Compartido en redes sociales
- [ ] Creados backlinks básicos

### Mantenimiento (Mensual)
- [ ] Revisar Google Search Console
- [ ] Verificar posiciones en búsquedas
- [ ] Analizar tráfico en Analytics
- [ ] Actualizar contenido si es necesario

---

## 🆘 Problemas Comunes

### "Mi sitio no aparece en Google"
- Espera 1-2 semanas después del lanzamiento
- Verifica en Google Search Console que no haya errores
- Asegúrate de que robots.txt permite indexación
- Usa "Inspección de URL" para forzar indexación

### "El dominio no funciona"
- Verifica los registros DNS en tu proveedor
- Espera 24-48 horas para propagación
- Usa https://whatsmydns.net para verificar
- Contacta soporte de Vercel si persiste

### "No recibo tráfico"
- El SEO toma tiempo (1-3 meses)
- Crea backlinks
- Comparte en redes sociales
- Considera Google Ads para tráfico inmediato

---

## 📞 Recursos Útiles

- **Google Search Console**: https://search.google.com/search-console
- **Google PageSpeed**: https://pagespeed.web.dev
- **Schema.org**: https://schema.org
- **Vercel Docs**: https://vercel.com/docs
- **Next.js SEO**: https://nextjs.org/learn/seo/introduction-to-seo

---

## 🎉 ¡Todo Listo!

Tu sitio está completamente optimizado para SEO. Una vez que configures tu dominio personalizado:

1. Actualiza las URLs en el código
2. Haz push a Vercel
3. Registra en Google Search Console
4. Comparte en redes sociales
5. Espera a aparecer en Google (1-2 semanas)

**¡Éxito con "Fer Sanz Desarrollo Web"!** 🚀

