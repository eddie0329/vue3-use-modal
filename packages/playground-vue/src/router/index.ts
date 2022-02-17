import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloHome from '../views/HelloHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HelloHome',
    component: HelloHome
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
