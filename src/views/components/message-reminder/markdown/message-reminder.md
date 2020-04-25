## 全局消息提醒
### 消息弹窗调用
::: demo 已经全局绑定弹窗，通过调用`this.$Tips.showTips()`方法调用弹窗。
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
### 提醒消息
::: demo 传入`message`配置提醒文字。
``` html
<template>
    <cpc-button @click="tips">自定义文字提醒</cpc-button>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        tips() {
            this.$Tips.showTips({ message: '自定义提醒' })
        }
    },
}
</script>
```
:::
### 弹窗图标
::: demo 传入`icon`配置弹窗图标。
``` html
<template>
    <cpc-button @click="tips('#icon-apple')">
        <cpc-icon code="#icon-apple"></cpc-icon> 更换图标提醒
    </cpc-button>
    <cpc-button @click="tips('#icon-medium')">
        <cpc-icon code="#icon-medium"></cpc-icon> 更换图标提醒
    </cpc-button>
    <cpc-button @click="tips('#icon-microscope')">
            <cpc-icon code="#icon-microscope"></cpc-icon> 更换图标提醒
        </cpc-button>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        tips(icon) {
            this.$Tips.showTips({
                message: '更换图标提醒',
                icon
            })
        }
    },
}
</script>
```
:::
### 弹窗图标动画
::: demo 传入`iconAni`、`iconDur`配置弹窗图标动画。
``` html
<template>
    <cpc-button @click="tips('#icon-pause-circle','fadeOut-Ani')">
        <cpc-icon  animation="fadeOut-Ani" code="#icon-pause-circle"></cpc-icon> 弹窗图标动画
    </cpc-button>
    <cpc-button @click="tips('#icon-rotate-right', 'rotation2D-Ani', '500ms')">
        <cpc-icon aniDuration="500ms" animation="rotation2D-Ani" code="#icon-rotate-right"></cpc-icon> 弹窗图标动画
    </cpc-button>
    <cpc-button @click="tips('#icon-redo', 'drawer-X-Ani', '3s')">
            <cpc-icon aniDuration="3s" animation="drawer-X-Ani" code="#icon-redo"></cpc-icon> 弹窗图标动画
        </cpc-button>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        tips(icon, iconAni, iconDur) {
            this.$Tips.showTips({
                message: '弹窗图标动画',
                icon,
                iconAni,
                iconDur,
                duration: 10000
            })
        }
    },
}
</script>
```
:::
### 弹窗主体颜色
::: demo 传入`color`配置弹窗主体颜色。
``` html
<template>
    <cpc-button color="rgb(0, 255, 238)" @click="tips('rgb(0, 255, 238)')">更换颜色</cpc-button>
    <cpc-button color="rgba(255, 255, 0, 0.5)" @click="tips('rgba(255, 255, 0, 0.5)')">更换颜色</cpc-button>
    <cpc-button color="red" @click="tips('red')">更换颜色</cpc-button>

</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        tips(color) {
            this.$Tips.showTips({
                message: '更换颜色',
                color
            })
        }
    },
}
</script>
```
:::
### 弹窗显示时长
::: demo 传入`duration`配置弹窗显示时长。
``` html
<template>
    <cpc-button @click="tips(5000)">弹窗显示5s</cpc-button>
    <cpc-button @click="tips(800)">弹窗显示800ms</cpc-button>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        tips(duration) {
            this.$Tips.showTips({
                message: `弹窗显示${duration}ms`,
                duration
            })
        }
    },
}
</script>
```
:::
### 弹窗手动模式
::: demo `manual`设置为`true`时候将不会自动关闭。
``` html
<template>
    <cpc-button @click="tips()">手动关闭</cpc-button>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        tips() {
            this.$Tips.showTips({
                message: `手动关闭`,
                manual: true
            })
        }
    },
}
</script>
```
:::
### 消息弹窗JS关闭
::: demo 有时候需要代码关闭弹窗，提供给了`this.$Tips.closeTips(id)`函数，`id`从`this.$Tips.showTips()`返回。
``` html
<template>
    <cpc-button @click="tips">打开弹窗</cpc-button>
    <cpc-button @click="closeTips">关闭弹窗</cpc-button>
</template>

<script>
export default {
    data () {
        return {
            id: ''
        }
    },
    methods: {
        tips() {
            this.id = this.$Tips.showTips({message: '脚本关闭', manual: true})
        },
        closeTips () {
            this.$Tips.closeTips(this.id)
        }
    },
}
</script>
```
:::
### 弹窗实时配置
::: demo `manual`设置为`true`后可通过`$Tips.setTips(id)`来进行该条消息的设置。
``` html
<template>
    <cpc-button @click="tips()">进度加载</cpc-button>
    <cpc-button @click="changeTips()">加载完成</cpc-button>
</template>

<script>
export default {
    data () {
        return {
            id: ''
        }
    },
    methods: {
        tips() {
            this.id = this.$Tips.showTips({
                message: `正在加载中...`,
                icon: '#icon-rotate-right',
                iconAni: 'rotation2D-Ani',
                manual: true
            })
        },
        changeTips () {
            this.$Tips.setTips(this.id, {
                message: `加载完成`,
                icon: '#icon-check-circle',
                color: 'rgb(0, 204, 102)',
                iconAni: 'none'
            })
            setTimeout(() => { this.$Tips.closeTips(this.id) }, 3000)
        }
    },
}
</script>
```
:::
### 多条消息弹窗
::: demo 支持同时存在多条提醒，与长短文案。
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
### 消息弹窗场景
::: demo 初始了多种场景弹窗。
``` html
<template>
    <cpc-button color="rgb(0, 204, 102)" @click="$Tips.successTips('成功消息')">成功消息</cpc-button>
    <cpc-button color="rgb(255, 51, 0)" @click="$Tips.errorTips('错误消息')">错误消息</cpc-button>
    <cpc-button color="rgb(255, 153, 0)" @click="$Tips.warnTips('警告消息')">警告消息</cpc-button>
    <cpc-button color="rgb(45, 183, 245)" @click="$Tips.infoTips('提示消息')">提示消息</cpc-button>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
    },
}
</script>
```
:::
### 初始默认配置
* 引入`import MessageReminder from './components/message-reminder/message-reminder'`
* 调用`Vue.prototype.$Tips = MessageReminder.config({obj})`进行所有默认项的配置
``` js
Vue.prototype.$Tips = MessageReminder.config({
    message: '更改默认',
    color: 'blue',
    duration: 4000,
    ...
})
```
### 更改默认配置
::: demo 已经全局绑定弹窗，通过调用`this.$Tips.配置项`方法可以实时更改全局弹窗的默认配置项。
``` html
<template>
    <cpc-button @click="changeTips">更改配置</cpc-button>    
    <cpc-button @click="tips">默认提醒</cpc-button>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        changeTips() {
            this.$Tips.message = `时间：${new Date().toLocaleTimeString()}`
            this.$Tips.showTips({
                message: `更改成功！`
            })
        },
        tips() {
            this.$Tips.showTips()
        }
    },
}
</script>
```
:::
## API

