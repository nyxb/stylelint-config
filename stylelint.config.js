/**
 * NOTE: .vscode/settings.json contains additional configuration to make
 * stylelint work smoothly with VS Code.
 *
 * ## Ressources
 * - @see https://github.com/stylelint/awesome-stylelint
 * - @see https://github.com/hipstersmoothie/stylelint-formatter-github
 *
 * @type {import('stylelint').Config}
 */
module.exports = {
   ignoreFiles: [
      './**/__generated__/**/*',
      './**/__snapshots__/**/*',
      './**/build/**/*',
      './**/coverage/**/*',
      './**/node_modules/**/*',
      './**/public/**',
      './**/storybook-static/**/*',
   ],
   extends: [
      // @see https://github.com/stylelint/stylelint-config-standard
      'stylelint-config-standard',
   ],
   overrides: [
      {
         files: ['./**/*.css', './**/*.scss', './**/*.tsx', './**/*.ts', './**/*.js', './**/*.jsx'],
         customSyntax: 'postcss-styled-syntax',
         rules: {
            'indentation': null,
            'color-function-notation': 'modern',
         },
      },
   ],
}
