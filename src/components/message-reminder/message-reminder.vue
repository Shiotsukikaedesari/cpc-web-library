<template>
  <div class="cpc-message-reminder flex-column">
    <div
    class="cpc-message-reminder-container animation flex-row-between "
    :class="{
      'cpc-message-reminder-container-hidden': item.hidden,
      'cpc-message-reminder-container-show': item.show
      }"
    v-for="(item, index) in messageList"
    :key="index"
    >
      <div class="cpc-message-reminder-header">
        <div class="cpc-message-reminder-header-box flex-row">
          <cpc-icon :code="item.icon" :color="item.color"></cpc-icon>
          <div class="cpc-message-reminder-header-title" v-text="item.message"></div>
        </div>
      </div>
      <div class="cpc-message-reminder-close-icon animation">
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
      icon: '#icon-apple-mobileme', // 图标
      color: 'rgb(195, 43, 209)',
      message: '这里是弹窗提示信息',
      type: 'default', // 弹窗类型
      duration: 2000, // 暂时时长
      messageList: [
        // message // 消息
        // icon //图标
        // color // 图标颜色
        // duration // 单个时长
        // type // 弹窗类型
      ] // 消息队列
    }
  },
  methods: {
    showTips ({
      message = this.message,
      icon = this.icon,
      color = this.color,
      duration = this.duration,
      type = this.type
    } = {}) {
      let temp = {
        message,
        icon,
        color,
        duration,
        type,
        show: true,
        hidden: false,
        timer: ''
      }
      this.messageList.push(temp)

      this.$nextTick(() => {
      })
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
.cpc-message-reminder {
  position: fixed;
  z-index: 10000;
  top: -50px;
  left: 50%;
  > .cpc-message-reminder-container {
    box-shadow: 0 0 4px rgb(85, 7, 90);
    border-radius: 5px;
    background: white;
    padding: 5px 10px;
    position: absolute;
    top: 0;
    left: 0;
    transform:translateY(60px);
    &:hover {
      box-shadow: 0 0 10px rgb(134, 12, 145);
    }
    > .cpc-message-reminder-close-icon {
      cursor: pointer;
      &:hover {
        transform: rotateZ(180deg);
      }
    }
    > .cpc-message-reminder-header {
      > .cpc-message-reminder-header-box {
        color: #666;
        > .icon-container {

        }
        > .cpc-message-reminder-header-title {
          margin: 0 20px 0 10px;
          cursor: default;
          white-space: nowrap;
        }
      }
    }
  }
  .cpc-message-reminder-container-show {
    animation: showReminder 500ms ease-out both;
  }
  .cpc-message-reminder-container-hidden {
    animation: hiddenReminder 500ms ease-out both;
  }
  @keyframes showReminder {
    0% {transform:translateY(0)};
    100% {transform:translateY(60px)};
  }
  @keyframes hiddenReminder {
    0% {transform:translateY(60px)};
    100% {transform:translateY(0)};
  }
}

</style>
