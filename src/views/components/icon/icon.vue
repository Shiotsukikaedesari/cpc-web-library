<template>
    <div class="cpc-icon-display flex-column">
      <div class="cpc-icon-markdown markdown">
          <Markdown></Markdown>
      </div>
      <div class="cpc-icon-box flex-row-between">
        <div
        class="cpc-icon-element flex-column-center animation"
        v-for="(item, index) in iconList"
        :key="index"
        @click="copy(index)"
        :id="'icon' + index"
        >
          <cpc-icon
          :code="item.code"
          aniDuration="3s"
          animation="rotation3D-Y-Ani"
          size="28px"
          ></cpc-icon>
          <input type="text" class="cpc-icon-name animation" :value="item.code">
        </div>
      </div>
    </div>
</template>

<script>
import Markdown from './markdown/icon.md'
export default {
  name: 'components-icon',
  data () {
    return {
      iconList: [
        {code: '#icon-access-point'},
        {code: '#icon-account-box-outline'},
        {code: '#icon-account-box'},
        {code: '#icon-account-alert'},
        {code: '#icon-account-card-details'},
        {code: '#icon-account'},
        {code: '#icon-account-check'},
        {code: '#icon-account-key'},
        {code: '#icon-account-convert'},
        {code: '#icon-alert'},
        {code: '#icon-alert-box'},
        {code: '#icon-alert-circle'},
        {code: '#icon-alert-circle-outline'},
        {code: '#icon-alert-octagon'},
        {code: '#icon-alert-outline'},
        {code: '#icon-arrow-bottom-right'},
        {code: '#icon-arrow-bottom-left'},
        {code: '#icon-arrow-compress'},
        {code: '#icon-arrow-compress-all'},
        {code: '#icon-arrow-down'},
        {code: '#icon-arrow-expand'}
      ]
    }
  },
  methods: {
    // 复制到剪切板
    copy (index) {
      let code = document.querySelector(`#icon${index} .cpc-icon-name`)
      code.select()
      document.execCommand('copy')
      alert(`已复制好code：${code.value}，可贴粘。`)
    }
  },
  mounted () {

  },
  components: {
    Markdown
  }
}
</script>

<style lang="less" scoped>
.cpc-icon-box {
  flex-wrap: wrap;
  > .cpc-icon-element {
    width: 155px;
    height: 155px;
    // border: 1px solid black;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    box-shadow: inset 0 0 0px rgb(190, 16, 196);
    cursor: pointer;
    > .cpc-icon-name {
      font-size: 12px;
      text-align: center;
      cursor: pointer;
    }
    &:hover {
      box-shadow: inset 0 0 16px rgb(153, 9, 158);
    }
    &:hover .cpc-icon-name {
      text-shadow: 0 0 2px rgb(203, 82, 207);
    }
    &:active {
      background: rgb(96, 9, 99);
      transition: all 100ms ease;
    }
    &:active .icon-container {
      color: #fff !important;
      transition: all 100ms ease;
    }
    &:active .cpc-icon-name {
      color: #fff;
      transition: all 100ms ease;
      text-shadow: 0 0 4px #fff;
    }
  }
}
</style>
