/**
 * Global Mocks
 * Mock implementations for browser APIs and external dependencies
 */

/**
 * Mock Next.js Image component
 */
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return { type: 'img', props: { src, alt, ...rest } };
  },
}));

/**
 * Mock Next.js Link component
 */
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => {
    return { type: 'a', props: { href, ...props, children } };
  },
}));

/**
 * Mock lucide-react icons
 * This prevents issues with SVG rendering in tests
 */
jest.mock('lucide-react', () => {
  const React = require('react');
  return new Proxy(
    {},
    {
      get: (target, prop) => {
        if (prop === '__esModule') return true;
        // Return a simple div with the icon name as data attribute
        return React.forwardRef((props: any, ref: any) =>
          React.createElement('div', {
            ...props,
            ref,
            'data-icon': prop,
            'data-testid': `icon-${String(prop).toLowerCase()}`,
          })
        );
      },
    }
  );
});

/**
 * Mock Resend for API tests
 */
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({
        id: 'mock-email-id',
        from: 'test@test.com',
        to: 'recipient@test.com',
      }),
    },
  })),
}));

export {};

