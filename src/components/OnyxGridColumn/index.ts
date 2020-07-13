import { defineComponent, h } from "vue"
import "./styles.scss"

export default defineComponent({
  name: "OnyxGridColumn",
  props: {},
  render() {
    return h("div", { class: { "grid-column": true } }, this.$slots)
  }
})
