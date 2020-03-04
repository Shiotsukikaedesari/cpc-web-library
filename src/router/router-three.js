import InitThree from '@/views/three/initThree'
import WatchKeyframe from '@/views/three/watchKeyframe'
import CameraFollowMouse from '@/views/three/cameraFollowMouse'
import AutoRotateCamera from '@/views/three/autoRotateCamera'
import DragCamera from '@/views/three/dragCamera'
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
    path: '/three/dragCamera',
    name: 'dragCamera',
    component: DragCamera
  }

]