import { ComponentOptions } from "vue"
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router
} from "vue-router"
import { kebabCase } from "lodash-es"
import * as components from "../components"

const componentExclusionList = [
  "OnyxSurfaceBody",
  "OnyxSurfaceFooter",
  "OnyxSurfaceHeader",
  "OnyxGridRow",
  "OnyxGridColumn"
]

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/getting-started" },
  {
    path: "/getting-started",
    component: (): Promise<ComponentOptions> => import("./GettingStarted.vue"),
    name: "Getting Started"
  },
  ...Object.values(components)
    .filter((component) => !componentExclusionList.includes(component.name))
    .map((component) => ({
      path: `/${kebabCase(component.name)}`,
      name: component.name,
      component: (): Promise<ComponentOptions> =>
        import(`../components/${component.name}/docs.vue`)
    }))
]

export const router: Router = createRouter({
  history: createWebHistory(),
  routes
})
