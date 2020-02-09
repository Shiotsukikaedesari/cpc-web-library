<template>
  <div class="message-popup">
    <div class="message-popup-container">
      <div class="message-popup-close-icon">
        <cpc-icon code="#icon-close"></cpc-icon>
      </div>
      <div class="message-popup-header">
        <div class="message-popup-header-box">
          <cpc-icon code="#icon-cloud-outline"></cpc-icon>
          <div class="message-popup-header-title">hghghgfj jf  ftjtfj tfxj jt k  fx </div>
        </div>
      </div>
      <div class="message-popup-body">
        <div class="message-popup-body-box">
          <cpc-icon code="#icon-cloud-outline"></cpc-icon>
          <div class="message-popup-body-text">hghghgfj jf  ftjtfj tfxj jt k  fx </div>
        </div>
      </div>
      <div class="message-popup-footer">
        <div class="message-popup-footer-button-box">
          <cpc-button styleType="outLine">取消</cpc-button>
          <cpc-button>确认</cpc-button>
        </div>
      </div>
    </div>
    <div class="message-popup-mask"></div>
  </div>
</template>

<script>
export default {
  name: 'cpc-message-popup',
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
.message-popup {
  > .message-popup-container {
    > .message-popup-close-icon {}
    > .message-popup-header {
      > .message-popup-header-box {
        > .icon-container {}
        > .message-popup-header-title {}
      }
    }
    > .message-popup-body {
      > .message-popup-body-box {
        > .icon-container {}
        > .message-popup-body-text {}
      }
    }
    > .message-popup-footer {
      > .message-popup-footer-button-box {

      }
    }
  }
  > .message-popup-mask {

  }
}
</style>
