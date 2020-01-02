<template>
  <div class="md-nav">
    <div class="md-nav-box">
      <ul>
        <li>锚点1</li>
        <li>锚点2</li>
        <li>锚点3</li>
        <li>锚点4</li>
        <li>锚点5</li>
        <li>锚点5锚点5锚点5锚点5锚点5锚点5锚点5锚点5锚点5锚点5锚点5</li>
      </ul>
    </div>
    <div class="nav-line"></div>
    <div class="nav-cricle"></div>
  </div>
</template>

<script>
export default {
  name: 'cpc-md-nav'
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
    border: 3px solid rgb(209, 99, 228);
    box-shadow: @lightShadow;
    border-radius: 5px;
    padding: 10px;
    > ul {
      padding: 0;
      margin: 0;
      > li {
        margin: 10px 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
        border-bottom: 1px solid rgb(243, 243, 243);
        &:before {
          content: '';
          display: inline-block;
          width: 10px;
          height: 10px;
          background: rgb(95, 36, 167);
          border-radius: 50%;
          margin-right: 10px;
        }
      }
    }
  }
  > .nav-line {
    width: 0;
    height: 50px;
    border: 1px solid rgb(79, 38, 94);
    position: absolute;
    bottom: -50px;
    box-shadow: @lightShadow;
    left: 50%;
  }
  > .nav-cricle {
    width: 20px;
    height: 20px;
    border: 2px solid rgb(71, 10, 100);
    position: absolute;
    bottom: -70px;
    left: calc(~"50% - 9px");
    border-radius: 50%;
    box-shadow: @lightShadow;
    cursor: pointer;
  }
}
</style>
