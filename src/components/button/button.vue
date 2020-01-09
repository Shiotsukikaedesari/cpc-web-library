<template>
  <button
  :class="[
  'cpc-button',
  'animation',
  {'cpc-button-fill': type === 'fill'},
  {'cpc-button-fill-success': type === 'fill-success'},
  {'cpc-button-fill-error': type === 'fill-error'},
  {'cpc-button-fill-warning': type === 'fill-warning'},
  {'cpc-button-fill-info': type === 'fill-info'},
  {'cpc-button-outLine': type === 'outLine'},
  {'cpc-button-outLine-success': type === 'outLine-success'},
  {'cpc-button-outLine-error': type === 'outLine-error'},
  {'cpc-button-outLine-warning': type === 'outLine-warning'},
  {'cpc-button-outLine-info': type === 'outLine-info'},
  {'cpc-button-dashed': type === 'dashed'},
  {'cpc-button-dashed-success': type === 'dashed-success'},
  {'cpc-button-dashed-error': type === 'dashed-error'},
  {'cpc-button-dashed-warning': type === 'dashed-warning'},
  {'cpc-button-dashed-info': type === 'dashed-info'},
  {'cpc-button-text': type === 'text'},
  {'cpc-button-text-success': type === 'text-success'},
  {'cpc-button-text-error': type === 'text-error'},
  {'cpc-button-text-warning': type === 'text-warning'},
  {'cpc-button-text-info': type === 'text-info'},
  ]"
  :style="{
    'width': width,
    'height': height,
    'border-radius': radius
  }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'cpc-button',
  props: {
    // 按钮宽度
    width: {
      type: String
    },
    // 按钮高度
    height: {
      type: String
    },
    // 按钮样式类型 fill, outLine, dashed, text
    styleType: {
      type: String,
      default: 'fill'
    },
    // 按钮场景类型 success、error、warning、info
    sceneType: {
      type: String
    },
    // 圆角
    radius: {
      type: String
    },
    // 是否为圆形
    circle: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      type: ``
    }
  },
  created () {
    // 判断样式
    if (this.sceneType && this.styleType) {
      this.type = `${this.styleType}-${this.sceneType}`
    } else if (this.sceneType && !this.styleType) {
      this.type = `fill-${this.sceneType}`
    } else {
      this.type = this.styleType
    }
    // 判断是否为圆形
    if (this.circle) {
      if (this.width && !this.height) {
        this.height = this.width
      } else if (this.height && !this.width) {
        this.width = this.height
      } else if (this.height && this.width) {
        this.width = this.width > this.height ? this.width : this.height
        this.height = this.width
      } else {
        this.height = this.width
      }
      this.radius = '50% !important'
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@buttonThemeColor: rgb(134, 12, 145);
@buttonTextHover :rgb(223, 111, 233);

@infoColor: rgb(45, 183, 245);
@infoTextHover: rgb(22, 165, 231);
@successColor: rgb(0, 204, 102);
@successTextHover: rgb(30, 212, 121);
@errorColor: rgb(255, 51, 0);
@errorTextHover: rgb(202, 71, 38);
@warningColor: rgb(255, 153, 0);
@warningTextHover: rgb(219, 149, 44);

@buttonForbidden: rgb(200, 200, 200);
.cpc-button {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5%;
  overflow: hidden;
}
.cpc-button-fill {
  background: @buttonThemeColor;
  color: #fff;
  &:hover {
    background: rgb(195, 43, 209);
  }
  &:active {
    box-shadow: inset 0 0 10px 5px @buttonThemeColor;
    transition-duration: 100ms;
  }
  &:disabled {
    background: @buttonForbidden;
    cursor: not-allowed;
  }
}
.cpc-button-fill-success {
  background: @successColor;
  color: #fff;
  &:hover {
    background: rgb(32, 235, 133);
  }
  &:active {
    box-shadow: inset 0 0 10px 5px @successColor;
    transition-duration: 100ms;
  }
  &:disabled {
    background: @buttonForbidden;
    cursor: not-allowed;
  }
}
.cpc-button-fill-error {
  background: @errorColor;
  color: #fff;
  &:hover {
    background: rgb(255, 106, 69);
  }
  &:active {
    box-shadow: inset 0 0 10px 5px @errorColor;
    transition-duration: 100ms;
  }
  &:disabled {
    background: @buttonForbidden;
    cursor: not-allowed;
  }
}
.cpc-button-fill-info {
  background: @infoColor;
  color: #fff;
  &:hover {
    background: rgb(106, 204, 250);
  }
  &:active {
    box-shadow: inset 0 0 10px 5px @infoColor;
    transition-duration: 100ms;
  }
  &:disabled {
    background: @buttonForbidden;
    cursor: not-allowed;
  }
}
.cpc-button-fill-warning {
  background: @warningColor;
  color: #fff;
  &:hover {
    background: rgb(255, 181, 70);
  }
  &:active {
    box-shadow: inset 0 0 10px 5px @warningColor;
    transition-duration: 100ms;
  }
  &:disabled {
    background: @buttonForbidden;
    cursor: not-allowed;
  }
}
.cpc-button-outLine {
  background: #fff;
  border: 1px solid @buttonThemeColor;
  color: @buttonThemeColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    box-shadow: 0 0 10px @buttonThemeColor;
    text-shadow: 0 0 2px @buttonTextHover;
    border: 1px solid transparent;
  }
  &:active {
    box-shadow: 0 0 0 1px @buttonThemeColor;
    transition-duration: 10ms;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px solid @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
.cpc-button-outLine-success {
  background: #fff;
  border: 1px solid @successColor;
  color: @successColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    box-shadow: 0 0 10px @successColor;
    text-shadow: 0 0 2px @successTextHover;
    border: 1px solid transparent;
  }
  &:active {
    box-shadow: 0 0 0 1px @successColor;
    transition-duration: 10ms;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px solid @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
.cpc-button-outLine-error {
  background: #fff;
  border: 1px solid @errorColor;
  color: @errorColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    box-shadow: 0 0 10px @errorColor;
    text-shadow: 0 0 2px @errorColor;
    border: 1px solid transparent;
  }
  &:active {
    box-shadow: 0 0 0 1px @errorColor;
    transition-duration: 10ms;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px solid @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
.cpc-button-outLine-info {
  background: #fff;
  border: 1px solid @infoColor;
  color: @infoColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    box-shadow: 0 0 10px @infoColor;
    text-shadow: 0 0 2px @buttonTextHover;
    border: 1px solid transparent;
  }
  &:active {
    box-shadow: 0 0 0 1px @infoColor;
    transition-duration: 10ms;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px solid @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
.cpc-button-outLine-warning {
  background: #fff;
  border: 1px solid @warningColor;
  color: @warningColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    box-shadow: 0 0 10px @warningColor;
    text-shadow: 0 0 2px @warningColor;
    border: 1px solid transparent;
  }
  &:active {
    box-shadow: 0 0 0 1px @warningColor;
    transition-duration: 10ms;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px solid @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
.cpc-button-dashed {
  background: #fff;
  border: 1px dashed @buttonThemeColor;
  color: @buttonThemeColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    padding: 8px;
    border: 3px dashed @buttonThemeColor;
    text-shadow: 0 0 2px @buttonTextHover;
  }
  &:active {
    padding: 8px;
    border: 3px dashed transparent;
    transition-duration: 50ms;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px dashed @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
.cpc-button-dashed-success {
  background: #fff;
  border: 1px dashed @successColor;
  color: @successColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    padding: 8px;
    border: 3px dashed @successColor;
    text-shadow: 0 0 2px @successTextHover;
  }
  &:active {
    padding: 8px;
    border: 3px dashed transparent;
    transition-duration: 50ms;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px dashed @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
.cpc-button-dashed-error {
  background: #fff;
  border: 1px dashed @errorColor;
  color: @errorColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    padding: 8px;
    border: 3px dashed @errorColor;
    text-shadow: 0 0 2px @errorTextHover;
  }
  &:active {
    padding: 8px;
    border: 3px dashed transparent;
    transition-duration: 50ms;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px dashed @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
.cpc-button-dashed-info {
  background: #fff;
  border: 1px dashed @infoColor;
  color: @infoColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    padding: 8px;
    border: 3px dashed @infoColor;
    text-shadow: 0 0 2px @infoTextHover;
  }
  &:active {
    padding: 8px;
    border: 3px dashed transparent;
    transition-duration: 50ms;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px dashed @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
.cpc-button-dashed-warning {
  background: #fff;
  border: 1px dashed @warningColor;
  color: @warningColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    padding: 8px;
    border: 3px dashed @warningColor;
    text-shadow: 0 0 2px @warningTextHover;
  }
  &:active {
    padding: 8px;
    border: 3px dashed transparent;
    transition-duration: 50ms;
  }
  &:disabled {
    cursor: not-allowed;
    border: 1px dashed @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
.cpc-button-text {
  background: #fff;
  color: @buttonThemeColor;
  &:hover {
    text-shadow: 0 0 2px @buttonTextHover;
  }
  &:active {
    color: rgba(134, 12, 145, 0.5);
    // background: @buttonThemeColor;
    transition-duration: 50ms;
  }
  &:disabled {
    cursor: not-allowed;
    color: @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
  }
}
.cpc-button-text-success {
  background: #fff;
  color: @successColor;
  &:hover {
    text-shadow: 0 0 2px @successTextHover;
  }
  &:active {
    color: rgba(0, 204, 102, 0.5);
    // background: @buttonThemeColor;
    transition-duration: 50ms;
  }
  &:disabled {
    cursor: not-allowed;
    color: @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
  }
}
.cpc-button-text-error {
  background: #fff;
  color: @errorColor;
  &:hover {
    text-shadow: 0 0 2px @errorTextHover;
  }
  &:active {
    color: rgba(255, 51, 0, 0.5);
    // background: @buttonThemeColor;
    transition-duration: 50ms;
  }
    &:disabled {
    cursor: not-allowed;
    color: @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
  }
}
.cpc-button-text-info {
  background: #fff;
  color: @infoColor;
  &:hover {
    text-shadow: 0 0 2px @infoTextHover;
  }
  &:active {
    color: rgba(45, 183, 245, 0.5);
    // background: @buttonThemeColor;
    transition-duration: 50ms;
  }
    &:disabled {
    cursor: not-allowed;
    color: @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
  }
}
.cpc-button-text-warning {
  background: #fff;
  color: @warningColor;
  &:hover {
    text-shadow: 0 0 2px @warningTextHover;
  }
  &:active {
    color: rgba(255, 153, 0, 0.5);
    // background: @buttonThemeColor;
    transition-duration: 50ms;
  }
  &:disabled {
    cursor: not-allowed;
    color: @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
  }
}
</style>
