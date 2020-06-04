import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/signup.vue')
  },
  {
    path: '/home',
    name: 'home',
  
  }
]

const router = new VueRouter({
  routes
})

export default router
