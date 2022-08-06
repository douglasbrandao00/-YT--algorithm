const path = require('path');
const root = path.resolve(__dirname);
module.exports = {
  rootDir: root,
  testMatch: ['<rootDir>/**/__tests__/*.spec.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
};
