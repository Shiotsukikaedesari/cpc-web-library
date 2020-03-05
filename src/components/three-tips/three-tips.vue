<template>
    <div class="three-tips" v-text="tips"></div>
</template>

<script>
export default {
  name: 'cpc-three-tips',
  props: {
    tips: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.three-tips {
  position: fixed;
  top: 0;
  left: 50%;
  margin-left: -200px;
  width: 400px;
  padding: 10px;
  color: white;
  text-shadow: 0 0 4px rgb(68, 68, 68);
  text-align: center;
  border: 1px solid white;
  border-top: 0;
  box-shadow: 0 0 6px rgb(255, 112, 255);
  white-space:pre-wrap;
}
</style>
