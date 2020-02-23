<template>
<div class="cpc-index">
    <div id="three-canvas" class="three-canvas" ref="three-canvas">
    </div>
    <div class="cpc-index-control flex-column-center animation" :class="{'cpc-index-control-hide': showControl}">
      <div class="control-title animation" @click="rollControl" v-text="mmdBox.loading"></div>
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
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="gridHelper">聚光灯：</label>
                <input id="gridHelper" class="switch-type" type="range" min="0" max="1" step="1" v-model="helperBox.spotLightHelper.value">
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="pointLight1Helper">点光灯1：</label>
                <input id="pointLight1Helper" class="switch-type" type="range" min="0" max="1" step="1" v-model="helperBox.pointLight1Helper.value">
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="pointLight2Helper">点光灯2：</label>
                <input id="pointLight2Helper" class="switch-type" type="range" min="0" max="1" step="1" v-model="helperBox.pointLight2Helper.value">
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="pointLight3Helper">点光灯3：</label>
                <input id="pointLight3Helper" class="switch-type" type="range" min="0" max="1" step="1" v-model="helperBox.pointLight3Helper.value">
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
          <div class="control-box control-light-box flex-row">
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>环境光</label>
              </div>
              <div class="box-element flex-row">
                <label for="ambientLightSwitch">开关：</label>
                <input id="ambientLightSwitch" class="switch-type" type="range" min="0" max="1" step="1" v-model="lightBox.ambientLight.value">
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>平行光</label>
              </div>
              <div class="box-element flex-row">
                <label for="directionalLightSwitch">开关：</label>
                <input id="directionalLightSwitch" class="switch-type" type="range" min="0" max="1" step="1" v-model="lightBox.directionalLight.value">
              </div>
              <div class="box-element flex-row">
                <label for="directionalLightX">x：</label>
                <input id="directionalLightX" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.directionalLight.param.positionX">
                <span v-text="lightBox.directionalLight.param.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="directionalLightY">y：</label>
                <input id="directionalLightY" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.directionalLight.param.positionY">
                <span v-text="lightBox.directionalLight.param.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="directionalLightZ">Z：</label>
                <input id="directionalLightZ" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.directionalLight.param.positionZ">
                <span v-text="lightBox.directionalLight.param.positionZ"></span>
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>聚光灯</label>
              </div>
              <div class="box-element flex-row">
                <label for="spotLightSwitch">开关：</label>
                <input id="spotLightSwitch" class="switch-type" type="range" min="0" max="1" step="1" v-model="lightBox.spotLight.value">
              </div>
              <div class="box-element flex-row">
                <label for="spotLightX">x：</label>
                <input id="spotLightX" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.spotLight.param.positionX">
                <span v-text="lightBox.spotLight.param.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="spotLightY">y：</label>
                <input id="spotLightY" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.spotLight.param.positionY">
                <span v-text="lightBox.spotLight.param.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="spotLightZ">Z：</label>
                <input id="spotLightZ" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.spotLight.param.positionZ">
                <span v-text="lightBox.spotLight.param.positionZ"></span>
              </div>
               <div class="box-element flex-row">
                <label for="spotLightRotationX">rx：</label>
                <input id="spotLightRotationX" class="range-type" type="range" min="-180" max="180" step="1" v-model="lightBox.spotLight.param.rotationX">
                <span v-text="lightBox.spotLight.param.rotationX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="spotLightRotationY">ry：</label>
                <input id="spotLightRotationY" class="range-type" type="range" min="-180" max="180" step="1" v-model="lightBox.spotLight.param.rotationY">
                <span v-text="lightBox.spotLight.param.rotationY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="spotLightRotationZ">rz：</label>
                <input id="spotLightRotationZ" class="range-type" type="range" min="-180" max="180" step="1" v-model="lightBox.spotLight.param.rotationZ">
                <span v-text="lightBox.spotLight.param.rotationZ"></span>
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>点光灯1</label>
              </div>
              <div class="box-element flex-row">
                <label for="pointLight1Switch">开关：</label>
                <input id="pointLight1Switch" class="switch-type" type="range" min="0" max="1" step="1" v-model="lightBox.pointLight1.value">
              </div>
              <div class="box-element flex-row">
                <label for="pointLight1X">x：</label>
                <input id="pointLight1X" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.pointLight1.param.positionX">
                <span v-text="lightBox.pointLight1.param.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="pointLight1Y">y：</label>
                <input id="pointLight1Y" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.pointLight1.param.positionY">
                <span v-text="lightBox.pointLight1.param.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="pointLight1Z">Z：</label>
                <input id="pointLight1Z" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.pointLight1.param.positionZ">
                <span v-text="lightBox.pointLight1.param.positionZ"></span>
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>点光灯2</label>
              </div>
              <div class="box-element flex-row">
                <label for="pointLight2Switch">开关：</label>
                <input id="pointLight2Switch" class="switch-type" type="range" min="0" max="1" step="1" v-model="lightBox.pointLight2.value">
              </div>
              <div class="box-element flex-row">
                <label for="pointLight2X">x：</label>
                <input id="pointLight2X" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.pointLight2.param.positionX">
                <span v-text="lightBox.pointLight2.param.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="pointLight2Y">y：</label>
                <input id="pointLight2Y" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.pointLight2.param.positionY">
                <span v-text="lightBox.pointLight2.param.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="pointLight2Z">Z：</label>
                <input id="pointLight2Z" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.pointLight2.param.positionZ">
                <span v-text="lightBox.pointLight2.param.positionZ"></span>
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>点光灯3</label>
              </div>
              <div class="box-element flex-row">
                <label for="pointLight3Switch">开关：</label>
                <input id="pointLight3Switch" class="switch-type" type="range" min="0" max="1" step="1" v-model="lightBox.pointLight3.value">
              </div>
              <div class="box-element flex-row">
                <label for="pointLight3X">x：</label>
                <input id="pointLight3X" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.pointLight3.param.positionX">
                <span v-text="lightBox.pointLight3.param.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="pointLight3Y">y：</label>
                <input id="pointLight3Y" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.pointLight3.param.positionY">
                <span v-text="lightBox.pointLight3.param.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="pointLight3Z">Z：</label>
                <input id="pointLight3Z" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="lightBox.pointLight3.param.positionZ">
                <span v-text="lightBox.pointLight3.param.positionZ"></span>
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
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label>frame3</label>
              </div>
              <div class="box-element flex-row">
                <label for="frame1X">x：</label>
                <input id="frame3X" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.frame3.param.positionX">
                <span v-text="objBox.frame3.param.positionX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame3Y">y：</label>
                <input id="frame3Y" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.frame3.param.positionY">
                <span v-text="objBox.frame3.param.positionY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame3Z">z：</label>
                <input id="frame3Z" class="range-type" type="range" min="-1000" max="1000" step="1" v-model="objBox.frame3.param.positionZ">
                <span v-text="objBox.frame3.param.positionZ"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame3RotationX">rx：</label>
                <input id="frame3RotationX" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.frame3.param.rotationX">
                <span v-text="objBox.frame3.param.rotationX"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame3RotationY">ry：</label>
                <input id="frame3RotationY" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.frame3.param.rotationY">
                <span v-text="objBox.frame3.param.rotationY"></span>
              </div>
              <div class="box-element flex-row">
                <label for="frame3RotationZ">rz：</label>
                <input id="frame3RotationZ" class="range-type" type="range" min="-180" max="180" step="1" v-model="objBox.frame3.param.rotationZ">
                <span v-text="objBox.frame3.param.rotationZ"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="control-element control-animation flex-column">
          <div class="control-box-title">动画</div>
          <div class="control-box control-animation-box flex-row">
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="animation">相机：</label>
                <input id="animation" class="switch-type" type="range" min="0" max="1" step="1" v-model="animationBox.camera.value">
              </div>
            </div>
            <div class="box-container flex-column">
              <div class="box-element flex-row">
                <label for="MMDanimation">模型：</label>
                <input id="MMDanimation" class="switch-type" type="range" min="0" max="1" step="1" v-model="mmdBox.value">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

