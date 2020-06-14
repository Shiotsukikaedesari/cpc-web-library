## 拖拽面板
### 面板调用
::: demo 默认拖拽面板
``` html
<template>
    <cpc-drag-plane></cpc-drag-plane>
</template>
```
:::

### 面板个数
::: demo 传入`amount`设置面板的个数
``` html
<template>
    <div class="plane-container">
        <cpc-drag-plane :amount="4"></cpc-drag-plane>
        <cpc-drag-plane :amount="8"></cpc-drag-plane>
    </div>
</template>

<style>
.plane-container {
    display: flex;
}
.plane-container > div {
    margin: 0 10px;
}
</style>
```
:::
### 面板内容
::: demo 通过`slot`添加面板内容
``` html
<template>
    <div class="plane-container">
        <cpc-drag-plane :amount="3">
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="4">
            <template #view1>
                <div class="viewD view1">
                    <div></div>
                </div>
            </template>
            <template #view2>
                <div class="viewD view2">
                    <div></div>
                </div>
            </template>
            <template #view3>
                <div class="viewD view3">
                    <div></div>
                </div>
            </template>
            <template #view4>
                <div class="viewD view4">
                    <div></div>
                </div>
            </template>
        </cpc-drag-plane>
    </div>
</template>

<style>
.plane-container {
    display: flex;
}
.plane-container > div {
    margin: 0 10px;
}
.view {
    width: 100%;
    height: 100%;
}
.viewD {
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow: auto;
}
.viewD > div {
    width: 100%;
    height: 200px;
    background: linear-gradient(to bottom,
    rgba(255, 142, 244, 0.5),
    rgba(253, 255, 149, 0.5),
    rgba(112, 236, 255, 0.5),
    rgba(112, 255, 133, 0.5))
}
.view1 {
    background: rgba(255, 142, 244, 0.5);
}
.view2 {
    background: rgba(253, 255, 149, 0.5);
}
.view3 {
    background: rgba(112, 236, 255, 0.5);
}
.view4 {
    background: rgba(112, 255, 133, 0.5);
}
</style>
```
:::

### 面板高宽
::: demo 传入`width`、`height`设置面板的高宽
``` html
<template>
    <div class="plane-container">
        <cpc-drag-plane width="200px"></cpc-drag-plane>
        <cpc-drag-plane height="600px"></cpc-drag-plane>
    </div>
</template>

<style>
.plane-container {
    display: flex;
}
.plane-container > div {
    margin: 0 10px;
}
</style>
```
:::
### 面板内容安全距离
::: demo 传入`safeDistance`设置面板内容部分的安全拖拽距离
``` html
<template>
    <div class="plane-container">
        <cpc-drag-plane :amount="3" :safeDistance="5">
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="4" :safeDistance="20">
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
            <template #view4>
                <div class="view view4"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="3" :safeDistance="40">
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
    </div>
</template>

<style>
.plane-container {
    display: flex;
}
.plane-container > div {
    margin: 0 10px;
}
.view {
    width: 100%;
    height: 100%;
}
.view1 {
    background: rgba(255, 142, 244, 0.5);
}
.view2 {
    background: rgba(253, 255, 149, 0.5);
}
.view3 {
    background: rgba(112, 236, 255, 0.5);
}
.view4 {
    background: rgba(112, 255, 133, 0.5);
}
</style>
```
:::
### 面板拖动变换
::: demo 传入拖动方向`dragTop`、`dragBottom`、`dragLeft`、`dragRight`设置面板方向的拖动变换
``` html
<template>
    <div class="plane-container">
        <cpc-drag-plane :amount="3" dragTop>
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="3" dragBottom>
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="3" dragLeft>
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="3" dragRight>
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
    </div>
</template>

<style>
.plane-container {
    display: flex;
}
.plane-container > div {
    margin: 0 10px;
}
.view {
    width: 100%;
    height: 100%;
}
.view1 {
    background: rgba(255, 142, 244, 0.5);
}
.view2 {
    background: rgba(253, 255, 149, 0.5);
}
.view3 {
    background: rgba(112, 236, 255, 0.5);
}
.view4 {
    background: rgba(112, 255, 133, 0.5);
}
</style>
```
:::
### 盒子拖动的安全距离
::: demo 传入`boxSaveDistance`设置盒子内容部分的安全拖拽距离
``` html
<template>
    <div class="plane-container">
        <cpc-drag-plane :amount="3" :boxSaveDistance="5" dragTop dragBottom dragLeft dragRight>
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="4" :boxSaveDistance="20" dragTop dragBottom dragLeft dragRight>
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
            <template #view4>
                <div class="view view4"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="3" :boxSaveDistance="40" dragTop dragBottom dragLeft dragRight>
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
    </div>
</template>

<style>
.plane-container {
    display: flex;
}
.plane-container > div {
    margin: 0 10px;
}
.view {
    width: 100%;
    height: 100%;
}
.view1 {
    background: rgba(255, 142, 244, 0.5);
}
.view2 {
    background: rgba(253, 255, 149, 0.5);
}
.view3 {
    background: rgba(112, 236, 255, 0.5);
}
.view4 {
    background: rgba(112, 255, 133, 0.5);
}
</style>
```
:::
:::
### 是否展示拖拽图标
::: demo 传入`showDragsign`设置面板所有的拖拽图标
``` html
<template>
    <div class="plane-container">
        <cpc-drag-plane :amount="3" showDragsign>
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="3" :showDragsign="false">
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="3" dragRight>
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
        <cpc-drag-plane :amount="3" dragRight :showDragsign="false">
            <template #view1>
                <div class="view view1"></div>
            </template>
            <template #view2>
                <div class="view view2"></div>
            </template>
            <template #view3>
                <div class="view view3"></div>
            </template>
        </cpc-drag-plane>
    </div>
</template>

<style>
.plane-container {
    display: flex;
}
.plane-container > div {
    margin: 0 10px;
}
.view {
    width: 100%;
    height: 100%;
}
.view1 {
    background: rgba(255, 142, 244, 0.5);
}
.view2 {
    background: rgba(253, 255, 149, 0.5);
}
.view3 {
    background: rgba(112, 236, 255, 0.5);
}
.view4 {
    background: rgba(112, 255, 133, 0.5);
}
</style>
```
:::


## API

### 属性
属性|说明|类型|默认值
:---|:---|:---|:---
height|设置组件的高度，支持所有css值|String|'500px'
width|设置组件的宽，支持所有css值|String|'300px'
direction|纵向'column'，横向'row'|String|'column'
amount|面板的个数|Number|2
safeDistance|面板间拖拽的安全距离，单位px|Number|24
boxSaveDistance|盒子拖动变换的安全距离，单位px|Number|100
showDragsign|显示拖拽的标识|Boolean|true
dragTop|允许组件上方进行拖拽变换|Boolean|false
dragBottom|允许组件下方进行拖拽变换|Boolean|false
dragLeft|允许组件左边进行拖拽变换|Boolean|false
dragRight|允许组件右边进行拖拽变换|Boolean|false

### 事件
事件|说明|返回值
:---|:---|:---
-|-|-

## TODO
* 横向的拖拽判断
## 备注