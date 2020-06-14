<template>
    <div class="guide-intro markdown">
      <GuideShowMarkdown></GuideShowMarkdown>
    </div>
</template>

<script>
import GuideShowMarkdown from './markdown/showMarkdown.md'
export default {
  name: 'guide-showMarkdown',
  data () {
    return {
    }
  },
  mounted () {
  },
  components: {
    GuideShowMarkdown
  }
}

</script>

<style lang="less" scoped>

</style>
