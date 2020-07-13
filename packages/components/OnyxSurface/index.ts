import { defineComponent, h, mergeProps } from "vue"
import "./styles.css"

export default defineComponent({
  name: "OnyxSurface",
  props: {
    rounded: {
      type: Boolean,
      default: false
    },
    fill: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number
    },
    color: {
      type: String as () => "red" | "blue" | "default" | "green"
    }
  },
  render() {
    const child = h(
      "div",
      {
        class: {
          "surface-inner": true,
          rounded: this.$props.rounded,
          [this.$props.color]: this.$props.color
        }
      },
      this.$slots
    )

    return h(
      "div",
      mergeProps(this.$props, {
        class: {
          surface: true,
          fill: this.$props.fill
        },
        style: {
          width: this.$props.width ? `${this.$props.width}px` : undefined
        }
      }),
      child
    )
  }
})
