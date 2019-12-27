<template>
    <div class="display">
      <header class="cpc-nav-top">
        <cpc-nav-top height="80px" :fixed="true">
          <div class="top-logo" slot="nav-top-left"><img src="/static/logo-fill.png" alt=""></div>
          <cpc-nav-top-elem elemKey="1" slot="nav-top-left" :click="toIndex">
            <cpc-icon slot="top-ui" code="#icon-home"></cpc-icon>首页
            </cpc-nav-top-elem>
          <cpc-nav-top-elem elemKey="3" slot="nav-top-right" :click="toGuide" :isSignal="true">
            <cpc-icon slot="top-ui" code="#icon-compass"></cpc-icon>指南
          </cpc-nav-top-elem>
          <cpc-nav-top-elem elemKey="4" slot="nav-top-right" :click="toComponents">
            <cpc-icon slot="top-ui" code="#icon-widgets"></cpc-icon>组件
          </cpc-nav-top-elem>
          <cpc-nav-top-elem elemKey="5" slot="nav-top-right" :click="toGithub">
            <cpc-icon slot="top-ui" code="#icon-github-circle"></cpc-icon>Github
          </cpc-nav-top-elem>
          <cpc-nav-top-elem elemKey="6" slot="nav-top-right" :click="toNotes">
            <cpc-icon slot="top-ui" code="#icon-note-multiple"></cpc-icon>前端笔记
          </cpc-nav-top-elem>
        </cpc-nav-top>
      </header>
      <section class="display-container flex-row">
        <router-view></router-view>
      </section>
      <footer class="display-footer">

      </footer>
    </div>
</template>

<script>
export default {
  name: 'display',
  data () {
    return {
    }
  },
  methods: {
    // 跳转到首页
    toIndex () {
      this.$router.push({path: '/index'})
    },
    // 跳转到指南
    toGuide () {
      this.$router.push({path: '/guide'})
    },
    // 跳转到组件
    toComponents () {
      this.$router.push({path: '/components'})
    },
    // 跳转到项目github
    toGithub () {
      window.open('https://github.com/Shiotsukikaedesari/cpc-component-library', '_blank')
    },
    // 跳转到前端笔记
    toNotes () {
      this.$router.push({path: '/notes'})
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
      height: calc(100% - 180px);
    }
    > .display-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 100px;
      width: 100%;
      background: rgb(65, 19, 86);
    }
  }

  .top-logo {
    > img {
      width: 70px;
    }
  }
</style>
