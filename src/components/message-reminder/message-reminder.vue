<template>
  <div class="cpc-message-reminder flex-column-center">
    <transition-group name="cpc-message-reminder">
      <div
        class="cpc-message-reminder-container"
        :data-index="index"
        :id="item.id"
        :style="{boxShadow: `0 0 6px ${item.color}`}"
        v-for="(item, index) in messageList"
        :key="item.id">
        <div class="cpc-message-reminder-header">
          <div class="cpc-message-reminder-header-box flex-row">
            <cpc-icon
              :aniDuration="item.iconDur"
              :animation="item.iconAni"
              :code="item.icon"
              :color="item.color">
            </cpc-icon>
            <div class="cpc-message-reminder-header-title" v-text="item.message"></div>
          </div>
        </div>
        <div class="cpc-message-reminder-close-icon animation" @click="closeTips(item.id)">
          <cpc-icon  code="#icon-close" size="14px" color="grey"></cpc-icon>
        </div>
      </div>
    </transition-group>
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
      duration: 2000, // 暂时时长
      manual: false, // 是否手动控制
      iconAni: '', // 图标动画
      iconDur: '500ms', // 图标动画时长
      messageList: [
        // id // 自动生成
        // message // 消息
        // icon //图标
        // color // 图标颜色
        // duration // 单个时长
        // manua // 是否手动控制
        // iconAni // 图标动画
      ] // 消息队列
    }
  },
  methods: {
    /**
     * @name 展示弹窗
     * @param {message} [弹窗的信息，不传读取默认值]
     * @param {icon} [图标code，不传读取默认值]
     * @param {color} [图标颜色，不传读取默认值]
     * @param {duration} [弹窗持续时间，不传读取默认值]
     * @param {manual} [是否为手动关闭模式，不传读取默认值]
     * @param {iconAni} [图标动画，不传读取默认值]
     * @param {iconDur} [图标动画时长，不传读取默认值]
     */
    showTips ({
      message = this.message,
      icon = this.icon,
      color = this.color,
      duration = this.duration,
      manual = this.manual,
      iconAni = this.iconAni,
      iconDur = this.iconDur
    } = {}) {
      let temp = {
        id: new Date().getTime(),
        message,
        icon,
        color,
        duration,
        manual,
        iconAni,
        iconDur
      }
      this.messageList.push(temp)
      // 判断是否为手动模式，手动模式不自动删除
      if (!temp.manual) {
        setTimeout(() => { this.closeTips(temp.id) }, temp.duration)
      }
      // 返回id值以便手动关闭弹窗
      return temp.id
    },
    // 关闭弹窗
    closeTips (id) {
      this.messageList.some((elem, i, arr) => {
        if (elem.id === id) {
          // 如果这个时候列表里面只剩一条，让他的定位不脱离文档流
          if (this.messageList.length === 1) {
            let dom = document.getElementById(`${elem.id}`)
            dom.style.position = 'unset'
          }
          this.messageList.splice(i, 1)
          return true
        }
      })
    },
    // 设置弹窗配置
    setTips (id, {
      message,
      icon,
      color,
      duration,
      iconAni,
      iconDur
    } = {}) {
      this.messageList.some((elem, i, arr) => {
        if (elem.id === id) {
          elem.message = message || elem.message
          elem.icon = icon || elem.icon
          elem.color = color || elem.color
          elem.duration = duration || elem.duration
          elem.iconAni = iconAni || elem.iconAni
          elem.iconDur = iconDur || elem.iconDur
          return true
        }
      })
      return id
    },
    // 成功弹窗
    successTips ({
      message = this.message,
      duration = this.duration,
      manual = this.manual,
      iconAni = this.iconAni,
      iconDur = this.iconDur
    } = {}) {
      return this.showTips({
        icon: '#icon-check-circle',
        color: 'rgb(0, 204, 102)',
        message,
        duration,
        manual,
        iconAni,
        iconDur
      })
    },
    // 错误弹窗
    errorTips ({
      message = this.message,
      duration = this.duration,
      manual = this.manual,
      iconAni = this.iconAni,
      iconDur = this.iconDur
    } = {}) {
      return this.showTips({
        icon: '#icon-close-circle',
        color: 'rgb(255, 51, 0)',
        message,
        duration,
        manual,
        iconAni,
        iconDur
      })
    },
    // 警告弹窗
    warnTips ({
      message = this.message,
      duration = this.duration,
      manual = this.manual,
      iconAni = this.iconAni,
      iconDur = this.iconDur
    } = {}) {
      return this.showTips({
        icon: '#icon-alert-circle',
        color: 'rgb(255, 153, 0)',
        message,
        duration,
        manual,
        iconAni,
        iconDur
      })
    },
    // 提示弹窗
    infoTips ({
      message = this.message,
      duration = this.duration,
      manual = this.manual,
      iconAni = this.iconAni,
      iconDur = this.iconDur
    } = {}) {
      this.showTips({
        icon: ' #icon-message-processing',
        color: 'rgb(45, 183, 245)',
        message,
        duration,
        manual,
        iconAni,
        iconDur
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
  top: 0;
  left: 0;
  width: 100%;
  > span {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0;
    > .cpc-message-reminder-container {
      box-shadow: 0 0 6px @themeColor;
      border-radius: 5px;
      background: white;
      padding: 5px 10px;
      margin: 5px 0;
      display: inline-block;
      height: 40px;
      > .cpc-message-reminder-close-icon {
        height: 100%;
        vertical-align: top;
        cursor: pointer;
        display: inline-block;
        > div {
          height: 100%;
          display: flex;
          align-items: center;
        }
        &:hover {
          transform: rotateZ(180deg);
        }
      }
      > .cpc-message-reminder-header {
        display: inline-block;
        > .cpc-message-reminder-header-box {
          color: rgb(102, 102, 102);
          > .icon-container {

          }
          > .cpc-message-reminder-header-title {
            margin: 0 15px 0 10px;
            cursor: default;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
.cpc-message-reminder-move {
  transition: all 1s ease;
}
.cpc-message-reminder-enter, .cpc-message-reminder-leave-to {
  opacity: 0;
  transform:translateY(-60px);
}
.cpc-message-reminder-enter-to, .cpc-message-reminder-leave  {
  opacity: 1;
  transform:translateY(0px);
}
.cpc-message-reminder-enter-active, .cpc-message-reminder-leave-active {
  transition: all 800ms ease;
}
.cpc-message-reminder-leave-active {
  transition: all 800ms ease;
  //开启过渡动画需要用定位脱离文档流
  position: absolute;
}

</style>
