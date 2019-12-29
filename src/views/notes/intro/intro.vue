<template>
    <div class="guide-intro markdown">
      <Markdown></Markdown>
    </div>
</template>

<script>
import Markdown from './markdown/intro.md'
export default {
  name: 'guide-intro',
  data () {
    return {

    }
  },
  mounted () {
  },
  components: {
    Markdown
  }
}

</script>

<style lang="less" scoped>

</style>
