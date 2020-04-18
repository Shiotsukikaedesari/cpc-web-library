<template>
  <button
  :class="[
    'cpc-button',
    'animation',
    {'cpc-button-fill': type === 'fill'},
    {'cpc-button-fill-waiting': type === 'fill' && waiting},
    {'cpc-button-fill-success': type === 'fill-success'},
    {'cpc-button-fill-success-waiting': type === 'fill-success' && waiting},
    {'cpc-button-fill-error': type === 'fill-error'},
    {'cpc-button-fill-errors-waiting': type === 'fill-error' && waiting},
    {'cpc-button-fill-warning': type === 'fill-warning'},
    {'cpc-button-fill-warning-waiting': type === 'fill-warning' && waiting},
    {'cpc-button-fill-info': type === 'fill-info'},
    {'cpc-button-fill-info-waiting': type === 'fill-info' && waiting},
    {'cpc-button-outLine': type === 'outLine'},
    {'cpc-button-outLine-waiting': type === 'outLine' && waiting},
    {'cpc-button-outLine-success': type === 'outLine-success'},
    {'cpc-button-outLine-success-waiting': type === 'outLine-success' && waiting},
    {'cpc-button-outLine-error': type === 'outLine-error'},
    {'cpc-button-outLine-error-waiting': type === 'outLine-error' && waiting},
    {'cpc-button-outLine-warning': type === 'outLine-warning'},
    {'cpc-button-outLine-warning-waiting': type === 'outLine-warning' && waiting},
    {'cpc-button-outLine-info': type === 'outLine-info'},
    {'cpc-button-outLine-info-waiting': type === 'outLine-info' && waiting},
    {'cpc-button-dashed': type === 'dashed'},
    {'cpc-button-dashed-waiting': type === 'dashed' && waiting},
    {'cpc-button-dashed-success': type === 'dashed-success'},
    {'cpc-button-dashed-success-waiting': type === 'dashed-success' && waiting},
    {'cpc-button-dashed-error': type === 'dashed-error'},
    {'cpc-button-dashed-error-waiting': type === 'dashed-error' && waiting},
    {'cpc-button-dashed-warning': type === 'dashed-warning'},
    {'cpc-button-dashed-warning-waiting': type === 'dashed-warning' && waiting},
    {'cpc-button-dashed-info': type === 'dashed-info'},
    {'cpc-button-dashed-info-waiting': type === 'dashed-info' && waiting},
    {'cpc-button-text': type === 'text'},
    {'cpc-button-text-waiting': type === 'text' && waiting},
    {'cpc-button-text-success': type === 'text-success'},
    {'cpc-button-text-success-waiting': type === 'text-success' && waiting},
    {'cpc-button-text-error': type === 'text-error'},
    {'cpc-button-text-error-waiting': type === 'text-error' && waiting},
    {'cpc-button-text-warning': type === 'text-warning'},
    {'cpc-button-text-warning-waiting': type === 'text-warning' && waiting},
    {'cpc-button-text-info': type === 'text-info'},
    {'cpc-button-text-info-waiting': type === 'text-info' && waiting}
  ]"
  :style="{
    'width': dataWidth,
    'height': dataHeight,
    'border-radius': dataRadius,
    'background-color': color
  }"
  @click="_click"
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
    // 按钮颜色
    color: {
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
    },
    // 是否等待
    waiting: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      type: ``,
      dataWidth: '',
      dataHeight: '',
      dataRadius: ''
    }
  },
  created () {
    this.loadType()
    this.isCircle()
  },
  methods: {
    _click () {
      this.$emit('click')
    },
    // 加载样式
    loadType () {
      // 判断样式
      if (this.sceneType && this.styleType) {
        this.type = `${this.styleType}-${this.sceneType}`
      } else if (this.sceneType && !this.styleType) {
        this.type = `fill-${this.sceneType}`
      } else {
        this.type = this.styleType
      }
    },
    // 判断圆形
    isCircle () {
      // 判断是否为圆形
      if (this.circle) {
        if (this.width && !this.height) {
          this.dataWidth = this.width
          this.dataHeight = this.width
        } else if (this.height && !this.width) {
          this.dataHeight = this.height
          this.dataWidth = this.height
        } else if (this.height && this.width) {
          this.dataWidth = this.width > this.height ? this.width : this.height
          this.dataHeight = this.dataWidth
        } else {
          this.dataWidth = this.width
          this.dataHeight = this.width
        }
        this.dataRadius = '50% !important'
      } else {
        this.dataWidth = this.width
        this.dataHeight = this.height
        this.dataRadius = this.radius
      }
    }
  },
  mounted () {
  },
  watch: {
    styleType (newValue, oldValue) {
      this.loadType()
    },
    sceneType (newValue, oldValue) {
      this.loadType()
    },
    circle (newValue, oldValue) {
      this.isCircle()
    }
  }
}
</script>

