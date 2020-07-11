<template>
  <div class="div">
    <navigation />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
// import * as components from "../packages/components"
import Navigation from "./Navigation.vue"

export default defineComponent({
  components: { Navigation },
  setup() {
    return {
      // components
    }
  }
})
</script>

<style module>
.div {
  display: flex;
}
</style>
