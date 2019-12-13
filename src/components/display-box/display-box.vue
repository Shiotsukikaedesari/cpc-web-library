<template>
    <div class="display-box">
      看看display盒子是否能被生成
      <slot name="source"></slot>
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="markdown">
        <slot name="highlight"></slot>
      </div>
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
      title: 'demoBox标题',
      message: 'demoBox介绍信息',
      component: ''
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>

</style>
