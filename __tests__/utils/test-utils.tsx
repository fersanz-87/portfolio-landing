/**
 * Test Utilities
 * Custom render functions and test helpers
 * 
 * This file provides utility functions for testing.
 * It does not contain tests itself.
 */
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Prevent Jest from treating this as a test suite
if (typeof describe === 'undefined') {
  // This is just to satisfy Jest's requirement
  // The file is meant to be imported, not run as a test
}

/**
 * Custom render function that wraps components with providers if needed
 * Can be extended in the future to include context providers, routers, etc.
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, { ...options });
};

/**
 * Wait for a specific amount of time
 * Useful for testing animations or delayed effects
 */
export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Mock fetch response helper
 */
export const mockFetchSuccess = (data: any) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => data,
  } as Response);
};

/**
 * Mock fetch error helper
 */
export const mockFetchError = (error: string, status: number = 500) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
    status,
    json: async () => ({ error }),
  } as Response);
};

/**
 * Mock fetch network error helper
 */
export const mockFetchNetworkError = () => {
  global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));
};

/**
 * Create a mock scroll event
 */
export const mockScrollEvent = (scrollY: number) => {
  Object.defineProperty(window, 'scrollY', {
    writable: true,
    configurable: true,
    value: scrollY,
  });
  
  Object.defineProperty(window, 'pageYOffset', {
    writable: true,
    configurable: true,
    value: scrollY,
  });
  
  window.dispatchEvent(new Event('scroll'));
};

/**
 * Create a mock element for querySelector
 */
export const mockQuerySelector = (top: number = 500) => {
  const mockElement = {
    getBoundingClientRect: () => ({ top }),
  };
  
  jest.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);
  
  return mockElement;
};

// Re-export everything from React Testing Library
export * from '@testing-library/react';
export { customRender as render };

