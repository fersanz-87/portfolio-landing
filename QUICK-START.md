# 🚀 Guía Rápida de Despliegue

Esta es una versión resumida para desplegar rápidamente. Para la guía completa, consulta [DEPLOYMENT.md](./DEPLOYMENT.md).

## ⚡ Despliegue en 10 Minutos

### Paso 1: Preparar Variables de Entorno (2 min)

1. Ve a [resend.com/api-keys](https://resend.com/api-keys)
2. Copia tu API key
3. Anota tu email donde recibirás mensajes

### Paso 2: Subir a GitHub (3 min)

```bash
# En la terminal, dentro de tu proyecto:
cd /Users/fersanz/Desktop/portfolio-landing

# Inicializar Git (si no lo has hecho)
git init
git add .
git commit -m "Initial commit: Portfolio con formulario de contacto"

# Crear repositorio en GitHub y luego:
git remote add origin https://github.com/TU-USUARIO/portfolio-landing.git
git branch -M main
git push -u origin main
```

### Paso 3: Desplegar en Vercel (5 min)

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Add New..."** → **"Project"**
3. Selecciona tu repositorio `portfolio-landing`
4. **ANTES de hacer deploy**, agrega estas variables de entorno:

```
RESEND_API_KEY=tu_api_key_aqui
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=tu-email@ejemplo.com
```

5. Click en **"Deploy"**
6. Espera 2 minutos

### ✅ ¡Listo!

Tu portfolio estará disponible en: `https://tu-proyecto.vercel.app`

---

## 📋 Checklist Pre-Despliegue

Antes de desplegar, asegúrate de personalizar:

- [ ] `app/layout.tsx` - Tu nombre y descripción en metadata
- [ ] `components/Hero.tsx` - Tu nombre y número de WhatsApp
- [ ] `components/About.tsx` - Tu biografía y ciudad
- [ ] `components/Projects.tsx` - Tus proyectos reales
- [ ] `components/Contact.tsx` - Tu email y WhatsApp
- [ ] `components/Footer.tsx` - Links de tus redes sociales

---

## 🔄 Actualizar tu Portfolio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel desplegará automáticamente los cambios en ~2 minutos.

---

## 🌐 Dominio Personalizado (Opcional)

### Comprar Dominio

Opciones recomendadas:
- [Namecheap](https://namecheap.com) - ~$10/año
- [Google Domains](https://domains.google.com) - ~$12/año
- [Vercel Domains](https://vercel.com/domains) - Integración directa

### Conectar a Vercel

1. En Vercel: **Settings** → **Domains**
2. Agregar tu dominio
3. Configurar DNS según instrucciones de Vercel
4. Esperar 24-48 horas (usualmente menos)

---

## 📊 Agregar Analytics (Opcional)

### Vercel Analytics (Gratis)

```bash
npm install @vercel/analytics
```

En `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react'

// Agregar en el return:
<Analytics />
```

Commit y push:

```bash
git add .
git commit -m "Add Vercel Analytics"
git push
```

---

## 🎯 Primeros Pasos Post-Despliegue

### Día 1:
- [ ] Verifica que el formulario funcione
- [ ] Prueba en móvil y desktop
- [ ] Comparte en LinkedIn
- [ ] Actualiza tu perfil de LinkedIn con el link

### Semana 1:
- [ ] Crea perfil en Fiverr con link a tu portfolio
- [ ] Crea perfil en Upwork con link a tu portfolio
- [ ] Comparte en grupos de Facebook/WhatsApp
- [ ] Contacta 5 empresas locales

### Mes 1:
- [ ] Escribe 2 artículos en LinkedIn
- [ ] Agrega más proyectos
- [ ] Pide testimonios
- [ ] Optimiza basado en feedback

---

## 🆘 Problemas Comunes

### No recibo emails del formulario

1. Verifica variables de entorno en Vercel
2. Revisa dashboard de Resend
3. Verifica carpeta de spam
4. Prueba con otro email

### Cambios no se reflejan

1. Espera 2-3 minutos después del push
2. Limpia caché del navegador (Cmd+Shift+R)
3. Verifica en Vercel que el deploy fue exitoso

### Error de build

```bash
# Prueba localmente:
npm run build

# Si funciona localmente pero falla en Vercel:
# - Verifica las variables de entorno
# - Revisa los logs en Vercel
```

---

## 📞 Necesitas Ayuda?

- **Guía Completa**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Docs Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Docs Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Docs Resend**: [resend.com/docs](https://resend.com/docs)

---

## 🎉 ¡Éxito!

Una vez desplegado:
1. Comparte tu portfolio en todas tus redes
2. Agrégalo a tu firma de email
3. Úsalo en tus perfiles de freelance
4. Compártelo en grupos de networking

**¡Tu portfolio está listo para atraer clientes! 🚀**

