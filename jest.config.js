module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    '*.js',
    '**/*.js',
    '!**/coverage/**/*.js',
    '!out/**/*.js',
    '!next.config.js',
    '!jest.config.js',
    '!webpack.config.js'
  ]
}
