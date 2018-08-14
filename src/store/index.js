import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '北京'
  },
  actions: {
    changeCity (cityClick, cityName) {
      cityClick.commit('changeCity', cityName)
    }
  },
  mutations: {
    changeCity (state, cityName) {
      state.city = cityName
    }
  }
})
