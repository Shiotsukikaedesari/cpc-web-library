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
    >outLine-success</cpc-button>
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
    >outLine-success</cpc-button>
</template>
```
:::

### 按钮的禁用
::: demo 属性：`disabled`
``` html
<template>
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