<template>
  <div class="three-world">
    <div class="cpc-nav-side animation" :class="{'cpc-nav-side-hidden': hiddenNav}">
      <cpc-nav-side :width="sideNavWidth" height="100%" background="">
        <template slot="menu">
          <cpc-nav-side-elem elemKey="0" slot="father" :click="toIndex">
            <cpc-icon slot="side-ui" code="#icon-home"></cpc-icon>首页
          </cpc-nav-side-elem>
          <cpc-nav-side-menu menuKey="1" slot="menu" :open="true">
            <cpc-nav-side-elem elemKey="1-0" slot="father" :father="true" isSignal>
              <cpc-icon slot="side-ui" code="#icon-arrow-right-drop-circle"></cpc-icon>开始
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="1-1" slot="child" :isSignal="true" :click="toInitThree">场景初始</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="1-2" slot="child" :click="toWatchKeyframe">帧率监视器（Stats）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="1-3" slot="child" :click="toInitObj">初始物体</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="1-4" slot="child" :click="toGui">图形控制界面（Gui）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="2" slot="menu">
            <cpc-nav-side-elem elemKey="2-0" slot="father" :father="true">
              <cpc-icon slot="side-ui" code="#icon-camera"></cpc-icon>相机
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="2-1" slot="child" :click="toCameraFollowMouse">相机跟随鼠标</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="2-2" slot="child" :click="toAutoRotateCamera">相机自动旋转</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="2-3" slot="child" :click="toDragCamera">相机交互插件（OrbitControls）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="3" slot="menu">
            <cpc-nav-side-elem elemKey="3-0" slot="father" :father="true">
              <cpc-icon slot="side-ui" code="#icon-hexagon"></cpc-icon>物体
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-1" slot="child" :click="toControlObj">物体交互控件（TransformControls）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-2" slot="child" :click="toSimpleGeometry">简单几何体</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-3" slot="child" :click="toComplexGeometry">复杂几何体</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="4" slot="menu">
            <cpc-nav-side-elem elemKey="4-0" slot="father" :father="true">
              <cpc-icon slot="side-ui" code="#icon-lightbulb-on"></cpc-icon>光源
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="4-1" slot="child" :click="toControlObj">环境光（AmbientLight）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="5" slot="menu">
            <cpc-nav-side-elem elemKey="5-0" slot="father" :father="true">
              <cpc-icon slot="side-ui" code="#icon-vector-triangle"></cpc-icon>材质
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="5-1" slot="child" :click="toControlObj">基础线条材质（LineBasicMaterial）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          </template>
      </cpc-nav-side>
    </div>
      <cpc-three-tips :tips="tips" :class="{'cpc-nav-side-hidden': hiddenNav}"></cpc-three-tips>
     <div class="three-container">
      <router-view></router-view>
    </div>
    <div
    class="three-nav-switch flex-row-center animation"
    :class="{'three-nav-switch-close': hiddenNav}"
    @click="switchNav"
    >
        <cpc-icon code="#icon-ray-end-arrow" color="black" size="20px"></cpc-icon>
    </div>
    <div class="three-link flex-row-center animation" @click="openThreeLink">
      <cpc-icon code="#icon-code-tags" color="black" size="20px"></cpc-icon>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'cpc-index',
  props: {
    showNav: {
      type: Boolean
    }
  },
  data () {
    return {
      sideNavWidth: '300px',
      tips: '', // 提示
      hiddenNav: true
    }
  },
  methods: {
    // 打开链接
    openThreeLink () {
      window.open(this.setThreeLink)
    },
    // 导航栏开关
    switchNav () {
      this.hiddenNav = !this.hiddenNav
    },
    toIndex () {
      this.$emit('showMessage')
    },
    // 初始场景辅助
    toInitThree () {
      this.$router.replace({path: '/three/initThree'})
    },
    // 帧率监视器
    toWatchKeyframe () {
      this.$router.replace({path: '/three/watchKeyframe'})
    },
    // 图形控制界面
    toGui () {
      this.$router.replace({path: '/three/gui'})
    },
    // 初始物体
    toInitObj () {
      this.$router.replace({path: '/three/initObj'})
    },
    // 相机跟随鼠标
    toCameraFollowMouse () {
      this.$router.replace({path: '/three/cameraFollowMouse'})
    },
    // 相机自动旋转
    toAutoRotateCamera () {
      this.$router.replace({path: '/three/autoRotateCamera'})
    },
    // 相机拖动旋转
    toDragCamera () {
      this.$router.replace({path: '/three/dragCamera'})
    },
    // 物体交互插件
    toControlObj () {
      this.$router.replace({path: '/three/controlObj'})
    },
    // 简单几何体
    toSimpleGeometry () {
      this.$router.replace({path: '/three/simpleGeometry'})
    },
    // 复杂几何体
    toComplexGeometry () {
      this.$router.replace({path: '/three/complexGeometry'})
    }
  },
  computed: {
    ...mapGetters([
      'setThreeLink'
    ])
  },
  mounted () {
    this.hiddenNav = !this.showNav
  },
  watch: {
    showNav (newValue, oldValue) {
      this.hiddenNav = !newValue
    }
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
    display: inline-block;
    > .container {
      border: none;
      box-shadow: none;
      background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%);
      > .container  {
        /deep/ .father-elem {
          > .container {
            background: transparent;
            .icon-container {
              color: white;
            }
          }
        }
        /deep/ .child-elem {
          > .container {
            background: transparent;
          }
        }
        background: transparent;
        /deep/ .elem-box {
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
  .cpc-nav-side-hidden {
    transform: translateX(-300px);
  }
  > .three-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
  > .three-nav-switch {
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    z-index:1;
    cursor: pointer;
    &:hover {
      background:rgb(204, 0, 255);
    }
    &:hover .icon-container {
      color: white !important;
    }
    &:active {
      transition-duration: 100ms;
      background:rgb(230, 131, 255);
      box-shadow: 0 0 8px rgb(255, 255, 255);
    }
  }
  > .three-nav-switch-close {
    transform: rotateZ(180deg);
  }
  > .three-link {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    z-index:1;
    cursor: pointer;
    &:hover {
      background:rgb(204, 0, 255);
    }
    &:hover .icon-container {
      color: white !important;
    }
    &:active {
      transition-duration: 100ms;
      background:rgb(230, 131, 255);
      box-shadow: 0 0 8px rgb(255, 255, 255);
    }
  }
}
</style>
