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
import {MMDLoader} from '../../../../node_modules/three/examples/jsm/loaders/MMDLoader'
import {MMDAnimationHelper} from '../../../../node_modules/three/examples/jsm/animation/MMDAnimationHelper'
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
      objBox: {
        stage: '',
        box: ''
      },
      gui: '', // gui
      clock: '', // 世界时钟
      orbitControls: '', // 相机控件
      animationFrame: '', // 动画
      MMDCamare: '', // MMD照相机轨
      MMDHelper: '', // MMD动画辅助
      MMDCanPlay: false,
      playControl: false,
      lightRotate: false, // 灯光旋转
      audio: '' // 音乐对象
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
        ambientLight: new THREE.AmbientLight('rgb(50, 50, 50)', 1.7), // 环境光
        spotLight: new THREE.SpotLight('rgb(255, 255, 255)', 1, 200, Math.PI / 180 * 30, 0.3, 0) // 聚光灯
      }
      this.lightBox.spotLight.position.set(0, 70, 80)
      this.lightBox.spotLight.castShadow = true
      this.scene.add(this.lightBox.spotLight)
      this.scene.add(this.lightBox.ambientLight)
    },
    // 初始相机
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000) // 相机
      this.camera.position.x = 30
      this.camera.position.y = 30
      this.camera.position.z = 30
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      // this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 初始加载管理器
    initManager () {
      let component = this
      // 加载器配置
      let long = 40
      let y = 0
      // 加载器公共事件
      let managerEvent = (name, manager) => {
        manager.onStart = (url, itemsLoaded, itemsTotal) => {
          y += 10
          let geometry = new THREE.BoxBufferGeometry(long, 5, 5, 4, 4)
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
          component.objBox[name + 'BoxLine'].material.color.setHex('rgb(255, 0, 0)')
        }
      }
      // 初始加载器
      this.managerBox = {
        MMDManager: new THREE.LoadingManager()
      }
      managerEvent('MMDManager', this.managerBox.MMDManager)
    },
    // 初始加载器
    initLoader () {
      const component = this
      const modelUrl = '/static/three/mmd/model/TDA Vintage Dress Miku chibi/TDA Vintage chibi ver.pmx'
      const actionUrl = '/static/three/mmd/dance/rainbowBeat.vmd'
      const cameraUrl = '/static/three/mmd/dance/rainbowBeatCamera.vmd'
      const musicUrl = '/static/three/mmd/BGM/rainbowBeat.mp3'
      const loader = new MMDLoader(this.managerBox.MMDManager)
      loader.load(modelUrl, mesh => {
        mesh.castShadow = true
        mesh.receiveShadow = true
        if (modelUrl && actionUrl) {
          this.MMDHelper = new MMDAnimationHelper()
          // 载入模型与动画
          loader.loadAnimation(actionUrl, mesh, mmd => {
            this.MMDHelper.add(mesh, { animation: mmd })
            // 载入相机
            if (cameraUrl) {
              loader.loadAnimation(cameraUrl, this.camera, cameraAnimation => {
                this.MMDCamare = cameraAnimation
                this.MMDHelper.add(this.camera, { animation: cameraAnimation })
              })
            }
            // 载入音乐
            if (musicUrl) {
              const listener = new THREE.AudioListener()
              const audioLoader = new THREE.AudioLoader()
              audioLoader.load(musicUrl, buffer => {
                this.audio = new THREE.Audio(listener).setBuffer(buffer)
                this.MMDHelper.add(this.audio, {duration: 2 * 60 + 1})
                this.scene.add(mesh)
                this.MMDCanPlay = true
              })
            }
          },
          xhr => {
            component.objBox.MMDManager.scale.x = xhr.loaded / xhr.total
          },
          err => {
            console.error(err)
          }
          )
        }
      })
    },
    // 初始物体
    initObj () {
      let geometry = new THREE.BoxGeometry(50, 10, 50, 4, 4)
      let material = new THREE.MeshLambertMaterial({color: 'rgb(45, 0, 50)'})
      this.objBox.stage = new THREE.Mesh(geometry, material)
      this.objBox.stage.castShadow = true
      this.objBox.stage.receiveShadow = true
      this.objBox.stage.position.set(0, -5, 0)
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
        play: this.playControl,
        cameraPlay: true,
        cameraRotate: this.orbitControls.autoRotate,
        showHelper: true,
        castShadow: this.lightBox.spotLight.castShadow,
        lightRotate: this.lightRotate,
        color: this.lightBox.spotLight.color.getHex(),
        intensity: this.lightBox.spotLight.intensity,
        distance: this.lightBox.spotLight.distance,
        angle: this.lightBox.spotLight.angle * 180 / Math.PI,
        penumbra: this.lightBox.spotLight.penumbra,
        decay: this.lightBox.spotLight.decay,
        positionY: this.lightBox.spotLight.position.y
      }
      let MMDSetting = this.gui.addFolder('MMD setting')
      MMDSetting.add(this.guiParam, 'play').onChange(data => {
        this.playControl = data
      })
      MMDSetting.add(this.guiParam, 'cameraPlay').onChange(data => {
        if (!data) {
          this.camera.position.x = 30
          this.camera.position.y = 30
          this.camera.position.z = 30
          this.camera.up.x = 0
          this.camera.up.y = 1
          this.camera.up.z = 0
        }
        this.MMDHelper.playCamera = data
      })
      MMDSetting.add(this.guiParam, 'cameraRotate').onChange(data => {
        this.orbitControls.autoRotate = data
      })
      MMDSetting.open()
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
      lightSetting.add(this.guiParam, 'lightRotate')
        .onChange(data => {
          this.lightRotate = data
        })
      lightSetting.addColor(this.guiParam, 'color', -500, 500)
        .onChange(data => {
          this.lightBox.spotLight.color.setHex(data)
          this.helperBox.spotLightHelper.helper.update()
        })
      lightSetting.add(this.guiParam, 'intensity', 0, 1.5)
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
      this.orbitControls.target = new THREE.Vector3(0, 10, 0)
    },
    // 动画
    animation () {
      let r = 80
      let deg = Date.now() * 0.001
      this.lightBox.spotLight.position.x = -Math.cos(deg) * r
      this.lightBox.spotLight.position.z = Math.sin(deg) * r
      this.helperBox.spotLightHelper.helper.update()
    },
    // 加载场景
    updateRenderer () {
      const delta = this.clock.getDelta()
      this.orbitControls.update(delta)
      if (this.lightRotate) {
        this.animation()
      }
      if (this.MMDCanPlay && this.playControl) {
        this.MMDHelper.update(delta)
      }
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
      // gui
      this.gui.destroy()
    },
    ...mapActions(['resetThreeTipsFun', 'resetThreeLinkFun'])
  },
  watch: {
    playControl (newValue, oldValue) {
      if (newValue) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
    }
  },
  // 初始计算
  created () {
    // 展示的备注
    this.resetThreeTipsFun(`    旋转相机：鼠标左键
    缩放场景：鼠标滚轮
    移动相机：鼠标右键
    模型：TDA Vintage Dress Miku chibi
    动作配布：https://bowlroll.net/file/219793
    B站演示：https://www.bilibili.com/video/BV1kE411j7Cy
    摄像机动作配布：https://www.bilibili.com/blackboard/activity-maupjEi4a.html
    注：原版彩虹节拍动作的脚这里加载会有问题，所以换了一个`)
    // github链接
    this.resetThreeLinkFun('loader/MMDLoader.vue')
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
    this.audio.pause()
    this.MMDHelper.remove(this.audio)
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
