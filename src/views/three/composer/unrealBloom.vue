<template>
    <div class="three-display three-init">
        <div @mousemove="mousemove" id="three-canvas" class="three-canvas" ref="three-canvas"></div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Stats from '../../../../node_modules/three/examples/jsm/libs/stats.module'
import { OrbitControls } from '../../../../node_modules/three/examples/jsm/controls/OrbitControls'
import { TransformControls } from '../../../../node_modules/three/examples/jsm/controls/TransformControls'
import { EffectComposer } from '../../../../node_modules/three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from '../../../../node_modules/three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from '../../../../node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js'
import {GUI} from '../../../../node_modules/three/examples/jsm/libs/dat.gui.module'

export default {
  data () {
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
    const scene = new THREE.Scene()
    return {
      renderer, // 渲染器
      scene, // 场景
      renderScene: new RenderPass(scene, camera), // 渲染场景对象
      camera, // 相机
      stats: new Stats(), // 资源监视器
      raycaster: new THREE.Raycaster(), // 光线投射
      mouse: new THREE.Vector2(), // 鼠标位置
      bloomPass: new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85),
      composer: new EffectComposer(renderer), // 后期处理器
      showUpdateTranformControls: false, // 触发更新
      lightBox: {
        ambientLight: new THREE.AmbientLight('rgb(255, 255, 255)', 1) // 环境光
      },
      helperBox: {
        axesHelper: new THREE.AxesHelper(10000), // 坐标轴
        gridHelper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)') // 网格
      },
      objectSetting: {
        planeTotal: 50, // 平面总个数
        sphereTotal: 500, // 球的总个数
        r1: 60, // 内圈半径
        r2: 100, // 外圈半径
        maxY: 1200, // 最大y
        minY: -1200, // 最小y
        planSetting: { // 平面设置
          minWidth: 30,
          minHeight: 700,
          maxWidth: 50,
          maxHeight: 1000
        },
        sphereSetting: { // 球设置
          scaleMax: 30,
          scaleMin: 15
        }
      },
      cameraDirection: 1,
      clock: new THREE.Clock(), // 世界时钟
      orbitControls: new OrbitControls(camera, renderer.domElement), // 相机控件
      transformControls: new TransformControls(camera, renderer.domElement), // 物体变换控件
      animationControl: true, // 是否播放动画
      animationSpeed: 1, // 动画播放速度
      animationFrame: '' // 动画帧
    }
  },
  methods: {
    // 初始
    init () {
      this.initRender()
      this.initCamera()
      this.initBloomPass()
      this.initComposer()
      this.initLight()
      this.initHelper()
      this.initStats()
      this.initOrbitControls()
      this.initObject()
      this.initGui()
      this.updateRenderer()
    },
    // 初始渲染器
    initRender () {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      // this.renderer.shadowMap.enabled = true // 渲染器阴影渲染
      // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap // 阴影类型
      this.renderer.toneMapping = THREE.ReinhardToneMapping
      this.renderer.toneMappingExposure = Math.pow(1.2, 4.0)
      this.$refs['three-canvas'].appendChild(this.renderer.domElement)
      this.renderer.setClearColor('rgb(0, 0, 0)')
    },
    // 初始后期渲染器
    initComposer () {
      this.composer = new EffectComposer(this.renderer)
      this.composer.addPass(this.renderScene)
      this.composer.addPass(this.bloomPass)
    },
    // 初始渲染插件
    initBloomPass () {
      this.bloomPass.threshold = 0
      this.bloomPass.strength = 1.2
      this.bloomPass.radius = 0.3
    },
    // 光源
    initLight () {
      this.scene.add(this.lightBox.ambientLight)
    },
    // 初始相机
    initCamera () {
      this.camera.position.x = 0
      this.camera.position.y = 2000
      this.camera.position.z = 0
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 初始辅助
    initHelper () {
      // this.scene.add(this.helperBox.axesHelper)
      // this.scene.add(this.helperBox.gridHelper)
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
    // 初始控制台
    initGui () {
      this.gui = new GUI() // 控制台
      this.guiParam = { // 控制参数
        animation: this.animationControl,
        animationSpeed: this.animationSpeed,
        exposure: Math.pow(this.renderer.toneMappingExposure, 1 / 4),
        threshold: this.bloomPass.threshold,
        strength: this.bloomPass.strength,
        radius: this.bloomPass.radius
      }
      this.gui.add(this.guiParam, 'animation').onChange(data => {
        this.animationControl = data
      })
      this.gui.add(this.guiParam, 'animationSpeed', 1, 20, 1).onChange(data => {
        this.animationSpeed = data
      })
      this.gui.add(this.guiParam, 'exposure', 0, 2, 0.1).onChange(data => {
        this.renderer.toneMappingExposure = Math.pow(data, 4.0)
      })
      this.gui.add(this.guiParam, 'threshold', 0, 1, 0.1).onChange(data => {
        this.bloomPass.threshold = data
      })
      this.gui.add(this.guiParam, 'strength', 0, 4, 0.1).onChange(data => {
        this.bloomPass.strength = data
      })
      this.gui.add(this.guiParam, 'radius', 0, 1, 0.1).onChange(data => {
        this.bloomPass.radius = data
      })
    },
    // 加载相机插件
    initOrbitControls () {
      this.orbitControls.autoRotate = true
      this.orbitControls.enablePan = true
      this.orbitControls.mouseButtons = {
        LEFT: '',
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: THREE.MOUSE.ROTATE
      }
      this.orbitControls.keys = {
        LEFT: 65, // a
        UP: 87, // w
        RIGHT: 68, // d
        BOTTOM: 83 // s
      }
      this.orbitControls.target = new THREE.Vector3(0, -3000, 0)
    },
    // 初始物体
    initObject () {
      // 生成随机颜色
      const getColor = () => {
        const r = Math.round(Math.random() * 255)
        const g = Math.round(Math.random() * 255)
        const b = Math.round(Math.random() * 255)
        return `rgb(${r}, ${g}, ${b})`
      }
      // 生成平面随机位置
      const getPlanePositon = () => {
        const max = this.objectSetting.r2
        const min = this.objectSetting.r1
        const maxY = this.objectSetting.maxY
        const minY = this.objectSetting.minY
        const x = (Math.floor(Math.random() * (max - min + 1)) + min) * (Math.random() + 0.2) * (Math.random() > 0.5 ? 1 : -1)
        const y = Math.floor(Math.random() * (maxY - minY + 1)) + minY
        const z = (Math.floor(Math.random() * (max - min + 1)) + min) * (Math.random() + 0.2) * (Math.random() > 0.5 ? 1 : -1)
        return {
          x,
          y,
          z
        }
      }
      // 生成球体随机位置
      const getSpherePositon = () => {
        const max = this.objectSetting.r2
        const min = this.objectSetting.r1
        const maxY = this.objectSetting.maxY
        const minY = this.objectSetting.minY
        const x = (Math.floor(Math.random() * (max - min + 1)) + min) * Math.random() * (Math.random() > 0.5 ? 1 : -1)
        const y = Math.floor(Math.random() * (maxY - minY + 1)) + minY
        const z = (Math.floor(Math.random() * (max - min + 1)) + min) * Math.random() * (Math.random() > 0.5 ? 1 : -1)
        return {
          x,
          y,
          z
        }
      }
      // 先生成面
      for (let planNum = 0; planNum < this.objectSetting.planeTotal; planNum += 1) {
        const material = new THREE.MeshStandardMaterial({
          color: getColor(),
          roughness: 0,
          metalness: 0
        })
        material.wireframe = Math.random() > 0.1
        material.transparent = true
        material.opacity = Math.random() * 0.8
        const widthDept = Math.round(Math.random() * 6)
        const geometry = new THREE.PlaneBufferGeometry(
          (Math.floor(Math.random() * (this.objectSetting.planSetting.maxWidth - this.objectSetting.planSetting.minWidth + 1)) + this.objectSetting.planSetting.minWidth),
          (Math.floor(Math.random() * (this.objectSetting.planSetting.maxHeight - this.objectSetting.planSetting.minHeight + 1)) + this.objectSetting.planSetting.minHeight),
          widthDept < 2 ? 0 : widthDept,
          1
        )
        const plane = new THREE.Mesh(geometry, material)
        const position = getPlanePositon()
        plane.position.set(position.x, position.y, position.z)
        plane.lookAt(0, position.y, 0)
        this.scene.add(plane)
      }
      // 生成球体
      for (let planNum = 0; planNum < this.objectSetting.sphereTotal; planNum += 1) {
        const material = new THREE.MeshStandardMaterial({
          color: getColor(),
          roughness: 0,
          metalness: 0
        })
        const geometry = new THREE.SphereBufferGeometry(1, 10, 16, 6)
        const sphere = new THREE.Mesh(geometry, material)
        const position = getSpherePositon()
        sphere.position.set(position.x, position.y, position.z)
        const max = this.objectSetting.sphereSetting.scaleMax
        const min = this.objectSetting.sphereSetting.scaleMin
        sphere.scale.set(1, (Math.floor(Math.random() * (max - min + 1)) + min), 1)
        this.scene.add(sphere)
      }
    },
    // 动画
    animation () {
      if (this.camera.position.y > 2000) {
        this.cameraDirection = 1
        this.orbitControls.target = new THREE.Vector3(0, -2000, 0)
      } else if (this.camera.position.y < -2000) {
        this.cameraDirection = -1
        this.orbitControls.target = new THREE.Vector3(0, 2000, 0)
      }
      this.camera.position.y -= this.animationSpeed * this.cameraDirection
    },
    // 加载场景
    updateRenderer () {
      const delta = this.clock.getDelta()
      this.orbitControls.update(delta)
      if (this.animationControl) {
        this.animation()
      }
      this.composer.render()
      this.stats.update()
      this.animationFrame = requestAnimationFrame(this.updateRenderer)
    },
    // 鼠标移动事件
    mousemove ($event) {
      // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
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
      this.scene.children.forEach(elem => {
        if (elem.type === 'Mesh') {
          this.clearObjCache(elem)
        }
      })
      // 场景缓存
      this.scene.dispose()
      // gui
      this.gui.destroy()
    },
    // 重置渲染区大小
    resetRenderer () {
      this.renderer.setSize(this.width, this.height)
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
    },
    ...mapActions(['resetThreeTipsFun', 'resetThreeLinkFun'])
  },
  // 初始计算
  created () {
    // 展示的备注
    this.resetThreeTipsFun(`    旋转相机：鼠标左键
    缩放场景：鼠标滚轮
    移动相机：鼠标右键`)
    // github链接
    this.resetThreeLinkFun('composer/unrealBloom.vue')
  },
  mounted () {
    this.init()
  },
  // 清空所有绑定事件与清空画布
  beforeDestroy () {
    document.body.removeChild(document.getElementById('three-stats'))
    this.clearCache()
    window.onkeydown = null
    this.renderer = null
    this.scene = null
    this.camera = null
    this.lightBox = null
    this.helperBox = null
    this.objBox = null
    this.clock = null
    this.orbitControls = null
    this.transformControls = null
    this.gui = null
    cancelAnimationFrame(this.animationFrame)
  }
}
</script>

<style lang="less" scoped>

</style>
