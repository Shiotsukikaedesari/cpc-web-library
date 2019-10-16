<template>
    <div
      class="container border-base"
      :style="{'height': height, 'width': width, 'background': background}"
    >
    <div class="title  " v-if="title" v-text="title"></div>
    <slot name="menu"></slot>
    </div>
</template>

<script>
export default {
  name: 'cpc-nav-side',
  props: {
    width: { // 宽度
      type: String,
      default: '300px'
    },
    height: { // 高度
      type: String,
      default: '100%'
    },
    background: { // 加载的背景图
      type: String,
      default: 'none'
    },
    title: { // 菜单标题
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
    .container {
        padding: 5px 0;
        overflow: hidden;
        background: white;
        &:hover {
          overflow: auto;
        }
        > .title {
          font-size: 1.5em;
          margin: 0 0 10px 5px;
        }
    }
</style>
