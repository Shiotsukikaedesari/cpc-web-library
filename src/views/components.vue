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
                  <cpc-nav-side-elem elemKey="1-2" slot="child" :click="jump('use-explain')">
                    <cpc-icon slot="side-ui" code="#icon-comment-text" size="20px"></cpc-icon>编写说明
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1-3" slot="child" :click="jump('demo')">
                    <cpc-icon slot="side-ui" code="#icon-microscope" size="20px"></cpc-icon>DEMO测试
                  </cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="2" slot="menu">
                  <cpc-nav-side-elem elemKey="2-0" slot="father" :father="true">
                    <cpc-icon slot="side-ui" code="#icon-cube"></cpc-icon>通用组件
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-1" slot="child" :click="jump('icon')">
                    <cpc-icon slot="side-ui" code="#icon-resize-bottom-right"></cpc-icon>图标
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-2" slot="child" :click="jump('button')">
                    <cpc-icon slot="side-ui" code="#icon-nest-protect"></cpc-icon>按钮
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-3" slot="child" :click="jump('message-reminder')">
                    <cpc-icon slot="side-ui" code="#icon-checkbox-multiple-blank"></cpc-icon>消息弹窗
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-4" slot="child" :click="jump('drag-plane')">
                    <cpc-icon slot="side-ui" code="#icon-vector-square"></cpc-icon>拖拉面板
                  </cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="3" slot="menu">
                <cpc-nav-side-elem elemKey="3-0" slot="father" :father="true">
                  <cpc-icon slot="side-ui" code="#icon-package-variant"></cpc-icon>功能组件
                </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="3-1" slot="child">组件一</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="3-2" slot="child">组件二</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="3-3" slot="child">组件三</cpc-nav-side-elem>
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
  name: 'components',
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
        this.$router.replace({path: `/components/${path}`})
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
