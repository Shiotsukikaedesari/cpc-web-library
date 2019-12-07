<template>
    <div>
        组件渲染盒子示例
        <cpc-display-box :markdown="markdown"></cpc-display-box>
    </div>
</template>

<script>
import useExplain from './markdown/use-explain.md'
export default {
  name: 'use-explain',
  data () {
    return {
      markdown: useExplain
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
