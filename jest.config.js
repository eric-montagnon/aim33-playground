const baseConfig = require('jest-expo/jest-preset');

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    ...baseConfig,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
      ...baseConfig.transform,
      '^.+\\.(js|ts)$': '<rootDir>/node_modules/babel-jest',
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
    cacheDirectory: '.cache/jest',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    coveragePathIgnorePatterns: ['/node_modules/'], 
    clearMocks: true,
    // fakeTimers: {
    //   enableGlobally: true
    // },
    watchPlugins: [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname",
    ],
    reporters: ["default", "github-actions"],
    preset: "jest-expo",
    transformIgnorePatterns: [
      "node_modules/(?!(jest-)?@react-native|react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|@sentry/.*|sentry-expo|native-base)",
    ],
    setupFiles: [
      './node_modules/@testing-library/react-native/jest-preset/save-promise.js',
      ...baseConfig.setupFiles,
      './jest.setup.js',
      './node_modules/react-native-gesture-handler/jestSetup.js',
      './node_modules/@testing-library/react-native/jest-preset/restore-promise.js',
    ],
    setupFilesAfterEnv: ['./jestCustomMatchers.ts', './jest.setup.after.js', './jest.setup.js',],
  };
  
  module.exports = config;
  