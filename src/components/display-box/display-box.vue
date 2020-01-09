<template>
    <div :class="['display-box', 'animation', 'flex-column', 'display-box-' + sign]">
      <div class="box-upper flex-column">
        <div class="show-component animation">
          <slot name="source"></slot>
        </div>
        <div class="description" v-if="$slots.default">
          <div class="description-title"><span class="title-decorate">—————— · </span>组件描述<span  class="title-decorate"> · ——————</span></div>
          <slot></slot>
        </div>
      </div>
      <div class="box-lower flex-column">
        <div :class="['component-code', 'markdown', 'animation', 'flex-column', {'fold': foldStatus}]">
          <slot name="highlight"></slot>
        </div>
        <div class="drawer flex-row-center animation" @click="foldCode">
          <span class="animation">code</span>
          <cpc-icon size="20px" code="#icon-code-tags"></cpc-icon>
        </div>
      </div>
    </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: 'cpc-display-box',
  props: {
    markdown: {
      type: String
    },
    // 记录是第几个box
    sign: {
      type: Number
    }
  },
  data () {
    return {
      // 折叠状态
      foldStatus: false
    }
  },
  methods: {
    foldCode () {
      this.foldStatus = !this.foldStatus
    }
  },
  mounted () {
    let componentCode = document.querySelector(`.display-box-${this.sign} .component-code`)
    componentCode.style.height = componentCode.offsetHeight + 'px'
    setTimeout(() => {
      this.foldStatus = true
    }, 500)
  }
}
</script>

<style lang="less" scoped>
.display-box {
  margin: 20px 0;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgb(125, 14, 216);
  box-shadow: 0 0 4px rgb(211, 116, 255);
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 12px rgb(195, 81, 247);
  }
  > .box-upper {
    width: 100%;
    > .show-component {
      padding: 20px 0;
      width: 100%;
      border-bottom: 1px solid rgb(184, 14, 235);
      box-shadow: inset 0 0 6px rgba(73, 14, 235, 0.3);
      &:hover {
        box-shadow: inset 0 0 16px rgba(73, 14, 235, 0.3);
      }
      > div {
        margin: 0 10px;
      }
    }
    > .description {
      padding: 20px 0;
      width: 100%;
      border-bottom: 1px solid rgb(209, 14, 235);
      color: #666;
      font-size: 16px;
      box-shadow: inset 0 0 6px rgb(184, 184, 184);
      > div {
        margin: 0 10px;
      }
      > .description-title {
        margin-bottom: 20px;
        > .title-decorate {
          color: rgb(187, 187, 187);
        }
      }
    }
  }
  > .box-lower {
    width: 100%;
    padding-bottom: 0;
    > .component-code {
      background: rgb(38, 15, 73); // highlight背景色
      border-radius: 6px;
      align-items: unset;
      width: calc(~"100% - 20px");
      margin: 10px;
      > pre {
        margin: 0;
        padding: 10px;
        > code {
          padding: 0;
          margin: 0;
        }
      }
    }
     > .fold {
      height: 0 !important;
      margin: 0;
      overflow: hidden;
    }
    > .drawer {
      width: 100%;
      height: 50px;
      background: rgba(219, 174, 255, 0.2);
      cursor: pointer;
      > span {
        margin: 0 10px;
        color: rgb(130, 15, 238);
        width: 0;
        opacity: 0;
      }
      > .icon-container {
        color: rgb(130, 15, 238) !important;
      }
      &:hover {
        background: rgba(198, 174, 255, 0.4);
      }
      &:hover span {
        width: 32px;
        opacity: 1;
      }
      &:active {
        transition: all 100ms ease;
        background: rgba(70, 22, 114, 0.7);
      }
      &:active span{
        transition: all 100ms ease;
        color: rgb(236, 173, 255);
      }
      &:active .icon-container{
        transition: all 100ms ease;
        color: rgb(236, 173, 255) !important;
      }
    }
  }

}
</style>
