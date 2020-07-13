<template>
  <nav>
    <ul>
      <li>
        <router-link to="/getting-started">Getting Started</router-link>
      </li>
      <li v-for="component in { ...components }" :key="component.name">
        <router-link :to="`/${kebabCase(component.name)}`">{{
          component.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { router } from "./router"
import { kebabCase } from "lodash-es"
import * as components from "../components"

export default defineComponent({
  components: {},
  setup() {
    console.log(router)

    return {
      components,
      kebabCase,
      router
    }
  }
})
</script>

<style scoped>
nav {
  width: 200px;
  height: 100%;
  position: fixed;
  border-right: 1px solid #f9f9f9;
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
