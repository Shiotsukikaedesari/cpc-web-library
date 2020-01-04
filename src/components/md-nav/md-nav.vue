<template>
  <div class="md-nav flex-column-center">
    <div
    :class="['md-nav-box', 'animation', {'close-box': boxSwitch}]"
    :style="{'height': navHeight, 'max-height': navMaxHeight}"
    @mouseenter="stopNavClose"
    >
      <ul>
        <li v-for="(item, index) in listData" :key="index"><a :href="item.href" :style="item.style" v-text="item.title" :title="item.title"></a></li>
      </ul>
    </div>
    <div class="nav-handle animation" @click="toggleBox"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'cpc-md-nav',
  data () {
    return {
      // nav盒子的高度
      navHeight: '',
      // nav盒子的最大高度
      navMaxHeight: '',
      // 盒子开关
      boxSwitch: false,
      // 定时器内存
      timer: '',
      aniTimer: '',
      // list数据
      listData: []
    }
  },
  methods: {
    // 初始数据
    initData () {
      // 获取md转html文档
      let markdownDoc = document.querySelector('.markdown-doc')
      let title = markdownDoc.querySelectorAll('h1, h2, h3, h4, h5, h6')
      let listData = []
      let temp = {}
      title.forEach((elem, i, arr) => {
        // 剔除演示标签
        if (elem.firstChild.tagName === 'A') {
          // 区分每个标题的样式
          if (elem.tagName === 'H1') {
            temp.style = 'font-size: 1.2em; font-weight: 600; text-indent: 0;'
          } else if (elem.tagName === 'H2') {
            temp.style = 'font-size: 1.0em; font-weight: 550; text-indent: 1em;'
          } else if (elem.tagName === 'H3') {
            temp.style = 'font-size: 1.0em; font-weight: 500; text-indent: 2em;'
          } else if (elem.tagName === 'H4') {
            temp.style = 'font-size: 0.8em; font-weight: 400; text-indent: 3em;'
          } else if (elem.tagName === 'H5') {
            temp.style = 'font-size: 0.6em; font-weight: 400; text-indent: 4em;'
          } else if (elem.tagName === 'H6') {
            temp.style = 'font-size: 0.4em; font-weight: 400; text-indent: 5em;'
          }
          temp.title = elem.textContent.slice(1)
          temp.href = '#' + elem.id
          temp.tagName = elem.tagName
          listData.push(temp)
          temp = {}
        }
      })
      this.listData = listData
    },
    // 切换盒子显示
    toggleBox () {
      this.boxSwitch = !this.boxSwitch
    },
    // 定时器展示盒子
    timerShowBox () {
      // 盒子展开有css动画
      this.boxSwitch = false
      this.initData()
      this.navHeight = 'unset'
      this.$nextTick(() => {
        clearTimeout(this.aniTimer)
        // css的展开动画需要700ms
        this.aniTimer = setTimeout(() => {
          let mdNavBox = document.querySelector('.md-nav-box')
          this.navHeight = mdNavBox.offsetHeight + 'px'
        }, 700)
      })
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.toggleBox()
      }, 1500)
    },
    // 停止盒子合并
    stopNavClose () {
      clearTimeout(this.timer)
    }
  },
  mounted () {
    this.navMaxHeight = this.setMdNavMaxHeight
    this.timerShowBox()
  },
  computed: {
    ...mapGetters(['setMdNavMaxHeight'])
  },
  watch: {
    setMdNavMaxHeight (newValue, oldValue) {
      this.navMaxHeight = newValue
    },
    $route (newValue, oldValue) {
      this.$nextTick(() => {
        this.timerShowBox()
      })
    }
  }
}
</script>

<style lang="less" scoped>
@lightShadow: 4px 4px 5px rgb(148, 148, 148);
.md-nav {
  position: fixed;
  top: calc(~"3% + 80px");
  right: 3%;
  width: 15%;
  z-index: 1;
  > .md-nav-box {
    width: 100%;
    background: white;
    border: 3px solid rgb(204, 52, 204);
    box-shadow: @lightShadow;
    border-radius: 5px;
    padding: 10px;
    overflow: hidden;
    &:hover {
      border: 3px solid rgb(230, 124, 224);
       box-shadow: 4px 4px 8px rgb(98, 42, 161);
       overflow: auto;
    }
    > ul {
      padding: 0;
      margin: 0;
      > li {
        > a {
          display: block;
          margin: 5px 0;
          color: #4d4d4d;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          cursor: pointer;
          height: 1.8em;
          line-height: 1.8em;
          border-bottom: 1px solid rgb(243, 243, 243);
          transition: all 700ms ease;
          &:hover {
            text-shadow: 0 0 4px rgb(234, 157, 253);;
            border-bottom: 1px solid rgb(145, 145, 145);
          }
          &:hover:before {
            background: rgb(247, 3, 255);
          }
          &:before {
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            background: rgb(95, 36, 167);
            border-radius: 50%;
            margin-right: 10px;
            transition: all 700ms ease;
          }
        }
      }
    }
  }
  > .close-box {
    overflow: hidden;
    padding: 0 10px;
    height: 0 !important;
  }
  > .nav-handle {
    width: 0;
    height: 20px;
    border: 1px solid rgb(79, 38, 94);
    box-shadow: @lightShadow;
    cursor: pointer;
    left: 50%;
    &:hover {
      height: 30px;
    }
    &::after {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      border: 2px solid rgb(71, 10, 100);
      position: absolute;
      bottom: -23px;
      left: calc(~"50% - 12px");
      border-radius: 50%;
      box-shadow: @lightShadow;
      cursor: pointer;
    }
  }
}
</style>
