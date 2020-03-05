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
  margin-left: -20%;
  width: 40%;
  padding: 10px;
  color: white;
  text-shadow: 0 0 4px rgb(68, 68, 68);
  text-align: center;
  box-shadow: 0 0 8px rgb(168, 168, 168);
  white-space:pre-wrap;
}
</style>
