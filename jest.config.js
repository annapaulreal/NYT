const jestConfig = {
  testEnvironment: 'jest-environment-jsdom', // ✅ not just "jsdom"
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
};

export default jestConfig;
