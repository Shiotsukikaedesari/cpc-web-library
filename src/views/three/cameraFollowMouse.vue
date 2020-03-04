<template>
    <div class="three-display three-init">
        <div id="three-canvas" class="three-canvas" ref="three-canvas"></div>
    </div>
</template>

<script>
import Stats from '../../../node_modules/three/examples/jsm/libs/stats.module'
export default {
  name: 'three-init',
  data () {
    return {
      renderer: new THREE.WebGLRenderer({antialias: true}), // 渲染器
      scene: new THREE.Scene(), // 场景
      camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000), // 相机
      stats: new Stats(), // 资源监视器
      helperBox: {
        axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')} // 网格
      },

      mouseX: 0, // 鼠标x
      mouseY: 0, // 鼠标y
      innerWidth: window.innerWidth, // 屏幕宽度
      innerHeight: window.innerHeight // 屏幕高度
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
      this.renderer.render(this.scene, this.camera)
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
    // 动画
    initAnimation () {
    },
    // 加载场景
    updateRenderer () {
      this.camera.position.x = this.mouseX - this.innerWidth / 2
      this.camera.position.y = this.mouseY - this.innerHeight / 2
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
      this.renderer.render(this.scene, this.camera)
      this.stats.update()
    }
  },
  // 所有事件绑在此钩子
  beforeMount () {
    document.onmousemove = (event) => {
      this.mouseX = event.clientX
      this.mouseY = event.clientY
      this.updateRenderer()
    }
  },
  mounted () {
    this.init()
  },
  // 清空所有绑定事件与清空画布
  beforeDestroy () {
    document.body.removeChild(document.getElementById('three-stats'))
    document.onmousemove = ''
  }
}
</script>

<style lang="less" scoped>

</style>
