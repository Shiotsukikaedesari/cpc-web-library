## 消息弹窗
::: demo 默认消息弹窗
``` html
<template>
    <cpc-button @click="showTips">默认提醒</cpc-button>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        showTips() {
            this.$Tips.showTips()
        }
    },
}
</script>
```
:::