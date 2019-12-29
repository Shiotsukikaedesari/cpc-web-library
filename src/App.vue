<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    // 监听页面刷新重置路由
    window.onload = () => {
      this.$router.replace({path: '/index'})
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
