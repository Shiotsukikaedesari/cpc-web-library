<template>
    <div
    class="container border-base"
    :style="{'height': height, 'width': width, 'background': background}">
        <cpc-nav-side-elem :click="toDetail" :showSignal="signal"></cpc-nav-side-elem>
    </div>
</template>

<script>
export default {
  name: 'cpc-nav-side',
  props: {
    width: { // 宽度
      type: String,
      default: '300px'
    },
    height: { // 高度
      type: String,
      default: '100%'
    },
    background: { // 加载的背景图
      type: String,
      default: 'none'
    }
  },
  data () {
    return {
      signal: false
    }
  },
  methods: {
    toDetail () {
      console.log(111)
      this.signal = true
    }
  },
  mounted () {
    console.log(this.width)
    console.log(this.height)
  }
}
</script>

<style lang="less" scoped>
    .container {
        padding: 5px 0;
        overflow: auto;
    }
</style>
