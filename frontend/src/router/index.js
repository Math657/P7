import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import signup from '../views/signup'
import home from '../views/home.vue'
import articleUnique from '../views/articleUnique'
import profil from '../views/profil'
import submitArticle from '../views/submitArticle'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
    meta: {
        guest: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
    meta: {
        guest: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
        requireAuth: true
    }
  },
  {
    path: '/home/:title',
    name: 'articleUnique',
    component: articleUnique,
    meta: {
        requireAuth: true
    },
  },
  {
    path: '/profil',
    name: 'profil',
    component: profil,
    meta: {
        requireAuth: true
    },
  },
  {
    path: '/submitArticle',
    name: 'submitArticle',
    component: submitArticle,
    meta: {
        requireAuth: true
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEat((to, from, next) => {
//     if ((to.name !== 'login' || to.name !== 'signup') && !isAuthenticated) next({ name: 'login' })
//     else next()
// })

export default router
