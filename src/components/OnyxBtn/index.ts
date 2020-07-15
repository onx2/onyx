import { defineComponent, h, mergeProps } from "vue"
import { RouterLink } from "vue-router"

import { getEnumKeys } from "../../utils"
import { Colors, Sizes } from "../types"
import "./styles.scss"

enum ButtonTypes {
  button = "button",
  submit = "submit",
  reset = "reset"
}

type Elevations = 0 | 1 | 2 | 3 | 4 | 5 | 6

export namespace Button {
  export type Props = {
    disabled?: boolean
    fill?: boolean
    fab?: boolean
    type?: keyof typeof ButtonTypes
    color?: keyof typeof Colors
    size?: keyof typeof Sizes
    elevation?: Elevations
    href?: string
    to?: string
  }
}

export default defineComponent({
  name: "OnyxBtn",
  props: {
    fill: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as () => Button.Props["type"],
      default: ButtonTypes.button,
      validator: (prop: keyof typeof ButtonTypes): boolean =>
        getEnumKeys(ButtonTypes).includes(prop)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    color: {
      type: String as () => Button.Props["color"],
      default: Colors.default,
      validator: (prop: keyof typeof Colors): boolean =>
        getEnumKeys(Colors).includes(prop)
    },
    size: {
      type: String as () => Button.Props["size"],
      default: Sizes.medium,
      validator: (prop: keyof typeof Sizes): boolean =>
        getEnumKeys(Sizes).includes(prop)
    },
    elevation: {
      type: Number as () => Elevations,
      default: 0,
      /** @todo Define a max elevation */
      validator: (prop: Elevations): boolean => prop <= 6 && prop >= 0
    },
    href: {
      type: String
    },
    to: {
      type: String
    }
  },
  render() {
    const {
      href,
      to,
      fill,
      fab,
      type,
      color,
      size,
      elevation
    }: Readonly<Button.Props> = this.$props

    let component = "button"

    if (href) {
      component = "a"
    } else if (to) {
      /** @todo What is the correct typing? */
      component = (RouterLink as unknown) as string
    }

    const child = h("span", { class: "button-inner" }, this.$slots)

    return h(
      component,
      mergeProps(this.$props, {
        class: {
          button: true,
          [`button-${size}`]: true,
          [`button-${color}`]: true,
          [`button-elevation-${elevation}`]: true,
          fill: fill && !fab,
          fab
        },
        type
      }),
      child
    )
  }
})
