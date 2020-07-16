<template>
  <div>
    <onyx-input v-model="inputValue">
      <template #prefix>
        $
      </template>
    </onyx-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

import OnyxInput from "."

export default defineComponent({
  components: { OnyxInput },
  setup() {
    const inputValue = ref("")

    return { inputValue }
  }
})
</script>
