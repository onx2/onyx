import { defineComponent, h } from "vue"

import { Align, Justify } from "../types"
import { getEnumKeys } from "../../utils"
import "./styles.scss"

export namespace OnyxGirdRow {
  export type Props = {
    align?: keyof typeof Align
    justify?: keyof typeof Justify
    tag?: "div" | "main" | "section"
    wrap?: boolean
  }
}
export default defineComponent({
  name: "OnyxGridRow",
  props: {
    align: {
      type: String as () => OnyxGirdRow.Props["align"],
      defualt: "start",
      validator: (prop?: keyof typeof Justify): boolean =>
        getEnumKeys(Justify).includes(prop)
    },
    justify: {
      type: String as () => OnyxGirdRow.Props["justify"],
      defualt: "start",
      validator: (prop?: keyof typeof Justify): boolean =>
        getEnumKeys(Justify).includes(prop)
    },
    tag: {
      type: String as () => OnyxGirdRow.Props["tag"],
      default: "div"
    },
    wrap: {
      type: Boolean,
      default: true
    }
  },
  render() {
    const { align, justify, tag, wrap }: OnyxGirdRow.Props = this.$props

    return h(
      tag,
      {
        class: {
          "grid-row": true,
          wrap
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
