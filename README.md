<p align="center">
  <img src="https://github.com/nyxb/stylelint-config/blob/main/.github/assets/cover-github.png?raw=true" width="285" height="285" alt="stylelint-config logo">
  <br>

[![npm version][npm-version-src]][npm-version-href] 
[![npm downloads][npm-downloads-src]][npm-downloads-href] 
[![bundle][bundle-src]][bundle-href] 
[![License][license-src]][license-href]

# 🦾 @nyxb/stylelint-config

> Stylelint config with pre-configured for styled-components.

## 🚀 Usage

### 📥 Install:

```bash
pnpm add -D @nyxb/stylelint-config
```

### ⚙️ Config `.stylelintrc`

```json
{
  "extends": ["@nyxb/stylelint-config"]
}
```

## ➕ Add script for package.json

For example:
```json
{
  "scripts": {
    "lint:css": "stylelint .",
    "lint:css:fix": "stylelint . --fix"
  }
}
```

## ✨ Config VS Code auto fix
Install [VS Code Stylelint extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) and create .vscode/settings.json

```json
{
/**
   * STYLELINT SETUP
   */
  "stylelint.enable": true,
  "stylelint.validate": [
    "css",
    "scss",
    "typescript",
    "typescriptreact"
  ],
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

## 📚 FAQ

Prettier?
[Why I don't use Prettier](https://dev.to/nyxb/prettier-a-double-edged-sword-for-code-formatting-29o9)

3 indent?
[Why 3 indent is the best](https://dev.to/nyxb/welcome-to-the-magical-world-of-indentation-1fc)

### 🔍 How to lint & format Code?

I use [eslint](https://eslint.org) here is my [eslint-config](https://github.com/nyxb/eslint-config).

### 😍 I prefer XXX...

Sure, you can override the rules in your `.eslintrc` file.

<!-- stylelint-skip -->

```json
{
  "extends": "@nyxb",
  "rules": {
    // your rules...
  }
}
```
Or you can always fork this repo and make your own.

## 🔎 Check Also

- [nyxb/dotfiles](https://github.com/nyxb/dotfiles) - My dotfiles
- [nyxb/vscode-settings](https://github.com/nyxb/vscode-settings) - My VS Code settings

## 🤝💰 Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/nyxb/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/nyxb/static/sponsors.png'/>
  </a>
</p>

## 📜 License

[MIT](./LICENSE) 💚 License © 2023 [Dennis Ollhoff](https://github.com/nyxb)


<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/ext-name?style=flat&colorA=18181B&colorB=14F195
[npm-version-href]: https://npmjs.com/package/ext-name
[npm-downloads-src]: https://img.shields.io/npm/dm/ext-name?style=flat&colorA=18181B&colorB=14F195
[npm-downloads-href]: https://npmjs.com/package/ext-name
[bundle-src]: https://img.shields.io/bundlephobia/minzip/ext-name?style=flat&colorA=18181B&colorB=14F195
[bundle-href]: https://bundlephobia.com/result?p=ext-name
[license-src]: https://img.shields.io/github/license/nyxb/ext-name.svg?style=flat&colorA=18181B&colorB=14F195
[license-href]: https://github.com/nyxb/ext-name/blob/main/LICENSE
