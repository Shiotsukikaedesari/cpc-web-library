import InitThree from '@/views/three/initThree'
import WatchKeyframe from '@/views/three/watchKeyframe'
import InitObj from '@/views/three/initObj'

import CameraFollowMouse from '@/views/three/cameraFollowMouse'
import AutoRotateCamera from '@/views/three/autoRotateCamera'
import DragCamera from '@/views/three/dragCamera'

import ControlObj from '@/views/three/controlObj'
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
    path: '/three/dragCamera',
    name: 'dragCamera',
    component: DragCamera
  },
  {
    path: '/three/controlObj',
    name: 'controlObj',
    component: ControlObj
  }
]
