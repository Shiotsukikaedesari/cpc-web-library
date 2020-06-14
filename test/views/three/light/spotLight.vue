<template>
    <div class="three-display three-init">
        <div id="three-canvas" class="three-canvas" ref="three-canvas"></div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Stats from '../../../../node_modules/three/examples/jsm/libs/stats.module'
import {OrbitControls} from '../../../../node_modules/three/examples/jsm/controls/OrbitControls'
import {GUI} from '../../../../node_modules/three/examples/jsm/libs/dat.gui.module'
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
        group: ''
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
        spotLight: new THREE.SpotLight('rgb(255, 255, 255)', 1.5, 800, Math.PI / 180 * 30, 0.3, 0) // 半球光
      }
      this.lightBox.spotLight.position.set(400, 400, 400)
      this.lightBox.spotLight.castShadow = false
      this.scene.add(this.lightBox.spotLight)
    },
    // 初始相机
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000) // 相机
      this.camera.position.x = 400
      this.camera.position.y = -600
      this.camera.position.z = 400
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 初始物体
    initObj () {
      // 设置组合
      this.objBox.group = new THREE.Group()

      let geometry = new THREE.BoxBufferGeometry(50, 50, 50)
      // 颜色
      let colorRange = [0, 64, 128, 192, 255]
      // 空间位置
      let positionRange = [-200, -100, 0, 100, 200]

      for (let x = 0; x < positionRange.length; x += 1) {
        for (let y = 0; y < positionRange.length; y += 1) {
          for (let z = 0; z < positionRange.length; z += 1) {
            let material = new THREE.MeshStandardMaterial({
              color: `rgb(${colorRange[x]}, ${colorRange[y]}, ${colorRange[z]})`,
              roughness: 0,
              metalness: 0
            })
            let box = new THREE.Mesh(geometry, material)
            box.castShadow = true
            box.receiveShadow = true
            box.position.set(positionRange[x], positionRange[y], positionRange[z])
            this.objBox.group.add(box)
          }
        }
      }
      this.scene.add(this.objBox.group)
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
      // this.scene.add(this.helperBox.spotLightHelper.helper)
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
        name: 'spotLight Controller'
      }) // 控制台
      this.guiParam = { // 控制参数
        showHelper: false,
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
      lightSetting.add(this.guiParam, 'showHelper')
        .onChange(data => {
          if (data) {
            this.scene.add(this.helperBox.spotLightHelper.helper)
          } else {
            this.scene.remove(this.helperBox.spotLightHelper.helper)
          }
        })
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
      lightSetting.open()
      let lightPosition = this.gui.addFolder('Light position')
      lightPosition.add(this.guiParam, 'positionY', -500, 500, 1)
        .onChange(data => {
          this.lightBox.spotLight.position.y = data
          this.helperBox.spotLightHelper.helper.update()
        })
      lightPosition.open()
    },
    // 动画
    animation () {
      let r = 400
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
      this.objBox.group.children.forEach(elem => {
        this.clearObjCache(elem)
      })
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
    this.resetThreeLinkFun('light/spotLight.vue')
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
