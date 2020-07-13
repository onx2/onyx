import { defineComponent, h } from "vue"
import "./styles.css"

export default defineComponent({
  name: "OnyxGrid",
  props: {},
  render() {
    return h("div", { class: { grid: true } }, this.$slots)
  }
})
