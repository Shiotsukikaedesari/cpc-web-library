<template>
  <div :class="[
  direction === 'vertical' ? 'cpc-button-group-vertical' : 'cpc-button-group-horizontal'
  ]" ref="buttonGroup">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cpc-button-group',
  props: {
    // 方向horizontal、vertical
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  data () {
    return {

    }
  },
  created () {
  },
  mounted () {
    // 先进行空格清理
    this.$Tools.cleanWhitespace(this.$refs.buttonGroup)
  }
}
</script>

<style lang="less" scoped>
.cpc-button-group-horizontal {
  display: inline-block;
  > .cpc-button {
    margin: 0;
  }
  > .cpc-button:not(:first-child):not(:last-child) {
    border-radius: 0 !important;
  }
  > .cpc-button:not(:first-child) {
    border-left: 0;
  }
  > .cpc-button:first-child {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
  > .cpc-button:last-child {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
}
.cpc-button-group-vertical {
  display: inline-block;
    > .cpc-button {
      margin: 0;
      display: block;
    }
    > .cpc-button:not(:first-child):not(:last-child) {
      border-radius: 0 !important;
    }
    > .cpc-button:not(:first-child) {
      border-top: 0;
    }
    > .cpc-button:first-child {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
    > .cpc-button:last-child {
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    }
}
</style>
