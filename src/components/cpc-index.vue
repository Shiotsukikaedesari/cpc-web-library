<template>
<div class="cpc-index">
    <div id="three-canvas" class="three-canvas" ref="three-canvas">
    </div>
    <div class="cpc-index-control flex-column-center" v-show="showControl">
      <div class="control-title">控制台</div>
      <div class="control-container flex-column">
        <div class="control-element control-helper flex-column">
          <div class="control-box-title">辅助线</div>
          <div class="control-box control-helper-box flex-row">
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="axesHelper">坐标轴：</label>
                <input id="axesHelper" class="switch-type" type="range" min="0" max="1" step="1" v-model="helperBox.axesHelper.value">
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="gridHelper">网格：</label>
                <input id="gridHelper" class="switch-type" type="range" min="0" max="1" step="1" v-model="helperBox.gridHelper.value">
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="gridHelper">相机：</label>
                <input id="gridHelper" class="switch-type" type="range" min="0" max="1" step="1" v-model="helperBox.cameraHelper.value">
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="gridHelper">平行光：</label>
                <input id="gridHelper" class="switch-type" type="range" min="0" max="1" step="1" v-model="helperBox.directionalLightHelper.value">
              </div>
            </div>
          </div>
        </div>
        <div class="control-element control-camera flex-column">
          <div class="control-box-title">相机</div>
          <div class="control-box control-camera-box">
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="cameraX">x：</label>
                <input id="cameraX" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="cameraParam.positionX">
                <span v-text="cameraParam.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="cameraY">y：</label>
                <input id="cameraY" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="cameraParam.positionY">
                <span v-text="cameraParam.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="cameraZ">Z：</label>
                <input id="cameraZ" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="cameraParam.positionZ">
                <span v-text="cameraParam.positionZ"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="control-element control-light flex-column">
          <div class="control-box-title">灯光</div>
          <div class="control-box control-light-box">
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>平行光</label>
              </div>
              <div class="box-element flex-row">
                <label for="directionalLightX">x：</label>
                <input id="directionalLightX" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="directionalLightParam.positionX">
                <span v-text="directionalLightParam.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="directionalLightY">y：</label>
                <input id="directionalLightY" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="directionalLightParam.positionY">
                <span v-text="directionalLightParam.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="directionalLightZ">Z：</label>
                <input id="directionalLightZ" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="directionalLightParam.positionZ">
                <span v-text="directionalLightParam.positionZ"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="control-element control-obj flex-column">
          <div class="control-box-title">物体</div>
          <div class="control-box control-obj-box flex-row">
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>stage</label>
              </div>
              <div class="box-element flex-row">
                <label for="stageX">x：</label>
                <input id="stageX" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.stage.param.positionX">
                <span v-text="objBox.stage.param.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="stageY">y：</label>
                <input id="stageY" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.stage.param.positionY">
                <span v-text="objBox.stage.param.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="stageZ">z：</label>
                <input id="stageZ" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.stage.param.positionZ">
                <span v-text="objBox.stage.param.positionZ"></span>
              </div>
              <div class="box-element flex-row">
                <label for="stageRotationX">rx：</label>
                <input id="stageRotationX" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.stage.param.rotationX">
                <span v-text="objBox.stage.param.rotationX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="stageRotationY">ry：</label>
                <input id="stageRotationY" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.stage.param.rotationY">
                <span v-text="objBox.stage.param.rotationY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="stageRotationZ">rz：</label>
                <input id="stageRotationZ" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.stage.param.rotationZ">
                <span v-text="objBox.stage.param.rotationZ"></span>
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>cylinder</label>
              </div>
              <div class="box-element flex-row">
                <label for="cylinderX">x：</label>
                <input id="cylinderX" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.cylinder.param.positionX">
                <span v-text="objBox.cylinder.param.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="cylinderY">y：</label>
                <input id="cylinderY" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.cylinder.param.positionY">
                <span v-text="objBox.cylinder.param.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="cylinderZ">z：</label>
                <input id="cylinderZ" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.cylinder.param.positionZ">
                <span v-text="objBox.cylinder.param.positionZ"></span>
              </div>
              <div class="box-element flex-row">
                <label for="cylinderRotationX">rx：</label>
                <input id="cylinderRotationX" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.cylinder.param.rotationX">
                <span v-text="objBox.cylinder.param.rotationX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="cylinderRotationY">ry：</label>
                <input id="cylinderRotationY" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.cylinder.param.rotationY">
                <span v-text="objBox.cylinder.param.rotationY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="cylinderRotationZ">rz：</label>
                <input id="cylinderRotationZ" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.cylinder.param.rotationZ">
                <span v-text="objBox.cylinder.param.rotationZ"></span>
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>frame1</label>
              </div>
              <div class="box-element flex-row">
                <label for="frame1X">x：</label>
                <input id="frame1X" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.frame1.param.positionX">
                <span v-text="objBox.frame1.param.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame1Y">y：</label>
                <input id="frame1Y" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.frame1.param.positionY">
                <span v-text="objBox.frame1.param.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame1Z">z：</label>
                <input id="frame1Z" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.frame1.param.positionZ">
                <span v-text="objBox.frame1.param.positionZ"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame1RotationX">rx：</label>
                <input id="frame1RotationX" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.frame1.param.rotationX">
                <span v-text="objBox.frame1.param.rotationX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame1RotationY">ry：</label>
                <input id="frame1RotationY" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.frame1.param.rotationY">
                <span v-text="objBox.frame1.param.rotationY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame1RotationZ">rz：</label>
                <input id="frame1RotationZ" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.frame1.param.rotationZ">
                <span v-text="objBox.frame1.param.rotationZ"></span>
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>frame2</label>
              </div>
              <div class="box-element flex-row">
                <label for="frame1X">x：</label>
                <input id="frame2X" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.frame2.param.positionX">
                <span v-text="objBox.frame2.param.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame2Y">y：</label>
                <input id="frame2Y" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.frame2.param.positionY">
                <span v-text="objBox.frame2.param.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame2Z">z：</label>
                <input id="frame2Z" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.frame2.param.positionZ">
                <span v-text="objBox.frame2.param.positionZ"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame2RotationX">rx：</label>
                <input id="frame2RotationX" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.frame2.param.rotationX">
                <span v-text="objBox.frame2.param.rotationX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame2RotationY">ry：</label>
                <input id="frame2RotationY" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.frame2.param.rotationY">
                <span v-text="objBox.frame2.param.rotationY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame2RotationZ">rz：</label>
                <input id="frame2RotationZ" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.frame2.param.rotationZ">
                <span v-text="objBox.frame2.param.rotationZ"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="control-element control-animation flex-column">
          <div class="control-box-title">动画</div>
          <div class="control-box control-animation-box"></div>
        </div>
      </div>
    </div>
