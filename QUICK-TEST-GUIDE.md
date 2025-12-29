# 🚀 Guía Rápida de Testing

## Comandos Esenciales

```bash
# ✅ Ejecutar todos los tests
npm test

# 🔍 Ver cobertura de código
npm run test:coverage

# 👀 Modo watch (desarrollo)
npm run test:watch

# 🏗️ Build (ejecuta tests automáticamente)
npm run build
```

## Verificación Rápida Pre-Deploy

```bash
# 1. Tests
npm test

# 2. Linting
npm run lint

# 3. Build
npm run build
```

Si los 3 comandos pasan ✅, estás listo para desplegar!

## Estructura de Tests

```
__tests__/
├── components/     # 8 componentes, 75 tests
├── api/           # Tests de API (preparados)
├── utils/         # Utilidades de testing
└── setup/         # Mocks y configuración
```

## Resultados Esperados

```
✅ Test Suites: 8 passed
✅ Tests:       75 passed
✅ Coverage:    100% componentes
✅ Time:        ~2.5 segundos
```

## Tests por Componente

| Componente | Tests | Tiempo |
|------------|-------|--------|
| About | 7 | ~100ms |
| Benefits | 6 | ~100ms |
| Contact | 22 | ~1.2s |
| Footer | 6 | ~150ms |
| Hero | 11 | ~200ms |
| Navbar | 10 | ~250ms |
| Projects | 10 | ~300ms |
| Services | 8 | ~150ms |

## Solución de Problemas

### Tests fallan
```bash
# Limpiar cache
npm test -- --clearCache

# Reinstalar dependencias
rm -rf node_modules
npm install
```

### Coverage bajo
```bash
# Ver reporte detallado
npm run test:coverage
open coverage/lcov-report/index.html
```

### Tests lentos
```bash
# Ejecutar en paralelo
npm test -- --maxWorkers=4
```

## Documentación Completa

- 📖 `TESTING.md` - Documentación detallada
- ✅ `pre-test-checklist.md` - Checklist pre-deploy
- 📊 `TEST-SUMMARY.md` - Resumen de implementación
- 📚 `__tests__/README.md` - Guía de tests

## Contacto

**Fer Sanz**  
Email: fersanzdev@gmail.com  
León, Gto., México

