<template>
  <nav>
    <li>
      <router-link to="/getting-started">Getting Started</router-link>
    </li>
    <li v-for="component in { ...components }" :key="component.name">
      <router-link :to="kebabCase(component.name)">{{ component.name }}</router-link>
    </li>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { kebabCase } from "lodash-es"
import * as components from "../packages/components"

export default defineComponent({
  components: {},
  setup() {
    return {
      components,
      kebabCase
    }
  }
})
</script>
