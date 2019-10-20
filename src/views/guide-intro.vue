<template>
    <div class="marked">
    </div>
</template>

<script>
import GuideIntroMd from './markdown/guide-intro.md'
export default {
  name: 'guide-intro',
  data () {
    return {
    }
  },
  mounted () {
    document.querySelector('.marked').innerHTML = this.$marked(GuideIntroMd)
  }
}
</script>

<style lang="less" scoped>

</style>
