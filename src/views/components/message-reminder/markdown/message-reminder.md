## 消息弹窗
::: demo 默认消息弹窗
``` html
<template>
    <cpc-button @click="tips">默认提醒</cpc-button>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        tips() {
            this.$Tips.showTips()
        }
    },
}
</script>
```
:::