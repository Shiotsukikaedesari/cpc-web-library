<template>
    <div class="demo">
        demo测试
        <demo></demo>
    </div>
</template>

<script>
import demo from './markdown/demo.md'
export default {
  name: 'components-demo',
  mounted () {
    console.log(demo)
  },
  components: {
    demo
  }
}
</script>

<style lang="less" scoped>

</style>
