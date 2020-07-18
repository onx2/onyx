import { defineComponent, h, mergeProps } from "vue"
import { RouterLink } from "vue-router"

import { validatePropFromEnum } from "../../utils"
import { Colors, Sizes } from "../types"
import "./styles.scss"

enum ButtonTypes {
  button = "button",
  submit = "submit",
  reset = "reset"
}

type Elevations = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

export namespace OnyxBtn {
  export type Props = {
    disabled?: boolean
    fill?: boolean
    flat?: boolean
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
      type: Boolean
    },
    type: {
      type: String,
      default: ButtonTypes.button,
      validator: (prop: keyof typeof ButtonTypes): boolean =>
        validatePropFromEnum(prop, ButtonTypes)
    },
    disabled: {
      type: Boolean
    },
    fab: {
      type: Boolean
    },
    flat: {
      type: Boolean
    },
    color: {
      type: String,
      default: Colors.grey,
      validator: (prop: keyof typeof Colors): boolean =>
        validatePropFromEnum(prop, Colors)
    },
    size: {
      type: String,
      default: Sizes.medium,
      validator: (prop: keyof typeof Sizes): boolean =>
        validatePropFromEnum(prop, Sizes)
    },
    elevation: {
      type: Number,
      default: 0,
      /** @todo Define a max elevation */
      validator: (prop: Elevations): boolean => prop <= 7 && prop >= 0
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
      flat,
      fab,
      type,
      color,
      size,
      elevation
    }: Readonly<OnyxBtn.Props> = this.$props

    let component: any = "button"

    if (href && to) {
      console.error(`"href" and "to" props shouldn't be used together.`)
    } else if (href) {
      component = "a"
    } else if (to) {
      component = RouterLink
    }

    if (fab && fill) {
      console.error(`"fill" and "fab" props shouldn't be used together`)
    }

    return h(
      component,
      mergeProps(this.$props, {
        class: {
          button: true,
          [`button-${size}`]: true,
          [`button-${color}`]: true,
          [`button-elevation-${elevation}`]: true,
          fill: fill && !fab,
          fab,
          flat
        },
        type
      }),
      this.$slots
    )
  }
})
