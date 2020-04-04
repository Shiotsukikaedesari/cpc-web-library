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
import {RectAreaLightUniformsLib} from '../../../../node_modules/three/examples/jsm/lights/RectAreaLightUniformsLib'
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
        group: '',
        rectLightMesh: '',
        rectLightMeshBack: ''
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
      this.initLight()
      this.initObj()
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
      this.renderer.outputEncoding = THREE.sRGBEncoding
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
      // 这个方法应该会影响材质的漫反射roughness计算，具体不得而知，漫反射为0的效果并不会对这个生效
      RectAreaLightUniformsLib.init()
      this.lightBox = {
        rectAreaLight: new THREE.RectAreaLight('rgb(255, 255, 255)', 2, 100, 300) // 平面光

      }
      this.lightBox.rectAreaLight.position.set(300, 100, 300)
      this.lightBox.rectAreaLight.lookAt(0, 0, 0)
      this.scene.add(this.lightBox.rectAreaLight)
    },
    // 初始相机
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000) // 相机
      this.camera.position.x = 700
      this.camera.position.y = 500
      this.camera.position.z = 700
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
      // 平面光辅助
      this.objBox.rectLightMesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(), new THREE.MeshBasicMaterial({
        side: THREE.BackSide,
        color: 'rgb(255, 255, 255)'
      }))
      this.objBox.rectLightMesh.scale.x = this.lightBox.rectAreaLight.width
      this.objBox.rectLightMesh.scale.y = this.lightBox.rectAreaLight.height
      this.lightBox.rectAreaLight.add(this.objBox.rectLightMesh)

      this.objBox.rectLightMeshBack = new THREE.Mesh(new THREE.PlaneBufferGeometry(), new THREE.MeshBasicMaterial({ color: 0x080808 }))
      this.objBox.rectLightMesh.add(this.objBox.rectLightMeshBack)
    },
    // 初始辅助
    initHelper () {
      this.helperBox = {
        axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')} // 网格
      }
      // this.scene.add(this.helperBox.axesHelper.helper)
      // this.scene.add(this.helperBox.gridHelper.helper)
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
      this.gui = new GUI() // 控制台
      this.guiParam = { // 控制参数
        autoCamera: this.orbitControls.autoRotate,
        color: this.lightBox.rectAreaLight.color.getHex(),
        intensity: this.lightBox.rectAreaLight.intensity,
        width: this.lightBox.rectAreaLight.width,
        height: this.lightBox.rectAreaLight.height,
        positionY: this.lightBox.rectAreaLight.position.y
      }
      this.gui
        .add(this.guiParam, 'autoCamera')
        .onChange(data => {
          this.orbitControls.autoRotate = data
        })
      this.gui
        .addColor(this.guiParam, 'color', -500, 500, 1)
        .onChange(data => {
          this.lightBox.rectAreaLight.color.setHex(data)
          this.objBox.rectLightMesh.material.color.copy(this.lightBox.rectAreaLight.color).multiplyScalar(this.lightBox.rectAreaLight.intensity)
        })
      this.gui
        .add(this.guiParam, 'intensity', 0, 10, 0.1)
        .onChange(data => {
          this.lightBox.rectAreaLight.intensity = data
          this.objBox.rectLightMesh.material.color.copy(this.lightBox.rectAreaLight.color).multiplyScalar(this.lightBox.rectAreaLight.intensity)
        })
      this.gui
        .add(this.guiParam, 'width', 10, 600, 1)
        .onChange(data => {
          this.lightBox.rectAreaLight.width = data
          this.objBox.rectLightMesh.scale.x = data
        })
      this.gui
        .add(this.guiParam, 'height', 10, 600, 1)
        .onChange(data => {
          this.lightBox.rectAreaLight.height = data
          this.objBox.rectLightMesh.scale.y = data
        })
      this.gui
        .add(this.guiParam, 'positionY', -500, 500, 1)
        .onChange(data => {
          this.lightBox.rectAreaLight.position.y = data
          this.lightBox.rectAreaLight.lookAt(0, 0, 0)
        })
    },
    // 动画
    animation (delta) {
      let r = 400
      let deg = Date.now() * 0.001
      this.lightBox.rectAreaLight.position.x = -Math.cos(deg) * r
      this.lightBox.rectAreaLight.position.z = -Math.sin(deg) * r
      this.lightBox.rectAreaLight.lookAt(0, 0, 0)
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
      this.clearObjCache(this.objBox.rectLightMesh)
      this.clearObjCache(this.objBox.rectLightMeshBack)
      this.objBox.group.children.forEach(elem => {
        this.clearObjCache(elem)
      })
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
    let tips = `    旋转相机：鼠标左键
    缩放场景：鼠标滚轮
    移动相机：鼠标右键 `
    this.resetThreeTipsFun(tips)
    // github链接
    this.resetThreeLinkFun('light/rectAreaLight.vue')
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
