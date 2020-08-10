<template>
  <div class="three-world">
    <div class="cpc-nav-side animation" :class="{'cpc-nav-side-hidden': hiddenNav}">
      <cpc-nav-side :width="sideNavWidth" height="100%" background="">
        <template slot="menu">
          <cpc-nav-side-elem elemKey="0" slot="father" :click="toIndex">
            <cpc-icon slot="side-ui" code="#icon-home"></cpc-icon>首页
          </cpc-nav-side-elem>
          <cpc-nav-side-menu menuKey="1" slot="menu">
            <cpc-nav-side-elem elemKey="1-0" slot="father" :father="true">
              <cpc-icon slot="side-ui" code="#icon-arrow-right-drop-circle"></cpc-icon>开始
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="1-1" slot="child" :click="jump('initThree')">场景初始</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="1-2" slot="child" :click="jump('watchKeyframe')">帧率监视器（Stats）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="1-3" slot="child" :click="jump('initObj')">初始物体</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="1-4" slot="child" :click="jump('gui')">图形控制界面（Gui）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="2" slot="menu">
            <cpc-nav-side-elem elemKey="2-0" slot="father" :father="true">
              <cpc-icon slot="side-ui" code="#icon-camera"></cpc-icon>相机（Camera）
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="2-1" slot="child" :click="jump('cameraFollowMouse')">相机跟随鼠标</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="2-2" slot="child" :click="jump('autoRotateCamera')">相机自动旋转</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="2-3" slot="child" :click="jump('dragCamera')">相机交互插件（OrbitControls）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="2-4" slot="child" :click="jump('perspectiveCamera')">透视相机配置</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="3" slot="menu">
            <cpc-nav-side-elem elemKey="3-0" slot="father" :father="true">
              <cpc-icon slot="side-ui" code="#icon-hexagon"></cpc-icon>几何（Geometry）
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-1" slot="child" :click="jump('controlObj')">物体交互控件（TransformControls）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-2" slot="child" :click="jump('simpleGeometry')">简单几何体</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-3" slot="child" :click="jump('complexGeometry')">复杂几何体</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-4" slot="child" :click="jump('planeGeometry')">平面几何体</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-5" slot="child" :click="jump('pipeGeometry')">管状几何体</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-6" slot="child" :click="jump('edgesGeometry')">边缘几何体（EdgesGeometry）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-7" slot="child" :click="jump('extrudeGeometry')">挤压几何体（ExtrudeGeometry）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-8" slot="child" :click="jump('latheGeometry')">车削几何体（LatheGeometry）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-9" slot="child" :click="jump('shapeGeometry')">形状几何体（ShapeGeometry）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-10" slot="child" :click="jump('textGeometry')">文本几何体（textGeometry）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="3-11" slot="child" :click="jump('wireframeGeometry')">网格几何体（wireframeGeometry）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="4" slot="menu">
            <cpc-nav-side-elem elemKey="4-0" slot="father" :father="true">
              <cpc-icon slot="side-ui" code="#icon-lightbulb-on"></cpc-icon>光源（Light）
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="4-1" slot="child" :click="jump('ambientLight')">环境光（AmbientLight）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="4-2" slot="child" :click="jump('directionalLight')">平行光（DirectionalLight）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="4-3" slot="child" :click="jump('hemisphereLight')">半球光（HemisphereLight）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="4-4" slot="child" :click="jump('pointLight')">点光（PointLight）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="4-5" slot="child" :click="jump('rectAreaLight')">平面光（RectAreaLight）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="4-6" slot="child" :click="jump('spotLight')">聚光灯（SpotLight）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="5" slot="menu">
            <cpc-nav-side-elem elemKey="5-0" slot="father" :father="true"  arrowInit>
              <cpc-icon slot="side-ui" code="#icon-vector-triangle"></cpc-icon>材质（material）
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="5-1" slot="child" :click="jump('lineBasicMaterial')">基础线条材质（LineBasicMaterial）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="5-2" slot="child" :click="jump('lineDashedMaterial')">虚线材质（LineDashedMaterial）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="5-3" slot="child" :click="jump('meshBasicMaterial')">基础网格材质（MeshBasicMaterial）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="5-4" slot="child" :click="jump('meshDepthMaterial')">深度网格材质（MeshDepthMaterial）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="5-5" slot="child" :click="jump('meshDistanceMaterial')">距离网格材质（MeshDistanceMaterial）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="5-6" slot="child"  :click="jump('meshLambertMaterial')">Lambert网格材质（MeshLambertMaterial）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="6" slot="menu">
            <cpc-nav-side-elem elemKey="6-0" slot="father" :father="true">
              <cpc-icon slot="side-ui" code="#icon-crosshairs-gps"></cpc-icon>核心（core）
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="6-1" slot="child" :click="jump('raycaster')">光线投射（Raycaster）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="6-2" slot="child" :click="jump('bufferGeometry')">网格模型（mesh）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="6-3" slot="child" :click="jump('line')">线（line）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="6-4" slot="child" :click="jump('bufferGeometry')">点模型（point）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="6-5" slot="child" :click="jump('bufferGeometry')">缓存区几何体（bufferGeometry）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="7" slot="menu">
            <cpc-nav-side-elem elemKey="7-0" slot="father" :father="true" >
              <cpc-icon slot="side-ui" code="#icon-file-import"></cpc-icon>加载器（Loader）
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="7-1" slot="child" :click="jump('loadingManager')">加载管理器（LoadingManager）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="7-2" slot="child" :click="jump('OBJLoader')">OBJ格式加载器（OBJLoader）</cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="7-3" slot="child" :click="jump('MMDLoader')">MMD加载器（MMDLoader）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="8" slot="menu" open>
            <cpc-nav-side-elem elemKey="8-0" slot="father" :father="true" isSignal>
              <cpc-icon slot="side-ui" code="#icon-soundcloud"></cpc-icon>后期处理（EffectComposer）
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="8-1" slot="child" isSignal :click="jump('unrealBloom')">虚幻光影（unreal_bloom）</cpc-nav-side-elem>
          </cpc-nav-side-menu>
          <cpc-nav-side-menu menuKey="9" slot="menu">
            <cpc-nav-side-elem elemKey="9-0" slot="father" :father="true">
              <cpc-icon slot="side-ui" code="#icon-gamepad"></cpc-icon>应用
            </cpc-nav-side-elem>
            <cpc-nav-side-elem elemKey="9-1" slot="child" :click="jump('lineBasicMaterial')">基础线条材质（LineBasicMaterial）</cpc-nav-side-elem>
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
    :class="{
      'three-nav-switch-close': hiddenNav,
      'three-nav-switch-hidden': !hideMessage
    }"
    @click="switchNav"
    >
        <cpc-icon code="#icon-ray-end-arrow" color="black" size="20px"></cpc-icon>
    </div>
    <div class="three-link flex-row-center animation" :class="{'three-nav-switch-hidden': !hideMessage}" @click="openThreeLink">
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
    },
    hideMessage: {
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
    // 路由跳转
    jump (path) {
      function jump () {
        this.$router.replace({path: `/three/${path}`})
      }
      return jump
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
      // 滚动条
      &::-webkit-scrollbar {
        background: transparent;
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(71, 71, 71, 0.3);
        border-radius: 5px;
        &:hover {
          background: rgba(111, 111, 111, 0.3);
        }
      }
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
            > .title {
              color: white;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              &:hover {
                white-space: normal;
              }
              }
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
  > .three-nav-switch-hidden {
    opacity: 0;
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
