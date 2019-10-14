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
        <div class="left-box flex-row">
            <div class="ui" v-if="showUI">UI</div>
            <div class="title" v-text="title"></div>
        </div>
        <div class="right-box" v-if="showSignal"></div>
    </div>
    <canvas
        class="ani"
        :style="{'height': height}"
    ></canvas>
</div>
</template>

<script>
export default {
  name: 'cpc-nav-side-elem',
  props: {
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
      canvasWidth: '' // canvas的宽度
    }
  },
  methods: {
    active () {
      let component = this
      this.hover = false
      // this.positionX = event.offsetX
      this.pen.fillStyle = '#E6E6E6'
      this.pen.fillRect(this.positionX, 0, this.rectWidth, parseInt(this.height) * 10)
      this.timer = setInterval(() => {
        component.rectWidth += 5
        if (component.rectWidth > component.canvasWidth) {
          setTimeout(() => {
            document.querySelector('.ani').width = component.canvasWidth
            component.click()
          }, 100)
          component.rectWidth = 0
          clearInterval(component.timer)
        } else {
          this.pen.fillRect(component.positionX - component.rectWidth / 2, 0, component.rectWidth, parseInt(component.height) * 10)
        }
      }, 60 / 24)
    },
    showHover () {
      this.hover = true
    },
    hideHover () {
      this.hover = false
    }
  },
  mounted () {
    this.pen = document.querySelector('.ani').getContext('2d')
    this.canvasWidth = document.querySelector('.ani').width
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
            > .right-box {
                width: 5px;
                height: 100%;
                background: blue;
            }
        }
        > .box-hover {
          background: rgb(245, 245, 245);
        }
       > .ani {
           width: 100%;
       }
    }
</style>
