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
    isLogged: false
  },
  mutations: {
        LOGGED_IN(state) {
            state.isLogged = true
    },
        LOGGED_OUT(state) {
            state.isLogged = false
        }
  },
  actions: {
    checkIfLogged({ commit }) {
        Axios.get(`http://localhost:3000/api/auth/profil/${localStorage.getItem('userID')}`)
        .then(response => {
            if (response) {
                commit('LOGGED_IN')
                router.push('/home')
            }
        })
        .catch((error) => {
            console.log(error)
        }) 
    },
    logOut({commit}) {
        commit('LOGGED_OUT')
    }
  },
  modules: {
  }
})

