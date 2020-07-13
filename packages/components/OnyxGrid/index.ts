import { defineComponent, h } from "vue"
import "./styles.scss"

export namespace OnyxGirdRow {
  export type Props = {
    tag?: "div" | "main" | "section"
  }
}

export default defineComponent({
  name: "OnyxGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  render(props) {
    const { tag } = props

    return h(tag, { class: { grid: true } }, this.$slots)
  }
})
