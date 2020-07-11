<template>
  <div class="wrapper">
    <navigation />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Navigation from "./Navigation.vue"

export default defineComponent({
  components: { Navigation },
  setup() {
    return {}
  }
})
</script>

<style module>
.wrapper {
  display: flex;
}
</style>
