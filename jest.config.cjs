/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFiles: ['./jest.setup.ts'],
    moduleNameMapper: {
      "\\.(css|sass)$": "identity-obj-proxy",
    }
  
  };