## 轮播动画
### 3D空间变换
::: demo 三棱柱
``` html
<template>
    <div class="stage">
        <div class="box">
            <div class="elem" v-lazy:background-image= "{src: '/static/effect/carousel/1.png'}"></div>
            <div class="elem" v-lazy:background-image= "{src: '/static/effect/carousel/2.png'}"></div>
            <div class="elem" v-lazy:background-image= "{src: '/static/effect/carousel/3.png'}"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.stage {
    width: 100%;
    height: 500px;
    background: rgb(34, 4, 54);
    perspective: 800px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    transform-style: preserve-3d;
    position: relative;
    transform-origin: 50% 50%;
    animation: trans ease infinite 6s;
}

.elem {
    width: 160px;
    height: 360px;
    position: absolute;
    top: -180px;
    left: -80px;
    opacity: 0.88;
}

.box > .elem:first-child {
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    transform: translateZ(46px);
}

.box > .elem:nth-child(2) {
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    transform: rotateY(-120deg) translateZ(46px);
}

.box > .elem:last-child {
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    transform: rotateY(120deg) translateZ(46px);
}

@keyframes trans {
    0% {transform: rotateY(0deg);}
    33% {transform: rotateY(120deg);}
    66% {transform: rotateY(240deg);}
    100% {transform: rotateY(360deg);}
}
</style>
```
:::
::: demo 三棱柱扩展
``` html
<template>
    <div class="stage">
        <div class="box">
            <div class="elem" v-lazy:background-image= "{src: '/static/effect/carousel/1.png'}"></div>
            <div class="elem" v-lazy:background-image= "{src: '/static/effect/carousel/2.png'}"></div>
            <div class="elem" v-lazy:background-image= "{src: '/static/effect/carousel/3.png'}"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.stage {
    width: 100%;
    height: 500px;
    background: rgb(34, 4, 54);
    perspective: 800px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    transform-style: preserve-3d;
    position: relative;
    transform-origin: 50% 50%;
    animation: trans ease infinite 6s;
}

.elem {
    width: 160px;
    height: 360px;
    position: absolute;
    top: -180px;
    left: -80px;
    opacity: 0.88;
}

.box > .elem:first-child {
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    transform: translateZ(86px);
}

.box > .elem:nth-child(2) {
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    transform: rotateY(-120deg) translateZ(86px);
}

.box > .elem:last-child {
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    transform: rotateY(120deg) translateZ(86px);
}

@keyframes trans {
    0% {transform: rotateY(0deg);}
    33% {transform: rotateY(120deg);}
    66% {transform: rotateY(240deg);}
    100% {transform: rotateY(360deg);}
}
</style>
```
:::