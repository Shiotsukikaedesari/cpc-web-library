<template>
    <div class="guide flex-row">
        <div class="cpc-nav-side">
          <cpc-nav-side :width="sideNavWidth" height="100%" background="">
              <template slot="menu">
                  <cpc-nav-side-elem elemKey="0" slot="child" isSignal :click="jump('intro')">
                     <cpc-icon slot="side-ui" code="#icon-file-document-box"></cpc-icon>介绍
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1" slot="child" :click="jump('relief')">
                     <cpc-icon slot="side-ui" code="#icon-image-multiple"></cpc-icon>浮雕
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2" slot="child" :click="jump('groove')">
                     <cpc-icon slot="side-ui" code="#icon-watermark"></cpc-icon>刻槽
                  </cpc-nav-side-elem>
              </template>
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
  name: 'guide',
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
        this.$router.replace({path: `/style/${path}`})
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
        padding: 20px 10%;
        overflow: auto;
      }
    }
</style>
