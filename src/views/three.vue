<template>
  <div class="three-world">
    <div class="cpc-nav-side">
        <cpc-nav-side :width="sideNavWidth" height="100%" background="">
          <template slot="menu">
                <cpc-nav-side-elem elemKey="0" slot="child" :click="toIndex">首页</cpc-nav-side-elem>
                <cpc-nav-side-elem elemKey="1" slot="child" :isSignal="true">初始场景辅助</cpc-nav-side-elem>
                <cpc-nav-side-elem elemKey="2" slot="child">轮播</cpc-nav-side-elem>
            </template>
        </cpc-nav-side>
    </div>
     <div class="three-container">
      <router-view></router-view>
    </div>
    <div class="three-link">
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'cpc-index',
  data () {
    return {
      sideNavWidth: '300px'
    }
  },
  methods: {
    toIndex () {
      this.$emit('showMessage')
    }
  },
  computed: {
    ...mapGetters([
      'setSideNavWidth'
    ])
  }
}
</script>

<style lang="less" scoped>
.three-world {
  width: 100%;
  height: 100%;
  > .cpc-nav-side {
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index:1;
        >  .container {
          background: transparent;
          > .container  {
            background: transparent;
            border-bottom: 1px solid rgb(214, 214, 214);
            /deep/ .elem-box {
              // background: white;
              > .left-box {
                > .ui {color: white;}
                > .title {color: white;}
              }
              > .right-box {
                > div[class*='signal'] {
                  background: rgb(204, 0, 255);
                  box-shadow: 0 0 4px white;
                }
              }
            }
             /deep/ .box-hover {
                background: rgb(114, 114, 114);
              }
          }
        }
  }
  > .three-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
  > .three-link {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 10px;
    height: 10px;
    background: white;
    z-index:1;
  }
}
</style>
