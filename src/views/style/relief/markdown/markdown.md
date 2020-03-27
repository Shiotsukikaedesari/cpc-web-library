## 浮雕原理
### 平面浮雕
::: demo 单个div，通过盒子模型的`box-shadow`调整每个边的阴影大小颜色
``` html
<template>
    <div class="relief">
        <div class="relief-elem flex-row-center">
            <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
        </div>
        <div class="relief-elem relief-circle flex-row-center">
            <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
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
            <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
        </div>
        <div class="relief-elem relief-circle flex-row-center">
            <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
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
            <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
        </div>
        <div class="relief-elem relief-circle flex-row-center">
            <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
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
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-plane relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-plane relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-grey-light-concave flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-concave relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-concave relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-grey-light-convex flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-light-convex relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
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
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-plane relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-plane relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-grey-dark-concave flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-concave relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-concave relief-word flex-row-center"  style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-grey-dark-convex flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-grey-dark-convex relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
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
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-plane relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-plane relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-red-light-concave flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-concave relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-concave relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-red-light-convex flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-light-convex relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
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
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-plane relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-plane relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-red-dark-concave flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-concave relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-concave relief-word flex-row-center"  style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-red-dark-convex flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-red-dark-convex relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
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
### 绿色-浅色系
::: demo 背景：`relief-bg-green-light`，元素：`relief-elem`， 风格：`relief-green-light-plane`、`relief-green-light-concave`、`relief-green-light-convex`
``` html
<template>
    <div class="relief-bg-green-light flex-row-center">
        <div class="flex-column-center">
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-green-light-plane flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-light-plane relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-light-plane relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-green-light-concave flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-light-concave relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-light-concave relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-green-light-convex flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-light-convex relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-light-convex relief-word flex-row-center">Hello World!</div>
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

### 绿色-深色系
::: demo 背景：`relief-bg-green-dark`，元素：`relief-elem`， 风格：`relief-green-dark-plane`、`relief-green-dark-concave`、`relief-green-dark-convex`
``` html
<template>
    <div class="relief-bg-green-dark flex-row-center">
        <div class="flex-column-center">
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-green-dark-plane flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-dark-plane relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-dark-plane relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-green-dark-concave flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-dark-concave relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-dark-concave relief-word flex-row-center"  style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-green-dark-convex flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-dark-convex relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-green-dark-convex relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
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
### 蓝色-浅色系
::: demo 背景：`relief-bg-blue-light`，元素：`relief-elem`， 风格：`relief-blue-light-plane`、`relief-blue-light-concave`、`relief-blue-light-convex`
``` html
<template>
    <div class="relief-bg-blue-light flex-row-center">
        <div class="flex-column-center">
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-blue-light-plane flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-light-plane relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-light-plane relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-blue-light-concave flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-light-concave relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-light-concave relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-blue-light-convex flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-light-convex relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-light-convex relief-word flex-row-center">Hello World!</div>
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

### 蓝色-深色系
::: demo 背景：`relief-bg-blue-dark`，元素：`relief-elem`， 风格：`relief-blue-dark-plane`、`relief-blue-dark-concave`、`relief-blue-dark-convex`
``` html
<template>
    <div class="relief-bg-blue-dark flex-row-center">
        <div class="flex-column-center">
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-blue-dark-plane flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-dark-plane relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-dark-plane relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-blue-dark-concave flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-dark-concave relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-dark-concave relief-word flex-row-center"  style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-blue-dark-convex flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-dark-convex relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-blue-dark-convex relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
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
### 自定义色-浅色系
::: demo 背景：`relief-bg-DIY-light`，元素：`relief-elem`， 风格：`relief-DIY-light-plane`、`relief-DIY-light-concave`、`relief-DIY-light-convex`
``` html
<template>
    <div class="relief-bg-DIY-light flex-row-center">
        <div class="flex-column-center">
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-DIY-light-plane flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-light-plane relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-light-plane relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-DIY-light-concave flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-light-concave relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-light-concave relief-word flex-row-center">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-DIY-light-convex flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-light-convex relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(50, 50, 50)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-light-convex relief-word flex-row-center">Hello World!</div>
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

