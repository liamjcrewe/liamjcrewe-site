module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
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
