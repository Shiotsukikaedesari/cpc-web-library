## 加载效果
### 波纹
::: demo 波纹：伪类 + 缩放 + 渐变
``` html
<template>
    <div class="loading-box">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container > div {
        width: 30px;
        height: 30px;
        margin: 0 5px;
        border-radius: 50%;
        position: relative;
    }
    .container > div:after {
        content: '';
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .container > div:first-child {
        background: rgb(91, 233, 255);
    }
    .container > div:nth-child(2) {
        background: rgb(48, 169, 255);
    }
    .container > div:nth-child(3) {
        background: rgb(41, 94, 255);
    }
    .container > div:last-child {
        background:  rgb(26, 37, 255);
    }

    .container > div:first-child:after {
        background: rgb(91, 233, 255);
        animation: loadingAni 2s ease infinite;
    }
    .container > div:nth-child(2):after {
        background: rgb(48, 169, 255);
        animation: loadingAni 2s ease 300ms infinite;
    }
    .container > div:nth-child(3):after {
        background: rgb(41, 94, 255);
        animation: loadingAni 2s ease 600ms infinite;
    }
    .container > div:last-child:after {
        background: rgb(26, 37, 255);
        animation: loadingAni 2s ease 900ms infinite;
    }
    @keyframes loadingAni {
        0% {opacity: 1; transform: scale(1, 1);}
        100% {opacity: 0; transform: scale(2.5, 2.5);}
    }
</style>
```
:::
::: demo 跳动：伪类 + 缩放 + 渐变 + 跳动动画
``` html
<template>
    <div class="loading-box">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container > div {
        width: 30px;
        height: 30px;
        margin: 0 5px;
        border-radius: 50%;
        position: relative;
    }
    .container > div:after {
        content: '';
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .container > div:first-child {
        background: rgb(249, 162, 255);
        animation: jump1 2s linear infinite;
    }
    .container > div:nth-child(2) {
        background: rgb(245, 105, 255);
        animation: jump1 2s linear 200ms infinite;
    }
    .container > div:nth-child(3) {
        background: rgb(252, 31, 204);
        animation: jump1 2s linear 400ms infinite;
    }
    .container > div:last-child {
        background:  rgb(255, 18, 144);
        animation: jump1 2s linear 600ms infinite;
    }

    .container > div:first-child:after {
        background: rgb(249, 162, 255);
        animation: jump2 2s ease infinite;
    }
    .container > div:nth-child(2):after {
        background: rgb(245, 105, 255);
        animation: jump2 2s ease 200ms infinite;
    }
    .container > div:nth-child(3):after {
        background: rgb(252, 31, 204);
        animation: jump2 2s ease 400ms infinite;
    }
    .container > div:last-child:after {
        background: rgb(255, 18, 144);
        animation: jump2 2s ease 600ms infinite;
    }
    @keyframes jump1 {
        0% {transform:translateY(0)}
        10%{transform:translateY(15px)}
        30% {transform: translateY(-2px);}
        50% {transform: translateY(-4px);}
        60%{transform: translateY(-2px);}
        80% {transform: translateY(0);}
    }
    @keyframes jump2 {
        0% {opacity: 1;}
        10% {opacity: 1;transform: scale(1, 1);}
        60% {opacity: 0;transform: scale(2.5, 2.5);}
        100% {opacity: 0;transform: scale(2.5, 2.5);}
    }
</style>
```
:::
::: demo 碰撞：伪类 + 缩放 + 渐变 + 撞击动画
``` html
<template>
    <div class="loading-box">
        <div class="container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container > div {
        width: 30px;
        height: 30px;
        margin: 0 5px;
        border-radius: 50%;
        position: relative;
    }
    .container > div:after {
        content: '';
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .container > div:first-child {
        background: rgb(200, 253, 204);
        animation: collision1 2s linear infinite;
    }
    .container > div:nth-child(2) {
        background: rgb(148, 255, 132);
        animation: collision1 2s linear 200ms infinite;
    }
    .container > div:nth-child(3) {
        background: rgb(31, 252, 49);
        animation: collision1 2s linear 400ms infinite;
    }
    .container > div:last-child {
        background:  rgb(0, 233, 93);
        animation: collision1 2s linear 600ms infinite;
    }

    .container > div:first-child:after {
        background: rgb(200, 253, 204);
        animation: collision2 2s ease infinite;
    }
    .container > div:nth-child(2):after {
        background: rgb(148, 255, 132);
        animation: collision2 2s ease 200ms infinite;
    }
    .container > div:nth-child(3):after {
        background: rgb(31, 252, 49);
        animation: collision2 2s ease 400ms infinite;
    }
    .container > div:last-child:after {
        background: rgb(0, 233, 93);
        animation: collision2 2s ease 600ms infinite;
    }
    @keyframes collision1 {
        0% {transform:translateX(0)}
        10%{transform:translateX(10px)}
        30% {transform: translateX(2px);}
        50% {transform: translateX(0px);}
    }
    @keyframes collision2 {
        0% {opacity: 1;}
        10% {opacity: 1;transform: scale(1, 1);}
        60% {opacity: 0;transform: scale(2.5, 2.5);}
        100% {opacity: 0;transform: scale(2.5, 2.5);}
    }
</style>
```
:::
### 月弧
::: demo 内弧：inset-box-shadow + 动画
``` html
<template>
    <div class="loading-box">
        <div class="rotate-one">
        </div>
        <div class="rotate-two">
        </div>
        <div class="rotate-three">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .rotate-one {
        margin: 0 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 8px 5px rgb(64, 96, 255) inset;
        animation: rotateAni 2s linear infinite;
    }
    .loading-box > .rotate-two {
        margin: 0 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 8px 5px rgb(215, 83, 255) inset;
        animation: rotateAni 2s ease 500ms infinite;
    }
    .loading-box > .rotate-three {
        margin: 0 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 6px 0 1px rgb(83, 255, 160) inset;
        animation: rotateAni 1.5s ease 500ms infinite;
    }
    @keyframes rotateAni {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
</style>
```
:::
::: demo 外弧：box-shadow + 动画
``` html
<template>
    <div class="loading-box">
        <div class="rotate-one">
        </div>
        <div class="rotate-two">
        </div>
        <div class="rotate-three">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .rotate-one {
        margin: 0 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 6px 5px rgb(64, 96, 255);
        animation: rotateAni 2s linear infinite;
    }
    .loading-box > .rotate-two {
        margin: 0 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 6px 5px rgb(215, 83, 255);
        animation: rotateAni 2s ease 500ms infinite;
    }
    .loading-box > .rotate-three {
        margin: 0 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 6px 0 1px rgb(83, 255, 160);
        animation: rotateAni 1.5s ease 500ms infinite;
    }
    @keyframes rotateAni {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
</style>
```
:::
::: demo 边框弧：border + 动画
``` html
<template>
    <div class="loading-box">
        <div class="rotate-one">
        </div>
        <div class="rotate-two">
        </div>
        <div class="rotate-three">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .rotate-one {
        margin: 0 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        border-top: 5px solid rgb(64, 96, 255);
        animation: rotateAni 2s linear infinite;
    }
    .loading-box > .rotate-two {
        margin: 0 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        border-top: 4px solid rgb(215, 83, 255);
        border-left: 4px solid rgb(215, 83, 255);
        animation: rotateAni 2s ease 500ms infinite;
    }
    .loading-box > .rotate-three {
        margin: 0 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        border-left: 4px solid rgb(83, 255, 160);
        border-right: 4px solid rgb(83, 255, 160);
        animation: rotateAni 1.5s ease 500ms infinite;
    }
    @keyframes rotateAni {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
</style>
```
:::
### 拖尾
::: demo 渐变间隔：伪类 + 定位 + 动画延迟
``` html
<template>
    <div class="loading-box">
        <div class="complex-box">
            <div class="complex-elem complex-one">
            </div>
            <div class="complex-elem complex-two">
            </div>
            <div class="complex-elem complex-three">
            </div>
            <div class="complex-elem complex-four">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .complex-box {
        width: 60px;
        height: 60px;
        position: relative;
    }
    .loading-box > .complex-box > .complex-elem {
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .loading-box > .complex-box > .complex-elem:after {
        content: '';
        position: absolute;
        top: 0;
        left: 22.5px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
    .loading-box > .complex-box > .complex-one {
        animation: complexAni 1s ease 300ms infinite;
    }
    .loading-box > .complex-box > .complex-one:after {
        background: rgba(255, 255, 255, 0.3);
    }
    .loading-box > .complex-box > .complex-two {
        animation: complexAni 1s ease 200ms infinite;
    }
    .loading-box > .complex-box > .complex-two:after {
        background: rgba(255, 255, 255, 0.5);
    }
    .loading-box > .complex-box > .complex-three {
        animation: complexAni 1s ease 100ms infinite;
    }
    .loading-box > .complex-box > .complex-three:after {
        background: rgba(255, 255, 255, 0.7);
    }
    .loading-box > .complex-box > .complex-four {
        animation: complexAni 1s ease infinite;
    }
    .loading-box > .complex-box > .complex-four:after {
        background: rgb(255, 255, 255);
    }
    @keyframes complexAni {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
</style>
```
:::
::: demo 渐变叠加：伪类 + 定位叠加 + 动画
``` html
<template>
    <div class="loading-box">
        <div class="complex-box">
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .complex-box {
        width: 60px;
        height: 60px;
        position: relative;
        animation: complexAni 1s linear infinite;
    }
    .loading-box > .complex-box > .complex-elem {
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .loading-box > .complex-box > .complex-elem:after {
        content: '';
        position: absolute;
        top: 0;
        left: 22.5px;
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
    .loading-box > .complex-box > .complex-elem:first-child {
        transform: rotate(-90deg);
    }
    .loading-box > .complex-box > .complex-elem:first-child:after {
        background: rgba(255, 255, 255, 0.1);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(2) {
        transform: rotate(-80deg);

    }
    .loading-box > .complex-box > .complex-elem:nth-child(2):after {
        background: rgba(255, 255, 255, 0.2);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(3) {
        transform: rotate(-70deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(3):after {
        background: rgba(255, 255, 255, 0.3);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(4) {
        transform: rotate(-60deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(4):after {
        background: rgba(255, 255, 255, 0.4);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(5) {
        transform: rotate(-50deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(5):after {
        background: rgba(255, 255, 255, 0.5);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(6) {
        transform: rotate(-40deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(6):after {
        background: rgba(255, 255, 255, 0.6);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(7) {
        transform: rotate(-30deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(7):after {
        background: rgba(255, 255, 255, 0.7);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(8) {
        transform: rotate(-20deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(8):after {
        background: rgba(255, 255, 255, 0.8);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(9) {
        transform: rotate(-10deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(9):after {
        background: rgba(255, 255, 255, 0.9);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(10) {
        transform: rotate(0);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(10):after {
        background: rgb(255, 255, 255);
    }
    @keyframes complexAni {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
</style>
```
:::
::: demo 渐变叠加缩放：伪类 + 缩放 + 定位叠加 + 动画
``` html
<template>
    <div class="loading-box">
        <div class="complex-box">
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
            <div class="complex-elem">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .complex-box {
        width: 60px;
        height: 60px;
        position: relative;
        animation: complexAni 1s linear infinite;
    }
    .loading-box > .complex-box > .complex-elem {
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .loading-box > .complex-box > .complex-elem:after {
        content: '';
        position: absolute;
        top: 0;
        border-radius: 50%;
    }
    .loading-box > .complex-box > .complex-elem:first-child {
        transform: rotate(-90deg);
    }
    .loading-box > .complex-box > .complex-elem:first-child:after {
        width: 6px;
        height: 6px;
        left: 27px;
        background: rgba(255, 255, 255, 0.1);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(2) {
        transform: rotate(-80deg);

    }
    .loading-box > .complex-box > .complex-elem:nth-child(2):after {
        width: 7px;
        height: 7px;
        left: 26.5px;
        background: rgba(255, 255, 255, 0.2);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(3) {
        transform: rotate(-70deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(3):after {
        width: 8px;
        height: 8px;
        left: 26px;
        background: rgba(255, 255, 255, 0.3);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(4) {
        transform: rotate(-60deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(4):after {
        width: 9px;
        height: 9px;
        left: 25.5px;
        background: rgba(255, 255, 255, 0.4);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(5) {
        transform: rotate(-50deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(5):after {
        width: 10px;
        height: 10px;
        left: 25px;
        background: rgba(255, 255, 255, 0.5);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(6) {
        transform: rotate(-40deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(6):after {
        width: 11px;
        height: 11px;
        left: 24.5px;
        background: rgba(255, 255, 255, 0.6);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(7) {
        transform: rotate(-30deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(7):after {
        width: 12px;
        height: 12px;
        left: 24px;
        background: rgba(255, 255, 255, 0.7);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(8) {
        transform: rotate(-20deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(8):after {
        width: 13px;
        height: 13px;
        left: 23.5px;
        background: rgba(255, 255, 255, 0.8);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(9) {
        transform: rotate(-10deg);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(9):after {
        width: 14px;
        height: 14px;
        left: 23px;
        background: rgba(255, 255, 255, 0.9);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(10) {
        transform: rotate(0);
    }
    .loading-box > .complex-box > .complex-elem:nth-child(10):after {
        width: 15px;
        height: 15px;
        left: 22.5px;
        background: rgb(255, 255, 255);
    }
    @keyframes complexAni {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
</style>
```
:::
### 色块渐变
::: demo 色块 + 动画延迟
``` html
<template>
    <div class="loading-box">
        <div class="color-box">
            <div></div>
            <div></div> 
            <div></div> 
            <div></div> 
            <div></div> 
            <div></div> 
            <div></div>
            <div></div> 
            <div></div> 
            <div></div> 
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .color-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .color-box > div {
        width: 10px;
        height: 5px;
        background: rgb(255, 255, 255);
    }
    .loading-box > .color-box > div:first-child {
        animation: colorAni 1.5s ease infinite;
    }
    .loading-box > .color-box > div:nth-child(2) {
        animation: colorAni 1.5s ease 50ms infinite;
    }
    .loading-box > .color-box > div:nth-child(3) {
        animation: colorAni 1.5s ease 100ms infinite;
    }
    .loading-box > .color-box > div:nth-child(4) {
        animation: colorAni 1.5s ease 150ms infinite;
    }
    .loading-box > .color-box > div:nth-child(5) {
        animation: colorAni 1.5s ease 200ms infinite;
    }
    .loading-box > .color-box > div:nth-child(6) {
        animation: colorAni 1.5s ease 250ms infinite;
    }
    .loading-box > .color-box > div:nth-child(7) {
        animation: colorAni 1.5s ease 300ms infinite;
    }
    .loading-box > .color-box > div:nth-child(8) {
        animation: colorAni 1.5s ease 350ms infinite;
    }
    .loading-box > .color-box > div:nth-child(9) {
        animation: colorAni 1.5s ease 400ms infinite;
    }
    .loading-box > .color-box > div:nth-child(10) {
        animation: colorAni 1.5s ease 450ms infinite;
    }
    @keyframes colorAni {
        0% {opacity: 0;}
        50% {opacity: 1;};
        100% {opacity: 0;}
    }
</style>
```
:::
::: demo 色块 + 动画延迟 + 动画错位
``` html
<template>
    <div class="loading-box">
        <div class="color-box">
            <div></div>
            <div></div> 
            <div></div> 
            <div></div> 
            <div></div> 
            <div></div> 
            <div></div>
            <div></div> 
            <div></div> 
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .color-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .color-box > div {
        width: 5px;
        height: 10px;
        background: rgb(255, 255, 255);
    }
    .loading-box > .color-box > div:first-child {
        animation: colorAni 1s ease 250ms infinite;
    }
    .loading-box > .color-box > div:nth-child(2) {
        animation: colorAni 1s ease 200ms infinite;
    }
    .loading-box > .color-box > div:nth-child(3) {
        animation: colorAni 1s ease 150ms infinite;
    }
    .loading-box > .color-box > div:nth-child(4) {
        animation: colorAni 1s ease 100ms infinite;
    }
    .loading-box > .color-box > div:nth-child(5) {
        animation: colorAni 1s ease 50ms infinite;
    }
    .loading-box > .color-box > div:nth-child(6) {
        animation: colorAni 1s ease infinite;
    }
    .loading-box > .color-box > div:nth-child(7) {
        animation: colorAni 1s ease 50ms infinite;
    }
    .loading-box > .color-box > div:nth-child(8) {
        animation: colorAni 1s ease 100ms infinite;
    }
    .loading-box > .color-box > div:nth-child(9) {
        animation: colorAni 1s ease 150ms infinite;
    }
    .loading-box > .color-box > div:nth-child(10) {
        animation: colorAni 1s ease 200ms infinite;
    }
    .loading-box > .color-box > div:nth-child(11) {
        animation: colorAni 1s ease 250ms infinite;
    }
    @keyframes colorAni {
        0% {opacity: 0;}
        50% {opacity: 1;};
        100% {opacity: 0;}
    }
</style>
```
:::
::: demo 色块 + 动画延迟 + 色彩渐变
``` html
<template>
    <div class="loading-box">
        <div class="color-box">
            <div></div>
            <div></div> 
            <div></div> 
            <div></div> 
            <div></div> 
            <div></div> 
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div> 
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: rgb(34, 4, 54);
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .color-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .color-box > div {
        width: 10px;
        height: 5px;
        background: rgb(255, 255, 255);
    }
    .loading-box > .color-box > div:first-child {
        animation: colorAni2 7s ease infinite;
    }
    .loading-box > .color-box > div:nth-child(2) {
        animation: colorAni2 7s ease 50ms infinite;
    }
    .loading-box > .color-box > div:nth-child(3) {
        animation: colorAni2 7s ease 100ms infinite;
    }
    .loading-box > .color-box > div:nth-child(4) {
        animation: colorAni2 7s ease 150ms infinite;
    }
    .loading-box > .color-box > div:nth-child(5) {
        animation: colorAni2 7s ease 200ms infinite;
    }
    .loading-box > .color-box > div:nth-child(6) {
        animation: colorAni2 7s ease 250ms infinite;
    }
    .loading-box > .color-box > div:nth-child(7) {
        animation: colorAni2 7s ease 300ms infinite;
    }
    .loading-box > .color-box > div:nth-child(8) {
        animation: colorAni2 7s ease 350ms infinite;
    }
    .loading-box > .color-box > div:nth-child(9) {
        animation: colorAni2 7s ease 400ms infinite;
    }
    .loading-box > .color-box > div:nth-child(10) {
        animation: colorAni2 7s ease 450ms infinite;
    }
    .loading-box > .color-box > div:nth-child(11) {
        animation: colorAni2 7s ease 500ms infinite;
    }
    .loading-box > .color-box > div:nth-child(12) {
        animation: colorAni2 7s ease 550ms infinite;
    }
    @keyframes colorAni2 {
        0% {background: red;}
        14% {background: orange;}
        28% {background: yellow;}
        42% {background: green;}
        56% {background: cyan;}
        70% {background: blue;}
        84% {background: violet;}
        100% {background: red;}
    }
</style>
```
:::
### 融合
idea by: [hcity](https://github.com/hcity002 "Github主页")
::: demo 融球：动画交错 + filter: blur()、filter: contrast()
``` html
<template>
    <div class="loading-box">
        <div class="fuse-box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>  
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loading-box {
        background: black;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading-box > .fuse-box {
        display: flex;
        justify-content: center;
        align-items: center;
        filter: contrast(20);
        width: 370px;
        height: 100px;
        background-color: black;
        animation: fuseAni2 4s ease infinite;
    }
    .loading-box > .fuse-box > div {
        margin: 0 10px;
        width: 35px;
        height: 35px;
        filter: blur(10px);
        border-radius: 50%;
        background: rgb(255, 255, 255);
    }
    .loading-box > .fuse-box > div:first-child {
        animation: fuseAni 4s ease infinite;
    }
    @keyframes fuseAni {
        0% {transform: translateX(0);}
        40% {transform: translateX(220px);}
        100% {transform: translateX(220px);}
    }
    @keyframes fuseAni2 {
        0% {transform: translateX(0);}
        40% {transform: translateX(0);}
        100% {transform: translateX(-55px);}
    }
</style>
```
:::