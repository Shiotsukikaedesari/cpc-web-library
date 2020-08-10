const Gui = () => import('@/views/three/base/gui')
const InitObj = () => import('@/views/three/base/initObj')
const InitThree = () => import('@/views/three/base/initThree')
const WatchKeyframe = () => import('@/views/three/base/watchKeyframe')
const AutoRotateCamera = () => import('@/views/three/camera/autoRotateCamera')
const CameraFollowMouse = () => import('@/views/three/camera/cameraFollowMouse')
const DragCamera = () => import('@/views/three/camera/dragCamera')
const PerspectiveCamera = () => import('@/views/three/camera/perspectiveCamera')
const UnrealBloom = () => import('@/views/three/composer/unrealBloom')
const Line = () => import('@/views/three/core/line')
const Raycaster = () => import('@/views/three/core/raycaster')
const BufferGeometry = () => import('@/views/three/geometry/bufferGeometry')
const ComplexGeometry = () => import('@/views/three/geometry/complexGeometry')
const ControlObj = () => import('@/views/three/geometry/controlObj')
const EdgesGeometry = () => import('@/views/three/geometry/edgesGeometry')
const ExtrudeGeometry = () => import('@/views/three/geometry/extrudeGeometry')
const LatheGeometry = () => import('@/views/three/geometry/latheGeometry')
const PipeGeometry = () => import('@/views/three/geometry/pipeGeometry')
const PlaneGeometry = () => import('@/views/three/geometry/planeGeometry')
const ShapeGeometry = () => import('@/views/three/geometry/shapeGeometry')
const SimpleGeometry = () => import('@/views/three/geometry/simpleGeometry')
const TextGeometry = () => import('@/views/three/geometry/textGeometry')
const WireframeGeometry = () => import('@/views/three/geometry/wireframeGeometry')
const AmbientLight = () => import('@/views/three/light/ambientLight')
const DirectionalLight = () => import('@/views/three/light/directionalLight')
const HemisphereLight = () => import('@/views/three/light/hemisphereLight')
const PointLight = () => import('@/views/three/light/pointLight')
const RectAreaLight = () => import('@/views/three/light/rectAreaLight')
const SpotLight = () => import('@/views/three/light/spotLight')
const LoadingManager = () => import('@/views/three/loader/loadingManager')
const MMDLoader = () => import('@/views/three/loader/MMDLoader')
const OBJLoader = () => import('@/views/three/loader/OBJLoader')
const LineBasicMaterial = () => import('@/views/three/material/lineBasicMaterial')
const LineDashedMaterial = () => import('@/views/three/material/lineDashedMaterial')
const MeshBasicMaterial = () => import('@/views/three/material/meshBasicMaterial')
const MeshDepthMaterial = () => import('@/views/three/material/meshDepthMaterial')
const MeshDistanceMaterial = () => import('@/views/three/material/meshDistanceMaterial')
const MeshLambertMaterial = () => import('@/views/three/material/meshLambertMaterial')

export default

[
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
    path: '/three/autoRotateCamera',
    name: 'autoRotateCamera',
    component: AutoRotateCamera
  },
  {
    path: '/three/cameraFollowMouse',
    name: 'cameraFollowMouse',
    component: CameraFollowMouse
  },
  {
    path: '/three/dragCamera',
    name: 'dragCamera',
    component: DragCamera
  },
  {
    path: '/three/perspectiveCamera',
    name: 'perspectiveCamera',
    component: PerspectiveCamera
  },
  {
    path: '/three/unrealBloom',
    name: 'unrealBloom',
    component: UnrealBloom
  },
  {
    path: '/three/line',
    name: 'line',
    component: Line
  },
  {
    path: '/three/raycaster',
    name: 'raycaster',
    component: Raycaster
  },
  {
    path: '/three/bufferGeometry',
    name: 'bufferGeometry',
    component: BufferGeometry
  },
  {
    path: '/three/complexGeometry',
    name: 'complexGeometry',
    component: ComplexGeometry
  },
  {
    path: '/three/controlObj',
    name: 'controlObj',
    component: ControlObj
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
    path: '/three/pipeGeometry',
    name: 'pipeGeometry',
    component: PipeGeometry
  },
  {
    path: '/three/planeGeometry',
    name: 'planeGeometry',
    component: PlaneGeometry
  },
  {
    path: '/three/shapeGeometry',
    name: 'shapeGeometry',
    component: ShapeGeometry
  },
  {
    path: '/three/simpleGeometry',
    name: 'simpleGeometry',
    component: SimpleGeometry
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
    path: '/three/loadingManager',
    name: 'loadingManager',
    component: LoadingManager
  },
  {
    path: '/three/MMDLoader',
    name: 'MMDLoader',
    component: MMDLoader
  },
  {
    path: '/three/OBJLoader',
    name: 'OBJLoader',
    component: OBJLoader
  },
  {
    path: '/three/lineBasicMaterial',
    name: 'lineBasicMaterial',
    component: LineBasicMaterial
  },
  {
    path: '/three/lineDashedMaterial',
    name: 'lineDashedMaterial',
    component: LineDashedMaterial
  },
  {
    path: '/three/meshBasicMaterial',
    name: 'meshBasicMaterial',
    component: MeshBasicMaterial
  },
  {
    path: '/three/meshDepthMaterial',
    name: 'meshDepthMaterial',
    component: MeshDepthMaterial
  },
  {
    path: '/three/meshDistanceMaterial',
    name: 'meshDistanceMaterial',
    component: MeshDistanceMaterial
  },
  {
    path: '/three/meshLambertMaterial',
    name: 'meshLambertMaterial',
    component: MeshLambertMaterial
  }
]
