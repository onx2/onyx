import { defineComponent, h } from "vue"
import "./styles.scss"

export namespace OnyxGirdRow {
  export type Props = {
    align?: "start" | "center" | "end" | "baseline" | "stretch"
    justify?: "start" | "center" | "end" | "space-between" | "space-around"
    tag?: "div" | "main" | "section"
  }
}
export default defineComponent({
  name: "OnyxGridRow",
  props: {
    align: {
      type: String
    },
    justify: {
      type: String
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  render() {
    const { align, justify, tag } = this.$props as OnyxGirdRow.Props

    return h(
      tag,
      {
        class: {
          "grid-row": true
        },
        style: {
          "align-items": align,
          "justify-content": justify
        }
      },
      this.$slots
    )
  }
})
