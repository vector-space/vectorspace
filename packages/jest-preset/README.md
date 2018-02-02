# @vectorspace/jest-preset

[![npm](https://img.shields.io/npm/v/@vectorspace/jest-preset.svg)](https://www.npmjs.com/package/@vectorspace/jest-preset)
[![npm](https://img.shields.io/npm/dt/@vectorspace/jest-preset.svg)](https://www.npmjs.com/package/@vectorspace/jest-preset)
[![npm](https://img.shields.io/npm/l/@vectorspace/jest-preset.svg)](https://github.com/vector-space/vectorspace/blob/master/LICENSE)

Default jest configuration for @vectorspace packages.

## Getting Started

Install `@vectorspace/jest-preset` using `yarn`:

```shell
yarn add --dev @vectorspace/jest-preset
```

## Usage

Add the package as a preset for your jest configuration. In your `package.json`:

```json
"jest": {
  "preset": "@vectorspace/jest-preset"
}
```

*NOTE* If you have a custom `jest` config and you override `setupTestFrameworkScriptFile` in your config, you'll have to import the preset's setup function at the top of your `setupTestFrameworkScriptFile` file:

```javascript
import '@vectorspace/jest-preset/setup';
```