</div>

</template>

<script>
import * as THREE from 'three'
export default {
  name: 'cpc-index',
  data () {
    let directionalLight = new THREE.DirectionalLight('white', 1.3)
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
    return {
      showControl: false, // 控制台开关
      scene: new THREE.Scene(), // 场景
      camera, // 相机
      cameraParam: { // 相机参数
        positionX: 200,
        positionY: 480,
        positionZ: 600
      },
      renderer: new THREE.WebGLRenderer({antialias: true}), // 渲染器
      lightBox: {
        ambientLight: new THREE.AmbientLight(0x606060), // 环境光
        directionalLight // 平行光
      },
      directionalLightParam: { // 平行光参数
        positionX: 317,
        positionY: 417,
        positionZ: 419
      },
      helperBox: {
        axesHelper: {helper: new THREE.AxesHelper(10000), value: '1'}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1000, 50, 'white', 'rgb(150, 150, 150)'), value: '1'}, // 网格
        cameraHelper: {helper: new THREE.CameraHelper(camera), value: '0'}, // 相机
        directionalLightHelper: {helper: new THREE.DirectionalLightHelper(directionalLight, 100), value: '1'} // 平行光辅助
      },
      objBox: {
        stage: {
          obj: '',
          param: {
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0
          }
        },
        cylinder: {
          obj: '',
          param: {
            positionX: 0,
            positionY: 100,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0
          }
        },
        frame1: {
          obj: '',
          param: {
            positionX: 170,
            positionY: 170,
            positionZ: 170,
            rotationX: 0,
            rotationY: -45,
            rotationZ: 45
          }
        },
        frame2: {
          obj: '',
          param: {
            positionX: -170,
            positionY: 170,
            positionZ: 170,
            rotationX: 0,
            rotationY: 45,
            rotationZ: -45
          }
        }
      }
    }
  },
  methods: {
    // 初始
    init () {
      this.initRender()
      this.initCamera()
      this.initObj()
      this.initLight()
      this.initHelper()
      this.renderer.render(this.scene, this.camera)
    },
    // 初始渲染器
    initRender () {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs['three-canvas'].appendChild(this.renderer.domElement)
      this.renderer.setClearColor('rgb(35, 11, 39)')
    },
    // 光源
    initLight () {
      this.scene.add(this.lightBox.ambientLight)
      this.lightBox.directionalLight.position.set(
        this.directionalLightParam.positionX,
        this.directionalLightParam.positionY,
        this.directionalLightParam.positionZ
      )
      this.scene.add(this.lightBox.directionalLight)
    },
    // 初始相机
    initCamera () {
      this.camera.position.x = this.cameraParam.positionX
      this.camera.position.y = this.cameraParam.positionY
      this.camera.position.z = this.cameraParam.positionZ
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      this.camera.lookAt(new THREE.Vector3(0, 0, 0))
    },
    // 初始物体
    initObj () {
      // 初始立方台
      let stageGeometry = new THREE.BoxGeometry(200, 200, 200, 4, 4)
      let stageMaterial = new THREE.MeshLambertMaterial({color: 'rgb(30, 30, 30)'})
      this.objBox.stage.obj = new THREE.Mesh(stageGeometry, stageMaterial)
      this.objBox.stage.obj.position.set(
        this.objBox.stage.param.positionX,
        this.objBox.stage.param.positionY,
        this.objBox.stage.param.positionZ
      )
      this.objBox.stage.obj.rotation.x = this.objBox.stage.param.rotationX * Math.PI / 180
      this.objBox.stage.obj.rotation.y = this.objBox.stage.param.rotationY * Math.PI / 180
      this.objBox.stage.obj.rotation.z = this.objBox.stage.param.rotationZ * Math.PI / 180
      this.scene.add(this.objBox.stage.obj)
      // 初始圆柱台
      let cylinderGeometry = new THREE.CylinderGeometry(50, 50, 20, 32)
      let cylinderMaterial = new THREE.MeshPhongMaterial({color: 0x4D4D4D})
      this.objBox.cylinder.obj = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
      this.objBox.cylinder.obj.position.set(
        this.objBox.cylinder.param.positionX,
        this.objBox.cylinder.param.positionY,
        this.objBox.cylinder.param.positionZ
      )
      this.objBox.cylinder.obj.rotation.x = this.objBox.cylinder.param.rotationX * Math.PI / 180
      this.objBox.cylinder.obj.rotation.y = this.objBox.cylinder.param.rotationY * Math.PI / 180
      this.objBox.cylinder.obj.rotation.z = this.objBox.cylinder.param.rotationZ * Math.PI / 180
      this.scene.add(this.objBox.cylinder.obj)
      // 展示卡
      let frameGeometry1 = new THREE.BoxGeometry(20, 100, 200, 4, 4)
      let frameMaterial1 = new THREE.MeshNormalMaterial({color: 'rgb(40, 25, 5)'})
      this.objBox.frame1.obj = new THREE.Mesh(frameGeometry1, frameMaterial1)
      this.scene.add(this.objBox.frame1.obj)
      this.objBox.frame1.obj.position.set(
        this.objBox.frame1.param.positionX,
        this.objBox.frame1.param.positionY,
        this.objBox.frame1.param.positionZ
      )
      this.objBox.frame1.obj.rotation.x = this.objBox.frame1.param.rotationX * Math.PI / 180
      this.objBox.frame1.obj.rotation.y = this.objBox.frame1.param.rotationY * Math.PI / 180
      this.objBox.frame1.obj.rotation.z = this.objBox.frame1.param.rotationZ * Math.PI / 180
      this.scene.add(this.objBox.frame1.obj)
      let frameGeometry2 = new THREE.BoxGeometry(20, 100, 200, 4, 4)
      let frameMaterial2 = new THREE.MeshNormalMaterial({color: 'rgb(40, 25, 5)'})
      this.objBox.frame2.obj = new THREE.Mesh(frameGeometry2, frameMaterial2)
      this.scene.add(this.objBox.frame2.obj)
      this.objBox.frame2.obj.position.set(
        this.objBox.frame2.param.positionX,
        this.objBox.frame2.param.positionY,
        this.objBox.frame2.param.positionZ
      )
      this.objBox.frame2.obj.rotation.x = this.objBox.frame2.param.rotationX * Math.PI / 180
      this.objBox.frame2.obj.rotation.y = this.objBox.frame2.param.rotationY * Math.PI / 180
      this.objBox.frame2.obj.rotation.z = this.objBox.frame2.param.rotationZ * Math.PI / 180
      this.scene.add(this.objBox.frame2.obj)
    },
    // 初始辅助
    initHelper () {
      this.scene.add(this.helperBox.axesHelper.helper)
      this.scene.add(this.helperBox.gridHelper.helper)
      // this.scene.add(this.helperBox.cameraHelper.helper)
      this.scene.add(this.helperBox.directionalLightHelper.helper)
    },
    // 动画
    animation () {},
    // 加载场景
    updateRenderer () {
      this.renderer.render(this.scene, this.camera)
    }

  },
  mounted () {
    this.init()
  },
  watch: {
    'helperBox.axesHelper.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.helperBox.axesHelper.helper)
        this.updateRenderer()
      } else {
        this.scene.remove(this.helperBox.axesHelper.helper)
        this.updateRenderer()
      }
    },
    'helperBox.gridHelper.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.helperBox.gridHelper.helper)
        this.updateRenderer()
      } else {
        this.scene.remove(this.helperBox.gridHelper.helper)
        this.updateRenderer()
      }
    },
    'helperBox.cameraHelper.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.helperBox.cameraHelper.helper)
        this.updateRenderer()
      } else {
        this.scene.remove(this.helperBox.cameraHelper.helper)
        this.updateRenderer()
      }
    },
    'helperBox.directionalLightHelper.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.helperBox.directionalLightHelper.helper)
        this.updateRenderer()
      } else {
        this.scene.remove(this.helperBox.directionalLightHelper.helper)
        this.updateRenderer()
      }
    },
    'cameraParam': {
      handler (newValue, oldValue) {
        this.camera.position.x = newValue.positionX
        this.camera.position.y = newValue.positionY
        this.camera.position.z = newValue.positionZ
        this.camera.lookAt(new THREE.Vector3(0, 0, 0))
        this.updateRenderer()
      },
      deep: true
    },
    'directionalLightParam': {
      handler (newValue, oldValue) {
        this.lightBox.directionalLight.position.set(
          newValue.positionX,
          newValue.positionY,
          newValue.positionZ
        )
        this.updateRenderer()
      },
      deep: true
    },
    'objBox.stage.param': {
      handler (newValue, oldValue) {
        this.objBox.stage.obj.position.set(
          newValue.positionX,
          newValue.positionY,
          newValue.positionZ
        )
        this.objBox.stage.obj.rotation.x = newValue.rotationX * Math.PI / 180
        this.objBox.stage.obj.rotation.y = newValue.rotationY * Math.PI / 180
        this.objBox.stage.obj.rotation.z = newValue.rotationZ * Math.PI / 180
        this.updateRenderer()
      },
      deep: true
    },
    'objBox.cylinder.param': {
      handler (newValue, oldValue) {
        this.objBox.cylinder.obj.position.set(
          newValue.positionX,
          newValue.positionY,
          newValue.positionZ
        )
        this.objBox.cylinder.obj.rotation.x = newValue.rotationX * Math.PI / 180
        this.objBox.cylinder.obj.rotation.y = newValue.rotationY * Math.PI / 180
        this.objBox.cylinder.obj.rotation.z = newValue.rotationZ * Math.PI / 180
        this.updateRenderer()
      },
      deep: true
    },
    'objBox.frame1.param': {
      handler (newValue, oldValue) {
        this.objBox.frame1.obj.position.set(
          newValue.positionX,
          newValue.positionY,
          newValue.positionZ
        )
        this.objBox.frame1.obj.rotation.x = newValue.rotationX * Math.PI / 180
        this.objBox.frame1.obj.rotation.y = newValue.rotationY * Math.PI / 180
        this.objBox.frame1.obj.rotation.z = newValue.rotationZ * Math.PI / 180
        this.updateRenderer()
      },
      deep: true
    },
    'objBox.frame2.param': {
      handler (newValue, oldValue) {
        this.objBox.frame2.obj.position.set(
          newValue.positionX,
          newValue.positionY,
          newValue.positionZ
        )
        this.objBox.frame2.obj.rotation.x = newValue.rotationX * Math.PI / 180
        this.objBox.frame2.obj.rotation.y = newValue.rotationY * Math.PI / 180
        this.objBox.frame2.obj.rotation.z = newValue.rotationZ * Math.PI / 180
        this.updateRenderer()
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
.cpc-index {
  > .three-canvas {
      width: 100%;
      height: 100%;
      > canvas {
          width: 100%;
          height: 100%;
      }
  }
  > .cpc-index-control {
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: white;
    box-shadow: 0 0 4px rgb(235, 182, 255);
    > .control-title {
      font-size: 22px;
      margin: 10px;
    }
    > .control-container {
      > .control-element {
        > .control-box-title {
          margin: 5px;
        }
        > .control-box {
          margin: 5px;
          > .box-container {
            padding: 5px;
            margin: 0 5px;
            border: 1px solid rgba(255, 255, 255, 0.659);
            border-radius: 3px;
            > .box-element {
              margin: 5px 10px;
              > label {}
              > span {
                display: inline-block;
                width: 40px;
                text-align: center;
              }
              > .switch-type {
                width: 20px;
              }
              > .range-type {
                width: 150px;
              }
            }
          }
        }
      }
    }
  }
}

</style>
