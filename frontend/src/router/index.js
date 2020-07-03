import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import signup from '../views/signup'
import home from '../views/home.vue'
import articleUnique from '../views/articleUnique'
import profil from '../views/profil'
import submitArticle from '../views/submitArticle'
import userProfil from '../views/userProfil'
import store from '../store'


Vue.use(VueRouter)


  const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
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
    }
  },
  {
    path: '/profil',
    name: 'profil',
    component: profil,
    meta: {
        requireAuth: true
    }
  },
  {
    path: '/submit-article',
    name: 'submitArticle',
    component: submitArticle,
    meta: {
        requireAuth: true
    } 
  },
  {
    path: '/user-profil/:id',
    name: 'userProfil',
    component: userProfil,
    meta: {
        requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        if (store.state.isLogged) {
            next()
        }
        else if (!store.state.isLogged) {
            next('/')
        }   
    } 
    else {
        next()
    }
})

export default router
