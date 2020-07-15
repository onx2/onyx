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
    },
    fill: {
      type: Boolean
    }
  },
  render(props) {
    const { fill, tag } = props

    return h(tag, { class: { grid: true, fill } }, this.$slots)
  }
})