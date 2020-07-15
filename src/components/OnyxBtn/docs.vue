<template>
  <div>
    <onyx-grid>
      <onyx-grid-row>
        <onyx-grid-column>
          <onyx-surface fill>
            <onyx-surface-header>Elevation</onyx-surface-header>
            <onyx-surface-body>
              <onyx-grid>
                <onyx-grid-row>
                  <onyx-grid-column :size="2">
                    <onyx-btn :elevation="0">Elevation 0</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column :size="2">
                    <onyx-btn :elevation="1">Elevation 1</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column :size="2">
                    <onyx-btn :elevation="2">Elevation 2</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column :size="2">
                    <onyx-btn :elevation="3">Elevation 3</onyx-btn>
                  </onyx-grid-column>
                </onyx-grid-row>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn :elevation="4">Elevation 4</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn :elevation="5">Elevation 5</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn :elevation="6">Elevation 6</onyx-btn>
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
            <onyx-surface-header>Disabled</onyx-surface-header>
            <onyx-surface-body>
              <onyx-grid>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn disabled color="default">asdf</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn disabled color="red">asdf</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn disabled color="blue">asdf</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn disabled color="green">asdf</onyx-btn>
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
            <onyx-surface-header>Sizes</onyx-surface-header>
            <onyx-surface-body>
              <onyx-grid>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn size="xx-small">xx-small</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn size="x-small">x-small</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn size="small">small</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn size="medium">medium</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn size="large">large</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn size="x-large">x-large</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn size="xx-large">xx-large</onyx-btn>
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
            <onyx-surface-header>Colors</onyx-surface-header>
            <onyx-surface-body>
              <onyx-grid>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn color="default">asdf</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn color="blue">asdf</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn color="red">asdf</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn color="green">asdf</onyx-btn>
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
            <onyx-surface-header>Fab</onyx-surface-header>
            <onyx-surface-body>
              <onyx-grid>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn fab color="default">I</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn fab color="blue">I</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn fab color="red">I</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn fab color="green">I</onyx-btn>
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
            <onyx-surface-header>Fill</onyx-surface-header>
            <onyx-surface-body>
              <onyx-grid>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn fill color="default">I</onyx-btn>
                  </onyx-grid-column>
                </onyx-grid-row>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn fill color="blue">I</onyx-btn>
                  </onyx-grid-column>
                </onyx-grid-row>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn fill color="red">I</onyx-btn>
                  </onyx-grid-column>
                </onyx-grid-row>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn fill color="green">I</onyx-btn>
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
import OnyxBtn from "./"
import OnyxGrid from "../OnyxGrid"
import OnyxGridRow from "../OnyxGridRow"
import OnyxGridColumn from "../OnyxGridColumn"
import OnyxSurface from "../OnyxSurface"
import OnyxSurfaceBody from "../OnyxSurfaceBody"
import OnyxSurfaceHeader from "../OnyxSurfaceHeader"

export default defineComponent({
  components: {
    OnyxBtn,
    OnyxGridColumn,
    OnyxGrid,
    OnyxGridRow,
    OnyxSurface,
    OnyxSurfaceBody,
    OnyxSurfaceHeader
  },
  setup() {
    return {}
  }
})
</script>
