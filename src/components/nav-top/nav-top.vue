<template>
    <div class="container">
        <div :class="['nav-top', 'flex-row', 'border-base', {'fixed': fixed}]" :style="{'width': width, 'height': height}">
          <div class="left-box flex-row">
            <slot name="nav-top-left"></slot>
          </div>
          <div class="center-box flex-row-center">
              <slot name="nav-top-center"></slot>
          </div>
          <div class="right-box flex-row-end">
            <slot name="nav-top-right"></slot>
          </div>
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
      > .left-box {
        width: 33%;
        height: 100%;
        padding-left: 10px;
      }
      > .center-box {
        width: 34%;
        height: 100%;
      }
      > .right-box {
        width: 33%;
        height: 100%;
        padding-right: 10px;
      }
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
