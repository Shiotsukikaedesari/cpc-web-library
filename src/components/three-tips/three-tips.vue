<template>
    <div class="three-tips" v-text="tips"></div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'cpc-three-tips',
  data () {
    return {
      tips: ''
    }
  },
  created () {
    this.tips = this.threeTips
  },
  computed: {
    ...mapState(['threeTips'])
  },
  watch: {
    threeTips (newValue, oldValue) {
      this.tips = newValue
    }
  }
}
</script>

<style lang="less" scoped>
.three-tips {
  display: inline-block;
  padding: 10px;
  color: white;
  text-shadow: 0 0 4px rgb(68, 68, 68);
  text-align: left;
  white-space:pre-wrap;
  line-height: 25px;
}
</style>
