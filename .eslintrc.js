module.exports = {
  plugins: ["react-native"],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "./eslintrc-tests.js",
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:react-native/all", // Enables all rules from react-native
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off",
    "react-native/sort-styles": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react-native/no-raw-text": [
      "error",
      {
        skip: [
          "Trans",
          "Typography.Title",
          "Typography.P1",
          "Typography.P2",
          "Typography.P3",
          "Typography.CallToAction",
        ],
      },
    ],
    "no-restricted-imports": ["error", { patterns: ["../*"] }],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    "react-native/react-native": true,
    "jest/globals": true,
  },
  // Glob based definitions
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx", "./jest.setup.after.js"],
      env: {
        jest: true,
      },
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};
