import { defineComponent, h } from "vue"
import "./styles.scss"

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
