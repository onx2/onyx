<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.name">
        <router-link :to="route">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { router } from "./router"
import { kebabCase } from "lodash-es"
import * as components from "../components"

export default defineComponent({
  components: {},
  setup() {
    const routes = ref(router.getRoutes())

    return {
      components,
      kebabCase,
      routes
    }
  }
})
</script>

<style scoped>
nav {
  width: 200px;
  height: 100%;
  position: fixed;
  border-right: 1px solid #e3e3e3;
  background-color: #fff;
  z-index: 10;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  display: block;
  position: relative;
}
nav ul li:hover {
  background-color: #f9f9f9;
}
nav ul li a {
  padding: 8px 12px;
  display: block;
  text-decoration: none;
  color: black;
}
.router-link-active {
  background-color: #f9f9f9;
}
</style>
