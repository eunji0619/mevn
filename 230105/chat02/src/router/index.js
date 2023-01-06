import { createRouter, createWebHistory } from 'vue-router'
import chat02 from '../views/chat02.vue'

const routes = [
  {
    path: '/',
    name: 'chat02',
    component: chat02
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue')
  },
  {
    path: '/Params',
    name: 'Params',
    component: () => import(/* webpackChunkName: "about" */ '../views/Params.vue')
  },
  {
    path: '/Query',
    name: 'Query',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Query.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
