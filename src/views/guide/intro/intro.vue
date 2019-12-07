<template>
    <div class="guide-intro markdown">
      <GuideIntroMd></GuideIntroMd>
    </div>
</template>

<script>
import GuideIntroMd from './markdown/intro.md'
export default {
  name: 'guide-intro',
  data () {
    return {

    }
  },
  mounted () {
  },
  components: {
    GuideIntroMd
  }
}

</script>

<style lang="less" scoped>

</style>
