import { defineComponent, h } from "vue"
import "./styles.scss"

export namespace OnyxGridColumn {
  export type Props = {
    size?: number
  }
}
export default defineComponent({
  name: "OnyxGridColumn",
  props: {
    size: {
      type: Number as () => number
    }
  },
  render() {
    const { size }: OnyxGridColumn.Props = this.$props

    return h(
      "div",
      { class: { "grid-column": true, [`grid-column-size-${size}`]: true } },
      this.$slots
    )
  }
})
