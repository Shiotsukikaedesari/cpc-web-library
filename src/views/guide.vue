<template>
    <div class="guide flex-row">
        <div class="cpc-nav-side">
          <cpc-nav-side width="300px" height="100%" background="">
              <template slot="menu">
                  <cpc-nav-side-elem elemKey="0" slot="child" :isSignal="true">介绍</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1" slot="child">设计原则</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2" slot="child">关于</cpc-nav-side-elem>
              </template>
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
    .guide {
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
