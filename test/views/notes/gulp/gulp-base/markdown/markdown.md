## gulp构建工具-基础

## 学习地址

[https://www.bilibili.com/video/BV11J411y7N](https://www.bilibili.com/video/BV11J411y7N)

## 官方文档
[gulpjs.com.cn](gulpjs.com.cn)
## 依赖环境
* Node
* gulp 3.0以上

## gulp下载安装
* `npm i gulp –g`
* `npm i gulp –D`

## gulp配置文件-gulpfile.js
* 依赖commonJS规范

``` js
const gulp = require('gulp')

// code ...
```

## gulp核心内置函数
* gulp.src() 找到源文件路径
* gulp.dest() 找到目标文件路径写入，不存在会创建
* .pipe() 程序管道，进行文件传输操作，调用方法操作

## gulp文件表达
* `img/*.png` img目录下所有png文件
* `img/*.{png, jpg}` img下所有png和jpg文件、
* `img/*/*` img下所有二级目录文件
* `img/**/*` img下所有文件
* `gulp.src(["json/*.json", "xml/*.xml", "!xml/1.xml"])` 读取json与xml文件夹下所有文件，并排除xml下1.xml文件

## gulp.task任务执行
* 单任务执行
``` js
gulp.task('test', function() {
  // some code
  return 
})

// node
gulp test
```

* 多任务执行
``` js
gulp.task('test1', function() {
  // some code
  return 
})
gulp.task('test2', function() {
  // some code
  return 
})
gulp.task('test3', function() {
  // some code
  return 
})

gulp.task('bulid', ['test1', 'test2', 'test3'], function() {
  // 执行完毕
})

// node
gulp build
```

## gulp监听-gulp.watch
``` js
gulp.tast('watch', function() {
  // param1 监听文件路径
  // param2 执行任务
  gulp.watch('/src', ['test1'])
  gulp.watch('/img', ['test2'])
})

// node
gulp watch
```

## gulp插件
* 需要下载
* 需要引入
* 用法参考官方文档 [https://gulpjs.com/plugins/](https://gulpjs.com/plugins/)

## gulp命令启动
``` js
gulp.task('default', ['watch', ...])

//node
gulp
```