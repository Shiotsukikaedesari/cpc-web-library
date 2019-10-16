<template>
    <div class="container">
        <div :class="['nav-top', 'border-base', {'fixed': fixed}]" :style="{'width': width, 'height': height}">
        </div>
        <div class="nav-top-mask" v-if="fixed" :style="{'width': width, 'height': height}"></div>
    </div>
</template>

<script>
export default {
  name: 'cpc-nav-top',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    fixed: { // 是否固定
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    > .nav-top {
      background: white;
    }
    > .fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
    }
    > .nav-top-mask {

    }
  }
</style>
