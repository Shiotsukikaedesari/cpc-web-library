import InitThree from '@/views/three/initThree'
import WatchKeyframe from '@/views/three/watchKeyframe'
import InitObj from '@/views/three/initObj'

import CameraFollowMouse from '@/views/three/cameraFollowMouse'
import AutoRotateCamera from '@/views/three/autoRotateCamera'
import DragCamera from '@/views/three/dragCamera'
import Gui from '@/views/three/gui'

import ControlObj from '@/views/three/controlObj'
import SimpleGeometry from '@/views/three/simpleGeometry'
import ComplexGeometry from '@/views/three/complexGeometry'
import PlaneGeometry from '@/views/three/planeGeometry'
import PipeGeometry from '@/views/three/pipeGeometry'
import EdgesGeometry from '@/views/three/edgesGeometry'
import ExtrudeGeometry from '@/views/three/extrudeGeometry'
import LatheGeometry from '@/views/three/latheGeometry'
import ShapeGeometry from '@/views/three/shapeGeometry'
import TextGeometry from '@/views/three/textGeometry'
import WireframeGeometry from '@/views/three/wireframeGeometry'
import BufferGeometry from '@/views/three/bufferGeometry'

import AmbientLight from '@/views/three/ambientLight'
import DirectionalLight from '@/views/three/directionalLight'
import HemisphereLight from '@/views/three/hemisphereLight'
import PointLight from '@/views/three/pointLight'

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
  }
]
