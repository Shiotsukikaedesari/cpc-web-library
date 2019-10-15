<template>
    <div class="container">
        <!-- <nav-top></nav-top> -->
        <cpc-nav-side width="300px" height="500px" background="" title="MENU TITLE">
            <cpc-nav-side-menu slot="menu">
                <cpc-nav-side-elem :elemKey="0" slot="father" :father="true"></cpc-nav-side-elem>
                <cpc-nav-side-elem :elemKey="1" slot="child" :father="false"></cpc-nav-side-elem>
                <cpc-nav-side-elem :elemKey="2" slot="child" :father="false"></cpc-nav-side-elem>
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
