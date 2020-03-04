<template>
    <div class="three-display three-init">
        <div id="three-canvas" class="three-canvas" ref="three-canvas"></div>
    </div>
</template>

<script>
export default {
  name: 'three-init',
  data () {
    return {
      renderer: new THREE.WebGLRenderer({antialias: true}), // 渲染器
      scene: new THREE.Scene(), // 场景
      camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000), // 相机
      helperBox: {
        axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')} // 网格
      }
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
      this.updateRenderer()
    },
    // 初始渲染器
    initRender () {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs['three-canvas'].appendChild(this.renderer.domElement)
      this.renderer.setClearColor('rgb(0, 0, 0)')
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
    // 动画
    initAnimation () {
    },
    // 加载场景
    updateRenderer () {
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less" scoped>

</style>
