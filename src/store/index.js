import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 屏幕宽度
    innerWidth: window.innerWidth,
    // 屏幕高度
    innerHeight: window.innerHeight,
    // tips
    threeTips: `    相机旋转：鼠标右键  相机缩放：鼠标滚轮
    设置物体位移：W  设置物体旋转：E  设置物体缩放：R
    控制X轴：X  控制Y轴：Y   控制Z轴：Z
    变换固定位移100旋转15度缩放0.25：shift
    设置控制器大小： +/-
    禁用/启用控制器：空格 `
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
    },
    // 跟新threeTips
    resetThreeTips (state, newThreeTips) {
      state.threeTips = newThreeTips
    }
  },
  actions: {
    resetInnerWidthFun (context, newInnerWidth) {
      context.commit('resetInnerWidth', newInnerWidth)
    },
    resetInnerHeightFun (context, newInnerHeight) {
      context.commit('resetInnerHeight', newInnerHeight)
    },
    resetThreeTipsFun (context, newThreeTips) {
      context.commit('resetThreeTips', newThreeTips)
    }
  },
  modules: {}
})
