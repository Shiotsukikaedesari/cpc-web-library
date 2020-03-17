<template>
  <div
  id="message-reminder"
  class="message-reminder animation"
  :class="{'message-reminder-show': show}">
    <div class="message-reminder-container flex-row-between">
      <div class="message-reminder-header">
        <div class="message-reminder-header-box flex-row">
          <cpc-icon code="#icon-apple-mobileme" :color="iconColor"></cpc-icon>
          <div class="message-reminder-header-title" v-text="message"></div>
        </div>
      </div>
      <div class="message-reminder-close-icon animation">
        <cpc-icon code="#icon-close" size="14px" color="grey"></cpc-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cpc-message-reminder',
  data () {
    return {
      show: false, // 是否展示弹窗
      iconColor: 'rgb(195, 43, 209)',
      message: '这里是弹窗提示信息',
      type: '', // 弹窗类型
      showTime: 2000, // 暂时时长
      timer: '' // 显示时长定时器
    }
  },
  methods: {
    showTips () {
      this.show = true
      this.timer = setTimeout(() => {
        this.show = false
        setTimeout(() => {
        }, 2000)
      }, this.showTime)
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@themeColor: rgb(134, 12, 145);
@waitingThemeColor: rgb(195, 43, 209);
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
.message-reminder {
  box-shadow: 0 0 4px @waitingThemeColor;
  border-radius: 5px;
  display: inline-block;
  position: fixed;
  z-index: 10000;
  top: -50px;
  left: 50%;
  background: white;
  &:hover {
    box-shadow: 0 0 10px @themeColor;
  }
  > .message-reminder-container {
    padding: 5px 10px;
    > .message-reminder-close-icon {
      cursor: pointer;
      &:hover {
        transform: rotateZ(180deg);
      }
    }
    > .message-reminder-header {
      > .message-reminder-header-box {
        color: #666;
        > .icon-container {

        }
        > .message-reminder-header-title {
          margin: 0 20px 0 10px;
          cursor: default;
        }
      }
    }
  }
}
.message-reminder-show {
  transform: translateY(60px);
}
</style>
