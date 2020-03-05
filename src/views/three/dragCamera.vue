<template>
    <div class="three-display three-init">
      <cpc-three-tips :tips="tips"></cpc-three-tips>
        <div id="three-canvas" class="three-canvas" ref="three-canvas"></div>
    </div>
</template>

<script>
import Stats from '../../../node_modules/three/examples/jsm/libs/stats.module'
import {OrbitControls} from '../../../node_modules/three/examples/jsm/controls/OrbitControls'
export default {
  data () {
    return {
      tips: '', // 页面提示
      renderer: new THREE.WebGLRenderer({antialias: true}), // 渲染器
      scene: new THREE.Scene(), // 场景
      camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000), // 相机
      stats: new Stats(), // 资源监视器
      helperBox: {
        axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')} // 网格
      },
      clock: new THREE.Clock(), // 世界时钟
      orbitControls: '' // 相机控件
    }
  },
  methods: {
    // 初始
    init () {
      this.initRender()
      this.initCamera()
      this.initObj()
      this.initLight()
      this.initHelper()
      this.initStats()
      this.initOrbitControls()
      this.updateRenderer()
    },
    // 初始渲染器
    initRender () {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs['three-canvas'].appendChild(this.renderer.domElement)
      this.renderer.setClearColor('rgb(15, 1, 25)')
    },
    // 光源
    initLight () {
    },
    // 初始相机
    initCamera () {
      this.camera.position.x = 400
      this.camera.position.y = 400
      this.camera.position.z = 400
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 初始物体
    initObj () {
    },
    // 初始辅助
    initHelper () {
      this.scene.add(this.helperBox.axesHelper.helper)
      this.scene.add(this.helperBox.gridHelper.helper)
    },
    // 初始监视器
    initStats () {
      this.stats.setMode(0)
      this.stats.domElement.id = 'three-stats'
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = 'unset'
      this.stats.domElement.style.right = '0px'
      this.stats.domElement.style.top = '0px'
      document.body.appendChild(this.stats.domElement)
    },
    // 加载相机插件
    initOrbitControls () {
      this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)
    },
    // 动画
    animation () {
    },
    // 加载场景
    updateRenderer () {
      this.orbitControls.update(this.clock.getDelta())
      this.renderer.render(this.scene, this.camera)
      this.stats.update()
      requestAnimationFrame(this.updateRenderer)
    }
  },
  // 初始计算
  created () {
    this.tips = `旋转相机：鼠标左键
    缩放场景：鼠标滚轮
    移动相机：鼠标右键`
  },
  // 所有事件绑在此钩子
  beforeMount () {
  },
  mounted () {
    this.init()
  },
  // 清空所有绑定事件与清空画布
  beforeDestroy () {
    document.body.removeChild(document.getElementById('three-stats'))
  }
}
</script>

<style lang="less" scoped>

</style>
