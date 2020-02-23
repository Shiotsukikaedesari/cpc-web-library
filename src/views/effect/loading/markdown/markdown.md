## 加载效果

::: demo
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
        background: rgb(48, 197, 251);
    }
    .container > div:nth-child(2) {
        background: rgb(0, 149, 255);
    }
    .container > div:nth-child(3) {
        background: rgb(31, 68, 252);
    }
    .container > div:last-child {
        background:  rgb(16, 27, 226);
    }

    .container > div:first-child:after {
        background: rgb(48, 197, 251);
        animation: loadingAni 2s ease infinite;
    }
    .container > div:nth-child(2):after {
        background: rgb(0, 149, 255);
        animation: loadingAni 2s ease 300ms infinite;
    }
    .container > div:nth-child(3):after {
        background: rgb(31, 68, 252);
        animation: loadingAni 2s ease 600ms infinite;
    }
    .container > div:last-child:after {
        background: rgb(16, 27, 226);
        animation: loadingAni 2s ease 900ms infinite;
    }
    @keyframes loadingAni {
        0% {opacity: 1; transform: scale(1, 1);}
        100% {opacity: 0; transform: scale(2.5, 2.5);}
    }
</style>
```
:::

