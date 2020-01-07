<template>
    <div
    class="icon-container animation flex-row"
    :style="{
      'font-size': size,
      'color': color
      }"
    @click="click"
    >
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
      type: String
    },
    size: {
      type: String,
      default: '25px'
    },
    color: {
      type: String,
      default: 'black'
    },
    click: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="less">
.icon-container {
  display: inline-block;
}
</style>
