<template>
  <div>
    <onyx-grid>
      <onyx-grid-row>
        <onyx-grid-column>
          <onyx-surface fill>
            <onyx-surface-header>Colors</onyx-surface-header>
            <onyx-surface-body>
              <onyx-grid>
                <onyx-grid-row v-for="color in colors" :key="color">
                  <onyx-grid-column>
                    <onyx-surface :color="color">
                      <onyx-surface-header>{{ color }}</onyx-surface-header>
                      <onyx-surface-body>{{ text }}</onyx-surface-body>
                    </onyx-surface>
                  </onyx-grid-column>
                </onyx-grid-row>
              </onyx-grid>
            </onyx-surface-body>
          </onyx-surface>
        </onyx-grid-column>
      </onyx-grid-row>
      <onyx-grid-row>
        <onyx-grid-column>
          <onyx-surface fill>
            <onyx-surface-header>Blurb</onyx-surface-header>
            <onyx-surface-body>
              <onyx-grid>
                <onyx-grid-row v-for="color in colors" :key="color">
                  <onyx-grid-column>
                    <onyx-surface :color="color" blurb>
                      <onyx-surface-header>{{ color }}</onyx-surface-header>
                      <onyx-surface-body>{{ text }}</onyx-surface-body>
                    </onyx-surface>
                  </onyx-grid-column>
                </onyx-grid-row>
              </onyx-grid>
            </onyx-surface-body>
          </onyx-surface>
        </onyx-grid-column>
      </onyx-grid-row>
    </onyx-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import OnyxGrid from "../OnyxGrid"
import OnyxGridRow from "../OnyxGridRow"
import OnyxGridColumn from "../OnyxGridColumn"

import OnyxSurface from "./"
import OnyxSurfaceBody from "../OnyxSurfaceBody"
import OnyxSurfaceFooter from "../OnyxSurfaceFooter"
import OnyxSurfaceHeader from "../OnyxSurfaceHeader"

export default defineComponent({
  components: {
    OnyxGrid,
    OnyxGridColumn,
    OnyxGridRow,
    OnyxSurface,
    OnyxSurfaceBody,
    OnyxSurfaceFooter,
    OnyxSurfaceHeader
  },
  setup() {
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const colors = ["blue", "green", "red", "grey"]

    return { colors, text }
  }
})
</script>
