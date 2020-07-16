import { defineComponent, h, mergeProps, ref } from "vue"

import "./styles.scss"

export namespace OnyxInput {
  export type Props = {
    modelValue: string
    fill?: boolean
  }
}

export default defineComponent({
  name: "OnyxInput",
  props: {
    modelValue: {
      type: String,
      required: true
    },
    fill: {
      type: Boolean
    }
  },
  setup() {
    const isFocused = ref(false)

    return { isFocused }
  },
  render() {
    const { modelValue }: OnyxInput.Props = this.$props
    const { prefix, suffix } = this.$slots

    const inputComponent = h(
      "input",
      mergeProps(this.$props, {
        class: {
          input: true
        },
        onInput: (e) => {
          this.$emit("update:modelValue", e.target.value)
        },
        onFocus: () => {
          this.isFocused = true
          this.$emit("focus")
        },
        onBlur: () => {
          this.isFocused = false
          this.$emit("blur")
        },
        value: modelValue
      })
    )

    return h(
      "div",
      {
        class: {
          "is-focused": this.isFocused
        }
      },
      [prefix && prefix(), inputComponent, suffix && suffix()]
    )
  }
})

// <input
//     :id="id"
//     :placeholder="placeholder"
//     :required="required"
//     :readonly="readonly"
//     :disabled="disabled"
//     class="input"
//     :class="{ 'has-prefix': Boolean(slots.prefix), 'has-suffix': Boolean(slots.suffix) }"
//     v-bind="attrs"
//     v-model="content"
//     @input="handleInput"
//     @focus="setFocus(true)"
//     @blur="setFocus(false)"
// />
