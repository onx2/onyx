import { ComponentOptions } from "vue"
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router
} from "vue-router"
import { kebabCase } from "lodash-es"
import * as components from "../packages/components"
console.log(components)
const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/getting-started" },
  {
    path: "/getting-started",
    component: (): Promise<ComponentOptions> => import("./GettingStarted.vue"),
    name: "Getting Started"
  },
  ...Object.values(components).map((component) => ({
    path: `/${kebabCase(component.name)}`,
    name: component.name,
    component: (): Promise<ComponentOptions> =>
      import(`../packages/components/${component.name}/docs.vue`)
  }))
]
console.log(routes)
export const router: Router = createRouter({
  history: createWebHistory(),
  routes
})
