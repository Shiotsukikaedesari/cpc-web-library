<template>
    <div class="display-box">
      <div class="demo-box" :key="index" v-for="(item, index) in template">
        <div class="box-main">
          <div class="box-title" v-text="item.title"></div>
          <div class="box-message" v-text="item.message"></div>
          <div class="show-demo" :ref="'show-demo' + index"></div>
        </div>
        <div class="box-code">
          <div class="code-container" v-text="item.component"></div>
          <div class="code-roll"></div>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'cpc-display-box',
  props: {
    markdown: {
      type: String
    }
  },
  data () {
    return {
      template: [] // 组件提取位置
    }
  },
  methods: {
    // 解析markdown
    analysis () {
      // 先找出所有demoBox
      let demoBox = []
      let demoBoxHeader = []
      let demoBoxFooter = []
      let scentence = this.markdown
      // 找出demoBox头部
      let demoBoxHeaderPos = scentence.indexOf('<demoBox>')
      while (demoBoxHeaderPos !== -1) {
        demoBoxHeader.push(demoBoxHeaderPos)
        demoBoxHeaderPos = scentence.indexOf('<demoBox>', demoBoxHeaderPos + 9)
      }
      // 找出demoBox尾部
      let demoBoxFooterPos = scentence.indexOf('</demoBox>')
      while (demoBoxFooterPos !== -1) {
        demoBoxFooter.push(demoBoxFooterPos)
        demoBoxFooterPos = scentence.indexOf('</demoBox>', demoBoxFooterPos + 10)
      }
      // 拼接
      demoBoxHeader.forEach((elem, i, arr) => {
        demoBox.push(scentence.slice(elem, demoBoxFooter[i] + 10).trim())
      })
      // 循环demoBox拿到里面的标题与说明
      let template = []
      let templateTemp = {}
      console.log(demoBox)
      demoBox.forEach((elem, i, arr) => {
        // title标签的值
        let titleHeader = elem.indexOf('<title>') + 7
        let titleFooter = elem.indexOf('</title>')
        templateTemp.title = elem.slice(titleHeader, titleFooter)
        // message标签的值
        let messageHeader = elem.indexOf('<message>') + 9
        let messageFooter = elem.indexOf('</message>')
        templateTemp.message = elem.slice(messageHeader, messageFooter)
        // template内容
        let templateHeader = elem.indexOf('<template>') + 11
        let templateFooter = elem.indexOf('</template>')
        templateTemp.component = elem.slice(templateHeader, templateFooter).trim()

        template.push(templateTemp)
        templateTemp = {}
      })

      this.template = template
      console.log(template)
      this.$nextTick(() => {
        this.compile()
      })
    },
    // 渲染组件
    compile () {
      this.template.forEach((elem, i, arr) => {
        let Extend = Vue.extend({
          template: `<div class="demo-container">${elem.component}</div>`
        })
        const component = new Extend().$mount()
        this.$refs['show-demo' + i][0].appendChild(component.$el)
      })
    }
  },
  mounted () {
    this.analysis()
  }
}
</script>

<style lang="less" scoped>

</style>
