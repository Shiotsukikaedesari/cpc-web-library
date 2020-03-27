## 浮雕原理
### 平面浮雕
::: demo 单个div，通过盒子模型的`box-shadow`调整每个边的阴影大小颜色
``` html
<template>
    <div class="relief">
        <div class="relief-elem flex-row-center">
            <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
        </div>
        <div class="relief-elem relief-circle flex-row-center">
            <cpc-icon slot="side-ui" code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
        </div>
        <div class="relief-elem relief-word flex-row-center">Hello World!</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .relief {
        background: rgb(248, 248, 248);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .relief-elem {
        margin: 10px;
        width: 60px;
        height: 60px;
        background: rgb(248, 248, 248);
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        box-shadow:
        -4px -6px 6px 2px white,
        4px 6px 6px 2px rgb(225, 225, 225),
        4px 6px 6px 2px rgb(225, 225, 225),
        -4px -6px 6px 2px white;
    }
    .relief-circle {
        border-radius: 50%;
    }
    .relief-word {
        width: 200px;
        height: 40px;
        padding: 10px;
        font-size: 18px;
        border-radius: 20px;
    }
</style>
```
:::
### 凹面浮雕
::: demo 增加一个伪类设置外阴影，再设置box的`box-shadow`的`blur`与`inset`设置。
``` html
<template>
    <div class="relief">
        <div class="relief-elem flex-row-center">
            <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
        </div>
        <div class="relief-elem relief-circle flex-row-center">
            <cpc-icon slot="side-ui" code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
        </div>
        <div class="relief-elem relief-word flex-row-center">Hello World!</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .relief {
        background: rgb(248, 248, 248);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .relief-elem {
        margin: 10px;
        width: 60px;
        height: 60px;
        background: rgb(248, 248, 248);
        border-radius: 5px;
        position: relative;
        box-shadow: 4px 4px 8px rgb(238, 238, 238) inset;
        cursor: pointer;
    }
    .relief-elem::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        box-shadow:
            -4px -6px 6px 2px white,
            4px 6px 6px 2px rgb(225, 225, 225),
            4px 6px 6px 2px rgb(225, 225, 225),
            -4px -6px 6px 2px white;
    }
    .relief-circle {
        border-radius: 50%;
    }
    .relief-circle::before {
        border-radius: 50%;
    }
    .relief-word {
        width: 200px;
        height: 40px;
        padding: 10px;
        font-size: 18px;
        border-radius: 20px;
    }
    .relief-word::before {
        border-radius: 20px;
    }
</style>
```
:::
### 凸面浮雕
::: demo 增加一个伪类设置外阴影，box的`background`利用`radial-gradient`，调整`farthest-side`，与颜色对比达到效果
``` html
<template>
    <div class="relief">
        <div class="relief-elem flex-row-center">
            <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
        </div>
        <div class="relief-elem relief-circle flex-row-center">
            <cpc-icon slot="side-ui" code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
        </div>
        <div class="relief-elem relief-word flex-row-center">Hello World!</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .relief {
        background: rgb(248, 248, 248);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .relief-elem {
        margin: 10px;
        width: 60px;
        height: 60px;
        background: radial-gradient(farthest-side at 15px 10px, rgb(255, 255, 255), rgb(235, 235, 235));
        border-radius: 5px;
        position: relative;
        cursor: pointer;
    }
    .relief-elem::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        box-shadow:
            -4px -6px 6px 2px white,
            4px 6px 6px 2px rgb(225, 225, 225),
            4px 6px 6px 2px rgb(225, 225, 225),
            -4px -6px 6px 2px white;
    }
    .relief-circle {
        border-radius: 50%;
    }
    .relief-circle::before {
        border-radius: 50%;
    }
    .relief-word {
        width: 200px;
        height: 40px;
        padding: 10px;
        border-radius: 20px;
        font-size: 18px;
    }
    .relief-word::before {
        border-radius: 20px;
        height: 40px;
    }
</style>
```
:::
## css引用
less地址：[Github-relief.less](https://github.com/Shiotsukikaedesari/cpc-component-library/tree/master/src/assets/common/less/relief.less "Github页面")
### 灰色-浅色系
::: demo 背景：`relief-bg-grey-light`，元素：`relief-elem`， 风格：`relief-grey-light-plane`、`relief-grey-light-concave`、`relief-grey-light-convex`
``` html
<template>
    <div class="relief-bg-grey-light flex-row-center">
        <div class="flex-column-center">
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-grey-light-plane flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-plane relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-plane relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-grey-light-concave flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-concave relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-concave relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-grey-light-convex flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-convex relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-convex relief-word flex-row-center">Hello World!</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.relief-box {
    width: 100%;
}
.relief-box > .relief-elem {
    height: 60px;
    width: 60px;
    border-radius: 8px;
}
.relief-box > .relief-circle {
    border-radius: 50%;
}
.relief-box > .relief-word {
    width: 200px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    font-size: 18px;
}
</style>
```
:::
### 灰色-深色系
::: demo 背景：`relief-bg-grey-dark`，元素：`relief-elem`， 风格：`relief-grey-dark-plane`、`relief-grey-dark-concave`、`relief-grey-dark-convex`
``` html
<template>
    <div class="relief-bg-grey-dark flex-row-center">
        <div class="flex-column-center">
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-grey-dark-plane flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-plane relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-plane relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-grey-dark-concave flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-concave relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-concave relief-word flex-row-center"  style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-grey-dark-convex flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-convex relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-convex relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.relief-box {
    width: 100%;
}
.relief-box > .relief-elem {
    height: 60px;
    width: 60px;
    border-radius: 8px;
}
.relief-box > .relief-circle {
    border-radius: 50%;
}
.relief-box > .relief-word {
    width: 200px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    font-size: 18px;
}
</style>
```
:::
### 红色-浅色系
::: demo 背景：`relief-bg-red-light`，元素：`relief-elem`， 风格：`relief-red-light-plane`、`relief-red-light-concave`、`relief-red-light-convex`
``` html
<template>
    <div class="relief-bg-red-light flex-row-center">
        <div class="flex-column-center">
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-red-light-plane flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-plane relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-plane relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-red-light-concave flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-concave relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-concave relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-red-light-convex flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-convex relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-convex relief-word flex-row-center">Hello World!</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.relief-box {
    width: 100%;
}
.relief-box > .relief-elem {
    height: 60px;
    width: 60px;
    border-radius: 8px;
}
.relief-box > .relief-circle {
    border-radius: 50%;
}
.relief-box > .relief-word {
    width: 200px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    font-size: 18px;
}
</style>
```
:::

### 红色-深色系
::: demo 背景：`relief-bg-red-dark`，元素：`relief-elem`， 风格：`relief-red-dark-plane`、`relief-red-dark-concave`、`relief-red-dark-convex`
``` html
<template>
    <div class="relief-bg-red-dark flex-row-center">
        <div class="flex-column-center">
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-red-dark-plane flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-plane relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-plane relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-red-dark-concave flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-concave relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-concave relief-word flex-row-center"  style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-red-dark-convex flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-convex relief-circle flex-row-center">
                    <cpc-icon slot="side-ui" code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-convex relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.relief-box {
    width: 100%;
}
.relief-box > .relief-elem {
    height: 60px;
    width: 60px;
    border-radius: 8px;
}
.relief-box > .relief-circle {
    border-radius: 50%;
}
.relief-box > .relief-word {
    width: 200px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    font-size: 18px;
}
</style>
```
:::
## class
class类名|说明|类型|默认值
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

## 应用
