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
                  <onyx-grid-column>
                    <onyx-btn :elevation="7">Elevation 7</onyx-btn>
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
                    <onyx-btn disabled color="grey">Disabled</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn disabled color="red">Disabled</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn disabled color="blue">Disabled</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn disabled color="green">Disabled</onyx-btn>
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
                    <onyx-btn color="grey">grey</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn color="blue">blue</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn color="red">red</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn color="green">green</onyx-btn>
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
                    <onyx-btn fab color="grey">I</onyx-btn>
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
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn size="x-small" fab color="grey">I</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn size="small" fab color="grey">I</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn size="medium" fab color="blue">I</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn size="large" fab color="red">I</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn size="x-large" fab color="green">I</onyx-btn>
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
                    <onyx-btn fill color="grey">Fill</onyx-btn>
                  </onyx-grid-column>
                </onyx-grid-row>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn fill color="blue">Fill</onyx-btn>
                  </onyx-grid-column>
                </onyx-grid-row>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn fill color="red">Fill</onyx-btn>
                  </onyx-grid-column>
                </onyx-grid-row>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn fill color="green">Fill</onyx-btn>
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
            <onyx-surface-header>Flat</onyx-surface-header>
            <onyx-surface-body>
              <onyx-grid>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn flat color="grey">Flat</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn flat color="blue">Flat</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn flat color="red">Flat</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn flat color="green">Flat</onyx-btn>
                  </onyx-grid-column>
                </onyx-grid-row>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn fab flat color="grey">I</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn fab flat color="blue">I</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn fab flat color="red">I</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn fab flat color="green">I</onyx-btn>
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
            <onyx-surface-header>Links</onyx-surface-header>
            <onyx-surface-body>
              <onyx-grid>
                <onyx-grid-row>
                  <onyx-grid-column>
                    <onyx-btn to="/onyx-surface">To OnyxSurface docs</onyx-btn>
                  </onyx-grid-column>
                  <onyx-grid-column>
                    <onyx-btn href="http://www.google.com"
                      >To Google.com</onyx-btn
                    >
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
