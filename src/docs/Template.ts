import { defineComponent, h } from "vue"

export default defineComponent({
  name: "Template",
  props: {},
  render() {
    const header = h("h1", {}, this.$slots.header)
    const api = h("div", {}, this.$slots.api)
    const props = h("div", {}, this.$slots.props)

    return h("div", {}, [header, api, props])
  }
})
