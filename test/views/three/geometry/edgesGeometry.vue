<template>
    <div class="three-display three-init">
        <div id="three-canvas" class="three-canvas" ref="three-canvas"></div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Stats from '../../../../node_modules/three/examples/jsm/libs/stats.module'
import {OrbitControls} from '../../../../node_modules/three/examples/jsm/controls/OrbitControls'
export default {
  data () {
    return {
      tips: '', // 页面提示
      renderer: '', // 渲染器
      scene: '', // 场景
      camera: '', // 相机
      stats: '', // 资源监视器
      helperBox: '',
      lightBox: '',
      objBox: {
        stage: '',
        box: '',
        boxLine: '',
        edgesBox: ''
      },
      clock: '', // 世界时钟
      orbitControls: '', // 相机控件
      animationFrame: '' // 动画
    }
  },
  methods: {
    // 初始
    init () {
      this.initRender()
      this.initScene()
      this.initCamera()
      this.initClock()
      this.initObj()
      this.initLight()
      this.initHelper()
      this.initStats()
      this.initOrbitControls()
      this.updateRenderer()
    },
    // 初始渲染器
    initRender () {
      this.renderer = new THREE.WebGLRenderer({antialias: true}) // 渲染器
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.shadowMap.enabled = true // 渲染器阴影渲染
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap // 阴影类型
      this.$refs['three-canvas'].appendChild(this.renderer.domElement)
      this.renderer.setClearColor('rgb(15, 1, 25)')
    },
    // 渲染场景
    initScene () {
      this.scene = new THREE.Scene() // 场景
    },
    // 渲染时钟
    initClock () {
      this.clock = new THREE.Clock() // 世界时钟
    },
    // 光源
    initLight () {
      this.lightBox = {
        ambientLight: new THREE.AmbientLight('rgb(255, 255, 255)'), // 环境光
        spotLight: new THREE.SpotLight('rgb(255, 255, 255)', 1.5)
      }
      this.lightBox.spotLight.position.set(220, 200, 200)
      this.lightBox.spotLight.castShadow = true
      this.lightBox.spotLight.angle = Math.PI / 3
      this.scene.add(this.lightBox.spotLight)
      // this.scene.add(this.lightBox.ambientLight)
    },
    // 初始相机
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000) // 相机
      this.camera.position.x = 300
      this.camera.position.y = 200
      this.camera.position.z = 500
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 初始物体
    initObj () {
      let geometry = new THREE.BoxGeometry(200, 10, 600, 4, 4)
      let material = new THREE.MeshLambertMaterial({color: 'rgb(45, 0, 50)'})
      this.objBox.stage = new THREE.Mesh(geometry, material)
      this.objBox.stage.castShadow = true
      this.objBox.stage.receiveShadow = true
      this.objBox.stage.position.set(0, 5, 0)
      this.scene.add(this.objBox.stage)
      // 方体
      geometry = new THREE.BoxGeometry(50, 50, 50, 4, 4)
      material = new THREE.MeshLambertMaterial({color: 'rgb(230, 230, 230)'})
      material.emissiveIntensity = 10
      this.objBox.box = new THREE.Mesh(geometry, material)
      this.objBox.box.castShadow = true
      this.objBox.box.receiveShadow = true
      this.objBox.box.position.set(0, 36, 100)
      this.scene.add(this.objBox.box)
      // 边缘辅助
      let edges = new THREE.EdgesGeometry(geometry)
      this.objBox.boxLine = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }))
      this.objBox.boxLine.position.set(0, 36, 0)
      this.scene.add(this.objBox.boxLine)
      // 辅助应用
      this.objBox.edgesBox = new THREE.Mesh(geometry, material)
      this.objBox.edgesBox.castShadow = true
      this.objBox.edgesBox.receiveShadow = true
      this.objBox.edgesBox.position.set(0, 36, -100)
      let boxLine = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }))
      this.objBox.edgesBox.add(boxLine)
      this.scene.add(this.objBox.edgesBox)
    },
    // 初始辅助
    initHelper () {
      this.helperBox = {
        axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')}, // 网格
        spotLightHelper: {helper: new THREE.SpotLightHelper(this.lightBox.spotLight)} // 聚光灯

      }
      // this.scene.add(this.helperBox.spotLightHelper.helper)
    //   this.scene.add(this.helperBox.axesHelper.helper)
      // this.scene.add(this.helperBox.gridHelper.helper)
    },
    // 初始监视器
    initStats () {
      this.stats = new Stats() // 资源监视器
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
      this.orbitControls.autoRotate = true
    },
    // 动画
    animation () {
    },
    // 加载场景
    updateRenderer () {
      this.orbitControls.update(this.clock.getDelta())
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
      this.renderer.dispose()
      this.renderer.forceContextLoss()
      this.renderer.clear(true, true, true)
      this.renderer.context = null
      this.renderer.domElement = null
      // 场景缓存
      this.scene.dispose()
      // 几何体缓存
      this.clearObjCache(this.objBox.stage)
      this.clearObjCache(this.objBox.box)
      this.clearObjCache(this.objBox.boxLine)
      this.clearObjCache(this.objBox.edgesBox)
    },
    ...mapActions(['resetThreeTipsFun', 'resetThreeLinkFun'])
  },
  // 初始计算
  created () {
    // 展示的备注
    let tips = `    旋转相机：鼠标左键
    缩放场景：鼠标滚轮
    移动相机：鼠标右键 `
    this.resetThreeTipsFun(tips)
    // github链接
    this.resetThreeLinkFun('geometry/edgesGeometry.vue')
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
    this.clearCache()
    this.renderer = null
    this.scene = null
    this.camera = null
    this.stats = null
    this.helperBox = null
    this.objBox = null
    this.clock = null
    this.orbitControls = null
    cancelAnimationFrame(this.animationFrame)
  }
}
</script>

<style lang="less" scoped>

</style>
