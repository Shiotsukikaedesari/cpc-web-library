<template>
    <div class="html-base markdown">
      <markdown></markdown>
    </div>
</template>

<script>
import markdown from './markdown/html-treasure.md'
export default {
  name: 'html-base',
  data () {
    return {

    }
  },
  mounted () {
  },
  components: {
    markdown
  }
}

</script>

<style lang="less" scoped>

</style>
