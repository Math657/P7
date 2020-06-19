import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import home from '../views/home.vue'
import signup from '../views/signup'

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
    component: signup
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
