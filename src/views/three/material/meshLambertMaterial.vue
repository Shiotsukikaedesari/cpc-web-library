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
        stage: '',
        box: '',
        sphere: '',
        torusKnot: '',
        icosahedron: ''
      },
      mapBox: '',
      clock: '', // 世界时钟
      orbitControls: '', // 相机控件
      animationFrame: '', // 动画
      gui: '', // 控制台
      guiParam: '', // 控制台参数
      pageDestory: false // 页面销毁
    }
  },
  methods: {
    // 初始
    init () {
      this.initManager()
      this.initRender()
      this.initScene()
      this.initLoader()
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
      this.$refs['three-canvas'].appendChild(this.renderer.domElement)
      this.renderer.setClearColor('rgb(15, 1, 25)')
    },
    // 初始场景
    initScene () {
      this.scene = new THREE.Scene() // 场景
      this.scene.fog = new THREE.Fog()
      this.scene.fog.color.setHex('rgb(55, 55, 55)')
      this.scene.fog.near = 1
      this.scene.fog.far = 450
    },
    // 初始世界时钟
    initClock () {
      this.clock = new THREE.Clock() // 世界时钟
    },
    // 光源
    initLight () {
      this.lightBox = {
        pointLight: new THREE.PointLight('rgb(255, 255, 255)', 2, 300, 0.5) // 点光
      }
      this.lightBox.pointLight.castShadow = true
      this.lightBox.pointLight.position.set(0, 50, 0)
      this.scene.add(this.lightBox.pointLight)
    },
    // 初始相机
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000) // 相机
      this.camera.position.x = 150
      this.camera.position.y = 50
      this.camera.position.z = 150
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 初始加载管理器
    initManager () {
      let component = this
      // 加载器配置
      let long = 150
      let y = 0
      // 加载器公共事件
      let managerEvent = (name, manager) => {
        manager.onStart = (url, itemsLoaded, itemsTotal) => {
          y += 25
          let geometry = new THREE.BoxBufferGeometry(long, 15, 15, 4, 4)
          let material = new THREE.MeshNormalMaterial()
          component.objBox[name] = new THREE.Mesh(geometry, material)
          component.objBox[name].position.set(0, y, 0)
          component.objBox[name].scale.x = 0.01
          component.scene.add(component.objBox[name])

          component.objBox[name + 'BoxLine'] = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), new THREE.LineBasicMaterial({ color: 0xffffff }))
          component.objBox[name + 'BoxLine'].position.set(0, y, 0)
          component.scene.add(component.objBox[name + 'BoxLine'])
        }
        manager.onLoad = () => {
          component.scene.remove(component.objBox[name])
          component.clearObjCache(component.objBox[name])
          component.scene.remove(component.objBox[name + 'BoxLine'])
          component.clearObjCache(component.objBox[name + 'BoxLine'])
        }
        manager.onProgress = (url, itemsLoaded, itemsTotal) => {
          component.objBox[name].scale.x = itemsLoaded / itemsTotal
        }
        manager.onError = url => {
          // 兼容未加载完进行路由跳转
          if (component.objBox) {
            component.objBox[name + 'BoxLine'].material.color.setHex('rgb(255, 0, 0)')
          }
        }
      }
      // 初始加载器
      this.managerBox = {
        textureManager: new THREE.LoadingManager(),
        mapManager: new THREE.LoadingManager()
      }
      managerEvent('textureManager', this.managerBox.textureManager)
    },
    // 初始加载器
    initLoader () {
      let component = this
      // 加载天空盒
      let loader = new THREE.CubeTextureLoader(this.managerBox.textureManager)
      loader.setPath('/static/three/skybox/')
      loader.load(
        [
          'px.png', 'nx.png',
          'py.png', 'ny.png',
          'pz.png', 'nz.png'
        ],
        texture => {
          texture.minFilter = THREE.LinearFilter // 防止抛出异常
          component.mapBox.envMap = texture
          component.scene.background = texture
          component.objBox.stage.material.envMap = texture
          component.objBox.stage.material.needsUpdate = true
          component.objBox.box.material.envMap = texture
          component.objBox.box.material.needsUpdate = true
        }
      )

      // 加载纹理
      new THREE.TextureLoader(this.managerBox.textureManager).load(
        '/static/three/texture/1.jpg',
        texture => {
          component.mapBox.map = texture
          texture.wrapS = THREE.RepeatWrapping
          texture.wrapT = THREE.RepeatWrapping
          texture.repeat.set(2, 2)
          component.objBox.box.material.map = texture
          component.objBox.box.material.needsUpdate = true
        }
      )
      this.mapBox = {
        envMap: '',
        map: ''
      }
    },
    // 初始物体
    initObj () {
      let geometry = new THREE.BoxGeometry(1000, 10, 1000, 4, 4)
      let material = new THREE.MeshStandardMaterial({
        color: `rgb(200, 200, 200)`,
        roughness: 0.5,
        metalness: 0,
        envMap: this.scene.background
      })
      this.objBox.stage = new THREE.Mesh(geometry, material)
      this.objBox.stage.castShadow = true
      this.objBox.stage.receiveShadow = true
      this.objBox.stage.position.set(0, 5, 0)
      this.scene.add(this.objBox.stage)
      // 球
      geometry = new THREE.SphereGeometry(25, 18, 18, 8)
      material = new THREE.MeshLambertMaterial({
        color: 'rgb(230, 230, 230)',
        envMap: this.mapBox.envMap,
        map: this.mapBox.map,
        reflectivity: 0.7,
        emissive: 'rgb(50, 50, 50)'
      })
      material.transparent = true // 开启透明度
      this.objBox.sphere = new THREE.Mesh(geometry, material)
      this.objBox.sphere.castShadow = true
      this.objBox.sphere.receiveShadow = true
      this.objBox.sphere.position.set(0, 35, 100)
      this.scene.add(this.objBox.sphere)

      // 方体
      geometry = new THREE.BoxGeometry(50, 50, 50, 1, 1)
      this.objBox.box = new THREE.Mesh(geometry, material)
      this.objBox.box.castShadow = true
      this.objBox.box.receiveShadow = true
      this.objBox.box.position.set(100, 35, 0)
      this.scene.add(this.objBox.box)
      // 圆环扭曲几何
      geometry = new THREE.TorusKnotGeometry(16, 4, 100, 12, 2, 3)
      this.objBox.torusKnot = new THREE.Mesh(geometry, material)
      this.objBox.torusKnot.castShadow = true
      this.objBox.torusKnot.receiveShadow = true
      this.objBox.torusKnot.position.set(-100, 35, 0)
      this.scene.add(this.objBox.torusKnot)
      // 三边形十二面体
      geometry = new THREE.IcosahedronGeometry(30)
      this.objBox.icosahedron = new THREE.Mesh(geometry, material)
      this.objBox.icosahedron.castShadow = true
      this.objBox.icosahedron.receiveShadow = true
      this.objBox.icosahedron.position.set(0, 35, -100)
      this.scene.add(this.objBox.icosahedron)
    },
    // 初始辅助
    initHelper () {
      this.helperBox = {
        axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')}, // 网格
        pointLightHelper: {helper: new THREE.PointLightHelper(this.lightBox.pointLight, 20)} // 半球
      }
      // this.scene.add(this.helperBox.axesHelper.helper)
      // this.scene.add(this.helperBox.gridHelper.helper)
      this.scene.add(this.helperBox.pointLightHelper.helper)
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
      this.orbitControls.target = new THREE.Vector3(0, 30, 0)
    },
    // 初始控制台
    initGui () {
      this.gui = new GUI() // 控制台
      this.guiParam = { // 控制参数
        showFog: true,
        fogColor: this.scene.fog.color.getHex(),
        fogNear: this.scene.fog.near,
        fogFar: this.scene.fog.far,
        castShadow: this.lightBox.pointLight.castShadow,
        lightColor: this.lightBox.pointLight.color.getHex(),
        intensity: this.lightBox.pointLight.intensity,
        distance: this.lightBox.pointLight.distance,
        decay: this.lightBox.pointLight.decay,
        positionX: this.lightBox.pointLight.position.x,
        positionZ: this.lightBox.pointLight.position.z,
        materialColor: this.objBox.box.material.color.getHex(),
        opacity: this.objBox.box.material.opacity,
        showEnvMap: true,
        reflectivity: this.objBox.box.material.reflectivity,
        showMap: true,
        wireframe: this.objBox.box.material.wireframe,
        emissive: this.objBox.box.material.emissive.getHex(),
        emissiveIntensity: this.objBox.box.material.emissiveIntensity
      }
      let fogSetting = this.gui.addFolder('fog setting')
      fogSetting.add(this.guiParam, 'showFog')
        .onChange(data => {
          if (data) {
            this.scene.fog = new THREE.Fog()
            this.scene.fog.color.setHex('rgb(55, 55, 55)')
            this.scene.fog.near = 1
            this.scene.fog.far = 400
          } else {
            this.scene.fog = null
          }
        })
      fogSetting.addColor(this.guiParam, 'fogColor')
        .onChange(data => {
          this.scene.fog.color.setHex(data)
        })
      fogSetting.add(this.guiParam, 'fogNear', 1, 500, 1)
        .onChange(data => {
          this.scene.fog.near = data
        })
      fogSetting.add(this.guiParam, 'fogFar', 300, 1500, 1)
        .onChange(data => {
          this.scene.fog.far = data
        })
      fogSetting.open()

      let lightSetting = this.gui.addFolder('Light setting')
      lightSetting.add(this.guiParam, 'castShadow')
        .onChange(data => {
          this.lightBox.pointLight.castShadow = data
        })
      lightSetting.addColor(this.guiParam, 'lightColor', -500, 500, 1)
        .onChange(data => {
          this.lightBox.pointLight.color.setHex(data)
          this.helperBox.pointLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'intensity', 0, 10, 0.1)
        .onChange(data => {
          this.lightBox.pointLight.intensity = data
          this.helperBox.pointLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'distance', 0, 600, 1)
        .onChange(data => {
          this.lightBox.pointLight.distance = data
          this.helperBox.pointLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'decay', 0, 5)
        .onChange(data => {
          this.lightBox.pointLight.decay = data
          this.helperBox.pointLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'positionX', -500, 500, 1)
        .onChange(data => {
          this.lightBox.pointLight.position.x = data
        })
      lightSetting.add(this.guiParam, 'positionZ', -500, 500, 1)
        .onChange(data => {
          this.lightBox.pointLight.position.x = data
        })
      lightSetting.open()

      let materialSetting = this.gui.addFolder('material Setting')
      materialSetting.addColor(this.guiParam, 'materialColor')
        .onChange(data => {
          this.objBox.box.material.color.setHex(data)
        })
      materialSetting.add(this.guiParam, 'opacity', 0, 1, 0.1)
        .onChange(data => {
          this.objBox.box.material.opacity = data
        })
      materialSetting.add(this.guiParam, 'showEnvMap')
        .onChange(data => {
          if (data) {
            this.objBox.box.material.envMap = this.scene.background
            this.objBox.box.material.needsUpdate = true
          } else {
            this.objBox.box.material.envMap = null
            this.objBox.box.material.needsUpdate = true
          }
        })
      materialSetting.add(this.guiParam, 'reflectivity', 0, 1, 0.1)
        .onChange(data => {
          this.objBox.box.material.reflectivity = data
        })
      materialSetting.add(this.guiParam, 'showMap')
        .onChange(data => {
          if (data) {
            this.objBox.box.material.map = this.mapBox.map
            this.objBox.box.material.needsUpdate = true
          } else {
            this.objBox.box.material.map = null
            this.objBox.box.material.needsUpdate = true
          }
        })
      materialSetting.add(this.guiParam, 'wireframe')
        .onChange(data => {
          this.objBox.box.material.wireframe = data
        })
      materialSetting.addColor(this.guiParam, 'emissive')
        .onChange(data => {
          this.objBox.box.material.emissive.setHex(data)
        })
      materialSetting.add(this.guiParam, 'emissiveIntensity', 0, 2, 0.01)
        .onChange(data => {
          this.objBox.box.material.emissiveIntensity = data
        })
      materialSetting.open()
    },
    // 动画
    animation () {
      let deg = new Date() * 0.001
      this.lightBox.pointLight.position.y = Math.sin(deg) * 30 + 60
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
      this.clearObjCache(this.objBox.sphere)
      this.clearObjCache(this.objBox.icosahedron)
      // 清空纹理
      this.mapBox.envMap.dispose()
      this.mapBox.map.dispose()
      // 页面销毁xhr
      this.pageDestory = true
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
    this.resetThreeLinkFun('material/meshBasicMaterial.vue')
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
