<template>
    <div class="container">
        <!-- <nav-top></nav-top> -->
        <cpc-nav-side width="300px" height="500px" background="" title="MENU TITLE">
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
            <cpc-nav-side-menu menuKey="3" slot="menu">
                <cpc-nav-side-elem elemKey="3-0" slot="father" :father="true">三级主菜单</cpc-nav-side-elem>
                <cpc-nav-side-elem elemKey="3-1" slot="child">三级子菜单1</cpc-nav-side-elem>
                <cpc-nav-side-elem elemKey="3-2" slot="child">三级子菜单2</cpc-nav-side-elem>
                <cpc-nav-side-elem elemKey="3-3" slot="child">三级子菜单2</cpc-nav-side-elem>
            </cpc-nav-side-menu>
        </cpc-nav-side>
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

</style>
