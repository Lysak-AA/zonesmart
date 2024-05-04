import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      user: {
        email: '',
        accessToken: '',
        refreshToken: '',
        isLoggedIn: false
      }
    }
  },
  mutations: {
    SET_USER (state, userData) {
      state.user.email = userData.email
      state.user.accessToken = userData.accessToken
      state.user.refreshToken = userData.refreshToken
      state.user.isLoggedIn = true
    }
  },
  actions: {
    setUserData ({ commit }, userData) {
      commit('SET_USER', userData)
    }
  },
  getters: {
    isUserLoggedIn (state) {
      return state.user.isLoggedIn
    },
    userEmail (state) {
      return state.user.email
    }
  }
})

export default store