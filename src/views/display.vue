<template>
    <div class="display">
      <header class="cpc-nav-top">
        <cpc-nav-top height="80px" :fixed="true"></cpc-nav-top>
      </header>
      <section class="display-container flex-row">
        <div class="cpc-nav-side">
          <cpc-nav-side width="300px" height="100%" background="">
              <cpc-nav-side-menu menuKey="1" slot="menu">
                  <cpc-nav-side-elem elemKey="1-0" slot="father" :father="true">一级主菜单</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1-1" slot="child">一级子菜单1</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="1-2" slot="child">一级菜单2</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <cpc-nav-side-menu menuKey="2" slot="menu">
                  <cpc-nav-side-elem elemKey="2-0" slot="father" :father="true">二级主菜单</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-1" slot="child">二级子菜单1</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-2" slot="child">二级子菜单2</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="2-3" slot="child">二级子菜单2</cpc-nav-side-elem>
              </cpc-nav-side-menu>
              <template slot="menu">
                  <cpc-nav-side-elem elemKey="4" slot="child">三级子菜单1</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="5" slot="child">三级子菜单2</cpc-nav-side-elem>
                  <cpc-nav-side-elem elemKey="6" slot="child">三级子菜单2</cpc-nav-side-elem>
              </template>
          </cpc-nav-side>
        </div>
        <div class="display-main">

        </div>
      </section>
      <footer class="display-footer">

      </footer>
    </div>
</template>

<script>
export default {
  name: 'display',
  data () {
    return {
    }
  },
  methods: {
    toDetail () {
      console.log(111)
      this.signal = true
    }
  }
}
</script>

<style lang="less" scoped>
  .display {
    width: 100%;
    height: 100%;
    background: rgb(228, 228, 228);
    > .cpc-nav-top {
    }
    > .display-container {
      width: 100%;
      height: calc(100% - 180px);
      > .cpc-nav-side {
        height: 100%;
        > .container {
          border-top: 0;
          border-left: 0;
          border-bottom: 0;
        }
      }
      > .display-main {
        width: calc(100% - 300px);
        height:100%;
        background: white;
      }
    }
    > .display-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 100px;
      width: 100%;
      background: rgb(27, 22, 92);
    }
  }
</style>
