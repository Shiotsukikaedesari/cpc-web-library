<template>
    <div class="display">
      <header class="cpc-nav-top">
        <cpc-nav-top :height="headerHeight" :fixed="true">
          <div class="top-logo" slot="nav-top-left"><img v-lazy="'/static/logo-fill.png'" alt=""></div>
          <cpc-nav-top-elem elemKey="1" slot="nav-top-left" :click="toIndex">
            <cpc-icon slot="top-ui" code="#icon-home"></cpc-icon>首页
            </cpc-nav-top-elem>
          <cpc-nav-top-elem elemKey="2" slot="nav-top-right" :click="toGuide" :isSignal="sign === 'guide'">
            <cpc-icon slot="top-ui" code="#icon-compass"></cpc-icon>指南
          </cpc-nav-top-elem>
          <cpc-nav-top-elem elemKey="3" slot="nav-top-right" :click="toComponents" :isSignal="sign === 'components'" >
            <cpc-icon slot="top-ui" code="#icon-widgets"></cpc-icon>组件
          </cpc-nav-top-elem>
          <cpc-nav-top-elem elemKey="4" slot="nav-top-right" :click="toStyle" :isSignal="sign === 'style'" >
            <cpc-icon slot="top-ui" code="#icon-drawing-box"></cpc-icon>UI风格
          </cpc-nav-top-elem>
          <cpc-nav-top-elem elemKey="5" slot="nav-top-right" :click="toEffect" :isSignal="sign === 'effect'" >
            <cpc-icon slot="top-ui" code="#icon-flash"></cpc-icon>交互动效
          </cpc-nav-top-elem>
          <cpc-nav-top-elem elemKey="6" slot="nav-top-right" :click="toGithub">
            <cpc-icon slot="top-ui" code="#icon-github-circle"></cpc-icon>Github
          </cpc-nav-top-elem>
          <cpc-nav-top-elem elemKey="7" slot="nav-top-right" :click="toNotes" :isSignal="sign === 'notes'">
            <cpc-icon slot="top-ui" code="#icon-note-multiple"></cpc-icon>前端笔记
          </cpc-nav-top-elem>
        </cpc-nav-top>
      </header>
      <section class="display-container flex-row" :style="{height: containerHeight}">
        <cpc-md-nav></cpc-md-nav>
        <router-view></router-view>
        <div class="toTop-box animation" :style="{'bottom': toTopBottom}" @click="toTop"></div>
      </section>
      <footer class="display-footer" :style="{height: footerHeight}"></footer>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'display',
  data () {
    return {
      sign: this.$route.query.sign || '',
      // 设置头部高度
      headerHeight: '80px',
      // 设置内容的高度
      containerHeight: 'calc(100% - 180px)',
      // 设置底边footer的高度
      footerHeight: '100px',
      // 设置toTop按钮的高度
      toTopBottom: 'calc(3% + 100px)',
      // 回到顶部的定时器
      toTopTimer: ''
    }
  },
  methods: {
    // 回到顶部
    toTop () {
      let component = this
      let displayMain = document.querySelector('.display-main')
      let originTop = displayMain.scrollTop
      // 有个需求是不管在哪里都要在500ms之内回到顶部
      let scrollLength = originTop / 30
      // 但是前面的会回的太慢，进行一下判断更短时间内内
      if (originTop < 1000) {
        scrollLength = originTop / 10
      }
      clearInterval(this.toTopTimer)
      // 定时器滚动动画
      this.toTopTimer = setInterval(() => {
        originTop -= scrollLength
        if (originTop <= 0) {
          displayMain.scrollTop = 0
          clearInterval(component.toTopTimer)
        } else {
          displayMain.scrollTop = originTop
        }
      }, 1000 / 60)
    },
    // 跳转到首页
    toIndex () {
      this.$router.push({path: '/'})
    },
    // 跳转到指南
    toGuide () {
      this.$router.push({path: '/guide'})
    },
    // 跳转到UI风格
    toStyle () {
      this.$router.push({path: '/style'})
    },
    // 跳转到组件
    toComponents () {
      this.$router.push({path: '/components'})
    },
    // 跳转到动效
    toEffect () {
      this.$router.push({path: '/effect'})
    },
    // 跳转到项目github
    toGithub () {
      window.open('https://github.com/Shiotsukikaedesari/cpc-component-library', '_blank')
    },
    // 跳转到前端笔记
    toNotes () {
      this.$router.push({path: '/notes'})
    }
  },
  created () {
    this.containerHeight = this.setContainerHeight
    this.footerHeight = this.setFooterHeight
    this.headerHeight = this.setHeaderHeight
    this.toTopBottom = this.setToTopBottom
  },
  computed: {
    ...mapGetters([
      'setFooterHeight',
      'setContainerHeight',
      'setHeaderHeight',
      'setToTopBottom'
    ])
  },
  watch: {
    $route (newValue, oldValue) {
      this.$nextTick(() => {
        // 每次刷新路由都回个顶部
        this.toTop()
      })
    },
    setFooterHeight (newValue, oldValue) {
      this.footerHeight = newValue
    },
    setContainerHeight (newValue, oldValue) {
      this.containerHeight = newValue
    },
    setHeaderHeight (newValue, oldValue) {
      this.headerHeight = newValue
    },
    setToTopBottom (newValue, oldValue) {
      this.toTopBottom = newValue
    }
  }
}
</script>

<style lang="less" scoped>
  .display {
    width: 100%;
    height: 100%;
    background: rgb(228, 228, 228);
    > .cpc-nav-top {
    }
    > .display-container {
      width: 100%;
      > .toTop-box {
        position: fixed;
        right: 3%;
        width: 50px;
        height: 50px;
        border-radius: 10%;
        box-shadow: 0 0 4px rgb(111, 13, 124);
        border: 1px solid rgb(226, 63, 231);
        cursor: pointer;
        overflow: hidden;
        background: #fff;
        &:hover {
          box-shadow: 0 0 12px rgb(217, 74, 236);
          border: 1px solid rgb(188, 16, 194);
          background: rgb(188, 16, 194);
        }
        &:hover::after {
          top: calc(~"100% - 20px");
          border-bottom: 16px solid rgb(255, 255, 255);
        }
        &:active {
          background: rgb(122, 8, 126);
          transition: all 100ms ease;
        }
        &:active::after {
          top: 4px;
          transition: all 100ms ease;
        }
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: calc(~"50% - 8px");
          left: calc(~"50% - 10px");
          border-bottom: 16px solid rgb(151, 25, 209);
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          transition: all 700ms ease;
        }
      }
    }
    > .display-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgb(65, 19, 86);
    }
  }

  .top-logo {
    > img {
      width: 70px;
    }
  }

@media screen and (max-width: 1366px) {
    .top-logo {
    > img {
      width: 50px;
    }
  }
}
</style>
