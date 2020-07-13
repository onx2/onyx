import { defineComponent, h } from "vue"
import "./styles.scss"

export default defineComponent({
  name: "OnyxSurfaceHeader",
  inheritAttrs: false,
  props: {},
  render() {
    return h("div", { class: "surface-header" }, this.$slots)
  }
})
