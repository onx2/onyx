import { ComponentOptions } from "vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { kebabCase } from "lodash-es"
import * as components from "../packages/components"
import Template from "./Template.vue"

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/getting-started" },
  { path: "/getting-started", component: (): Promise<ComponentOptions> => import("./GettingStarted.vue"), name: "Getting Started" },
  ...Object.values(components).map((component) => ({
    path: `/${kebabCase(component.name)}`,
    name: component.name,
    component: Template,
    props: { component }
  }))
]
console.log(routes)
export const router = createRouter({
  history: createWebHistory(),
  routes
})
