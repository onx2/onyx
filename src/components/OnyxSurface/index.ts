import { defineComponent, h, mergeProps } from "vue"
import { getEnumKeys } from "../../utils"
import { Colors } from "../types"
import "./styles.scss"

export namespace OnyxSurface {
  export type Props = {
    rounded?: boolean
    fill?: boolean
    width?: number
    color?: keyof typeof Colors
    blurb?: boolean
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
      default: "default",
      validator: (prop: keyof typeof Colors): boolean =>
        getEnumKeys(Colors).includes(prop)
    },
    blurb: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const { color, fill, rounded, width }: OnyxSurface.Props = this.$props

    const child = h(
      "div",
      {
        class: {
          "surface-inner": true,
          rounded,
          [color]: true
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
