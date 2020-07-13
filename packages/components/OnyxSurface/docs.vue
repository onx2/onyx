<template>
  <onyx-surface>
    <onyx-surface-header>Header</onyx-surface-header>
    <onyx-surface-body>Body</onyx-surface-body>
    <onyx-surface-footer>Footer</onyx-surface-footer>
  </onyx-surface>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import OnyxSurface from "./"
import OnyxSurfaceHeader from "../OnyxSurfaceHeader"
import OnyxSurfaceBody from "../OnyxSurfaceBody"
import OnyxSurfaceFooter from "../OnyxSurfaceFooter"

export default defineComponent({
  components: {
    OnyxSurface,
    OnyxSurfaceBody,
    OnyxSurfaceFooter,
    OnyxSurfaceHeader
  },
  setup() {
    return {}
  }
})
</script>
