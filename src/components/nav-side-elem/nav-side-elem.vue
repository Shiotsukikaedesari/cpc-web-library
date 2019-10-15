<template>
<div class="container">
    <div
        :class="{
          'elem-box': true,
          'flex-row-between': true,
          'animation': true,
          'box-hover': hover
          }"
        :style="{'height': height}"
        @click="active($event)"
        @mouseenter="showHover"
        @mouseleave="hideHover"
    >
        <div :class="{'left-box': true, 'flex-row': true, 'father-box': father}">
            <div class="ui  " v-if="showUI">UI</div>
            <div class="title  " v-text="title"></div>
        </div>
        <div class="right-box flex-row">
          <div class="arrow" v-if="father">箭头</div>
          <div class="signal"  v-if="showSignal"></div>
        </div>
    </div>
    <canvas
        :class="'ani' + elemKey"
        :style="{'height': height, 'width': '100%'}"
    ></canvas>
</div>
</template>

<script>
export default {
  name: 'cpc-nav-side-elem',
  props: {
    elemKey: {
      type: Number
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
    showSignal: {
      type: Boolean,
      default: true
    },
    father: { // 是否为父标签
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
      isAni: false // 是否在播放
    }
  },
  methods: {
    active () {
      let component = this
      this.hover = false
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
              document.querySelector('.ani' + this.elemKey.toString()).width = component.canvasWidth
              component.click()
              component.isAni = false
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
  }
}
</script>

<style lang="less" scoped>
    .container {
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
                > .arrow {
                  margin-right: 5px;
                }
                > .signal {
                  width: 5px;
                  height: 100%;
                  background: blue;
                }
            }
        }
        > .box-hover {
          background: rgb(245, 245, 245);
        }
    }
</style>
