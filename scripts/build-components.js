/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require("vite")

;(async () => {
  // All options are optional.
  // check out `src/node/build/index.ts` for full options interface.
  await build({
    outDir: "dist/components",
    rollupInputOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      input: "src/components/index.ts",
      external: ["vue", "vue-router"]
    },
    rollupOutputOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
      format: "esm",
      esModule: true,
      exports: "named",
      chunkFileNames: "[name]-[hash].esm.js"
    },
    rollupPluginVueOptions: {
      // https://github.com/vuejs/rollup-plugin-vue/tree/next#options
    }
  })

  // Loop through components in package, run tsc on them
  // output into a raw directory
})()
