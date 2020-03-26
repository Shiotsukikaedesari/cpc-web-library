## 浮雕
### 平面浮雕
::: demo 
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
        box-shadow: 4px 4px 8px rgb(248, 248, 248) inset;
        cursor: pointer;
    }
    .relief-elem::before {
        content: '';
        width: 60px;
        height: 60px;
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        box-shadow: -4px -6px 6px 2px white;
    }
    .relief-elem::after {
        content: '';
        width: 60px;
        height: 60px;
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        box-shadow: 4px 6px 6px 2px rgb(228, 228, 228);
    }
    .relief-circle {
        border-radius: 50%;
    }
    .relief-circle::before {
        border-radius: 50%;
    }
    .relief-circle::after {
        border-radius: 50%;
    }
    .relief-word {
        width: 200px;
        height: 40px;
        padding: 10px;
        font-size: 18px;
    }
    .relief-word::before {
        width: 100%;
        border-radius: 20px;
        height: 40px;
    }
    .relief-word::after {
        width: 100%;
        border-radius: 20px;
        height: 40px;
    }
</style>
```
:::
### 凹面浮雕
::: demo 
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
        width: 60px;
        height: 60px;
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        box-shadow: -4px -6px 6px 2px white;
    }
    .relief-elem::after {
        content: '';
        width: 60px;
        height: 60px;
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        box-shadow: 4px 6px 6px 2px rgb(228, 228, 228);
    }
    .relief-circle {
        border-radius: 50%;
    }
    .relief-circle::before {
        border-radius: 50%;
    }
    .relief-circle::after {
        border-radius: 50%;
    }
    .relief-word {
        width: 200px;
        height: 40px;
        padding: 10px;
        font-size: 18px;
    }
    .relief-word::before {
        width: 100%;
        border-radius: 20px;
        height: 40px;
    }
    .relief-word::after {
        width: 100%;
        border-radius: 20px;
        height: 40px;
    }
</style>
```
:::