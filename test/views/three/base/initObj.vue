<template>
    <div class="three-display three-init">
        <div id="three-canvas" class="three-canvas" ref="three-canvas"></div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Stats from '../../../../node_modules/three/examples/jsm/libs/stats.module'
export default {
  name: 'three-init',
  data () {
    return {
      renderer: '', // 渲染器
      scene: '', // 场景
      camera: '', // 相机
      stats: '', // 资源监视器
      lightBox: '',
      helperBox: '',
      objBox: {
        obj1: '' // 物体对象
      },
      animationFrame: '' // 动画
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
      this.scene.add(this.lightBox.ambientLight)
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
      let geometry = new THREE.BoxGeometry(100, 100, 150, 4, 4)
      let material = new THREE.MeshLambertMaterial({color: 'rgb(115, 30, 150)'})
      this.objBox.obj1 = new THREE.Mesh(geometry, material)
      this.objBox.obj1.position.set(0, 50, 0)
      this.scene.add(this.objBox.obj1)
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
    animation () {
      let deg = Date.now() * 0.0001
      let r = 600
      this.camera.position.x = Math.cos(deg) * r
      this.camera.position.z = Math.sin(deg) * r
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 加载场景
    updateRenderer () {
      this.animation()
      this.renderer.render(this.scene, this.camera)
      this.stats.update()
      this.animationFrame = requestAnimationFrame(this.updateRenderer)
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
      this.renderer.domElement = null
      // 场景缓存
      this.scene.dispose()
      // 物体缓存
      this.clearObjCache(this.objBox.obj1)
    },
    ...mapActions(['resetThreeTipsFun', 'resetThreeLinkFun'])
  },
  // 初始计算
  created () {
    // 展示的备注
    let tips = ``
    this.resetThreeTipsFun(tips)
    // github链接
    this.resetThreeLinkFun('base/initObj.vue')
  },
  // 所有事件绑在此钩子
  beforeMount () {
    this.renderer = new THREE.WebGLRenderer({antialias: true}) // 渲染器
    this.scene = new THREE.Scene() // 场景
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000) // 相机
    this.stats = new Stats() // 资源监视器
    this.lightBox = {
      ambientLight: new THREE.AmbientLight('rgb(255, 255, 255)') // 环境光
    }
    this.helperBox = {
      axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
      gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')} // 网格
    }
  },
  mounted () {
    this.init()
    this.updateRenderer()
  },
  // 清空所有绑定事件与清空画布
  beforeDestroy () {
    document.body.removeChild(document.getElementById('three-stats'))
    this.clearCache()
    this.renderer = null
    this.camera = null
    this.stats = null
    this.lightBox = null
    this.helperBox = null
    this.objBox = null
    cancelAnimationFrame(this.animationFrame)
  }
}
</script>

<style lang="less" scoped>

</style>
