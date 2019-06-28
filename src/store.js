import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    updateUser: (state, user) => {
      Vue.set(state, 'user', user)
    }
  },
  actions: {
    updateUser: async (context, user) => {
      return await context.commit('updateUser', user)
    }
  },
  getters: {
    user: state => state.user
  }
})