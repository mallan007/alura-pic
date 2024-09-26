import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../pages/LogIn.vue'
import SignUp from '../pages/SignUp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../pages/LogIn.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../pages/SignUp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
