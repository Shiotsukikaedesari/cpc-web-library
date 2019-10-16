<template>
    <div class="container">
      <div class="father-elem" @click="roll">
        <slot name="father"></slot>
      </div>
      <div :id="'menu' + menuKey" :class="{'child-elem': true, 'animation': true, 'roll': isRoll}" :style="{'height': menuHeight + 'px'}">
        <slot name="child"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cpc-nav-side-menu',
  props: {
    menuKey: {
      type: String
    }
  },
  data () {
    return {
      isRoll: false, // 是否合起
      menuHeight: '' // 菜单整体的高度
    }
  },
  methods: {
    roll () {
      console.log('卷起')
      this.isRoll = !this.isRoll
      console.log(this.isRoll)
    }
  },
  mounted () {
    // 先量出原始菜单高度再收起来
    let menu = document.getElementById('menu' + this.menuKey)
    this.menuHeight = menu.offsetHeight
    this.isRoll = true
  }
}
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    > .father-elem {
      width: 100%;
    }
    > .child-elem {
      overflow: hidden;
    }
    > .roll {
      height: 0 !important;
    }
  }
</style>
