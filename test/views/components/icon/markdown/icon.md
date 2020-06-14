## 图标
### 图标的开场动画
::: demo 图标被页面首次渲染的动画效果，属性：` openAnimation`，demo中的`animation`为辅助展示用
``` html
<template>
    <cpc-icon
    code="#icon-alert-circle-outline"
    openAnimation="none"
    ></cpc-icon>
    <cpc-icon
    code="#icon-alert-circle-outline"
    openAnimation="fadeOut"
    animation="fadeOut-Ani"
    ></cpc-icon>
    <cpc-icon
    code="#icon-alert-circle-outline"
    openAnimation="rotation2D"
    animation="rotation2D-Ani"
    ></cpc-icon>
    <cpc-icon
    code="#icon-alert-circle-outline"
    openAnimation="rotation3D-Y"
    animation="rotation3D-Y-Ani"
    ></cpc-icon>
    <cpc-icon
    code="#icon-alert-circle-outline"
    openAnimation="rotation3D-X"
    animation="rotation3D-X-Ani"
    ></cpc-icon>
    <cpc-icon
    code="#icon-alert-circle-outline"
    openAnimation="drawer-X"
    animation="drawer-X-Ani"
    ></cpc-icon>
    <cpc-icon
    code="#icon-alert-circle-outline"
    openAnimation="drawer-Y"
    animation="drawer-Y-Ani"
    ></cpc-icon>
</template>
```
:::

### 选取图标
::: demo 图标的选择，属性：`code`，本框架提供描边类型与填充类型
``` html
<template>
    <cpc-icon code="#icon-alert-circle-outline"></cpc-icon>
    <cpc-icon code="#icon-alert-circle"></cpc-icon>
    <cpc-icon code="#icon-alert-outline"></cpc-icon>
    <cpc-icon code="#icon-alert"></cpc-icon>
</template>
```
:::

### 图标的基础属性
::: demo 图标的大小与颜色，属性：`size`、`color`
``` html
<template>
    <cpc-icon
    code="#icon-alert-circle-outline"
    size="30px"
    color="violet"
    ></cpc-icon>
    <cpc-icon
    code="#icon-alert-circle-outline"
    size="1em"
    color="rgb(255, 0, 0)"
    ></cpc-icon>
</template>
```
:::

### 图标的在场动画
::: demo 图标存在期间的动画属性相关配置，属性：`animation`、`aniFunction`、`aniDuration`
``` html
<template>
    <cpc-icon
    code="#icon-reload"
    animation="rotation2D-Ani"
    ></cpc-icon>
    <cpc-icon
    code="#icon-reload"
    animation="rotation2D-Ani"
    aniFunction="linear"
    ></cpc-icon>
    <cpc-icon
    code="#icon-reload"
    animation="rotation2D-Ani"
    aniDuration="500ms"
    ></cpc-icon>
</template>
```
:::

## API

### 属性
属性|说明|类型|默认值
:---|:---|:---|:---
code|图标的code|String|-
size|图标的尺寸，支持所有css值|String|'25px'
color|图标的颜色，支持所有css值|String|'black'
 openAnimation|图标被页面首次渲染的动画效果,有效值：`none`、`fadeOut`、`rotation2D`、`rotation3D-Y`、`rotation3D-X`、`drawer-X`、`drawer-Y`|String|'none'
animation|图标在场的动画效果，,有效值：`none`、`fadeOut-Ani`、`rotation2D-Ani`、`rotation3D-Y-Ani`、`rotation3D-X-Ani`、`drawer-X-Ani`、`drawer-Y-Ani`|String|'none'
aniFunction|图标在场动画的运动曲线，有效值：`ease`、`linear`、`ease-in`、`ease-out`、`ease-in-out`、`cubic-bezier(n, n, n, n)`|String|'ease'
aniDuration|图标在场动画的运动速度（ms, s）|String|'2s'

### 事件
事件|说明|返回值
:---|:---|:---
-|-|-

## TODO
* 等tab切换组件做好了回来增加填充图标展示，线性图标与其他图标展示
* 还需要做一个支持自定义ui的slot
* 等全局提示组件做好了要更换复制成功的效果
## 备注
\-
## 图标code