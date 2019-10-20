<template>
    <div class="marked">

    </div>
</template>

<script>
export default {
  name: 'guide-intro',
  data () {
    return {
      input: `123|321
      ---|---
      123|!23`
    }
  },
  mounted () {
    document.querySelector('.marked').innerHTML = this.$marked(this.input)
  }
}
</script>

<style lang="less" scoped>

</style>