### 自定义色-深色系
::: demo 背景：`relief-bg-DIY-dark`，元素：`relief-elem`， 风格：`relief-DIY-dark-plane`、`relief-DIY-dark-concave`、`relief-DIY-dark-convex`
``` html
<template>
    <div class="relief-bg-DIY-dark flex-row-center">
        <div class="flex-column-center">
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-DIY-dark-plane flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-dark-plane relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-dark-plane relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-DIY-dark-concave flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-dark-concave relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-dark-concave relief-word flex-row-center"  style="color: rgb(150, 150, 150)">Hello World!</div>
            </div>
            <div class="relief-box flex-row-center">
                <div class="relief-elem relief-DIY-dark-convex flex-row-center">
                    <cpc-icon  code="#icon-desktop-mac" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-dark-convex relief-circle flex-row-center">
                    <cpc-icon  code="#icon-play" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div class="relief-elem relief-DIY-dark-convex relief-word flex-row-center" style="color: rgb(150, 150, 150)">Hello World!</div>
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
## 应用
::: demo 
``` html
<template>
    <div class="demo flex-row-center">
        <div class="index relief-bg-grey-light flex-column-between">
            <div class="header flex-row-between">
                <div class="relief-elem relief-grey-light-plane flex-row-center">
                    <cpc-icon code="#icon-arrow-left" size="14px" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
                <div>PLAYING NOW</div>
                <div class="relief-elem relief-grey-light-plane flex-row-center">
                    <cpc-icon code="#icon-menu" size="14px" color="rgb(150, 150, 150)"></cpc-icon>
                </div>
            </div>
            <div class="picture flex-row-center">
                <div class="relief-elem relief-grey-light-plane flex-row-center">
                    <div
                    class="elem player"
                    v-lazy:background-image= "{src: '/static/style/music.png'}"></div>
                </div>
            </div>
            <div class="list-box flex-column" v-for="item in listData">
                <div class="list-elem flex-row-between" :class="{'relief-bg-grey-dark': item.chouse}">
                    <div class="list-elem-left">
                        <div v-text="item.name" :style="{'color': item.chouse ? 'white' : 'black'}"></div>
                        <div v-text="item.author"></div>
                    </div>
                    <div class="list-elem-right flex-row-center">
                        <div
                        class="relief-elem relief-grey-light-plane  flex-row-center"
                        :class="{'relief-grey-dark-concave': item.chouse}"
                        >
                            <cpc-icon :code="item.chouse ? '#icon-pause' : '#icon-play'" size="14px" color="rgb(150, 150, 150)"></cpc-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            listData: [
                {name: 'Tell Your World', author: '初音ミク' , chouse: false},
                {name: 'ロミオとシンデレラ', author: 'Hatsune Miku' , chouse: true},
                {name: 'Glow', author: '初音未来' , chouse: false},
                {name: '夢と葉桜', author: '初音未来/青木月光' , chouse: false}
            ]
        }
    }
}
</script>

