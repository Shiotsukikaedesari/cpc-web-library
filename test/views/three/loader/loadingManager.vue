<template>
    <div class="three-display three-init">
        <div id="three-canvas" class="three-canvas" ref="three-canvas"></div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {GUI} from '../../../../node_modules/three/examples/jsm/libs/dat.gui.module'
import Stats from '../../../../node_modules/three/examples/jsm/libs/stats.module'
import {OrbitControls} from '../../../../node_modules/three/examples/jsm/controls/OrbitControls'
import {OBJLoader} from '../../../../node_modules/three/examples/jsm/loaders/OBJLoader'
import {MTLLoader} from '../../../../node_modules/three/examples/jsm/loaders/MTLLoader'
export default {
  data () {
    return {
      renderer: '', // 渲染器
      scene: '', // 场景
      camera: '', // 相机
      stats: '', // 资源监视器
      helperBox: '',
      lightBox: '',
      managerBox: '', // 加载器
      pageDestory: false, // 页面是否要销毁
      objBox: {
        stage: '',
        box: ''
      },
      gui: '', // gui
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
      this.initManager()
      this.initLoader()
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
        ambientLight: new THREE.AmbientLight('rgb(50, 50, 50)'), // 环境光
        spotLight: new THREE.SpotLight('rgb(255, 255, 255)', 1.5, 800, Math.PI / 180 * 45, 0.3, 0) // 半球光
      }
      this.lightBox.spotLight.position.set(300, 600, 300)
      this.lightBox.spotLight.castShadow = true
      this.scene.add(this.lightBox.spotLight)
      this.scene.add(this.lightBox.ambientLight)
    },
    // 初始相机
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000) // 相机
      this.camera.position.x = 600
      this.camera.position.y = 800
      this.camera.position.z = 600
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      // this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 初始加载管理器
    initManager () {
      let component = this
      // 加载器配置
      let long = 600
      let y = 0
      // 加载器公共事件
      let managerEvent = (name, manager) => {
        manager.onStart = (url, itemsLoaded, itemsTotal) => {
          y += 60
          let geometry = new THREE.BoxBufferGeometry(long, 40, 40, 4, 4)
          let material = new THREE.MeshStandardMaterial({
            color: `rgb(125, 255, 255)`,
            roughness: 0,
            metalness: 0
          })
          component.objBox[name] = new THREE.Mesh(geometry, material)
          component.objBox[name].castShadow = true
          component.objBox[name].receiveShadow = true
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
        OBJManager: new THREE.LoadingManager(),
        MTLManager: new THREE.LoadingManager()
      }
      managerEvent('OBJManager', this.managerBox.OBJManager)
      managerEvent('MTLManager', this.managerBox.MTLManager)
    },
    // 初始加载器
    initLoader () {
      let component = this
      let knifeOBJLoader = new OBJLoader(this.managerBox.OBJManager)
      let knifeMTLLoader = new MTLLoader(this.managerBox.MTLManager)// 材质文件加载器
      knifeMTLLoader.load(
        '/static/three/obj/knife/knife.mtl',
        material => {
          knifeOBJLoader.setMaterials(material)
          knifeOBJLoader.load(
            '/static/three/obj/knife/knife.obj',
            mesh => {
              mesh.scale.set(0.5, 0.5, 0.5)
              mesh.translateY(140)
              mesh.translateX(50)
              mesh.rotateZ(Math.PI / 180 * 60)
              mesh.children.forEach(elem => {
                elem.castShadow = true
                elem.receiveShadow = true
              })
              this.objBox.knife = mesh
              this.scene.add(this.objBox.knife)
            },
            xhr => {
              if (component.pageDestory) {
                xhr.target.abort()
              } else {
                component.objBox.OBJManager.scale.x = xhr.loaded / xhr.total
              }
            }
          )
        },
        xhr => {
          if (component.pageDestory) {
            xhr.target.abort()
          } else {
            component.objBox.MTLManager.scale.x = xhr.loaded / xhr.total
          }
        }
      )
    },
    // 初始物体
    initObj () {
      let geometry = new THREE.BoxGeometry(300, 10, 300, 4, 4)
      let material = new THREE.MeshLambertMaterial({color: 'rgb(45, 0, 50)'})
      this.objBox.stage = new THREE.Mesh(geometry, material)
      this.objBox.stage.castShadow = true
      this.objBox.stage.receiveShadow = true
      this.objBox.stage.position.set(0, 5, 0)
      this.scene.add(this.objBox.stage)
    },
    // 初始辅助
    initHelper () {
      this.helperBox = {
        axesHelper: {helper: new THREE.AxesHelper(10000)}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')}, // 网格
        spotLightHelper: {helper: new THREE.SpotLightHelper(this.lightBox.spotLight)} // 聚光灯

      }
      this.scene.add(this.helperBox.spotLightHelper.helper)
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
    // 初始控制台
    initGui () {
      this.gui = new GUI() // 控制台
      this.guiParam = { // 控制参数
        showHelper: true,
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
    // 加载相机插件
    initOrbitControls () {
      this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement)
      this.orbitControls.autoRotate = true
      this.orbitControls.target = new THREE.Vector3(0, 250, 0)
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
      this.orbitControls.update(this.clock.getDelta())
      this.renderer.render(this.scene, this.camera)
      this.animation()
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
      this.renderer.domElement = null
      // 场景缓存
      this.scene.dispose()
      // 几何体缓存
      this.clearObjCache(this.objBox.stage)
      if (this.objBox.knife) {
        this.objBox.knife.children.forEach(elem => {
          this.clearObjCache(elem)
        })
      }
      // 清空xhr对象缓存
      this.pageDestory = true
      // gui
      this.gui.destroy()
    },
    ...mapActions(['resetThreeTipsFun', 'resetThreeLinkFun'])
  },
  // 初始计算
  created () {
    // 展示的备注
    this.resetThreeTipsFun(`    旋转相机：鼠标左键
    缩放场景：鼠标滚轮
    移动相机：鼠标右键
    模型提供：hcity `)
    // github链接
    this.resetThreeLinkFun('loader/loadingManager.vue')
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
    this.managerBox = null
    this.objBox = null
    this.clock = null
    this.orbitControls = null
    cancelAnimationFrame(this.animationFrame)
  }
}
</script>

<style lang="less" scoped>

</style>
