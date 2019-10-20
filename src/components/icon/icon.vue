<template>
    <div class="icon-container">
      <svg class="icon" aria-hidden="true" :style="{'font-size': size}">
        <use :xlink:href="code"></use>
      </svg>
    </div>
</template>

<script>
export default {
  name: 'cpc-icon',
  props: {
    code: {
      type: String,
      default: '#icon-alert-circle-outline'
    },
    size: {
      type: String,
      default: '25px'
    }
  }
}
</script>

<style lang="less" scoped>

</style>
