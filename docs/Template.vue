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
      <div v-for="propEntry in Object.entries(component.props)" :key="propEntry">{{ propEntry[0] }} - {{ propEntry[1] }}</div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Template",
  props: ["component"],
  setup(props) {
    const componentProps = Object.entries(props.component.props).map((entry) => ({
      name: entry[0],
      others: entry[1]
    }))
    console.log(componentProps)
    return { componentProps }
  }
})
</script>
