<template>
  <div>
    <onyx-surface fill>
      <onyx-surface-header>Colors</onyx-surface-header>
      <onyx-surface-body>
        <onyx-btn color="default">asdf</onyx-btn>
        <onyx-btn color="blue">asdf</onyx-btn>
        <onyx-btn color="red">asdf</onyx-btn>
        <onyx-btn color="green">asdf</onyx-btn>
      </onyx-surface-body>
    </onyx-surface>

    <onyx-surface fill>
      <onyx-surface-header>Sizes</onyx-surface-header>
      <onyx-surface-body>
        <onyx-btn size="small">asdf</onyx-btn>
        <onyx-btn size="medium">asdf</onyx-btn>
        <onyx-btn size="large">asdf</onyx-btn>
      </onyx-surface-body>
    </onyx-surface>

    <onyx-surface fill>
      <onyx-surface-header>Disabled</onyx-surface-header>
      <onyx-surface-body>
        <onyx-btn disabled color="default">asdf</onyx-btn>
        <onyx-btn disabled color="red">asdf</onyx-btn>
        <onyx-btn disabled color="blue">asdf</onyx-btn>
        <onyx-btn disabled color="green">asdf</onyx-btn>
      </onyx-surface-body>
    </onyx-surface>

    <onyx-surface fill>
      <onyx-surface-header>Elevation</onyx-surface-header>
      <onyx-surface-body>
        <onyx-btn :elevation="0">asdf</onyx-btn>
        <onyx-btn :elevation="1">asdf</onyx-btn>
        <onyx-btn :elevation="2">asdf</onyx-btn>
        <onyx-btn :elevation="3">asdf</onyx-btn>
        <onyx-btn :elevation="4">asdf</onyx-btn>
      </onyx-surface-body>
    </onyx-surface>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import OnyxBtn from "./"
import OnyxSurface from "../OnyxSurface"
import OnyxSurfaceBody from "../OnyxSurfaceBody"
import OnyxSurfaceHeader from "../OnyxSurfaceHeader"

export default defineComponent({
  components: { OnyxBtn, OnyxSurface, OnyxSurfaceBody, OnyxSurfaceHeader },
  setup() {
    console.log(OnyxSurface)
    return {}
  }
})
</script>
