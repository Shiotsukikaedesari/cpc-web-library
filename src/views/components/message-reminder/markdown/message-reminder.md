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
## 消息弹窗
::: demo 测试弹窗布局
``` html
<template>
    <cpc-button @click="tipsShort">短句提醒</cpc-button>
    <cpc-button @click="tipsMiddle">中句提醒</cpc-button>
    <cpc-button @click="tipsLong">长句提醒</cpc-button>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        tipsShort() {
            this.$Tips.showTips({message: '短句测试'})
        },
        tipsMiddle() {
            this.$Tips.showTips({message: '中中句测试中句测试中句测试句测试'})
        },
        tipsLong() {
            this.$Tips.showTips({message: '长句测试长句测试长句测试长句测试长句测试长句测试长句测试长句测试'})
        },
    },
}
</script>
```
:::