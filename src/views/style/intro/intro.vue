<template>
    <div class="guide-intro markdown">
      <markdown></markdown>
    </div>
</template>

<script>
import markdown from './markdown/intro.md'
export default {
  name: 'guide-intro',
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
