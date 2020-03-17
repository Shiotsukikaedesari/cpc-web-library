<template>
  <div class="message-reminder">
    <div class="message-reminder-container">
      <div class="message-reminder-close-icon animation">
        <cpc-icon code="#icon-close"></cpc-icon>
      </div>
      <div class="message-reminder-header">
        <div class="message-reminder-header-box flex-row">
          <cpc-icon code="#icon-cloud-outline"></cpc-icon>
          <div class="message-reminder-header-title">这是弹窗的标题</div>
        </div>
      </div>
      <div class="message-reminder-body">
        <div class="message-reminder-body-box flex-row">
          <cpc-icon code="#icon-cloud-outline"></cpc-icon>
          <div class="message-reminder-body-text">弹窗内容输入测试，可以测试长度，测试空格与tab还有换行</div>
        </div>
      </div>
      <div class="message-reminder-footer">
        <div class="message-reminder-footer-button-box">
          <cpc-button styleType="outLine">取消</cpc-button>
          <cpc-button>确认</cpc-button>
        </div>
      </div>
    </div>
    <div class="message-reminder-mask"></div>
  </div>
</template>

<script>
export default {
  name: 'cpc-message-reminder',
  data () {
    return {

    }
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
  box-shadow: 0 0 10px rgb(88, 0, 110);
  border-radius: 5px;
  > .message-reminder-container {
    position: relative;
    > .message-reminder-close-icon {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      &:hover {
        transform: rotateZ(180deg);
      }
    }
    > .message-reminder-header {
      background: rgba(147, 31, 241, 0.5);
      padding: 5px;
      > .message-reminder-header-box {
        font-size: 20px;
        > .icon-container {
          margin-right: 5px;
        }
        > .message-reminder-header-title {}
      }
    }
    > .message-reminder-body {
      padding: 10px 5px;
      > .message-reminder-body-box {
        > .icon-container {
          margin-right: 5px;
        }
        > .message-reminder-body-text {}
      }
    }
    > .message-reminder-footer {
      > .message-reminder-footer-button-box {

      }
    }
  }
  > .message-reminder-mask {

  }
}
</style>
