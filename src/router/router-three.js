import InitThree from '@/views/three/base/initThree'
import WatchKeyframe from '@/views/three/base/watchKeyframe'
import InitObj from '@/views/three/base/initObj'
import Gui from '@/views/three/base/gui'

import CameraFollowMouse from '@/views/three/camera/cameraFollowMouse'
import AutoRotateCamera from '@/views/three/camera/autoRotateCamera'
import DragCamera from '@/views/three/camera/dragCamera'

import ControlObj from '@/views/three/geometry/controlObj'
import SimpleGeometry from '@/views/three/geometry/simpleGeometry'
import ComplexGeometry from '@/views/three/geometry/complexGeometry'
import PlaneGeometry from '@/views/three/geometry/planeGeometry'
import PipeGeometry from '@/views/three/geometry/pipeGeometry'
import EdgesGeometry from '@/views/three/geometry/edgesGeometry'
import ExtrudeGeometry from '@/views/three/geometry/extrudeGeometry'
import LatheGeometry from '@/views/three/geometry/latheGeometry'
import ShapeGeometry from '@/views/three/geometry/shapeGeometry'
import TextGeometry from '@/views/three/geometry/textGeometry'
import WireframeGeometry from '@/views/three/geometry/wireframeGeometry'
import BufferGeometry from '@/views/three/geometry/bufferGeometry'

import AmbientLight from '@/views/three/light/ambientLight'
import DirectionalLight from '@/views/three/light/directionalLight'
import HemisphereLight from '@/views/three/light/hemisphereLight'
import PointLight from '@/views/three/light/pointLight'
import RectAreaLight from '@/views/three/light/rectAreaLight'
import SpotLight from '@/views/three/light/spotLight'

import UsageMaterial from '@/views/three/material/usageMaterial'

import LoadingManager from '@/views/three/loader/loadingManager'
import OBJLoader from '@/views/three/loader/OBJLoader'

export default
[
  {
    path: '/three/initThree',
    name: 'initThree',
    component: InitThree
  },
  {
    path: '/three/watchKeyframe',
    name: 'watchKeyframe',
    component: WatchKeyframe
  },
  {
    path: '/three/gui',
    name: 'gui',
    component: Gui
  },
  {
    path: '/three/initObj',
    name: 'initObj',
    component: InitObj
  },
  {
    path: '/three/cameraFollowMouse',
    name: 'cameraFollowMouse',
    component: CameraFollowMouse
  },
  {
    path: '/three/autoRotateCamera',
    name: 'autoRotateCamera',
    component: AutoRotateCamera
  },
  {
    path: '/three/simpleGeometry',
    name: 'simpleGeometry',
    component: SimpleGeometry
  },
  {
    path: '/three/controlObj',
    name: 'controlObj',
    component: ControlObj
  },
  {
    path: '/three/dragCamera',
    name: 'dragCamera',
    component: DragCamera
  },
  {
    path: '/three/complexGeometry',
    name: 'complexGeometry',
    component: ComplexGeometry
  },
  {
    path: '/three/planeGeometry',
    name: 'planeGeometry',
    component: PlaneGeometry
  },
  {
    path: '/three/pipeGeometry',
    name: 'pipeGeometry',
    component: PipeGeometry
  },
  {
    path: '/three/edgesGeometry',
    name: 'edgesGeometry',
    component: EdgesGeometry
  },
  {
    path: '/three/extrudeGeometry',
    name: 'extrudeGeometry',
    component: ExtrudeGeometry
  },
  {
    path: '/three/latheGeometry',
    name: 'latheGeometry',
    component: LatheGeometry
  },
  {
    path: '/three/shapeGeometry',
    name: 'shapeGeometry',
    component: ShapeGeometry
  },
  {
    path: '/three/textGeometry',
    name: 'textGeometry',
    component: TextGeometry
  },
  {
    path: '/three/wireframeGeometry',
    name: 'wireframeGeometry',
    component: WireframeGeometry
  },
  {
    path: '/three/bufferGeometry',
    name: 'bufferGeometry',
    component: BufferGeometry
  },
  {
    path: '/three/ambientLight',
    name: 'ambientLight',
    component: AmbientLight
  },
  {
    path: '/three/directionalLight',
    name: 'directionalLight',
    component: DirectionalLight
  },
  {
    path: '/three/hemisphereLight',
    name: 'hemisphereLight',
    component: HemisphereLight
  },
  {
    path: '/three/pointLight',
    name: 'pointLight',
    component: PointLight
  },
  {
    path: '/three/rectAreaLight',
    name: 'rectAreaLight',
    component: RectAreaLight
  },
  {
    path: '/three/spotLight',
    name: 'spotLight',
    component: SpotLight
  },
  {
    path: '/three/usageMaterial',
    name: 'usageMaterial',
    component: UsageMaterial
  },
  {
    path: '/three/OBJLoader',
    name: 'OBJLoader',
    component: OBJLoader
  },
  {
    path: '/three/loadingManager',
    name: 'loadingManager',
    component: LoadingManager
  }
]
