module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./js/main.test.js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};