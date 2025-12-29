// Learn more: https://github.com/testing-library/jest-dom
require('@testing-library/jest-dom')

// Polyfill for Request/Response in Node environment
const nodeFetch = require('node-fetch')
if (!global.Request) {
  global.Request = nodeFetch.Request
}
if (!global.Response) {
  global.Response = nodeFetch.Response
}
if (!global.Headers) {
  global.Headers = nodeFetch.Headers
}

// Mock window.scrollTo
global.scrollTo = jest.fn()

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return []
  }
  unobserve() {}
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

