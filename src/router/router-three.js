const InitThree = () => import('@/views/three/base/initThree')
const WatchKeyframe = () => import('@/views/three/base/watchKeyframe')
const InitObj = () => import('@/views/three/base/initObj')
const Gui = () => import('@/views/three/base/gui')

const CameraFollowMouse = () => import('@/views/three/camera/cameraFollowMouse')
const AutoRotateCamera = () => import('@/views/three/camera/autoRotateCamera')
const DragCamera = () => import('@/views/three/camera/dragCamera')

const ControlObj = () => import('@/views/three/geometry/controlObj')
const SimpleGeometry = () => import('@/views/three/geometry/simpleGeometry')
const ComplexGeometry = () => import('@/views/three/geometry/complexGeometry')
const PlaneGeometry = () => import('@/views/three/geometry/planeGeometry')
const PipeGeometry = () => import('@/views/three/geometry/pipeGeometry')
const EdgesGeometry = () => import('@/views/three/geometry/edgesGeometry')
const ExtrudeGeometry = () => import('@/views/three/geometry/extrudeGeometry')
const LatheGeometry = () => import('@/views/three/geometry/latheGeometry')
const ShapeGeometry = () => import('@/views/three/geometry/shapeGeometry')
const TextGeometry = () => import('@/views/three/geometry/textGeometry')
const WireframeGeometry = () => import('@/views/three/geometry/wireframeGeometry')
const BufferGeometry = () => import('@/views/three/geometry/bufferGeometry')

const AmbientLight = () => import('@/views/three/light/ambientLight')
const DirectionalLight = () => import('@/views/three/light/directionalLight')
const HemisphereLight = () => import('@/views/three/light/hemisphereLight')
const PointLight = () => import('@/views/three/light/pointLight')
const RectAreaLight = () => import('@/views/three/light/rectAreaLight')
const SpotLight = () => import('@/views/three/light/spotLight')

const LineBasicMaterial = () => import('@/views/three/material/lineBasicMaterial')

const LoadingManager = () => import('@/views/three/loader/loadingManager')
const OBJLoader = () => import('@/views/three/loader/OBJLoader')

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
    path: '/three/lineBasicMaterial',
    name: 'lineBasicMaterial',
    component: LineBasicMaterial
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
