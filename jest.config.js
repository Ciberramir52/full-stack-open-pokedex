// jest.config.js
module.exports = {
  setupFiles: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['e2e-tests'],
  // ...other config options
}