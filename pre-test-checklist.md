# Pre-Deploy Testing Checklist

Usa esta checklist antes de cada despliegue a producción para asegurar la calidad del código.

## ✅ Tests Automatizados

```bash
# 1. Ejecutar todos los tests
npm test

# 2. Verificar cobertura de código
npm run test:coverage

# 3. Verificar linting
npm run lint
```

### Criterios de Aceptación
- [ ] Todos los tests pasan (75/75 tests)
- [ ] Cobertura de componentes al 100%
- [ ] Sin errores de linting
- [ ] Sin warnings críticos

## ✅ Tests Manuales de Componentes

### Navbar
- [ ] El logo es visible
- [ ] Los links de navegación funcionan
- [ ] El menú móvil abre y cierra correctamente
- [ ] El navbar cambia de estilo al hacer scroll
- [ ] El smooth scroll funciona en todos los links

### Hero
- [ ] El contenido principal es visible
- [ ] El botón "Iniciar Proyecto" scrollea a contacto
- [ ] El botón "Ver Servicios" scrollea a servicios
- [ ] Las animaciones de fondo funcionan
- [ ] El indicador de scroll está visible

### Services
- [ ] Se muestran los 6 servicios
- [ ] Los iconos son visibles
- [ ] El texto es legible
- [ ] Las tarjetas tienen hover effect

### Projects
- [ ] Se muestran los 6 proyectos
- [ ] Los tags de tecnología son visibles
- [ ] Los links "Ver proyecto" funcionan
- [ ] Las tarjetas tienen hover effect

### About
- [ ] Las estadísticas son visibles (5+, 50+, 100%)
- [ ] El texto es legible
- [ ] La ubicación se muestra correctamente
- [ ] Los iconos de stats son visibles

### Benefits
- [ ] Se muestran los 3 beneficios
- [ ] Los iconos son visibles
- [ ] El texto es legible

### Contact
- [ ] El formulario es visible
- [ ] Los campos tienen labels correctos
- [ ] La validación funciona (campos requeridos)
- [ ] El email se valida correctamente
- [ ] El botón de envío funciona
- [ ] Se muestra el estado de carga
- [ ] El mensaje de éxito aparece
- [ ] El mensaje de error se maneja correctamente
- [ ] El link de email funciona

### Footer
- [ ] Los links de navegación funcionan
- [ ] El año actual se muestra correctamente
- [ ] La ubicación es visible

## ✅ Tests de Responsividad

### Desktop (1920x1080)
- [ ] Todos los componentes se ven bien
- [ ] El espaciado es correcto
- [ ] No hay scroll horizontal

### Tablet (768x1024)
- [ ] El layout se adapta correctamente
- [ ] El menú móvil funciona
- [ ] Las tarjetas se reorganizan

### Mobile (375x667)
- [ ] Todo el contenido es accesible
- [ ] El texto es legible
- [ ] Los botones son clickeables
- [ ] El formulario funciona
- [ ] El menú móvil funciona

## ✅ Tests de Navegadores

- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (última versión)
- [ ] Edge (última versión)

## ✅ Tests de Rendimiento

```bash
# Build de producción
npm run build

# Verificar tamaño de bundles
# Los archivos deben estar en .next/static/
```

### Criterios
- [ ] Build exitoso sin errores
- [ ] Sin warnings críticos de Next.js
- [ ] Tamaño de bundles razonable

## ✅ Tests de Accesibilidad

### Navegación por Teclado
- [ ] Tab funciona en todos los elementos interactivos
- [ ] Enter activa botones y links
- [ ] Escape cierra el menú móvil

### Screen Readers
- [ ] Todos los inputs tienen labels
- [ ] Los botones tienen textos descriptivos
- [ ] Las imágenes tienen alt text (cuando aplique)

## ✅ Configuración de Producción

### Variables de Entorno
- [ ] RESEND_API_KEY está configurada
- [ ] CONTACT_EMAIL está configurada
- [ ] Todas las variables necesarias están en Vercel

### Archivos de Configuración
- [ ] next.config.js está correcto
- [ ] tailwind.config.ts está correcto
- [ ] tsconfig.json está correcto

## ✅ Pre-Deploy Final

- [ ] Todos los tests automatizados pasan
- [ ] Todos los tests manuales pasan
- [ ] El build de producción funciona
- [ ] Las variables de entorno están configuradas
- [ ] El código está commiteado
- [ ] El branch está actualizado con main

## 🚀 Listo para Desplegar

Si todos los checks están completos, el proyecto está listo para desplegarse a producción.

```bash
# Desplegar a Vercel
git push origin main
# O usar: vercel --prod
```

## 📝 Post-Deploy

Después del despliegue, verifica:
- [ ] El sitio carga correctamente
- [ ] El formulario de contacto funciona
- [ ] No hay errores en la consola del navegador
- [ ] El sitio es accesible desde diferentes dispositivos
- [ ] El rendimiento es bueno (Lighthouse > 90)

