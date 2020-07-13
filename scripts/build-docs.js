// eslint-disable-next-line @typescript-eslint/no-var-requires
const { build } = require("vite")

;(async () => {
  // All options are optional.
  // check out `src/node/build/index.ts` for full options interface.
  await build({
    outDir: "dist/docs",
    rollupInputOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      input: "docs/main.ts"
    },
    rollupOutputOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
    },
    rollupPluginVueOptions: {
      // https://github.com/vuejs/rollup-plugin-vue/tree/next#options
    }
    // ...
  })
})()
