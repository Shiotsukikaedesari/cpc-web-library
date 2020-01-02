import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 屏幕宽度
    innerWidth: window.innerWidth,
    // 屏幕高度
    innerHeight: window.innerHeight
  },
  getters: {
    // 设置侧边栏的宽
    setSideNavWidth: state => {
      if (state.innerWidth > 1366) {
        return '300px'
      } else {
        return '250px'
      }
    },
    // 设置内容宽度
    setContainerheight: state => {
      if (state.innerWidth > 1366) {
        return 'calc(100% - 180px)'
      } else {
        return 'calc(100% - 140px)'
      }
    },
    // 设置内容高度
    setContainerWidth: state => {
      if (state.innerWidth > 1366) {
        return ' calc(100% - 140px)'
      } else {
        return ' calc(100% - 90px)'
      }
    },
    // 设置底边高度
    setFooterHeight: state => {
      if (state.innerWidth > 1366) {
        return '100px'
      } else {
        return '60px'
      }
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {}
})
