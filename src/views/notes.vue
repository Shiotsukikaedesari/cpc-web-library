<template>
    <div class="components flex-row">
        <div class="cpc-nav-side">
          <cpc-nav-side :width="sideNavWidth" height="100%" background="">
              <cpc-nav-side-menu menuKey="1" slot="menu" :open="true">
                  <cpc-nav-side-elem elemKey="1-0" slot="father" :father="true" :isSignal="true" :arrowInit="true">
                    <cpc-icon slot="side-ui" code="#icon-arrow-right-drop-circle"></cpc-icon>开始
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1-1" slot="child" :isSignal="true" :click="jump('intro')">
                    <cpc-icon slot="side-ui" code="#icon-file-document-box" size="20px"></cpc-icon>基本介绍
                  </cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="2" slot="menu">
                  <cpc-nav-side-elem elemKey="2-0" slot="father" :father="true">
                    <cpc-icon slot="side-ui" code="#icon-language-html"></cpc-icon>HTML
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-1" slot="child" :click="jump('html-base')">HTML基础</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-2" slot="child" :click="jump('html-treasure')">HTML宝典</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="3" slot="menu">
                <cpc-nav-side-elem elemKey="3-0" slot="father" :father="true">
                  <cpc-icon slot="side-ui" code="#icon-language-css"></cpc-icon>CSS
                </cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="4" slot="menu">
                <cpc-nav-side-elem elemKey="4-0" slot="father" :father="true">
                  <cpc-icon slot="side-ui" code="#icon-js"></cpc-icon>js
                </cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="5" slot="menu">
                  <cpc-nav-side-elem elemKey="5-0" slot="father" :father="true">
                    <cpc-icon slot="side-ui" code="#icon-webpack"></cpc-icon>webpack
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="5-1" slot="child" :click="jump('webpack-base')">webpack基础</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="5-2" slot="child" :click="jump('webpack-senior')">webpack高级</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="6" slot="menu">
                  <cpc-nav-side-elem elemKey="6-0" slot="father" :father="true">
                    <cpc-icon slot="side-ui" code="#icon-gulpwhitetext"></cpc-icon>gulp
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="6-1" slot="child" :click="jump('gulp-base')">gulp基础</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="6-2" slot="child" :click="jump('gulp-senior')">gulp高级</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="7" slot="menu">
                  <cpc-nav-side-elem elemKey="7-0" slot="father" :father="true">
                    <cpc-icon slot="side-ui" code="#icon-nodejs"></cpc-icon>NodeJS
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="7-1" slot="child" :click="jump('nodeJS-base')">NodeJS基础</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="7-2" slot="child" :click="jump('nodeJS-senior')">NodeJS高级</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="7-3" slot="child" :click="jump('nodeJS-plugins')">NodeJS插件</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="8" slot="menu">
                  <cpc-nav-side-elem elemKey="8-0" slot="father" :father="true">
                    <cpc-icon slot="side-ui" code="#icon-vue"></cpc-icon>Vue3.0
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="8-1" slot="child" :click="jump('vue3-base')">Vue3.0基础</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="9" slot="menu">
                  <cpc-nav-side-elem elemKey="9-0" slot="father" :father="true">
                    <cpc-icon slot="side-ui" code="#icon-vue"></cpc-icon>vite
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="9-1" slot="child" :click="jump('vite-base')">vite基础</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="10" slot="menu">
                  <cpc-nav-side-elem elemKey="10-0" slot="father" :father="true">
                    <cpc-icon slot="side-ui" code="#icon-linux"></cpc-icon>Linux
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="10-1" slot="child" :click="jump('linux-base')">linux基础</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="100" slot="menu">
                  <cpc-nav-side-elem elemKey="100-0" slot="father" :father="true">
                    <cpc-icon slot="side-ui" code="#icon-puzzle"></cpc-icon>知识拼图
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="100-1" slot="child" :click="jump('puzzle-mutationObserver')">MutationObserver</cpc-nav-side-elem>
              </cpc-nav-side-menu>
          </cpc-nav-side>
        </div>
        <div class="display-main" :style="{width: mainWidth}">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'notes',
  data () {
    return {
      sideNavWidth: '300px',
      mainWidth: ' calc(100% - 140px)'
    }
  },
  methods: {
    // 路由跳转
    jump (path) {
      function jump () {
        this.$router.replace({path: `/notes/${path}`})
      }
      return jump
    }
  },
  created () {
    this.sideNavWidth = this.setSideNavWidth
    this.mainWidth = this.setContainerWidth
  },
  computed: {
    ...mapGetters([
      'setSideNavWidth',
      'setContainerWidth'
    ])
  },
  watch: {
    setSideNavWidth (newValue, oldValue) {
      this.sideNavWidth = newValue
    },
    setContainerWidth (newValue, oldValue) {
      this.mainWidth = newValue
    }
  }
}
</script>

<style lang="less" scoped>
    .components {
        height: 100%;
        width: 100%;
        > .cpc-nav-side {
        height: 100%;
        > .container {
          border: 0;
          border-right: 1px solid rgb(220, 220, 220);
        }
      }
      > .display-main {
      width: calc(100% - 300px);
      height:100%;
      background: white;
      padding: 20px 10%;
      overflow: auto;
    }
    }
</style>
