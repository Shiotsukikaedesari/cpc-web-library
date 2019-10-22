<template>
    <div class="guide-intro markdown" v-html="markdown">
    </div>
</template>

<script>
import GuideIntroMd from './markdown/guide-intro/guide-intro.md'
export default {
  name: 'guide-intro',
  data () {
    return {
      markdown: GuideIntroMd
    }
  },
  mounted () {
  }
}

</script>

<style lang="less" scoped>

</style>
