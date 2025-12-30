# 🎨 Portfolio Landing Page

Landing page profesional con formulario de contacto funcional, construida con Next.js 14, TypeScript, React y Tailwind CSS.

🚀 **Desplegado en Vercel**

## ✨ Características

- 🎯 Diseño moderno y responsivo
- 📧 Formulario de contacto con integración de Resend
- 🚀 Optimizado para SEO
- ⚡ Rendimiento excepcional con Next.js 14
- 🎨 Animaciones suaves y UI profesional
- 📱 Totalmente responsive (móvil, tablet, desktop)
- 🔒 Validación de formularios
- 💬 Integración con WhatsApp

## 🚀 Inicio Rápido

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus credenciales:

```env
RESEND_API_KEY=tu_api_key_de_resend
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=tu-email@ejemplo.com
```

**Obtener API Key de Resend:**
1. Crea una cuenta en [resend.com](https://resend.com)
2. Ve a [API Keys](https://resend.com/api-keys)
3. Crea una nueva API key
4. Cópiala en tu archivo `.env.local`

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ⚙️ Personalización

### Información Personal

Actualiza estos archivos con tu información:

- **`app/layout.tsx`** (líneas 8-11) - Metadata SEO
- **`components/Hero.tsx`** (líneas 48, 83) - Tu nombre y WhatsApp
- **`components/About.tsx`** (líneas 18-27, 56) - Biografía y ciudad
- **`components/Contact.tsx`** (líneas 141, 153) - Email y WhatsApp
- **`components/Footer.tsx`** (líneas 60-90) - Redes sociales

### Proyectos

Edita `components/Projects.tsx` línea 5 con tus proyectos reales:

```typescript
const projects = [
  {
    title: "Tu Proyecto",
    description: "Descripción del proyecto",
    image: "/ruta-a-imagen.jpg",
    tags: ["React", "Next.js", "TypeScript"],
    link: "https://tu-proyecto.com"
  },
  // ... más proyectos
]
```

### Servicios

Personaliza tus servicios en `components/Services.tsx`.

### Colores y Estilos

Edita `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores personalizados
      }
    }
  }
}
```

## 📦 Despliegue a Producción

### Opción 1: Vercel (Recomendado)

Vercel es la plataforma creada por el equipo de Next.js y ofrece la mejor experiencia.

#### Pasos Rápidos:

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/portfolio-landing.git
   git push -u origin main
   ```

2. **Despliega en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Import Project"
   - Selecciona tu repositorio
   - Configura las variables de entorno:
     - `RESEND_API_KEY`
     - `FROM_EMAIL`
     - `TO_EMAIL`
   - Click en "Deploy"

3. **¡Listo!** Tu portfolio estará en línea en ~2 minutos.

#### Guía Detallada:

Para una guía completa paso a paso, consulta **[DEPLOYMENT.md](./DEPLOYMENT.md)** que incluye:
- ✅ Preparación del proyecto
- ✅ Configuración de GitHub
- ✅ Despliegue en Vercel
- ✅ Configuración de dominio personalizado
- ✅ SEO y optimización
- ✅ Estrategias de marketing
- ✅ Analytics y monitoreo
- ✅ Solución de problemas

### Opción 2: Otras Plataformas

También puedes desplegar en:
- **Netlify**: Similar a Vercel
- **Railway**: Con soporte para bases de datos
- **DigitalOcean App Platform**: Más control del servidor

## 🛠️ Tecnologías

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Emails**: [Resend](https://resend.com/)
- **Despliegue**: [Vercel](https://vercel.com/)

## 📁 Estructura del Proyecto

```
portfolio-landing/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API endpoint para formulario
│   ├── layout.tsx                # Layout principal y metadata
│   ├── page.tsx                  # Página principal
│   └── globals.css               # Estilos globales
├── components/
│   ├── Hero.tsx                  # Sección hero
│   ├── About.tsx                 # Sección sobre mí
│   ├── Services.tsx              # Sección servicios
│   ├── Benefits.tsx              # Sección beneficios
│   ├── Projects.tsx              # Sección proyectos
│   ├── Contact.tsx               # Formulario de contacto
│   ├── Navbar.tsx                # Barra de navegación
│   └── Footer.tsx                # Pie de página
├── types/
│   └── index.ts                  # Tipos TypeScript
├── public/                       # Archivos estáticos
├── .env.example                  # Ejemplo de variables de entorno
├── DEPLOYMENT.md                 # Guía completa de despliegue
└── README.md                     # Este archivo
```

## 🧪 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm start            # Inicia servidor de producción

# Utilidades
npm run lint         # Ejecuta linter
```

## 🔧 Configuración Avanzada

### Agregar Google Analytics

1. Obtén tu Measurement ID de Google Analytics
2. Agrega en `app/layout.tsx`:

```typescript
import Script from 'next/script'

// En el componente:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

### Agregar Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// En app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

// En el return:
<Analytics />
```

## 🐛 Solución de Problemas

### El formulario no envía emails

1. Verifica que las variables de entorno estén configuradas correctamente
2. Revisa que tu API key de Resend sea válida
3. Verifica que el `FROM_EMAIL` esté verificado en Resend
4. Revisa la consola del navegador para errores

### Error de build

```bash
# Limpia la caché y reinstala dependencias
rm -rf .next node_modules
npm install
npm run build
```

### Problemas con TypeScript

```bash
# Verifica errores de TypeScript
npx tsc --noEmit
```

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de Resend](https://resend.com/docs)
- [Guía de Despliegue Completa](./DEPLOYMENT.md)

## 🤝 Contribuciones

Este es un proyecto personal, pero si encuentras algún bug o tienes sugerencias, siéntete libre de abrir un issue.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🎯 Próximos Pasos

1. ✅ Personaliza toda tu información
2. ✅ Configura las variables de entorno
3. ✅ Prueba el formulario localmente
4. ✅ Sube a GitHub
5. ✅ Despliega en Vercel
6. ✅ Configura un dominio personalizado
7. ✅ Comparte en redes sociales
8. ✅ ¡Comienza a atraer clientes!

**Para una guía detallada de cada paso, consulta [DEPLOYMENT.md](./DEPLOYMENT.md)**

---

**¿Necesitas ayuda?** Abre un issue en el repositorio.

**¡Buena suerte con tu portfolio! 🚀**
