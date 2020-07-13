import { defineComponent, h } from "vue"
import "./styles.scss"

export namespace OnyxGirdRow {
  export type Props = {
    tag?: "div" | "main" | "section"
    padding?: 0 | 1 | 2 | 3 | 4
  }
}

export default defineComponent({
  name: "OnyxGrid",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    padding: {
      type: Number,
      default: 2
    }
  },
  render(props) {
    const { tag } = props

    return h(tag, { class: { grid: true } }, this.$slots)
  }
})
