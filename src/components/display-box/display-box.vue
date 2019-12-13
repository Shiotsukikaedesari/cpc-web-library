<template>
    <div class="display-box">

    </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: 'cpc-display-box',
  props: {
    markdown: {
      type: String
    }
  },
  data () {
    return {
      // 组件提取位置
      template: {
        title: 'demoBox标题',
        message: 'demoBox介绍信息',
        component: ''
      }
    }
  },
  methods: {

  },
  mounted () {
    console.log(this.markdown)
  }
}
</script>

<style lang="less" scoped>

</style>
