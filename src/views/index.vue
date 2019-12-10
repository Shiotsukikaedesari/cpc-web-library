<template>
    <div class="container">
        <div class="background">
          <img src="/static/background.jpg" alt="">
        </div>
        <div class="main flex-column-center">
            <div class="logo">
                <img src="/static/logo.png" alt="漫协logo">
            </div>
            <div class="introduce">
                <span>一款基于Vue的组件库，为cpc官网提供支持（挖的坑是一定要填的！）</span>
            </div>
            <div class="button-box">
                <button class="animation" @click="toGuide">指南</button>
                <button class="animation" @click="toComponent">组件</button>
                <button class="animation" @click="toGithub">Github</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {
    // 跳转到项目github
    toGithub () {
      window.open('https://github.com/Shiotsukikaedesari/cpc-component-library', '_blank')
    },
    // 跳转到指南
    toGuide () {
      this.$router.push({path: '/display'})
    },
    // 跳转到组件
    toComponent () {
      this.$router.push({path: '/display'})
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    .background {
      overflow: hidden;
      width: 100%;
      height: 100%;
    > img {
      width: 100%;
    height: 100%;
    }
  }
  .main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    > div {
        margin: 20px;
    }
    > .logo {
        > img {
            width: 260px;
        }
    }
    > .introduce {
        color: #fff;
        text-shadow: 0px 0px 8px rgb(1, 104, 248);
        font-size: 20px;
    }
    > .button-box {
        > button {
            color: rgb(167, 204, 255);
            margin: 0 20px;
            font-size: 18px;
            cursor: pointer;
            padding: 5px 10px;
            border-left: 1px solid rgba(255, 255, 255, 0);
            border-right: 1px solid rgba(255, 255, 255, 0);
            box-sizing: border-box;
            &:hover {
                border-left: 1px solid rgba(255, 255, 255, 1);
                border-right: 1px solid rgba(255, 255, 255, 1);
                color: #fff;
            }
            &:active {
                border-left: 1px solid rgb(255, 81, 217);
                border-right: 1px solid rgb(255, 81, 217);
                color: rgb(255, 81, 217);
            }
        }
    }
  }
}
</style>
