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
    setContainerHeight: state => {
      if (state.innerWidth > 1366) {
        return 'calc(100% - 180px)'
      } else {
        return 'calc(100% - 120px)'
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
    // 设置头部高度
    setHeaderHeight: state => {
      if (state.innerWidth > 1366) {
        return '80px'
      } else {
        return '60px'
      }
    },
    // 设置底边高度
    setFooterHeight: state => {
      if (state.innerWidth > 1366) {
        return '100px'
      } else {
        return '60px'
      }
    },
    // 设置md-nav最大高度
    setMdNavMaxHeight: state => {
      return state.innerHeight / 2.5 + 'px'
    },
    // 设置toTop的buttom
    setToTopBottom: state => {
      if (state.innerWidth > 1366) {
        return 'calc(3% + 100px)'
      } else {
        return 'calc(3% + 60px)'
      }
    }
  },
  mutations: {
    // 重置页面宽度
    resetInnerWidth (state, newInnerWidth) {
      state.innerWidth = newInnerWidth
    },
    // 重置页面高度
    resetInnerHeight (state, newInnerHeight) {
      state.innerHeight = newInnerHeight
    }
  },
  actions: {
    resetInnerWidthFun (context, newInnerWidth) {
      context.commit('resetInnerWidth', newInnerWidth)
    },
    resetInnerHeightFun (context, newInnerHeight) {
      context.commit('resetInnerHeight', newInnerHeight)
    }
  },
  modules: {}
})
