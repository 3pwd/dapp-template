const baseConfig = require('@3pwd/prettier-config')

module.exports = {
  ...baseConfig,
  plugins: ['prettier-plugin-solidity'],
  overrides: [
    ...baseConfig.overrides,
    {
      files: ['contracts/**/*.sol'],
      options: {
        parser: 'solidity-parse',
      },
    },
  ],
}
