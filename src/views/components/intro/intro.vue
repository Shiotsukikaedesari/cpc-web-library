<template>
    <div class="components-intro markdown">
        <Markdown></Markdown>
    </div>
</template>

<script>
import Markdown from './markdown/intro.md'
export default {
  name: 'components-demo',
  mounted () {

  },
  components: {
    Markdown
  }
}
</script>

<style lang="less" scoped>

</style>