<style lang="less" scoped>
@buttonThemeColor: rgb(134, 12, 145);
@buttonWaitingThemeColor: rgb(195, 43, 209);
@buttonTextHover :rgb(223, 111, 233);

@infoColor: rgb(45, 183, 245);
@infoWaitingColor: rgb(106, 204, 250);
@infoTextHover: rgb(22, 165, 231);
@successColor: rgb(0, 204, 102);
@successWaitingColor: rgb(32, 235, 133);
@successTextHover: rgb(30, 212, 121);
@errorColor: rgb(255, 51, 0);
@errorWaitingColor: rgb(255, 106, 69);
@errorTextHover: rgb(202, 71, 38);
@warningColor: rgb(255, 153, 0);
@warningWaitingColor: rgb(255, 181, 70);
@warningTextHover: rgb(219, 149, 44);

@buttonForbidden: rgb(200, 200, 200);
// 按钮通用设置
.cpc-button {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5%;
  overflow: hidden;
  > .icon-container {
    font-size: 1em;
  }
}
// fill按钮 STR
.cpc-button-fill {
  background: @buttonThemeColor;
  color: #fff;
  &:hover {
    background: @buttonWaitingThemeColor;
  }
  &:active {
    box-shadow: inset 0 0 10px 5px @buttonThemeColor;
    transition-duration: 100ms;
  }
}
.cpc-button-fill-waiting {
  background: @buttonWaitingThemeColor;
  color: #fff;
  pointer-events: none;
}
.cpc-button-fill-success {
  background: @successColor;
  color: #fff;
  &:hover {
    background: @successWaitingColor;
  }
  &:active {
    box-shadow: inset 0 0 10px 5px @successColor;
    transition-duration: 100ms;
  }
}
.cpc-button-fill-success-waiting {
  background: @successWaitingColor;
  color: #fff;
  pointer-events: none;
}
.cpc-button-fill-error {
  background: @errorColor;
  color: #fff;
  &:hover {
    background: @errorWaitingColor;
  }
  &:active {
    box-shadow: inset 0 0 10px 5px @errorColor;
    transition-duration: 100ms;
  }
}
.cpc-button-fill-error-waiting {
  background: @errorWaitingColor;
  color: #fff;
  pointer-events: none;
}
.cpc-button-fill-info {
  background: @infoColor;
  color: #fff;
  &:hover {
    background: @infoWaitingColor;
  }
  &:active {
    box-shadow: inset 0 0 10px 5px @infoColor;
    transition-duration: 100ms;
  }
}
.cpc-button-fill-info-waiting {
  background: @infoWaitingColor;
  color: #fff;
  pointer-events: none;
}
.cpc-button-fill-warning {
  background: @warningColor;
  color: #fff;
  &:hover {
    background: @warningWaitingColor;
  }
  &:active {
    box-shadow: inset 0 0 10px 5px @warningColor;
    transition-duration: 100ms;
  }
}
.cpc-button-fill-warning-waiting {
  background: @warningWaitingColor;
  color: #fff;
  pointer-events: none;
}
// fill按钮disabled
.cpc-button-fill,
.cpc-button-fill-waiting,
.cpc-button-fill-success,
.cpc-button-fill-success-waiting,
.cpc-button-fill-error,
.cpc-button-fill-error-waiting,
.cpc-button-fill-info,
.cpc-button-fill-info-waiting,
.cpc-button-fill-warning,
.cpc-button-fill-warning-waiting {
  &:disabled {
    background: @buttonForbidden;
    cursor: not-allowed;
  }
}
// fill按钮 END
// aoutLine按钮 STR
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
}
.cpc-button-outLine-waiting {
  background: #fff;
  border: 1px solid @buttonWaitingThemeColor;
  color: @buttonWaitingThemeColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  pointer-events: none;
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
}
.cpc-button-outLine-success-waiting {
  background: #fff;
  border: 1px solid @successWaitingColor;
  color: @successWaitingColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  pointer-events: none;
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
}
.cpc-button-outLine-error-waiting {
  background: #fff;
  border: 1px solid @errorWaitingColor;
  color: @errorWaitingColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  pointer-events: none;
}
.cpc-button-outLine-info {
  background: #fff;
  border: 1px solid @infoColor;
  color: @infoColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  &:hover {
    box-shadow: 0 0 10px @infoColor;
    text-shadow: 0 0 2px @infoTextHover;
    border: 1px solid transparent;
  }
  &:active {
    box-shadow: 0 0 0 1px @infoColor;
    transition-duration: 10ms;
  }
}
.cpc-button-outLine-info-waiting {
  background: #fff;
  border: 1px solid @infoWaitingColor;
  color: @infoWaitingColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  pointer-events: none;
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
}
.cpc-button-outLine-warning-waiting {
  background: #fff;
  border: 1px solid @warningWaitingColor;
  color: @warningWaitingColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  pointer-events: none;
}
// aoutLine按钮 disabled
.cpc-button-outLine,
.cpc-button-outLine-waiting,
.cpc-button-outLine-success,
.cpc-button-outLine-success-waiting,
.cpc-button-outLine-error,
.cpc-button-outLine-error-waiting,
.cpc-button-outLine-info,
.cpc-button-outLine-info-waiting,
.cpc-button-outLine-warning,
.cpc-button-outLine-warning-waiting {
  &:disabled {
    cursor: not-allowed;
    border: 1px solid @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
// aoutLine按钮 END
// dashed按钮 STR
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
}
.cpc-button-dashed-waiting {
  background: #fff;
  border: 1px dashed @buttonWaitingThemeColor;
  color: @buttonWaitingThemeColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  pointer-events: none;
}
.cpc-button-dashed-success-waiting {
  background: #fff;
  border: 1px dashed @successWaitingColor;
  color: @successWaitingColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  pointer-events: none;
}
.cpc-button-dashed-error-waiting {
  background: #fff;
  border: 1px dashed @errorWaitingColor;
  color: @errorWaitingColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  pointer-events: none;
}
.cpc-button-dashed-info-waiting {
  background: #fff;
  border: 1px dashed @infoWaitingColor;
  color: @infoWaitingColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  pointer-events: none;
}
.cpc-button-dashed-warning-waiting {
  background: #fff;
  border: 1px dashed @warningWaitingColor;
  color: @warningWaitingColor;
  box-shadow: 0 0 0 3px rgba(223, 111, 233, 0);
  pointer-events: none;
}
// dashed按钮disabled
.cpc-button-dashed,
.cpc-button-dashed-success,
.cpc-button-dashed-error,
.cpc-button-dashed-info,
.cpc-button-dashed-warning,
.cpc-button-dashed-waiting,
.cpc-button-dashed-success-waiting,
.cpc-button-dashed-error-waiting,
.cpc-button-dashed-info-waiting,
.cpc-button-dashed-warning-waiting {
  &:disabled {
    cursor: not-allowed;
    padding: 10px;
    border: 1px dashed @buttonForbidden;
    box-shadow: 0 0 10px @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
    color: @buttonForbidden;
  }
}
// dashed按钮 END
// text按钮 STR
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
}
.cpc-button-text-waiting {
  background: #fff;
  color: @buttonWaitingThemeColor;
  pointer-events: none;
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
}
.cpc-button-text-success-waiting {
  background: #fff;
  color: @successWaitingColor;
  pointer-events: none;
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
}
.cpc-button-text-error-waiting {
  background: #fff;
  color: @errorWaitingColor;
  pointer-events: none;
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
}
.cpc-button-text-info-waiting {
  background: #fff;
  color: @infoWaitingColor;
  pointer-events: none;
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
}
.cpc-button-text-warning-waiting {
  background: #fff;
  color: @warningWaitingColor;
  pointer-events: none;
}
.cpc-button-text,
.cpc-button-text-waiting,
.cpc-button-text-success,
.cpc-button-text-success-waiting,
.cpc-button-text-error,
.cpc-button-text-error-waiting,
.cpc-button-text-info,
.cpc-button-text-info-waiting,
.cpc-button-text-warning,
.cpc-button-text-warning-waiting {
  &:disabled {
    cursor: not-allowed;
    color: @buttonForbidden;
    text-shadow: 0 0 2px @buttonForbidden;
  }
}
// text按钮 disabled
// text按钮 END
</style>
