<template>
    <div class="guide-intro markdown" v-html="markdown">
    </div>
</template>

<script>
import GuideShowMarkdown from '../markdown/guide/guide-showMarkdown/guide-showMarkdown.md'
export default {
  name: 'guide-showMarkdown',
  data () {
    return {
      markdown: this.$marked(GuideShowMarkdown)
    }
  },
  mounted () {
    console.log(this.$marked(GuideShowMarkdown), { sanitize: true })
  }
}

</script>

<style lang="less" scoped>

</style>
