# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Eslint 額外設置
### @vue/eslint-config-airbnb
> vue eslint airbnb
> Vue 針對 Airbnb 的規範做調整

```js
// .eslintrc.cjs
module.exports = {
  root: true,
  extends: [
    // ...
    '@vue/eslint-config-airbnb',
  ],
};
```

### eslint-import-resolver-alias
> 讓 eslint 認得 @/路徑

```text
npm install --save-dev eslint-import-resolver-alias
```

```js
// .eslintrc.cjs
module.exports = {
  root: true,
  extends: [],
  parserOptions: {},
  // ...
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.vue'],
      },
    },
  },
};
```

### eslint-plugin-import
> 檢查 import 相關規範
> 主要修正 import.meta.url 紅字、import檔案是否存在、import順序...等

```text
npm install --save-dev eslint-plugin-import
```

### eslintrc.cjs 新增 import/core-modules
> Vite 預設環境下 vite、@vitejs/plugin-vue
> 是安裝在 devDependencies 中
> 讓 eslint 知道這些套件可裝在 devDependencies

```js
// .eslintrc.cjs
module.exports = {
  settings: {
    // ...
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
    ],
  },
};
```

### eslint-config-airbnb-typescript
> 擴展airbnb的規則,讓ts副檔名可不寫
> 參考
> https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions

```text
npm install -D eslint-config-airbnb-typescript
```

```js
// .eslintrc.cjs
module.exports = {
  extends: [
    // ...
    'airbnb',
    'airbnb-typescript/base'
  ]
};
```

## @types/node
> 解決 Cannot find type definition file for 'node'
> 套件定義了node相關設定
> 參考
> https://stackoverflow.com/questions/43542710/buildcannot-find-type-definition-file-for-node
> https://bobbyhadz.com/blog/typescript-cannot-find-type-definition-file-for-node

```text
npm install --save-dev @types/node
```

# jsconfig.ts 設置
```typescript
"compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "jsx": "preserve",
    "strict": true,
    "allowJs": true,
    "types": [
      "node",
      "element-plus/global"
    ]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "baseUrl": ".",
  "lib": ["esnext", "dom"],
  "exclude": ["node_modules"],
  "paths": { "@/*": ["src/*"] },
```

# Icon使用方式
> 因已在vite.config.ts設置自動導入,
> 故使用時毋須再次人工引入
> icon名稱组成：{prefix}-{collection}-{icon}
> 參考: https://juejin.cn/post/7169485227188813860

使用方式:
```javascript
<i-ep-edit />
<IEpEdit />
```
