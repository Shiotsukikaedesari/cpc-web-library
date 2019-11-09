<template>
    <div class="components flex-row">
        <div class="cpc-nav-side">
          <cpc-nav-side width="300px" height="100%" background="">
              <cpc-nav-side-menu menuKey="1" slot="menu" :open="true">
                  <cpc-nav-side-elem elemKey="1-0" slot="father" :father="true" :isSignal="true" :arrowInit="true">
                    <cpc-icon slot="side-ui" code="#icon-arrow-right-drop-circle"></cpc-icon>开始
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1-1" slot="child" :isSignal="true">
                    <cpc-icon slot="side-ui" code="#icon-file-document-box" size="20px"></cpc-icon>基本介绍
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1-2" slot="child"  :click="toUseExplain">
                    <cpc-icon slot="side-ui" code="#icon-comment-text" size="20px"></cpc-icon>使用说明
                  </cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="2" slot="menu">
                  <cpc-nav-side-elem elemKey="2-0" slot="father" :father="true">
                    <cpc-icon slot="side-ui" code="#icon-cube"></cpc-icon>通用组件
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-1" slot="child">组件一</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-2" slot="child">组件二</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-3" slot="child">组件三</cpc-nav-side-elem>
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
        <div class="display-main">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'components',
  data () {
    return {

    }
  },
  methods: {
    toUseExplain () {
      this.$router.push({path: '/components/use-explain'})
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
