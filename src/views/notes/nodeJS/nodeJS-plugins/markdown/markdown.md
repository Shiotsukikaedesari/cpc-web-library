## NodeJS-插件

## yargs命令行规范工具
用于node命令行参数解析

### 下载与文档地址
[https://www.npmjs.com/package/yargs](https://www.npmjs.com/package/yargs)

### 基本用法

* 以Object形式储存命令信息
* args['$0']为运行的脚本
* 命令的变量由空格区分，一个空格后跟随一个变量
* 以`--xx`、`-xx`为作为key后面用`=`、` `连接值为value
* key后面不接值，默认为布尔值true
* key不需要`--`、`-`直接写参数，此参数保存在argv._

``` js
// node
// node ./watch/index.js --watch=./test --output ./write/write.js -b -x 4 helloWorld

const yargs = require('yargs')
console.log(yargs.argv)

// console.log
yargs.argv = {
  _: [ 'helloWorld' ],
  watch: './test',
  output: './write/write.js',
  b: true,
  x: 4,
  '$0': 'watch\\index.js'
}
```

## inquirer命令互的工具
实现与命令行进行数据交互

### 下载与文档地址
[https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)

### 基本用法
``` js
const inquirer = require('inquirer')
let options = [
  // 配置项
]
inquirer.prompt(options).then(res => {

}).catch(err => {

})
```
.prompt(options)

参数|类型|描述|默认值
:---:|:--:|:---|:---:
type|String|表示提问的类型|-
name|String|存储当前问题回答的变量key|-
message|String|交互描述|-
default|*|交互的默认值|-
choices|列表选项，在某些type下可用，并且包含一个分隔符|-
validate|Function|对用户的回答进行校验|-
filter|Function|对用户的回答进行过滤处理，返回处理后的值|-
transformer|Function|对用户回答的显示效果进行处理(如：修改回答的字体或背景颜色)，但不会影响最终的答案的内容|-
when|Function(answers/交互过的内容)|根据前面问题的回答，判断当前问题是否需要被答|-
pageSize|Number|修改某些type类型下的渲染展示行数|-
prefix|String|修改message默认前缀|
suffix|String|修改message默认后缀|
askAnswered|Boolean|如果答案已经存在，则强制提示问题|-

options.type

参数|值|描述
:---:|:--:|:---
type|"input"|输入框
type|"confirm"|确认框
type|"list"|无序列表选择
type|"rawlist"|有序列表选择
type|"expand"|模糊选择
type|"checkbox"|多选按钮
type|"password"|密文输入
type|"editor"|代码输入

options.choices
参数|值类型|描述
:---|:---:|:---
name|String|名字，列表形式为name
checked|Boolean|是否预先选中


new inquirer.Separator()

## ora进度转轮
用于node的控制台进度美化
 
### 下载与文档地址
[https://www.npmjs.com/package/ora](https://www.npmjs.com/package/ora)

### 基本用法
``` js
const ora = require('ora')
const spinner = ora('loading...')
spinner.start()
setTimeout(() => {
  spinner.stop()
}, 2000)
```

### 属性
ora(options)

* options为单个参数时为text值

参数|类型|描述|默认值
:---:|:--:|:---|:---:
text|String|转轮后方的文字|
prefixText|String|转轮前方的文字-暂时无效|
spinner|String、Object|转轮的动画，可自定义：{interval: 80, frames: ['-', '+', '-']}| 'dots'
color|String|转轮的颜色，提供值：'black'、'red'、'green'、'yellow'、'blue'、'magenta'、'cyan'、'white'、'gray'|'cyan'
hideCursor|Boolean|隐藏鼠标指针|true
indent|Number|调整转轮的缩进-暂时无效|0
interval|Number ,ms|转轮动画每帧之间的时间间隔|自定的间隔进行、 100
stream|stream.Writable|流式信息输出|process.stderr
isEnabled|Boolean|是否将转轮信息写入日志|false
discardStdin|Boolean|暂时不懂，Discard stdin input (except Ctrl+C) while running if it's TTY. This prevents the spinner from twitching on input, outputting broken lines on Enter key presses, and prevents buffering of input while the spinner is running.This has no effect on Windows as there's no good way to implement discarding stdin properly there.|true

### 方法
* 所有的属性在运行的时候可以访问更改

方法名|参数|用法|返回值
:---:|:--:|:---|:---
start()|text|运行转轮，有text则显示text|返回当前实例
stop()| - |停止转轮并清除|返回当前实例
succeed()|text|转轮成功状态|返回当前实例
fail()|text|转轮失败状态|返回当前实例
warn()|text|转轮警告状态|返回当前实例
info()|text|转轮提示状态|返回当前实例
isSpinning|-|判断转轮当前是否在转|Boolean
stopAndPersist()|options|暂停转轮，替换设置|返回当前实例
clear()|-|清空转轮-跟stop很像|返回当前实例
render()|-|渲染帧|返回当前实例
frame()|-|获取下一帧|返回当前实例
ora.promise()|action(Promise), options|转轮对promise处理，resolve->succeed，reject->fail|返回当前实例

## chalk控制台打印
用于控制台输出美化

### 下载与文档地址
[https://www.npmjs.com/package/chalk](https://www.npmjs.com/package/chalk)

### 基本用法
``` js
const chalk = require('chalk')
console.log(chalk.blue('Hello world!'))
```
### 属性

参数|类型|描述|默认值
:---:|:--:|:---|:---:
text|String|打印文字|-

### 方法

颜色色域

方法名|参数|描述|返回值
:---:|:--:|:---|:---
Instance()|{level: 0/1/2/3}|更改打印颜色色域范围|-

Level|描述
|:---:|:---:
0|所有颜色无法使用
1|基础的16中颜色
2|256中颜色
3|一千六百万颜色

文字效果

方法名|参数|描述|返回值
:---:|:--:|:---|:---
reset()|text|重置颜色|返回当前实例
bold()|text|文字加粗|返回当前实例
dim()|text|文字少量发光|返回当前实例
italic()|text|文本倾斜|返回当前实例
underline()|text|文字加下划线|返回当前实例
invers()|text|反转背景色和前景色|返回当前实例
hidden()|text|文字影藏|返回当前实例
strikethrough()|text|文字删除线|返回当前实例
visible()|text|当instance.level > 0是打印文字|返回当前实例

文字颜色

方法名|参数|描述|返回值
:---:|:--:|:---|:---
black()|text||返回当前实例
red()|text||返回当前实例
green()|text||返回当前实例
yellow()|text||返回当前实例
blue()|text||返回当前实例
magenta()|text||返回当前实例
cyan()|text||返回当前实例
white()|text||返回当前实例
blackBright()|text| (alias: bgGray, bgGrey)|返回当前实例
redBright()|text||返回当前实例
greenBright()|text||返回当前实例
yellowBright()|text||返回当前实例
blueBright()|text||返回当前实例
magentaBright()|text||返回当前实例
cyanBright()|text||返回当前实例
whiteBright()|text||返回当前实例

文字背景色

方法名|参数|描述|返回值
:---:|:--:|:---|:---
black()|text||返回当前实例
bgBlack()|text||返回当前实例
bgRed()|text||返回当前实例
bgGreen()|text||返回当前实例
bgYellow()|text||返回当前实例
bgBlue()|text||返回当前实例
bgMagenta()|text||返回当前实例
bgCyan()|text||返回当前实例
bgWhite()|text||返回当前实例
bgBlackBright()|text| (alias: bgGray, bgGrey)|返回当前实例
bgRedBright()|text||返回当前实例
bgGreenBright()|text||返回当前实例
bgYellowBright()|text||返回当前实例
bgBlueBright()|text||返回当前实例
bgMagentaBright()|text||返回当前实例
bgCyanBright()|text||返回当前实例
bgWhiteBright()|text||返回当前实例

* instance >= 2时的颜色描述
* 加bg变小驼峰改背景颜色

方法名|参数|用法|返回值
:---:|:--:|:---|:---
rgb|rgb色值|chalk.rgb(255, 136, 0)|返回当前实例
hex|hex色值 String|chalk.hex('#FF8800')|返回当前实例
keyword|css色值|chalk.keyword('orange')|返回当前实例
hsl|hsl色值|chalk.hsl(32, 100, 50)|返回当前实例
hsv|hsv色值|chalk.hsv(32, 100, 100)|返回当前实例
hwb|hwb色值|chalk.hwb(32, 0, 50)|返回当前实例
ansi|ansi色值| chalk.ansi(31).bgAnsi(93)|返回当前实例
ansi256|ansi256色值|chalk.ansi256(194)|返回当前实例

