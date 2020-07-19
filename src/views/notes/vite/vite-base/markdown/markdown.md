## vite-基础

Vite是一个独立的web开发构建工具，支持多种框架，特别支持Vue框架。

### 官网
[https://github.com/vitejs/vite](https://github.com/vitejs/vite)

### 安装
* `npm i vite -g`
* `npm init vite-app <project-name>`
* `cd <project-name>`
* `npm install`
*  `npm run dev`

### 项目打包
* `npm run build`

### 项目目录
```
+-dist  打包目录
+-pubilc 静态资源
+-src
    |
    +-assets 资源文件夹
    +-components  组件文件夹
    --App.vue
    --index.css
    --main.js 入口文件
--index.html index文件
--vite.config.js vite配置文件
```