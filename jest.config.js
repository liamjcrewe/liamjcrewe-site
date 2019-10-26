module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  collectCoverageFrom: [
    '*.js',
    '**/*.js',
    // ignore jest lib files
    '!**/coverage/**/*.js',
    '!jest.config.js',
    // ignore nextjs lib files
    '!out/**/*.js',
    '!next.config.js',
    // ignore nextjs magic pages
    // these are copied almost exactly from official nextjs docs and examples
    '!pages/_app.js',
    '!pages/_document.js'
  ]
}
