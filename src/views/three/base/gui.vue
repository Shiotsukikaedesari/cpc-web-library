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
        obj1: '' // 物体对象
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
        ambientLight: new THREE.AmbientLight('rgb(255, 255, 255)') // 环境光
      }
      this.scene.add(this.lightBox.ambientLight)
    },
    // 初始相机
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000) // 相机
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
      let geometry = new THREE.BoxGeometry(100, 100, 100, 4, 4)
      let material = new THREE.MeshLambertMaterial({color: 'rgb(115, 30, 150)'})
      this.objBox.obj1 = new THREE.Mesh(geometry, material)
      this.objBox.obj1.position.set(0, 50, 0)
      this.scene.add(this.objBox.obj1)
    },
    // 初始辅助
    initHelper () {
      this.helperBox = {
        axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')} // 网格
      }
      this.scene.add(this.helperBox.axesHelper.helper)
      this.scene.add(this.helperBox.gridHelper.helper)
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
      this.orbitControls.enablePan = false
      this.orbitControls.mouseButtons = {
        LEFT: THREE.MOUSE.PAN,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: THREE.MOUSE.ROTATE
      }
    },
    // 初始控制台
    initGui () {
      this.gui = new GUI() // 控制台
      this.guiParam = { // 控制参数
        cameraAutoRotate: true,
        positionX: 0,
        positionY: 50,
        positionZ: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1
      }
      this.gui.add(this.guiParam, 'cameraAutoRotate')
      this.gui.add(this.guiParam, 'positionX', -500, 500)
      this.gui.add(this.guiParam, 'positionY', -500, 500)
      this.gui.add(this.guiParam, 'positionZ', -500, 500)
      this.gui.add(this.guiParam, 'rotateX', 0, 360)
      this.gui.add(this.guiParam, 'rotateY', 0, 360)
      this.gui.add(this.guiParam, 'rotateZ', 0, 360)
    },
    // 动画
    animation () {
    },
    // 加载场景
    updateRenderer () {
      let delta = this.clock.getDelta()
      this.orbitControls.update(delta)
      this.renderer.render(this.scene, this.camera)
      this.stats.update()

      this.orbitControls.autoRotate = this.guiParam.cameraAutoRotate
      this.objBox.obj1.position.x = this.guiParam.positionX
      this.objBox.obj1.position.y = this.guiParam.positionY
      this.objBox.obj1.position.z = this.guiParam.positionZ
      this.objBox.obj1.rotation.x = Math.PI * (this.guiParam.rotateX) / 180
      this.objBox.obj1.rotation.y = Math.PI * (this.guiParam.rotateY) / 180
      this.objBox.obj1.rotation.z = Math.PI * (this.guiParam.rotateZ) / 180

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
      this.clearObjCache(this.objBox.obj1)
      // 场景缓存
      this.scene.dispose()
      // gui
      this.gui.destroy()
    },
    ...mapActions(['resetThreeTipsFun', 'resetThreeLinkFun'])
  },
  // 初始计算,信息
  created () {
    // 展示的备注
    let tips = `相机旋转：鼠标右键  相机缩放：鼠标滚轮 `
    this.resetThreeTipsFun(tips)
    // github链接
    this.resetThreeLinkFun('base/gui.vue')
  },
  mounted () {
    this.init()
    window.onkeydown = (event) => {
      switch (event.keyCode) {
        case 81: // Q
          this.transformControls.setSpace(this.transformControls.space === 'local' ? 'world' : 'local')
          break

        case 16: // Shift
          this.transformControls.setTranslationSnap(100)
          this.transformControls.setRotationSnap(THREE.MathUtils.degToRad(15))
          this.transformControls.setScaleSnap(0.25)
          break

        case 87: // W
          this.transformControls.setMode('translate')
          break

        case 69: // E
          this.transformControls.setMode('rotate')
          break

        case 82: // R
          this.transformControls.setMode('scale')
          break

        case 187:
        case 107: // +, =, num+
          this.transformControls.setSize(this.transformControls.size + 0.1)
          break

        case 189:
        case 109: // -, _, num-
          this.transformControls.setSize(Math.max(this.transformControls.size - 0.1, 0.1))
          break

        case 88: // X
          this.transformControls.showX = !this.transformControls.showX
          break

        case 89: // Y
          this.transformControls.showY = !this.transformControls.showY
          break

        case 90: // Z
          this.transformControls.showZ = !this.transformControls.showZ
          break

        case 32: // Spacebar
          this.transformControls.enabled = !this.transformControls.enabled
          break
      }
    }
  },
  // 清空所有绑定事件与清空画布
  beforeDestroy () {
    document.body.removeChild(document.getElementById('three-stats'))
    window.onkeydown = ''
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
