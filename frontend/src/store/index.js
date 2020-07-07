import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],

  state: {
    isLogged: false,
    isAdmin: false
  },
  mutations: {
        LOGGED_IN(state) {
            state.isLogged = true
        },
        LOGGED_OUT(state) {
            state.isLogged = false
            state.isAdmin = false
        },
        IS_ADMIN(state) {
            state.isAdmin = true
        },
        IS_NOT_ADMIN(state) {
            state.isAdmin = false
        }
  },
  actions: {
    checkIfLogged({ commit }) {
        Axios.get(`http://localhost:3000/api/auth/profil/${localStorage.getItem('userID')}`)
        .then(response => {
            if (response.data.isAdmin === true) {
                commit('IS_ADMIN')
                commit('LOGGED_IN')
                router.push('/home')
            }
            else if (response) {
                commit('IS_NOT_ADMIN')
                commit('LOGGED_IN')
                router.push('/home')
            }
        })
        .catch((error) => {
            console.log(error)
        }) 
    },
    logOut({ commit }) {
        commit('LOGGED_OUT')
    }
  },
  modules: {
  }
})

