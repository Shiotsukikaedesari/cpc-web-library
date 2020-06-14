## 按钮
### 按钮的基本样式
::: demo 按钮4种基本样式，按钮4种基本的场景样式，属性：`styleType`、`sceneType`
``` html
<template>
    <cpc-button>按钮fill</cpc-button>
    <cpc-button styleType="outLine">按钮outLine</cpc-button>
    <cpc-button styleType="dashed">按钮dashed</cpc-button>
    <cpc-button styleType="text">按钮text</cpc-button>
    <br>
    <cpc-button sceneType="success">success</cpc-button>
    <cpc-button sceneType="error">error</cpc-button>
    <cpc-button sceneType="info">info</cpc-button>
    <cpc-button sceneType="warning">warning</cpc-button>
    <br>
    <cpc-button styleType="outLine" sceneType="success">outLine-success</cpc-button>
    <cpc-button styleType="outLine" sceneType="error">outLine-error</cpc-button>
    <cpc-button styleType="outLine" sceneType="info">outLine-info</cpc-button>
    <cpc-button styleType="outLine" sceneType="warning">outLine-warning</cpc-button>
    <br>
    <cpc-button styleType="dashed" sceneType="success">dashed-success</cpc-button>
    <cpc-button styleType="dashed" sceneType="error">dashed-error</cpc-button>
    <cpc-button styleType="dashed" sceneType="info">dashed-info</cpc-button>
    <cpc-button styleType="dashed" sceneType="warning">dashed-warning</cpc-button>
    <br>
    <cpc-button styleType="text" sceneType="success">text-success</cpc-button>
    <cpc-button styleType="text" sceneType="error">text-error</cpc-button>
    <cpc-button styleType="text" sceneType="info">text-info</cpc-button>
    <cpc-button styleType="text" sceneType="warning">text-warning</cpc-button>
</template>
```
:::

### 按钮大小设置
::: demo 除了按内容改变大小外，还可以设定大小，属性：`width`、`height`
``` html
<template>
    <cpc-button width="100px">按钮fill</cpc-button>
    <cpc-button styleType="outLine" height="50px">按钮outLine</cpc-button>
</template>
```
:::

### 按钮圆角设置
::: demo 属性：`radius`，值为高度的一半可以变成纯圆角，50%可以变成椭圆。属性：`circle` 可以准确设置圆形, 不过需要`height`或者`width`进行调整
``` html
<template>
    <cpc-button radius="10%">按钮fill</cpc-button>
    <cpc-button radius="10px">按钮fill</cpc-button>
    <cpc-button
    styleType="dashed"
    sceneType="success"
    radius="50%"
    >dashed-success</cpc-button>
    <cpc-button
    styleType="outLine"
    sceneType="info"
    radius="15px"
    >outLine-info</cpc-button>
    <br>
    <cpc-button
    radius="50%"
    width="50px"
    :circle="true"
    >按钮</cpc-button>
    <cpc-button
    styleType="outLine"
    sceneType="info"
    radius="15px"
    width="80px"
    :circle="true"
    >outLine-info</cpc-button>
</template>
```
:::

### 按钮的等待与禁用
::: demo 属性：`disabled`、`waiting`
``` html
<template>
    <cpc-button>按钮fill</cpc-button>
    <cpc-button
    styleType="outLine"
    sceneType="success"
    >outLine-success</cpc-button>
    <cpc-button
    styleType="dashed"
    sceneType="error"
    >dashed-error</cpc-button>
    <cpc-button
    styleType="text"
    sceneType="warning"
    >text-warning</cpc-button>
    <br>
    <cpc-button :waiting="true">按钮fill</cpc-button>
    <cpc-button
    styleType="outLine"
    sceneType="success"
    :waiting="true"
    >outLine-success</cpc-button>
    <cpc-button
    styleType="dashed"
    sceneType="error"
    waiting
    >dashed-error</cpc-button>
    <cpc-button
    styleType="text"
    sceneType="warning"
    waiting
    >text-warning</cpc-button>
    <br>
    <cpc-button disabled>按钮fill</cpc-button>
    <cpc-button
    styleType="outLine"
    sceneType="success"
    disabled
    >outLine-success</cpc-button>
    <cpc-button
    styleType="dashed"
    sceneType="error"
    disabled
    >dashed-error</cpc-button>
    <cpc-button
    styleType="text"
    sceneType="warning"
    disabled
    >text-warning</cpc-button>
</template>
```
:::

### 按钮的图标
::: demo 在按钮文字前后增加icon，的调用`<cpc-icon></cpc-icon>`组件
``` html
<template>
    <cpc-button>
        <cpc-icon code="#icon-apple"></cpc-icon>按钮fill
    </cpc-button>
    <cpc-button sceneType="info" waiting>
        <cpc-icon
        code="#icon-rotate-right"
        animation="rotation2D-Ani"
        aniDuration="1s"
        ></cpc-icon>正在加载...
    </cpc-button>
    <cpc-button styleType="outLine" sceneType="success">
        outLine-success <cpc-icon code="#icon-check"></cpc-icon>
    </cpc-button>
    <cpc-button styleType="dashed" :circle="true">
        <cpc-icon code="#icon-account-search" size="25px"></cpc-icon>
    </cpc-button>
</template>
```
:::

