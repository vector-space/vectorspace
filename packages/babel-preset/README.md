# @vectorspace/babel-preset

[![npm](https://img.shields.io/npm/v/@vectorspace/babel-preset.svg)](https://www.npmjs.com/package/@vectorspace/babel-preset)
[![npm](https://img.shields.io/npm/dt/@vectorspace/babel-preset.svg)](https://www.npmjs.com/package/@vectorspace/babel-preset)
[![npm](https://img.shields.io/npm/l/@vectorspace/babel-preset.svg)](https://github.com/vector-space/vectorspace/blob/master/LICENSE)

## Getting Started

Install `@vectorspace/babel-preset` using `yarn`:

```shell
yarn add --dev @vectorspace/babel-preset
```

## Usage

In your `.babelrc` or `package.json`, add `jolt` as a preset:

```json
"babel": {
  "presets": [
    "@vectorspace/babel-preset"
  ]
}
```

### `target`

By default, this will not target any environment. By passing the `target` option, you can specify if this is a `node`, `react-native`, or `web` package. This will enable the `babel-preset-env`, `babel-preset-react-native`, and both respectively.

```json
"babel": {
  "presets": [
    ["@vectorspace/babel-preset", {"target": "node"}]
  ]
}
```
