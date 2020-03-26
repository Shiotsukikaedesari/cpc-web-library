<template>
    <div class="container">
        <div :class="['nav-top', 'flex-row-between', 'border-base', {'fixed': fixed}]" :style="{'width': width, 'height': height}">
          <div class="left-box flex-row" :style="{'width': leftWidth}">
            <slot name="nav-top-left"></slot>
          </div>
          <div class="center-box flex-row-center" :style="{'width': centerWidth}">
              <slot name="nav-top-center"></slot>
          </div>
          <div class="right-box flex-row-end" :style="{'width': rightWidth}">
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
      // 右边的宽度
      rightWidth: '33%',
      // 中间宽度
      centerWidth: '34%',
      // 左边宽度
      leftWidth: '33%'
    }
  },
  created () {
    // 根据是否有slot拉伸布局
    let leftSlot = this.$slots['nav-top-left']
    let centerSlot = this.$slots['nav-top-center']
    let rightSlot = this.$slots['nav-top-right']
    if (!centerSlot && rightSlot && leftSlot) {
      this.rightWidth = 'unset'
      this.leftWidth = 'unset'
      this.centerWidth = '0%'
    } else if (!centerSlot && !rightSlot) {
      this.rightWidth = '0'
      this.leftWidth = '100%'
      this.centerWidth = '0%'
    } else if (!centerSlot && !leftSlot) {
      this.rightWidth = '100%'
      this.leftWidth = '0%'
      this.centerWidth = '0%'
    } else if (!leftSlot && !rightSlot) {
      this.rightWidth = '0%'
      this.leftWidth = '0%'
      this.centerWidth = '100%'
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    > .nav-top {
      border: 0;
      border-bottom: 1px solid rgb(220, 220, 220);
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
