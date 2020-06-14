<template>
    <div class="components flex-row">
        <div class="cpc-nav-side">
          <cpc-nav-side :width="sideNavWidth" height="100%" background="">
           <template slot="menu">
                  <cpc-nav-side-elem elemKey="0" slot="child" :isSignal="true" :click="toIntro">
                     <cpc-icon slot="side-ui" code="#icon-file-document-box"></cpc-icon>介绍
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1" slot="child" :click="toLoading">
                     <cpc-icon slot="side-ui" code="#icon-rotate-right" animation="rotation2D-Ani" aniDuration="1000ms"></cpc-icon>加载
                  </cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2" slot="child" :click="toCarousel">
                     <cpc-icon slot="side-ui" code="#icon-cards" animation="drawer-X-Ani" aniDuration="2s"></cpc-icon>轮播
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
  name: 'effect',
  data () {
    return {
      sideNavWidth: '300px',
      mainWidth: ' calc(100% - 140px)'
    }
  },
  methods: {
    // 跳转到基本介绍
    toIntro () {
      this.$router.push({path: '/effect/intro'})
    },
    // 跳转到加载效果
    toLoading () {
      this.$router.push({path: '/effect/loading'})
    },
    // 跳转到轮播
    toCarousel () {
      this.$router.push({path: '/effect/carousel'})
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
