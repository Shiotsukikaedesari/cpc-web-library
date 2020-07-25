<template>
    <div class="three-display three-init">
        <div id="three-canvas" class="three-canvas" ref="three-canvas" @mousemove="mousemove"></div>
        <cpc-button class="full" @click="fullAll">填充</cpc-button>
        <cpc-button class="clear" @click="clearAll">重置</cpc-button>
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
      raycaster: '', // 光线投射
      mouse: '', // 鼠标位置
      mousemoveStatus: false, // 鼠标是否移动
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
      this.initRaycasterAndMouse()
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
        ambientLight: new THREE.AmbientLight('rgb(255, 255, 255)') // 环境光
      }
      this.scene.add(this.lightBox.ambientLight)
    },
    // 初始相机
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000) // 相机
      this.camera.position.x = 650
      this.camera.position.y = 0
      this.camera.position.z = 650
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 初始物体
    initObj () {
      // 设置组合
      this.objBox.group = new THREE.Group()

      let geometry = new THREE.OctahedronBufferGeometry(20)
      // 空间位置
      let positionRange = [-200, -150, -100, -50, 0, 50, 100, 150, 200]
      for (let x = 0; x < positionRange.length; x += 1) {
        for (let y = 0; y < positionRange.length; y += 1) {
          for (let z = 0; z < positionRange.length; z += 1) {
            let material = new THREE.MeshPhongMaterial({color: `rgb(255, 255, 255)`})
            let box = new THREE.Mesh(geometry, material)
            box.name = `${x}${y}${z}`
            console.log(box.name)
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
        gridHelper: {helper: new THREE.GridHelper(1500, 30, 'white', 'rgb(150, 150, 150)')} // 网格
      }
      // this.scene.add(this.helperBox.axesHelper.helper)
      // this.scene.add(this.helperBox.gridHelper.helper)
    },
    // 光线投射
    initRaycasterAndMouse () {
      this.raycaster = new THREE.Raycaster()
      this.mouse = new THREE.Vector2()
    },
    // 鼠标移动
    mousemove (event) {
      // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      this.mousemoveStatus = true
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
      this.orbitControls.autoRotate = false
    },
    // 初始控制台
    initGui () {
      this.gui = new GUI() // 控制台
      this.guiParam = { // 控制参数
        autoCamera: this.orbitControls.autoRotate
      }
      this.gui
        .add(this.guiParam, 'autoCamera')
        .onChange(data => {
          this.orbitControls.autoRotate = data
        })
    },
    // 动画
    animation () {
    },
    // 射线操作
    raycasterOperate () {
      // 颜色
      let colorRange = [0, 32, 64, 96, 128, 160, 192, 224, 255]
      // 通过摄像机和鼠标位置更新射线
      this.raycaster.setFromCamera(this.mouse, this.camera)
      // 计算物体和射线的焦点
      var intersects = this.raycaster.intersectObjects(this.objBox.group.children)
      if (intersects[0]) {
        let name = intersects[0].object.name
        let r = colorRange[name.slice(0, 1)]
        let g = colorRange[name.slice(1, 2)]
        let b = colorRange[name.slice(-1)]
        intersects[0].object.material.color.set((new THREE.Color(`rgb(${r}, ${g}, ${b})`)).getHex())
      }
    },
    // 加载场景
    updateRenderer () {
      let delta = this.clock.getDelta()
      this.orbitControls.update(delta)
      if (this.mousemoveStatus) {
        this.raycasterOperate()
      }
      this.renderer.render(this.scene, this.camera)
      this.stats.update()

      this.animationFrame = requestAnimationFrame(this.updateRenderer)
    },
    // 填充所有
    fullAll () {
      // 颜色
      let colorRange = [0, 32, 64, 96, 128, 160, 192, 224, 255]
      this.objBox.group.children.forEach(elem => {
        let name = elem.name
        let r = colorRange[name.slice(0, 1)]
        let g = colorRange[name.slice(1, 2)]
        let b = colorRange[name.slice(-1)]
        elem.material.color.set((new THREE.Color(`rgb(${r}, ${g}, ${b})`)).getHex())
      })
    },
    clearAll () {
      this.objBox.group.children.forEach(elem => {
        elem.material.color.set((new THREE.Color(`rgb(255, 255, 255)`)).getHex())
      })
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
    this.resetThreeLinkFun('light/ambientLight.vue')
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
.full {
  position: fixed;
  top:  55px;
  right: 5px;
}
.clear {
   position: fixed;
  top:  95px;
  right: 5px;
}
</style>
