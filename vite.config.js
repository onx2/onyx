/**
 * Check out the following link for more info:
 *
 * https://github.com/vuejs/vite/blob/master/src/node/config.ts
 */
module.exports = {
  // base: "/", // default "/"
  // minify: "terser", // default "terser"
  /**
   * Configure dep optimization behavior.
   *
   * Example `vite.config.js`:
   * ``` js
   * module.exports = {
   *   optimizeDeps: {
   *     exclude: ['dep-a', 'dep-b']
   *   }
   * }
   * ```
   */
  // optimizeDeps: {},
  /**
   * Whether to generate sourcemap
   * @default false
   */
  sourcemap: true
  /**
   * Will be passed to rollup.rollup()
   *
   * https://rollupjs.org/guide/en/#big-list-of-options
   */
  // rollupInputOptions: {},
  /**
   * Will be passed to bundle.generate()
   *
   * https://rollupjs.org/guide/en/#big-list-of-options
   */
  // rollupOutputOptions: {},
  /**
   * Will be passed to rollup-plugin-vue
   *
   * https://github.com/vuejs/rollup-plugin-vue/blob/next/src/index.ts
   */
  // rollupPluginVueOptions: {}
}
