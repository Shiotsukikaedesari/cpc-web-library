<template>
    <div class="display-box">
        display-box
    </div>
</template>

<script>
export default {
  name: 'cpc-display-box',
  props: {
    markdown: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {
    console.log(this.markdown)
  }
}
</script>

<style lang="less" scoped>

</style>
