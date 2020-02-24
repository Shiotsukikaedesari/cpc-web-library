<template>
    <div
    :class="[
    'icon-container',
    'animation',
    'flex-row',
    {'fadeOut':  openAnimation === 'fadeOut'},
    {'rotation2D':  openAnimation === 'rotation2D'},
    {'rotation3D-Y':  openAnimation === 'rotation3D-Y'},
    {'rotation3D-X':  openAnimation === 'rotation3D-X'},
    {'drawer-X':  openAnimation === 'drawer-X'},
    {'drawer-Y':  openAnimation === 'drawer-Y'},
    {'ani': animation !== 'none'}
    ]"
    :style="{
      'font-size': size,
      'color': color,
      'animation-timing-function': aniFunctionMounted,
      'animation-duration': aniDurationMounted,
      'animation-name': animationMounted
      }"
    >
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="code"></use>
      </svg>
    </div>
</template>

<script>
export default {
  name: 'cpc-icon',
  props: {
    // 图标code
    code: {
      type: String
    },
    // 图标大小
    size: {
      type: String
    },
    // 图标颜色
    color: {
      type: String
    },
    // 开场动画
    openAnimation: {
      type: String,
      default: 'none'
    },
    // 展示动画
    animation: {
      type: String,
      default: 'none'
    },
    // 动画的运动曲线
    aniFunction: {
      type: String,
      default: 'ease'
    },
    // 播放速率
    aniDuration: {
      type: String,
      default: '2s'
    }
  },
  data () {
    return {
      // 动画的定时器
      aniTimer: '',
      // mounted后的值
      aniFunctionMounted: '',
      aniDurationMounted: '',
      animationMounted: ''
    }
  },
  mounted () {
    if (this.openAnimation !== 'none') {
      this.aniTimer = setTimeout(() => {
        this.animationMounted = this.animation
        this.aniFunctionMounted = this.aniFunction
        this.aniDurationMounted = this.aniDuration
      }, 2000)
    } else {
      this.animationMounted = this.animation
      this.aniFunctionMounted = this.aniFunction
      this.aniDurationMounted = this.aniDuration
    }
  },
  beforeDestroy () {
    clearTimeout(this.aniTimer)
  }
}
</script>

<style lang="less">
.icon-container {
  display: inline-block;
  font-size: 25px;
}
.fadeOut {
  animation: fadeOut-Ani 2s ease forwards;
}
@keyframes fadeOut-Ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
.rotation2D {
  animation: rotation2D-Ani 2s ease forwards;
}
@keyframes rotation2D-Ani {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
.rotation3D-Y {
  animation: rotation3D-Y-Ani 2s ease forwards;
}
@keyframes rotation3D-Y-Ani {
  0% {transform: rotateY(0deg);}
  100% {transform: rotateY(360deg);}
}
.rotation3D-X {
  animation: rotation3D-X-Ani 2s ease forwards;
}
@keyframes rotation3D-X-Ani {
  0% {transform: rotateX(0deg);}
  100% {transform: rotateX(360deg);}
}
.drawer-X {
  animation: drawer-X-Ani 2s ease forwards;
}
@keyframes drawer-X-Ani {
  0% {transform: translateX(-100%);}
  100% {transform: translateX(0);}
}
.drawer-Y {
  animation: drawer-Y-Ani 2s ease forwards;
}
@keyframes drawer-Y-Ani {
  0% {transform: translateY(-100%);}
  100% {transform: translateY(0);}
}
.ani {
  animation-iteration-count: infinite;
}
</style>
