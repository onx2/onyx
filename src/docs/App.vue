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
  padding: 8px 8px 8px 208px;
  box-sizing: border-box;
  width: 100%;
}
</style>
