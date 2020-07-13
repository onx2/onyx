import { defineComponent, h } from "vue"
import "./styles.scss"

export default defineComponent({
  name: "OnyxSurfaceHeader",
  inheritAttrs: false,
  props: {},
  render() {
    return h(
      "div",
      {
        class: {
          "surface-header": true,
          [this.$parent.color]: this.$parent.color,
          rounded: this.$parent.rounded,
          blurb: this.$parent.blurb
        }
      },
      this.$slots
    )
  }
})
