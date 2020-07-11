<template>
  <div>
    <h1>{{ component.name }}</h1>
    <section>
      <component :is="component" />
      <!--
      @todo
        - render components based on each prop variation
        - render api section 
        - render introduction to component
     -->
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Template",
  props: ["component"],
  setup(props) {
    console.log(props.component)
    return {}
  }
})
</script>
