## demo盒子调试页
::: demo demo测试1
``` html
<template>
    <div class="demo">
        demo测试
        <input type="text" v-model="data">
    </div>
</template>
<script>
export default {
  name: 'components-demo',
  data () {
    return {
      data: 111
    }
  }
}
</script>
<style>
  div {
    color: red;
  }
</style>
```
:::

::: demo demo测试2
``` html
<template>
    <div class="demo">
        demo测试
        <input type="text" v-model="data">
    </div>
</template>
<script>
export default {
  name: 'components-demo',
  data () {
    return {
      data: 222
    }
  }
}
</script>
<style>
  div {
    color: blue;
  }
</style>
```
:::
