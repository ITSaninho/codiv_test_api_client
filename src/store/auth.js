import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: false,
  isAuthenticated: window.localStorage.getItem('isAuthenticated') || false,
  token: window.localStorage.getItem('token') || false,
  name: window.localStorage.getItem('name') || '',
  email: window.localStorage.getItem('email') || ''
}

const getters = {
  getUser: state => state.user,
  getToken: state => state.token,
  getName: state => state.name,
  getEmail: state => state.email,
  getIsAuthenticated: state => state.isAuthenticated
}

const actions = {
  onLogin ({ commit }, data) {
    commit('setIsAuthenticated', true)
    commit('setToken', { token: data.token })
  },
  onLogout ({ commit }) {
    commit('logout')
  },
  onRegister ({ commit }, data) {
    commit('setIsAuthenticated', true)
    commit('setToken', { token: data.token })
  },
  onGetLogin ({ commit }, data) {
    commit('setUser', { user: data.data })
    commit('setName', { name: data.data.name })
    commit('setEmail', { email: data.data.email })
  }
}

const mutations = {
  setIsAuthenticated (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
    window.localStorage.setItem('isAuthenticated', isAuthenticated)
  },
  setToken (state, data) {
    state.token = data.token
    window.localStorage.setItem('token', data.token)
  },
  setUser (state, data) {
    state.user = data.user
  },
  setName (state, data) {
    state.name = data.name
    window.localStorage.setItem('name', data.name)
  },
  setEmail (state, data) {
    state.email = data.email
    window.localStorage.setItem('email', data.email)
  },
  logout () {
    state.isAuthenticated = false
    state.token = false
    state.user = false
    state.name = ''
    state.email = ''
    window.localStorage.clear()
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
