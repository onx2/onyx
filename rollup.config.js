import typescript from "@rollup/plugin-typescript"
import scss from "rollup-plugin-sass"
import { existsSync, writeFileSync, mkdirSync, rmdirSync } from "fs"
import prettier from "prettier"

import pkg from "./package.json"

const input = "src/components/index.ts"

const plugins = [
  scss({
    output: function (_styles, styleNodes) {
      // Remove pre-existing build
      if (existsSync("dist")) {
        rmdirSync("dist", { recursive: true })
      }

      // Create the dist folder
      mkdirSync("dist")

      // Store the grenerated file names for single css entry point
      const fileNames = []

      // Write a .css file for each component and store the file name
      styleNodes.forEach(({ id, content }) => {
        const fileName = id.replace("/styles.scss", "").split("components/")[1]
        fileNames.push(fileName)

        writeFileSync(`dist/${fileName}.css`, content)
      })

      // Write a single .css file for all components
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
  typescript()
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