</template>

<script>
import * as THREE from 'three'
import {MMDLoader} from '../../node_modules/three/examples/jsm/loaders/MMDLoader'
import {MMDAnimationHelper} from '../../node_modules/three/examples/jsm/animation/MMDAnimationHelper'
export default {
  name: 'cpc-index',
  data () {
    let directionalLight = new THREE.DirectionalLight('white', 0.6)
    let spotLight = new THREE.SpotLight(0xffffff, 0.6)
    let pointLight1 = new THREE.PointLight('rgb(206, 255, 215)', 1.5, 300)
    let pointLight2 = new THREE.PointLight('rgb(255, 206, 206)', 1.5, 300)
    let pointLight3 = new THREE.PointLight('rgb(206, 211, 255)', 1.5, 300)
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
    return {
      showControl: true, // 控制台开关
      scene: new THREE.Scene(), // 场景
      camera, // 相机
      cameraParam: { // 相机参数
        positionX: 400,
        positionY: 450,
        positionZ: 0
      },
      renderer: new THREE.WebGLRenderer({antialias: true}), // 渲染器
      clock: new THREE.Clock(), // 场景时钟
      lightBox: {
        ambientLight: {light: new THREE.AmbientLight('rgb(30, 5, 35)'), value: '1'}, // 环境光
        directionalLight: {// 平行光
          light: directionalLight,
          value: '1',
          param: {
            positionX: 0,
            positionY: 320,
            positionZ: 0
          }
        },
        spotLight: {// 聚光灯
          light: spotLight,
          value: '1',
          param: {
            positionX: 0,
            positionY: 300,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 180
          }
        },
        pointLight1: {// 点光灯1
          light: pointLight1,
          value: '1',
          param: {
            positionX: 220,
            positionY: 270,
            positionZ: 230
          }
        },
        pointLight2: {// 点光灯2
          light: pointLight2,
          value: '1',
          param: {
            positionX: -220,
            positionY: 270,
            positionZ: 230
          }
        },
        pointLight3: {// 点光灯3
          light: pointLight3,
          value: '1',
          param: {
            positionX: 0,
            positionY: 270,
            positionZ: -230
          }
        }
      },
      helperBox: {
        axesHelper: {helper: new THREE.AxesHelper(10000), value: '1'}, // 坐标轴
        gridHelper: {helper: new THREE.GridHelper(1000, 50, 'white', 'rgb(150, 150, 150)'), value: '1'}, // 网格
        cameraHelper: {helper: new THREE.CameraHelper(camera), value: '0'}, // 相机
        directionalLightHelper: {helper: new THREE.DirectionalLightHelper(directionalLight, 100), value: '1'}, // 平行光辅助
        spotLightHelper: {helper: new THREE.SpotLightHelper(spotLight), value: '1'}, // 聚光灯
        pointLight1Helper: {helper: new THREE.PointLightHelper(pointLight1, 50), value: '1'}, // 点光灯1
        pointLight2Helper: {helper: new THREE.PointLightHelper(pointLight2, 50), value: '1'}, // 点光灯2
        pointLight3Helper: {helper: new THREE.PointLightHelper(pointLight3, 50), value: '1'}, // 点光灯3
        MMDAnimationHelper: {helper: new MMDAnimationHelper(), value: '0'}
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
            positionY: 165,
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
            rotationY: -30,
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
            rotationY: 30,
            rotationZ: -45
          }
        },
        frame3: {
          obj: '',
          param: {
            positionX: 0,
            positionY: 170,
            positionZ: -170,
            rotationX: 45,
            rotationY: 0,
            rotationZ: 0
          }
        }
      },
      animationBox: { // 动画box
        camera: {
          animation: '',
          animationList: [],
          r: 500,
          step: 0,
          speed: 1,
          value: '1'
        }
      },
      mmdBox: {
        miku: '',
        loading: '控制台',
        animation: '',
        value: '1'
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
      this.initMMD()
      this.initHelper()
      this.renderer.render(this.scene, this.camera)
      this.initAnimation()
      this.clock.start()
    },
    // 初始渲染器
    initRender () {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs['three-canvas'].appendChild(this.renderer.domElement)
      this.renderer.setClearColor('rgb(0, 0, 0)')
    },
    // 光源
    initLight () {
      this.scene.add(this.lightBox.ambientLight.light)

      this.lightBox.directionalLight.light.position.set(
        this.lightBox.directionalLight.param.positionX,
        this.lightBox.directionalLight.param.positionY,
        this.lightBox.directionalLight.param.positionZ
      )
      this.scene.add(this.lightBox.directionalLight.light)

      this.lightBox.spotLight.light.position.set(
        this.lightBox.spotLight.param.positionX,
        this.lightBox.spotLight.param.positionY,
        this.lightBox.spotLight.param.positionZ
      )
      this.lightBox.spotLight.light.rotation.x = this.lightBox.spotLight.param.rotationX * Math.PI / 180
      this.lightBox.spotLight.light.rotation.y = this.lightBox.spotLight.param.rotationY * Math.PI / 180
      this.lightBox.spotLight.light.rotation.z = this.lightBox.spotLight.param.rotationZ * Math.PI / 180
      this.scene.add(this.lightBox.spotLight.light)

      this.lightBox.pointLight1.light.position.set(
        this.lightBox.pointLight1.param.positionX,
        this.lightBox.pointLight1.param.positionY,
        this.lightBox.pointLight1.param.positionZ
      )
      this.scene.add(this.lightBox.pointLight1.light)

      this.lightBox.pointLight2.light.position.set(
        this.lightBox.pointLight2.param.positionX,
        this.lightBox.pointLight2.param.positionY,
        this.lightBox.pointLight2.param.positionZ
      )
      this.scene.add(this.lightBox.pointLight2.light)

      this.lightBox.pointLight3.light.position.set(
        this.lightBox.pointLight3.param.positionX,
        this.lightBox.pointLight3.param.positionY,
        this.lightBox.pointLight3.param.positionZ
      )
      this.scene.add(this.lightBox.pointLight3.light)
    },
    // 初始相机
    initCamera () {
      this.camera.position.x = this.cameraParam.positionX
      this.camera.position.y = this.cameraParam.positionY
      this.camera.position.z = this.cameraParam.positionZ
      this.camera.up.x = 0
      this.camera.up.y = 1
      this.camera.up.z = 0
      this.camera.lookAt(new THREE.Vector3(0, 200, 0))
    },
    // 初始物体
    initObj () {
      // 初始立方台
      let stageGeometry = new THREE.BoxGeometry(300, 300, 300, 4, 4)
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
      let cylinderGeometry = new THREE.CylinderGeometry(120, 50, 20, 32)
      let cylinderMaterial = new THREE.MeshPhongMaterial({color: 'rgb(153, 153, 153)'})
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
      let texture1 = new THREE.TextureLoader().load('static/index/1.jpg')
      texture1.wrapS = THREE.RepeatWrapping
      texture1.wrapT = THREE.RepeatWrapping
      texture1.repeat.set(1, 1)
      let frameGeometry1 = new THREE.BoxGeometry(20, 185, 240, 4, 4)
      let frameMaterial1 = new THREE.MeshStandardMaterial({map: texture1})
      this.objBox.frame1.obj = new THREE.Mesh(frameGeometry1, frameMaterial1)
      this.objBox.frame1.obj.position.set(
        this.objBox.frame1.param.positionX,
        this.objBox.frame1.param.positionY,
        this.objBox.frame1.param.positionZ
      )
      this.objBox.frame1.obj.rotation.x = this.objBox.frame1.param.rotationX * Math.PI / 180
      this.objBox.frame1.obj.rotation.y = this.objBox.frame1.param.rotationY * Math.PI / 180
      this.objBox.frame1.obj.rotation.z = this.objBox.frame1.param.rotationZ * Math.PI / 180
      this.scene.add(this.objBox.frame1.obj)

      let texture2 = new THREE.TextureLoader().load('static/index/2.jpg')
      texture2.wrapS = THREE.RepeatWrapping
      texture2.wrapT = THREE.RepeatWrapping
      texture2.repeat.set(1, 1)
      let frameGeometry2 = new THREE.BoxGeometry(20, 185, 240, 4, 4)
      let frameMaterial2 = new THREE.MeshStandardMaterial({map: texture2})
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

      let texture3 = new THREE.TextureLoader().load('static/index/3.jpg')
      texture3.wrapS = THREE.RepeatWrapping
      texture3.wrapT = THREE.RepeatWrapping
      texture3.repeat.set(1, 1)
      let frameGeometry3 = new THREE.BoxGeometry(240, 185, 20, 4, 4)
      let frameMaterial3 = new THREE.MeshStandardMaterial({map: texture3})
      this.objBox.frame3.obj = new THREE.Mesh(frameGeometry3, frameMaterial3)
      this.scene.add(this.objBox.frame3.obj)
      this.objBox.frame3.obj.position.set(
        this.objBox.frame3.param.positionX,
        this.objBox.frame3.param.positionY,
        this.objBox.frame3.param.positionZ
      )
      this.objBox.frame3.obj.rotation.x = this.objBox.frame3.param.rotationX * Math.PI / 180
      this.objBox.frame3.obj.rotation.y = this.objBox.frame3.param.rotationY * Math.PI / 180
      this.objBox.frame3.obj.rotation.z = this.objBox.frame3.param.rotationZ * Math.PI / 180
      this.scene.add(this.objBox.frame3.obj)
    },
    // 初始辅助
    initHelper () {
      this.scene.add(this.helperBox.axesHelper.helper)
      this.scene.add(this.helperBox.gridHelper.helper)
      // this.scene.add(this.helperBox.cameraHelper.helper)
      this.scene.add(this.helperBox.directionalLightHelper.helper)
      this.scene.add(this.helperBox.spotLightHelper.helper)
      this.scene.add(this.helperBox.pointLight1Helper.helper)
      this.scene.add(this.helperBox.pointLight2Helper.helper)
      this.scene.add(this.helperBox.pointLight3Helper.helper)
    },
    // 动画
    initAnimation () {
      let component = this
      this.animationBox.camera.animation = setInterval(() => {
        component.cameraAnimation()
      }, 1000 / 30)
      this.mmdBox.animation = setInterval(() => {
        component.MMDanimation()
      }, 1000 / 60)
    },
    // 加载mmd
    initMMD () {
      let component = this
      let loader = new MMDLoader()
      loader.loadWithAnimation(
        'static/mmd/model/TDA Vintage Dress Miku chibi/TDA Vintage chibi ver.pmx',
        'static/mmd/dance/RomeoAndCinderella.vmd',
        (mmd) => {
          component.mmdBox.miku = mmd.mesh
          component.mmdBox.miku.scale = new THREE.Vector3(7, 7, 7)
          component.mmdBox.miku.position.y = 180

          component.helperBox.MMDAnimationHelper.helper.add(component.mmdBox.miku, {
            animation: mmd.animation,
            physics: true
          })

          component.scene.add(component.mmdBox.miku)
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded')
          component.mmdBox.loading = parseInt(xhr.loaded / xhr.total * 100) + '%'
          if (component.mmdBox.loading === '100%') {
            component.mmdBox.loading = '下载完成！请等待贴图载入...'
            setTimeout(() => {
              component.mmdBox.loading = '控制台'
            }, 3000)
          }
        }
      )
    },
    // 加载场景
    updateRenderer () {
      this.renderer.render(this.scene, this.camera)
    },
    // 相机动画
    cameraAnimation () {
      this.animationBox.camera.step += this.animationBox.camera.speed
      if (this.animationBox.camera.step > this.animationBox.camera.animationList.length - 1) {
        this.animationBox.camera.step = 0 + this.animationBox.camera.step - (this.animationBox.camera.animationList.length - 1)
      }
      this.cameraParam.positionX = this.animationBox.camera.animationList[this.animationBox.camera.step].x
      this.cameraParam.positionZ = this.animationBox.camera.animationList[this.animationBox.camera.step].z
    },
    // mmd动画
    MMDanimation () {
      this.helperBox.MMDAnimationHelper.helper.update(this.clock.getDelta())
      this.updateRenderer()
    },
    // 滚动控制台
    rollControl () {
      this.showControl = !this.showControl
    }
  },
  created () {
    // 率先计算相机轨迹
    let r = this.animationBox.camera.r
    let x = -r
    let z = 0
    let tempList = []
    let temp = {}
    for (; x <= r; x += 1) {
      z = Math.round(Math.sqrt(r ** 2 - x ** 2))
      temp.x = x
      temp.z = z
      tempList.push(temp)
      temp = {}
    }
    x = r
    for (; x >= -r; x -= 1) {
      z = Math.round(Math.sqrt(r ** 2 - x ** 2)) * -1
      temp.x = x
      temp.z = z
      tempList.push(temp)
      temp = {}
    }
    console.log(tempList)
    this.animationBox.camera.animationList = tempList
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
    'helperBox.spotLightHelper.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.helperBox.spotLightHelper.helper)
        this.updateRenderer()
      } else {
        this.scene.remove(this.helperBox.spotLightHelper.helper)
        this.updateRenderer()
      }
    },
    'helperBox.pointLight1Helper.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.helperBox.pointLight1Helper.helper)
        this.updateRenderer()
      } else {
        this.scene.remove(this.helperBox.pointLight1Helper.helper)
        this.updateRenderer()
      }
    },
    'helperBox.pointLight2Helper.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.helperBox.pointLight2Helper.helper)
        this.updateRenderer()
      } else {
        this.scene.remove(this.helperBox.pointLight2Helper.helper)
        this.updateRenderer()
      }
    },
    'helperBox.pointLight3Helper.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.helperBox.pointLight3Helper.helper)
        this.updateRenderer()
      } else {
        this.scene.remove(this.helperBox.pointLight3Helper.helper)
        this.updateRenderer()
      }
    },
    'lightBox.ambientLight.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.lightBox.ambientLight.light)
        this.updateRenderer()
      } else {
        this.scene.remove(this.lightBox.ambientLight.light)
        this.updateRenderer()
      }
    },
    'lightBox.directionalLight.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.lightBox.directionalLight.light)
        this.updateRenderer()
      } else {
        this.scene.remove(this.lightBox.directionalLight.light)
        this.updateRenderer()
      }
    },
    'lightBox.spotLight.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.lightBox.spotLight.light)
        this.updateRenderer()
      } else {
        this.scene.remove(this.lightBox.spotLight.light)
        this.updateRenderer()
      }
    },
    'lightBox.pointLight1.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.lightBox.pointLight1.light)
        this.updateRenderer()
      } else {
        this.scene.remove(this.lightBox.pointLight1.light)
        this.updateRenderer()
      }
    },
    'lightBox.pointLight2.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.lightBox.pointLight2.light)
        this.updateRenderer()
      } else {
        this.scene.remove(this.lightBox.pointLight2.light)
        this.updateRenderer()
      }
    },
    'lightBox.pointLight3.value' (newValue, oldValue) {
      if (newValue === '1') {
        this.scene.add(this.lightBox.pointLight3.light)
        this.updateRenderer()
      } else {
        this.scene.remove(this.lightBox.pointLight3.light)
        this.updateRenderer()
      }
    },
    'cameraParam': {
      handler (newValue, oldValue) {
        this.camera.position.x = newValue.positionX
        this.camera.position.y = newValue.positionY
        this.camera.position.z = newValue.positionZ
        this.camera.lookAt(new THREE.Vector3(0, 200, 0))
        this.updateRenderer()
      },
      deep: true
    },
    'lightBox.directionalLight.param': {
      handler (newValue, oldValue) {
        this.lightBox.directionalLight.light.position.set(
          newValue.positionX,
          newValue.positionY,
          newValue.positionZ
        )
        this.updateRenderer()
      },
      deep: true
    },
    'lightBox.spotLight.param': {
      handler (newValue, oldValue) {
        this.lightBox.spotLight.light.position.set(
          newValue.positionX,
          newValue.positionY,
          newValue.positionZ
        )
        this.lightBox.spotLight.light.rotation.x = newValue.rotationX * Math.PI / 180
        this.lightBox.spotLight.light.rotation.y = newValue.rotationY * Math.PI / 180
        this.lightBox.spotLight.light.rotation.z = newValue.rotationZ * Math.PI / 180
        this.updateRenderer()
      },
      deep: true
    },
    'lightBox.pointLight1.param': {
      handler (newValue, oldValue) {
        this.lightBox.pointLight1.light.position.set(
          newValue.positionX,
          newValue.positionY,
          newValue.positionZ
        )
        this.updateRenderer()
      },
      deep: true
    },
    'lightBox.pointLight2.param': {
      handler (newValue, oldValue) {
        this.lightBox.pointLight2.light.position.set(
          newValue.positionX,
          newValue.positionY,
          newValue.positionZ
        )
        this.updateRenderer()
      },
      deep: true
    },
    'lightBox.pointLight3.param': {
      handler (newValue, oldValue) {
        this.lightBox.pointLight3.light.position.set(
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
    },
    'objBox.frame3.param': {
      handler (newValue, oldValue) {
        this.objBox.frame3.obj.position.set(
          newValue.positionX,
          newValue.positionY,
          newValue.positionZ
        )
        this.objBox.frame3.obj.rotation.x = newValue.rotationX * Math.PI / 180
        this.objBox.frame3.obj.rotation.y = newValue.rotationY * Math.PI / 180
        this.objBox.frame3.obj.rotation.z = newValue.rotationZ * Math.PI / 180
        this.updateRenderer()
      },
      deep: true
    },
    'animationBox.camera.value' (newValue, oldValue) {
      let component = this
      if (newValue === '1') {
        this.animationBox.camera.animation = setInterval(() => {
          component.cameraAnimation()
        }, 1000 / 30)
      } else {
        clearInterval(this.animationBox.camera.animation)
      }
    },
    'mmdBox.value' (newValue, oldValue) {
      let component = this
      if (newValue === '1') {
        this.mmdBox.animation = setInterval(() => {
          component.MMDanimation()
        }, 1000 / 30)
      } else {
        clearInterval(this.mmdBox.animation)
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.animationBox.camera.animation)
    clearInterval(this.mmdBox.animation)
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
    top: 1%;
    left: 2%;
    width: 98%;
    height: 98%;
    margin-left: -1%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: white;
    box-shadow: 0 0 4px rgb(235, 182, 255);
    > .control-title {
      font-size: 22px;
      margin: 10px;
      cursor: pointer;
      &:hover {
        color:rgb(205, 66, 255);
        text-shadow: 0 0 4px rgb(255, 255, 255);
      }
    }
    > .control-container {
      overflow: hidden;
      // &:hover {
      //   overflow: auto;
      // }
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
  > .cpc-index-control-hide {
    height: 50px;
  }
}

</style>
