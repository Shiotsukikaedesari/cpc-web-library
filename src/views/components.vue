<template>
    <div class="components flex-row">
        <div class="cpc-nav-side">
          <cpc-nav-side width="300px" height="100%" background="">
              <cpc-nav-side-menu menuKey="1" slot="menu" :open="true">
                  <cpc-nav-side-elem elemKey="1-0" slot="father" :father="true" :isSignal="true">开始</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1-1" slot="child" :isSignal="true">基本介绍</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1-2" slot="child">使用说明</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="2" slot="menu">
                  <cpc-nav-side-elem elemKey="2-0" slot="father" :father="true">通用组件</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-1" slot="child">组件一</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-2" slot="child">组件二</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-3" slot="child">组件三</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="3" slot="menu">
                <cpc-nav-side-elem elemKey="3-0" slot="father" :father="true">功能组件</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="3-1" slot="child">组件一</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="3-2" slot="child">组件二</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="3-3" slot="child">组件三</cpc-nav-side-elem>
              </cpc-nav-side-menu>
          </cpc-nav-side>
        </div>
        <div class="display-main">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .components {
        height: 100%;
        width: 100%;
        > .cpc-nav-side {
        height: 100%;
        > .container {
          border-top: 0;
          border-left: 0;
          border-bottom: 0;
        }
      }
      > .display-main {
        width: calc(100% - 300px);
        height:100%;
        background: white;
      }
    }
</style>
