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

### async（异步）
node的优势就是在极强的异步操作，能让命令并发进行<br>
异步命令后增加sync变为同步

### stream（流）

它是数据处理方法，用于按顺序将输入读写到输出中。<br>
流是一种处理读写文件、网络通信或任何端到端信息交换的有效方式。<br>
流的独特之处在于，它不像传统的程序那样一次将一个文件读入内存，而是逐块读取数据、处理其内容，而不是将其全部保存在内存中。<br>
<br>
总结：简单理解就是能提高性能<br><br>


摘自：[https://juejin.im/post/5de9f4fa6fb9a016323d6f50](https://juejin.im/post/5de9f4fa6fb9a016323d6f50)

## path路径处理
``` js
const path = require('path')
```
### path.basename(path[, ext])
* 返回路径的最后一部分
* 给定ext则不返回ext

参数|类型|描述|默认值
:---:|:--:|:---|:---:|
paths|String|文件的绝对路径或相对路径|-|
ext|String|文件的扩展名|-|

``` js
path.basename('/目录1/目录2/文件.html')
// return '文件.html'
path.basename('/目录1/目录2/文件.html', '.html')
// return '文件'
```

### path.dirname(path)
* 返回路径的父级文件夹名

参数|类型|描述|默认值
:---:|:--:|:---|:---:|
paths|String|文件的绝对路径或相对路径|-|

``` js
path.dirname('/目录1/目录2/文件.html')
// return '目录2'
```

### path.extname(path)
* 返回路径的文件扩展名

参数|类型|描述|默认值
:---:|:--:|:---|:---:|
paths|String|文件的绝对路径或相对路径|-|

``` js
path.extname('/目录1/目录2/文件.html')
// return '.html'
```

### path.resolve([...paths])
* 将路径或路径片段的序列解析为绝对路径
* return绝对路径String

参数|类型|描述|默认值|
:---:|:--:|:---|:---:|
paths|String|文件的绝对路径或相对路径|-|

``` js
path.resolve('/目录1/目录2', './目录3')
// return 'C:/目录1/目录2/目录3'
path.resolve('/目录1/目录2', '../文件.html')
// reutrn '/目录1/目录2/目录4/文件.html'
```

## fs文件系统
``` js
const fs = require('fs')
```

### 文件系统标识
参数|描述|
:---|:---|
'a'|打开文件用于追加。 如果文件不存在，则创建该文件。
'ax'|类似于 'a'，但如果路径存在，则失败。
'a+'|打开文件用于读取和追加。 如果文件不存在，则创建该文件。
'ax+'|类似于 'a+'，但如果路径存在，则失败。
'as'|打开文件用于追加（在同步模式中）。 如果文件不存在，则创建该文件。
'as+'|打开文件用于读取和追加（在同步模式中）。 如果文件不存在，则创建该文件。
'r'|打开文件用于读取。 如果文件不存在，则会发生异常。
'r+'|打开文件用于读取和写入。 如果文件不存在，则会发生异常。
'rs+'|打开文件用于读取和写入（在同步模式中）。 指示操作系统绕过本地的文件系统缓存。这对于在 NFS 挂载上打开文件时非常有用，因为它可以跳过可能过时的本地缓存。 它对 I/O 性能有非常实际的影响，因此不建议使用此标志（除非真的需要）。这不会把 fs.open() 或 fsPromises.open() 变成同步的阻塞调用。 如果需要同步的操作，则应使用 fs.openSync() 之类的。
'w'|打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件。
'wx'|类似于 'w'，但如果路径存在，则失败。
'w+'|打开文件用于读取和写入。 如果文件不存在则创建文件，如果文件存在则截断文件。
'wx+'|类似于 'w+'，但如果路径存在，则失败。

### fs.existsSync(path)
* 检测文件是否存在
* `fs.exists`已弃用

参数|类型|描述|默认值
:---:|:--:|:---|:---|
path|String|文件路径

``` js
if (fs.existsSync('文件')) {
  console.log('该路径已存在');
}
```

### fs.mkdir(path[, options], callback)
* 创建目录

参数|类型|描述|默认值
:---:|:--:|:---|:---|
path|String|读取路径
options|String、Object|相关配置|-
options.recursive|Boolean|递归创建目录|false
options.mode|String|windows上不支持|0o777
callback|Function|回调函数|-
callback.err|Error|失败信息|-

``` js
// 创建 `/目录1/目录2/目录3`，不管 `/目录1` 和 `/目录1/目录2` 是否存在。
fs.mkdir('/目录1/目录2/目录3', { recursive: true }, (err) => {
  if (err) throw err
});
```

### fs.mkdirSync(path[, options])
* 创建目录 同步
* return err

参数|类型|描述|默认值
:---:|:--:|:---|:---|
path|String|读取路径
options|String、Object|相关配置|-
options.recursive|Boolean|递归创建目录|false
options.mode|String|windows上不支持|0o777

``` js
// 创建 `/目录1/目录2/目录3`，不管 `/目录1` 和 `/目录1/目录2` 是否存在。
fs.mkdirSync('/目录1/目录2/目录3', { recursive: true })
```

### fs.readdir(path[, options], callback)
* 异步读取目录的内容

参数|类型|描述|默认值
:---:|:--:|:---|:---|
path|String|读取路径
options|String、Object|相关配置|-
options.encoding|string|编码格式|'utf8'
options.withFileTypes|Boolean||false
callback|Function|回调函数|-
callback.err|Error|失败信息|-
callback.files|Object|目录中文件名称的数组|-

``` js
fs.readdir('test', (err, files) => {
  if (err) {
    console.log(err)
  }
}))
```

### fs.readdirSync(path[, options])
读取文件夹信息

参数|类型|描述|默认值
:---:|:--:|:---|:---|
path|String|读取路径
options|String、Object|相关配置|-
options.encoding|string|编码格式|'utf8'
options.withFileTypes|Boolean||false

``` js
let dir = fs.readdirSync('test')
console.log(dir)
```
### dirent.isFile()
判断fs.readdir与fs.readdirSync的是否为文件

### fs.readFile(path[, options], callback)
读取文件信息

参数|类型|描述|默认值
:---:|:--:|:---|:---|
path|String|读取路径
options|String、Object|相关配置|-
options.encoding|string|编码格式|'utf8'
options.flag|String|文件的查看方式|'r'
callback|Function|回调函数|-
callback.err|Error|失败信息|-
callback.data|Object|文件内容|-

``` js
fs.readFile('test', (err, files) => {
  if (err) {
    console.log(err)
  }
})
```

### fs.readFileSync(path[, options])
读取文件信息

参数|类型|描述|默认值
:---:|:--:|:---|:---|
path|String|读取路径
options|String、Object|相关配置|-
options.encoding|string|编码格式|'utf8'
options.flag|String|文件的查看方式|'r'

``` js
let file = fs.readFileSync('test')
console.log(file)
```

### fs.createWriteStream(path[, options])
* 写入文件流
* return fs.WriteStream类

参数|类型|描述|默认值
:---:|:--:|:---|:---|
path |String|文件的绝对路径或相对路径|
options |String、Object|配置选项,传入String为默认修改编码格式|
options.flags|String|文件的读写模式，参见文件系统 flag 的支持。 |'w'|
options.encoding|String|文件的编码格式|'utf8'
options.fd|integer||null。
options.mode|integer| |0o666。
options.autoClose|Boolean| 发生错误自动关闭文件描述符|true
options.emitClose|Boolean| 流结束后自动关闭文件|false。
options.start|integer|-|-
options.fs|Object| 重写open、 write、 writev 和 close方法，如果重写 write() 但没有重写 writev()则会降低性能|-

``` js
let writeStream = fs.createWriteStream(path.resolve(__dirname, '../test/write/write.js'), { flags: 'w+' })
```

调用

``` js
writeStream.write(`写入数据`)
```

## process进程
全局变量不需要引入

### process.argv
获取命令行命令与参数的相关信息

``` js
// node
// node watch --watch ./test/views --output ./write/write.js

process.argv.forEach(elem => {
  console.log(elem)
})

// C:\Program Files\nodejs\node.exe
// C:\Program Files\demo\watch
// --watch
// ./test/views
// --output
// ./write/write.js
```
### process.exit([code])
* 以退出状态 code 指示 Node.js 同步地终止进程。
* 执行 Node.js 的 shell 应该得到的退出码为 1

参数|类型|描述|默认值
:---:|:--:|:---|:---:|
code|Number|code指示|0 或 process.exitCode|

``` js
process.exit(1)
```

### process.exitCode
* 当进程正常退出，或通过 process.exit() 退出且未指定退出码时，此数值将作为进程的退出码

``` js
process.exitCode = 1
```