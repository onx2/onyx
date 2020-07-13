import { defineComponent, h, mergeProps } from "vue"
import "./styles.scss"

export namespace OnyxSurface {
  export type Props = {
    rounded?: boolean
    fill?: boolean
    width?: number
    color?: "red" | "blue" | "default" | "green"
  }
}

export default defineComponent({
  name: "OnyxSurface",
  props: {
    rounded: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number
    },
    color: {
      type: String,
      defualt: "default"
    }
  },
  render() {
    const { color, fill, rounded, width } = this.$props as OnyxSurface.Props

    const child = h(
      "div",
      {
        class: {
          "surface-inner": true,
          rounded,
          [color]: color
        }
      },
      this.$slots
    )

    return h(
      "div",
      mergeProps(this.$props, {
        class: {
          surface: true,
          fill
        },
        style: {
          width: width ? `${width}px` : undefined
        }
      }),
      child
    )
  }
})