### 属性
属性|说明|类型|默认值
:---|:---|:---|:---
message|弹窗消息|String|这里是弹窗提示信息
duration|弹窗的在场时间，毫秒计算|Number|2000
manual|是否手动控制，开启之后将忽视duration设置|Boolean|false
icon|图标code|String|'#icon-apple-mobileme'
color|弹窗主体色，支持所有css值|String|'rgb(195, 43, 209)'
iconAni|图标在场的动画效果，,有效值：`none`、`fadeOut-Ani`、`rotation2D-Ani`、`rotation3D-Y-Ani`、`rotation3D-X-Ani`、`drawer-X-Ani`、`drawer-Y-Ani`|String|'none'
iconDur|图标在场动画的运动速度（ms, s）|String|'2s'

### 事件
事件|说明|返回值
:---|:---|:---
MessageReminder.config(obj)|全局消息提醒的基础配置，在main.js中初始，`Vue.prototype.$Tips = MessageReminder.config()`, obj为默认配置对象|-
showTips(obj)|调用弹窗方法，obj为调用时的配置项，会覆盖默认配置，并在调用完后会返回该弹窗id|id
setTips(id, obj)|改变弹窗方法，id为所要改变弹窗的id，obj为更改的配置项（不包括manual），调用完成后会返回该弹窗id|id
closeTips(id)|弹窗关闭方法，id为需要关闭弹窗的id可以通过showTips()方法获取id|-
successTips(obj)|成功场景的弹窗方法，`icon`,`color`已经配置好，obj对象为其他配置项，会覆盖默认配置，并在调用完后会返回该弹窗id|id
errorTips(obj)|错误场景的弹窗方法，`icon`,`color`已经配置好，obj对象为其他配置项，会覆盖默认配置，并在调用完后会返回该弹窗id|id
warnTips(obj)|警告场景的弹窗方法，`icon`,`color`已经配置好，obj对象为其他配置项，会覆盖默认配置，并在调用完后会返回该弹窗id|id
infoTips(obj)|提示场景的弹窗方法，`icon`,`color`已经配置好，obj对象为其他配置项，会覆盖默认配置，并在调用完后会返回该弹窗id|id

## TODO
\-
## 备注
\-
