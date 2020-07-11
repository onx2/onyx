import { computed, defineComponent, h, mergeProps } from "vue"
import { RouterLink } from "vue-router"
import "./button.css"

export namespace Button {
  export type Props = {
    disabled?: boolean
    fill?: boolean
    fab?: boolean
    type?: "button" | "submit" | "reset"
    color?: "default" | "red" | "blue" | "green"
    size?: "small" | "medium" | "large"
    elevation?: 0 | 1 | 2 | 3 | 4
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
      type: String,
      default: "button"
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
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "medium"
    },
    elevation: {
      type: Number,
      default: 0
    },
    href: {
      type: String
    },
    to: {
      type: String
    }
  },
  render() {
    const { href, to, fill, fab, type, color, size, elevation } = this.$props as Readonly<Button.Props>

    const classes = computed(() => {
      const classArray = ["button", `size-${size}`, `color-${color}`, `elevation-${elevation}`]

      if (fab) {
        classArray.push("fab")
      }
      if (fill) {
        classArray.push("fill")
      }

      return classArray.join(" ")
    })

    let component: any = "button"

    if (href) {
      component = "a"
    } else if (to) {
      component = RouterLink
    }

    const child = h("span", { class: "button-inner" }, this.$slots)

    return h(component, mergeProps(this.$props, { class: classes.value, type }), child)
  }
})
