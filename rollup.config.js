import typescript from "rollup-plugin-typescript2"
import scss from "rollup-plugin-sass"
import { writeFileSync } from "fs"
import prettier from "prettier"

import pkg from "./package.json"

const input = "src/components/index.ts"

const plugins = [
  scss({
    output: function (_styles, styleNodes) {
      const fileNames = []
      styleNodes.forEach(({ id, content }) => {
        const fileName = id.replace("/styles.scss", "").split("components/")[1]
        fileNames.push(fileName)

        writeFileSync(`dist/${fileName}.css`, content)
      })

      // Output all styles together
      writeFileSync(
        `dist/styles.css`,
        prettier.format(
          fileNames.map((name) => `@import "./${name}.css"`).join(";"),
          {
            parser: "css"
          }
        )
      )
    }
  }),
  typescript({
    typescript: require("typescript")
  })
]

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "es",
      exports: "named",
      sourcemap: true
    },
    plugins
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    plugins
  }
]
