import { defineComponent, h } from "vue"
import "./styles.scss"

export default defineComponent({
  name: "OnyxSurfaceFooter",
  inheritAttrs: false,
  props: {},
  render() {
    return h("div", { class: "surface-footer" }, this.$slots)
  }
})
