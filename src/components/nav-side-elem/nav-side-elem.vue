<template>
<div class="container" :style="{'height': height}">
    <div
        :class="{
          'elem-box': true,
          'flex-row-between': true,
          'animation': true,
          'box-hover': hover
          }"
        @click="active($event)"
        @mouseenter="showHover"
        @mouseleave="hideHover"
    >
        <div :class="{'left-box': true, 'flex-row': true, 'father-box': father}">
            <div class="ui" v-if="showUI"><slot name="side-ui"></slot></div>
            <div class="title"><slot>this is menu title</slot></div>
        </div>
        <div class="right-box flex-row">
          <div :class="['animation', 'arrow' + elemKey, {'arrowAni': arrowAni}]" v-if="father"><cpc-icon code="#icon-down" size="14px"></cpc-icon></div>
          <div :class="['signal' + elemKey, 'animation']"></div>
        </div>
    </div>
    <canvas
        :class="'ani' + elemKey"
    ></canvas>
</div>
</template>

<script>
export default {
  name: 'cpc-nav-side-elem',
  props: {
    elemKey: {
      type: String
    },
    height: {
      type: String,
      default: '40px'
    },
    title: {
      type: String,
      default: 'This is level one title'
    },
    showUI: {
      type: Boolean,
      default: true
    },
    father: { // 是否为父标签
      type: Boolean,
      default: false
    },
    isSignal: { // 是否显示标记
      type: Boolean,
      default: false
    },
    arrowInit: { // 箭头是否预先反转
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      pen: '', // canvas画笔
      hover: false, // hover效果
      timer: '', // 定时器
      positionX: '', // x的坐标位置
      rectWidth: 0, // 图形宽
      canvasWidth: '', // canvas的宽度
      isAni: false, // 是否在播放
      arrowAni: false // 箭头方向
    }
  },
  methods: {
    active () {
      let component = this
      this.hover = false
      // 箭头动画
      this.arrowAni = !this.arrowAni
      // this.positionX = event.offsetX
      // 防止双击造成内存泄露
      if (!this.isAni) {
        this.isAni = true
        this.pen.fillStyle = '#E6E6E6'
        this.pen.fillRect(this.positionX, 0, this.rectWidth, parseInt(this.height) * 10)
        this.timer = setInterval(() => {
          component.rectWidth += 5
          if (component.rectWidth > component.canvasWidth) {
            setTimeout(() => {
              document.querySelector('.ani' + component.elemKey.toString()).width = component.canvasWidth
              component.click()
              component.isAni = false
              // 去除其他标记，给自己和父级加上标记
              let allSignal = document.querySelectorAll('.right-box > div[class*=signal]')
              allSignal.forEach(elem => {
                elem.style.opacity = 0
              })
              let signal = document.querySelector('.signal' + component.elemKey)
              let parentSignal = document.querySelector('.signal' + component.elemKey[0] + '-0')
              signal.style.opacity = 1
              if (parentSignal) {
                parentSignal.style.opacity = 1
              }
            }, 100)
            component.rectWidth = 0
            clearInterval(component.timer)
          } else {
            this.pen.fillRect(component.positionX - component.rectWidth / 2, 0, component.rectWidth, parseInt(component.height) * 10)
          }
        }, 60 / 24)
      }
    },
    showHover () {
      this.hover = true
    },
    hideHover () {
      this.hover = false
    }
  },
  mounted () {
    let canvas = document.querySelector('.ani' + this.elemKey.toString())
    this.pen = canvas.getContext('2d')
    this.canvasWidth = canvas.width
    this.positionX = this.canvasWidth / 2
    if (this.isSignal) {
      let signal = document.querySelector('.signal' + this.elemKey)
      signal.style.opacity = 1
    }
    this.arrowAni = this.arrowInit
  }
}
</script>

<style lang="less" scoped>
    .container {
      display: flex;
        position: relative;
        padding: 0;
        > .elem-box {
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            cursor: pointer;
            > .left-box {
              width: calc(~"100% - 5px");
                > .ui {
                    margin: 0 5px;
                }
                > .title {

                }
            }
            > .father-box {
              > .ui {
                    margin: 0 5px;
                }
                > .title {
                  font-weight: 700;
                }
            }
            > .right-box {
              height: 100%;
                > div[class*='arrow'] {
                  margin-right: 5px;
                }
                > .arrowAni {
                  transform: rotateX(180deg)
                }
                > div[class*='signal'] {
                  width: 5px;
                  height: 100%;
                  background: blue;
                  opacity: 0;
                }
            }
        }
        > canvas {
          width: 100%;
          height: 100%;
        }
        > .box-hover {
          background: rgb(245, 245, 245);
        }
    }
</style>
