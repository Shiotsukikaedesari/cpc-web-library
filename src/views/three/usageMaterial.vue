<template>
    <div class="three-display three-init">
        <div id="three-canvas" class="three-canvas" ref="three-canvas"></div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Stats from '../../../node_modules/three/examples/jsm/libs/stats.module'
import {OrbitControls} from '../../../node_modules/three/examples/jsm/controls/OrbitControls'
import {GUI} from '../../../node_modules/three/examples/jsm/libs/dat.gui.module'
export default {
  data () {
    return {
      renderer: '', // 渲染器
      scene: '', // 场景
      camera: '', // 相机
      stats: '', // 资源监视器
      lightBox: '',
      helperBox: '',
      objBox: {
        stage: '',
        box: ''
      },
      clock: '', // 世界时钟
      orbitControls: '', // 相机控件
      animationFrame: '', // 动画
      gui: '', // 控制台
      guiParam: '' // 控制台参数
    }
  },
  methods: {
    // 初始
    init () {
      this.initRender()
      this.initScene()
      this.initClock()
      this.initCamera()
      this.initObj()
      this.initLight()
      this.initHelper()
      this.initStats()
      this.initOrbitControls()
      this.initGui()
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
    // 初始场景
    initScene () {
      this.scene = new THREE.Scene() // 场景
    },
    // 初始世界时钟
    initClock () {
      this.clock = new THREE.Clock() // 世界时钟
    },
    // 光源
    initLight () {
      this.lightBox = {
        spotLight: new THREE.SpotLight('rgb(255, 255, 255)', 1.5, 450, Math.PI / 180 * 60, 0.2, 0) // 半球光
      }
      this.lightBox.spotLight.position.set(100, 300, 100)
      this.lightBox.spotLight.castShadow = true
      this.scene.add(this.lightBox.spotLight)
    },
    // 初始相机
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000) // 相机
      this.camera.position.x = 200
      this.camera.position.y = 100
      this.camera.position.z = 200
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 初始物体
    initObj () {
      let geometry = new THREE.BoxGeometry(500, 10, 500, 4, 4)
      let material = new THREE.MeshStandardMaterial({
        color: `rgb(45, 0, 50)`,
        roughness: 0,
        metalness: 0
      })
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
      this.objBox.box.position.set(0, 30, 0)
      this.scene.add(this.objBox.box)
    },
    // 初始辅助
    initHelper () {
      this.helperBox = {
        axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')}, // 网格
        spotLightHelper: {helper: new THREE.SpotLightHelper(this.lightBox.spotLight)} // 聚光
      }
      // this.scene.add(this.helperBox.axesHelper.helper)
      // this.scene.add(this.helperBox.gridHelper.helper)
      this.scene.add(this.helperBox.spotLightHelper.helper)
    },
    // 初始监视器
    initStats () {
      this.stats = new Stats() // 资源监视器
      this.stats.setMode(0)
      this.stats.domElement.id = 'three-stats'
      this.stats.domElement.style.position = 'absolute'
      this.stats.domElement.style.left = 'unset'
      this.stats.domElement.style.right = '300px'
      this.stats.domElement.style.top = '0px'
      document.body.appendChild(this.stats.domElement)
    },
    // 加载相机插件
    initOrbitControls () {
      this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)
      this.orbitControls.autoRotate = true
    },
    // 初始控制台
    initGui () {
      this.gui = new GUI({
        name: 'usageMeterial Controller'
      }) // 控制台
      this.guiParam = { // 控制参数
        castShadow: this.lightBox.spotLight.castShadow,
        color: this.lightBox.spotLight.color.getHex(),
        intensity: this.lightBox.spotLight.intensity,
        distance: this.lightBox.spotLight.distance,
        angle: this.lightBox.spotLight.angle * 180 / Math.PI,
        penumbra: this.lightBox.spotLight.penumbra,
        decay: this.lightBox.spotLight.decay,
        positionY: this.lightBox.spotLight.position.y
      }
      let lightSetting = this.gui.addFolder('Light setting')
      lightSetting.add(this.guiParam, 'castShadow')
        .onChange(data => {
          this.lightBox.spotLight.castShadow = data
        })
      lightSetting.addColor(this.guiParam, 'color', -500, 500)
        .onChange(data => {
          this.lightBox.spotLight.color.setHex(data)
          this.helperBox.spotLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'intensity', 0, 10)
        .onChange(data => {
          this.lightBox.spotLight.intensity = data
          this.helperBox.spotLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'distance', 0, 1000, 1)
        .onChange(data => {
          this.lightBox.spotLight.distance = data
          this.helperBox.spotLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'angle', 0, 60, 1)
        .onChange(data => {
          this.lightBox.spotLight.angle = Math.PI / 180 * data
          this.helperBox.spotLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'penumbra', 0, 1, 0.1)
        .onChange(data => {
          this.lightBox.spotLight.penumbra = data
          this.helperBox.spotLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'decay', 0, 5, 0.1)
        .onChange(data => {
          this.lightBox.spotLight.decay = data
          this.helperBox.spotLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'positionY', -500, 500, 1)
        .onChange(data => {
          this.lightBox.spotLight.position.y = data
          this.helperBox.spotLightHelper.helper.update()
        })
      lightSetting.open()
    },
    // 动画
    animation () {
      let r = 300
      let deg = Date.now() * 0.001
      this.lightBox.spotLight.position.x = -Math.cos(deg) * r
      this.lightBox.spotLight.position.z = Math.sin(deg) * r
      this.helperBox.spotLightHelper.helper.update()
    },
    // 加载场景
    updateRenderer () {
      let delta = this.clock.getDelta()
      this.orbitControls.update(delta)
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
      // 清空物体
      this.clearObjCache(this.objBox.stage)
      this.clearObjCache(this.objBox.box)
      // 场景缓存
      this.scene.dispose()
      // 辅助对象缓存
      this.helperBox.spotLightHelper.helper.dispose()
      // gui
      this.gui.destroy()
    },
    ...mapActions(['resetThreeTipsFun', 'resetThreeLinkFun'])
  },
  // 初始计算,信息
  created () {
    // 展示的备注
    let tips = `    旋转相机：鼠标左键
    缩放场景：鼠标滚轮
    移动相机：鼠标右键 `
    this.resetThreeTipsFun(tips)
    // github链接
    this.resetThreeLinkFun('spotLight.vue')
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
    this.lightBox = null
    this.helperBox = null
    this.clock = null
    this.gui = null
    cancelAnimationFrame(this.animationFrame)
  }
}
</script>

<style lang="less" scoped>

</style>
