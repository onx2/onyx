import { defineComponent, h } from "vue"
import "./styles.scss"

export default defineComponent({
  name: "OnyxSurfaceBody",
  inheritAttrs: false,
  props: {},
  render() {
    return h("div", { class: "surface-body" }, this.$slots)
  }
})