### 按钮应用示例
::: demo 
``` html
<template>
    <cpc-button
    :sceneType="sceneType"
    :waiting ="waiting"
    @click="login"
    >
        <cpc-icon
        v-show="showIcon"
        :code="iconCode"
        :animation="animation"
        aniDuration="1s"
        ></cpc-icon>{{text}}<!-- {\{text}\} -->
    </cpc-button>
</template>

<script>
export default {
    data () {
        return {
            showIcon: false,
            iconCode: '#icon-rotate-right',
            waiting: false,
            text: '点击登录',
            sceneType: '',
            animation: 'rotation2D-Ani',
        }
    },
    methods: {
        login () {
            this.showIcon = true
            this.waiting = true
            this.text = '正在登录请稍后...'
            setTimeout(() => {
                this.sceneType = 'success'
                this.animation = 'none'
                this.iconCode = '#icon-check'
                this.text = '登录成功！'
            }, 3000)
        }
    }
}
</script>
```
:::

### 按钮组
::: demo 按钮组组件，可以通过`direction`属性规定排列方向。
``` html
<template>
    <cpc-button-group direction="horizontal">
        <cpc-button>按钮fill</cpc-button>
        <cpc-button>按钮fill</cpc-button>
        <cpc-button>按钮fill</cpc-button>
    </cpc-button-group>
    <cpc-button-group direction="vertical">
        <cpc-button styleType="outLine">按钮outLine</cpc-button>
        <cpc-button styleType="outLine">按钮outLine</cpc-button>
        <cpc-button styleType="outLine">按钮outLine</cpc-button>
    </cpc-button-group>
</template>
```
:::

### 按钮组相关场景
::: demo
``` html
<template>
    <cpc-button-group direction="horizontal">
        <cpc-button><cpc-icon code="#icon-chevron-double-left"></cpc-icon></cpc-button>
        <cpc-button><cpc-icon code="#icon-play"></cpc-icon></cpc-button>
        <cpc-button><cpc-icon code="#icon-chevron-double-right"></cpc-icon></cpc-button>
    </cpc-button-group>
    <cpc-button-group direction="horizontal">
        <cpc-button styleType="outLine" radius="15px">按钮outLine</cpc-button>
        <cpc-button styleType="outLine">按钮outLine</cpc-button>
        <cpc-button styleType="outLine" radius="15px">按钮outLine</cpc-button>
    </cpc-button-group>
    <cpc-button-group direction="horizontal">
        <cpc-button styleType="outLine" disabled>星期一</cpc-button>
        <cpc-button styleType="outLine" disabled>星期二</cpc-button>
        <cpc-button styleType="outLine" disabled>星期三</cpc-button>
        <cpc-button styleType="outLine" waiting>星期四</cpc-button>
        <cpc-button styleType="outLine">星期五</cpc-button>
    </cpc-button-group>
    <br><br>
    <cpc-button-group direction="vertical">
        <cpc-button sceneType="info" width="400px" radius="8px">注册</cpc-button>
        <cpc-button sceneType="success"  width="400px" radius="8px">登录</cpc-button>
    </cpc-button-group>
    <cpc-button-group direction="vertical">
        <cpc-button styleType="outLine" ><cpc-icon code="#icon-brightness-"></cpc-icon></cpc-button>
        <cpc-button styleType="outLine" ><cpc-icon code="#icon-brightness-1"></cpc-icon></cpc-button>
        <cpc-button styleType="outLine" ><cpc-icon code="#icon-brightness-2"></cpc-icon></cpc-button>
        <cpc-button styleType="outLine" ><cpc-icon code="#icon-brightness-3"></cpc-icon></cpc-button>
        <cpc-button styleType="outLine"><cpc-icon code="#icon-brightness-4"></cpc-icon></cpc-button>
        <cpc-button styleType="outLine"><cpc-icon code="#icon-brightness-5"></cpc-icon></cpc-button>
        <cpc-button styleType="outLine"><cpc-icon code="#icon-brightness-6"></cpc-icon></cpc-button>
    </cpc-button-group>
</template>
```
:::

## API

### 属性
属性|说明|类型|默认值
:---|:---|:---|:---
styleType|按钮的样式类型，有效值：`fill`、`outLine`、`dashed`、`text`|String|'fill'
sceneType|按钮的场景样式类型，有效值：`success`、`error`、`info`、`warning`|String|-
width|按钮的宽度，支持所有的css值|String|-
height|按钮的高度，支持所有的css值|String|-
radius|按钮的圆角设置，支持所有的css值|String|'5%'
circle|设置为圆形按钮|Boolean|false
disabled|按钮的禁用状态|Boolean|false
waiting|按钮的等待状态|Boolean|false
direction|按钮组件的方向设置，有效值：`horizontal`、`vertical`|String|horizontal

### 事件
事件|说明|返回值
:---|:---|:---
-|-|-

## TODO
* dashed的效果在按钮组子组件中会产生移动，看是不是要换
## 备注