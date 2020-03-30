<template>
    <div class="three-display three-init">
        <div id="three-canvas" class="three-canvas" ref="three-canvas"></div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'three-init',
  data () {
    return {
      renderer: '', // 渲染器
      scene: '', // 场景
      camera: '', // 相机
      helperBox: ''
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
    // 动画
    initAnimation () {
    },
    // 加载场景
    updateRenderer () {
      this.renderer.render(this.scene, this.camera)
    },
    // 清空物体缓存
    clearObjCache (obj) {
      obj.geometry.dispose()
      obj.material.dispose()
    },
    // 清空缓存
    clearCache () {
      // 渲染器缓存
      this.renderer.clear(true, true, true)
      this.renderer.dispose()
      this.renderer.forceContextLoss()
      this.renderer.context = null
      this.renderer.domElement = null
      this.renderer = null
      // 场景缓存
      this.scene.dispose()
    },
    ...mapActions(['resetThreeTipsFun', 'resetThreeLinkFun'])
  },
  // 初始计算,信息
  created () {
    // 展示的备注
    let tips = ` `
    this.resetThreeTipsFun(tips)
    // github链接
    this.resetThreeLinkFun('base/initThree.vue')
  },
  beforeMount () {
    this.renderer = new THREE.WebGLRenderer({antialias: true}) // 渲染器
    this.scene = new THREE.Scene() // 场景
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000) // 相机
    this.helperBox = {
      axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
      gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')} // 网格
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.clearCache()
    this.renderer = null
    this.scene = null
    this.camera = null
    this.helperBox = null
  }
}
</script>

<style lang="less" scoped>

</style>
