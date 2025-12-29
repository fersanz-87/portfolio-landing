# Tests Documentation

Este directorio contiene todos los tests del proyecto, organizados por tipo y componente.

## Estructura de Tests

```
__tests__/
├── components/          # Tests de componentes React
│   ├── About.test.tsx
│   ├── Benefits.test.tsx
│   ├── Contact.test.tsx
│   ├── Footer.test.tsx
│   ├── Hero.test.tsx
│   ├── Navbar.test.tsx
│   ├── Projects.test.tsx
│   └── Services.test.tsx
├── api/                 # Tests de API routes
│   └── contact.test.ts
├── utils/              # Utilidades para testing
│   └── test-utils.tsx
├── setup/              # Configuración y mocks
│   └── mocks.ts
└── README.md
```

## Tipos de Tests

### Tests Unitarios
Tests que verifican el comportamiento de componentes individuales de forma aislada:
- **About.test.tsx**: Renderizado de stats y contenido
- **Benefits.test.tsx**: Tarjetas de beneficios
- **Footer.test.tsx**: Links y año dinámico
- **Hero.test.tsx**: Botones y scroll
- **Navbar.test.tsx**: Navegación y menú móvil
- **Projects.test.tsx**: Galería de proyectos
- **Services.test.tsx**: Tarjetas de servicios

### Tests de Integración
Tests que verifican la interacción entre múltiples partes del sistema:
- **Contact.test.tsx**: Formulario completo con validación y API
- **contact.test.ts**: API route con Resend y validaciones

## Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests con coverage
npm run test:coverage

# Ejecutar tests de un archivo específico
npm test Contact.test.tsx

# Ejecutar tests que coincidan con un patrón
npm test -- --testNamePattern="renders"
```

## Coverage Goals

El proyecto tiene los siguientes objetivos de cobertura:
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

## Convenciones de Testing

### Estructura de Tests
Cada archivo de test sigue esta estructura:

```typescript
describe('ComponentName', () => {
  describe('Feature Group', () => {
    it('should do something specific', () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

### Naming Conventions
- Los archivos de test usan el sufijo `.test.tsx` o `.test.ts`
- Los nombres de tests son descriptivos y en inglés
- Usar `describe` para agrupar tests relacionados
- Usar `it` o `test` para casos individuales

### Best Practices
1. **Arrange-Act-Assert**: Organizar tests en tres fases claras
2. **Test Isolation**: Cada test debe ser independiente
3. **Mock External Dependencies**: Mockear APIs, timers, etc.
4. **Test User Behavior**: Testear desde la perspectiva del usuario
5. **Accessibility**: Usar queries accesibles (getByRole, getByLabelText)

## Utilidades de Testing

### Custom Render
```typescript
import { render } from '@/__tests__/utils/test-utils';
```

### Mock Helpers
```typescript
import { 
  mockFetchSuccess, 
  mockFetchError,
  mockScrollEvent 
} from '@/__tests__/utils/test-utils';
```

## Debugging Tests

```bash
# Ejecutar tests con output detallado
npm test -- --verbose

# Ejecutar un solo test
npm test -- -t "test name"

# Ver coverage en el navegador
npm run test:coverage
open coverage/lcov-report/index.html
```

## Mocks Globales

Los siguientes elementos están mockeados globalmente:
- `window.scrollTo`
- `IntersectionObserver`
- `window.matchMedia`
- Componentes de Next.js (Image, Link)
- Iconos de lucide-react
- Resend API

## Troubleshooting

### Tests fallan por timeouts
Aumentar el timeout en el test:
```typescript
it('test name', async () => {
  // test code
}, 10000); // 10 segundos
```

### Errores con async/await
Usar `waitFor` para operaciones asíncronas:
```typescript
await waitFor(() => {
  expect(element).toBeInTheDocument();
});
```

### Errores con timers
Usar fake timers:
```typescript
jest.useFakeTimers();
jest.advanceTimersByTime(5000);
jest.useRealTimers();
```

## Recursos

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Next.js Testing](https://nextjs.org/docs/testing)