<style>
    .index {
        width: 375px;
        height: 667px;
        border-radius: 10px;
        padding: 5px 10px;
    }
    .index > .header {
        height: 10%;
        width: 100%;
    }
    .index > .header > .relief-elem {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .index > .picture {
        height: 40%;
        width: 100%;
        
    }
    .index > .picture > .relief-elem {
        height: 250px;
        width: 250px;
        padding: 20px;
        border-radius: 50%;
        overflow: hidden;
    }
    .index > .picture > .relief-elem > .elem {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        
    }
    .index > .list-box {
        height: 50%;
        width: 100%;
    }
    .index > .list-box > .list-elem {
        width: 100%;
        padding: 5px 5px;
        border-radius: 8px;
    }
    .index > .list-box > .list-elem > .list-elem-left {
        width: 80%;
    }
    .index > .list-box > .list-elem > .list-elem-left > div:first-child {
        font-size: 16px;
        margin-bottom: 5px;
        margin-left: 10px;
    }
    .index > .list-box > .list-elem > .list-elem-left > div:last-child {
        font-size: 14px;
        color: grey;
        margin-left: 10px;
    }
    .index > .list-box > .list-elem > .list-elem-right {
        width: 20%;
    }
    .index > .list-box > .list-elem > .list-elem-right > div {
        width: 40px;
        height: 40px;
        border-radius: 5px;
    }
    .player {
        animation: demoRotate 12s linear infinite;
    }
    @keyframes demoRotate {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
</style>
```
:::
## class说明
class类名|说明|
:---|:---|
relief-elem|浮雕元素基类|
relief-bg-grey-light|背景色：灰色-浅色系|
relief-grey-light-plane|元素色调与风格：灰色-浅色系-平面|
relief-grey-light-concave|元素色调与风格：灰色-浅色系-凹面|
relief-grey-light-convex|元素色调与风格：灰色-浅色系-凸面|
relief-bg-grey-dark|背景色：灰色-深色系|
relief-grey-dark-plane|元素色调与风格：灰色-深色系-平面|
relief-grey-dark-concave|元素色调与风格：灰色-深色系-凹面|
relief-grey-dark-convex|元素色调与风格：灰色-深色系-凸面|
relief-bg-red-light|背景色：红色-浅色系|
relief-red-light-plane|元素色调与风格：红色-浅色系-平面|
relief-red-light-concave|元素色调与风格：红色-浅色系-凹面|
relief-red-light-convex|元素色调与风格：红色-浅色系-凸面|
relief-bg-red-dark|背景色：红色-深色系|
relief-red-dark-plane|元素色调与风格：红色-深色系-平面|
relief-red-dark-concave|元素色调与风格：红色-深色系-凹面|
relief-red-dark-convex|元素色调与风格：红色-深色系-凸面|
relief-bg-green-light|背景色：绿色-浅色系|
relief-green-light-plane|元素色调与风格：绿色-浅色系-平面|
relief-green-light-concave|元素色调与风格：绿色-浅色系-凹面|
relief-green-light-convex|元素色调与风格：绿色-浅色系-凸面|
relief-bg-green-dark|背景色：绿色-深色系|
relief-green-dark-plane|元素色调与风格：绿色-深色系-平面|
relief-green-dark-concave|元素色调与风格：绿色-深色系-凹面|
relief-green-dark-convex|元素色调与风格：绿色-深色系-凸面|
relief-bg-blue-light|背景色：蓝色-浅色系|
relief-blue-light-plane|元素色调与风格：蓝色-浅色系-平面|
relief-blue-light-concave|元素色调与风格：蓝色-浅色系-凹面|
relief-blue-light-convex|元素色调与风格：蓝色-浅色系-凸面|
relief-bg-blue-dark|背景色：蓝色-深色系|
relief-blue-dark-plane|元素色调与风格：蓝色-深色系-平面|
relief-blue-dark-concave|元素色调与风格：蓝色-深色系-凹面|
relief-blue-dark-convex|元素色调与风格：蓝色-深色系-凸面|
relief-bg-DIY-light|背景色：自定义色-浅色系|
relief-DIY-light-plane|元素色调与风格：自定义色-浅色系-平面|
relief-DIY-light-concave|元素色调与风格：自定义色-浅色系-凹面|
relief-DIY-light-convex|元素色调与风格：自定义色-浅色系-凸面|
relief-bg-DIY-dark|背景色：自定义色-深色系|
relief-DIY-dark-plane|元素色调与风格：自定义色-深色系-平面|
relief-DIY-dark-concave|元素色调与风格：自定义色-深色系-凹面|
relief-DIY-dark-convex|元素色调与风格：自定义色-深色系-凸面|

## 备注
* 按钮的:hover、:active看看怎么加