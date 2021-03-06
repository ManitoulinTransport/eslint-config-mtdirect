const { resolve } = require
const resolveConfig = name => resolve(`eslint-config-${name}`)

module.exports = {
  parser: resolve('babel-eslint'),
  plugins: ['react', 'prettier'],
  extends: [
    resolveConfig('standard'),
    'plugin:react/recommended',
    resolveConfig('prettier'),
    resolveConfig('prettier/standard'),
  ],
  rules: {
    // Documentation says "If you are setting React as a global variable you can disable this rule"
    //   Next.js sets React as a global variable, so
    'react/react-in-jsx-scope': 'off',

    'prettier/prettier': [
      'error',
      {
        // Use a style roughly the same as `standard`.
        semi: false,
        singleQuote: true,

        // Since the ES spec was updated to allow trailing commas...
        //   let's use them consistently in all multi-line (a) array literals, (2) object literals & (3) function calls.
        //   This way when a line is added to or removed from the end, the line above it is not affected.
        trailingComma: 'all',
      },
    ],
  },
}
