import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      user: {
        email: '',
        accessToken: '',
        refreshToken: ''
      }
    }
  },
  mutations: {
    SET_USER (state, userData) {
      state.user.email = userData.email
      state.user.accessToken = userData.accessToken
      state.user.refreshToken = userData.refreshToken
    }
  },
  actions: {
    setUserData ({ commit }, userData) {
      commit('SET_USER', userData)
    }
  }
})

export default store