## 图标

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

### 图标支持的事件
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

## API

### 属性
属性|说明|类型|默认值
:---|:---|:---|:---
code|图标的code|String|-
size|图标的尺寸，支持所有css值|String|'25px'
color|图标的颜色，支持所有css值|String|'black'

### 事件
事件|说明|返回值
:---|:---|:---
-|-|-

### TODO

### 备注