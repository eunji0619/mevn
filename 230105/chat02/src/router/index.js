import { createRouter, createWebHistory } from 'vue-router'
import chat02 from '../views/chat02.vue'

const routes = [
  {
    path: '/',
    name: 'chat02',
    component: chat02
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
