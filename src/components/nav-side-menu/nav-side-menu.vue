<template>
    <div class="container">
      <div class="father-elem" @click="roll">
        <slot name="father"></slot>
      </div>
      <div class="child-elem">
        <slot name="child"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cpc-nav-side-menu',
  methods: {
    roll () {
      console.log('卷起')
    }
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
    }
  }
</style>
