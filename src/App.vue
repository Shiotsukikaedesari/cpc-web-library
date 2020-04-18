<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions([
      'resetInnerWidthFun',
      'resetInnerHeightFun'
    ])
  },
  mounted () {
    NProgress.done()
    // 监听页面刷新重置路由
    // window.onload = () => {
    //   this.$router.replace({path: '/'})
    // }
    // 监听屏幕变化
    window.onresize = () => {
      this.resetInnerWidthFun(window.innerWidth)
      this.resetInnerHeightFun(window.innerHeight)
    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
