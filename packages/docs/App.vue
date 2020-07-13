<template>
  <div class="wrapper">
    <navigation />
    <main class="content">
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

<style scoped>
.wrapper {
  display: flex;
  height: 100%;
}
.content {
  margin-left: 200px;
  padding: 8px;
  width: 100%;
}
</style>
