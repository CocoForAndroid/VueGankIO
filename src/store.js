import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opacity: 0// 状态栏透明度
  },
  getters: {
    opacity: state => {
      return state.opacity
    }
  },
  mutations: {
    setOpacity (state, opacity) {
      state.opacity = opacity
    }
  },
  actions: {

  }
})
