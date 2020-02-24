## 加载效果
### 伪类:after叠加与动画延迟
::: demo 波纹：动画scale与opacity渐变
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
::: demo 跳动波：增加跳动动画
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
        70% {transform: translateY(0);}
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
### box-shadow应用
::: demo 星月弧：inset-box-shadow + 动画
``` html
<template>
    <div class="loading-box">
        <div class="rotate-one">
        </div>
        <div class="rotate-two">
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
        margin: 0 5px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 8px 5px rgb(64, 96, 255) inset;
        animation: rotateAni 2s linear infinite;
    }
    .loading-box > .rotate-two {
        margin: 0 5px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 8px 5px rgb(215, 83, 255) inset;
        animation: rotateAni 2s ease 500ms infinite;
    }
    @keyframes rotateAni {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
</style>
```
:::
::: demo 探照：box-shadow + 动画
``` html
<template>
    <div class="loading-box">
        <div class="rotate-one">
        </div>
        <div class="rotate-two">
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
        margin: 0 5px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 8px 5px rgb(64, 96, 255);
        animation: rotateAni 2s linear infinite;
    }
    .loading-box > .rotate-two {
        margin: 0 5px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 8px 5px rgb(215, 83, 255);
        animation: rotateAni 2s ease 500ms infinite;
    }
    @keyframes rotateAni {
        0% {transform: rotate(0);}
        100% {transform: rotate(360deg);}
    }
</style>
```
:::
