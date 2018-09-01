# electron-quick-start-typescript-vue

Base on [https://github.com/electron/electron-quick-start-typescript](https://github.com/electron/electron-quick-start-typescript).

## To Use

From your command line:

```bash
# Clone this repository
git clone https://github.com/yantze/electron-quick-start-typescript-vue

# Go into the repository
cd electron-quick-start-typescript-vue

# Install dependencies
npm install

# Run the app
npm start
```

## Support vscode debug for `Main Process`
Check detail in `.vscode`

## Support HMR hot reload for vue
```
npm i -D electron-webpack-vue electron-webpack-ts
```

## Strict mode
Add lib section for es2015, or not will case can not find module fs.
```
{
  "extends": "./node_modules/electron-webpack/tsconfig-base.json",
  "compilerOptions": {
    "module": "esnext",
    "outDir": "dist",
    "baseUrl": ".",
    "lib": [
      "es2015",
    ],
    "paths": {
      "*": [
        "node_modules/*"
      ]
    }
  },
  "include": [
    "src/**/*",
    "static/**/*",
  ]
}
```

## Renderer.ts Entry
Use this instead of inline template
```js
// src/renderer/index.ts
import Vue from "vue";
import App from "./components/App.vue";

new Vue({
    el: "#app",
    render: h => h(App)
});
```

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
