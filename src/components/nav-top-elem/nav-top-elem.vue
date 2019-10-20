<template>
    <div class="container flex-column-between animation" @click="elemClick">
        <div class="top-box flex-row-between">
            <div class="top-ui"><slot name="top-ui"></slot></div>
            <div class="title"><slot></slot></div>
        </div>
        <div :class="['top-signal' + elemKey, 'animation']">
        </div>
    </div>
</template>

<script>
export default {
  name: 'cpc-nav-top-elem',
  props: {
    elemKey: {
      type: String
    },
    isSignal: { // 是否显示标记
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
    }
  },
  methods: {
    elemClick () {
      let allSignal = document.querySelectorAll('div[class*=top-signal]')
      allSignal.forEach(elem => {
        elem.style.opacity = 0
      })
      let signal = document.querySelector('.top-signal' + this.elemKey)
      signal.style.opacity = 1
      this.click()
    }
  },
  mounted () {
    if (this.isSignal) {
      let signal = document.querySelector('.top-signal' + this.elemKey)
      signal.style.opacity = 1
    }
  }
}
</script>

<style lang="less" scoped>
    .container {
        cursor: pointer;
        height: 100%;
        padding: 0 10px;
        margin: 0 10px;
        &:hover {
            color: rgb(139, 160, 253);
        }
        &:active {
            transition: all ease 100ms;
            background: rgb(241, 241, 241);
        }
        > .top-box {
            height: calc(100% - 5px);
            > .top-ui {
              margin-right: 5px;
            }
        }
        > [class*=top-signal] {
            height: 5px;
            width: calc(100% + 20px);
            background: blue;
            opacity: 0;
        }
    }
</style>
