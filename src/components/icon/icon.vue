<template>
    <div class="icon-container animation" :style="{'font-size': size, 'color': color}">
      <svg class="icon" aria-hidden="true">
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
    },
    color: {
      type: String,
      default: 'black'
    }
  }
}
</script>

<style lang="less">

</style>
