## NodeJS-基础

## 学习地址
-暂无

## 官方文档
[http://nodejs.cn/](http://nodejs.cn/)

## 依赖环境
* Node 14

## NodeJS下载安装
[http://nodejs.cn/download/](http://nodejs.cn/download/)

## 拟全局变量
* `__dirname` 当前模块的 目录 名
* `__filename` 当前模块的 文件 名
* `exports` 文件级作用域内暴露方法变量，首次会传递给`module.exports`
* `module.exports` 暴露该模块的方法变量
* `require()` 引入模块


## 概念
### stream（流）

它是数据处理方法，用于按顺序将输入读写到输出中。<br>
流是一种处理读写文件、网络通信或任何端到端信息交换的有效方式。<br>
流的独特之处在于，它不像传统的程序那样一次将一个文件读入内存，而是逐块读取数据、处理其内容，而不是将其全部保存在内存中。<br>
<br>
总结：简单理解就是，流能优化与提高性能<br><br>


摘自：[https://juejin.im/post/5de9f4fa6fb9a016323d6f50](https://juejin.im/post/5de9f4fa6fb9a016323d6f50)

## path路径处理
``` js
const path = require('path');
```
### path.resolve([...paths])
* 将路径或路径片段的序列解析为绝对路径
* return绝对路径String

参数|类型|描述|
:---:|:--:|:---|
paths|String|文件的绝对路径或相对路径|

``` js
path.resolve('/目录1/目录2', './目录3')
// return 'C:/目录1/目录2/目录3'
path.resolve('/目录1/目录2', '../文件.html')
// reutrn '/目录1/目录2/目录4/文件.html'
```

## fs文件系统

### fs.createWriteStream(path[, options])
* 写入文件流
* return fs.WriteStream类

参数|类型|描述|
:---:|:--:|:---|
path |String|文件的绝对路径或相对路径
options |String、Object|配置选项,传入String为默认修改编码格式
options.flags|String|文件的读写模式，参见文件系统 flag 的支持。 默认值: 'w'
options.encoding|String|文件的编码格式，默认值: 'utf8'
options.fd|integer|默认值: null。
options.mode|integer| 默认值: 0o666。
options.autoClose|Boolean| 发生错误自动关闭文件描述符，默认值: true
options.emitClose|Boolean| 流结束后自动关闭文件，默认值: false。
options.start|integer|-
options.fs|Object| 重写open、 write、 writev 和 close方法，如果重写 write() 但没有重写 writev()则会降低性能

``` js
let writeStream = fs.createWriteStream(path.resolve(__dirname, '../test/write/write.js'), { flags: 'w+' })
```

调用

``` js
writeStream.write(`写入数据`)
```