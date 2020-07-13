import { defineComponent, h } from "vue"
import "./styles.css"

export default defineComponent({
  name: "OnyxGridColumn",
  props: {},
  render() {
    return h("div", {}, this.$slots)
  }
})
