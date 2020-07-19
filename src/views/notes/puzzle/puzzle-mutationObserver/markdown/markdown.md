## MutationObserver

Mutation Observer API 用来监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。

### 特点
* 它等待所有脚本任务完成后，才会运行（即异步触发方式）。
* 它把 DOM 变动记录封装成一个数组进行处理，而不是一条条个别处理 DOM 变动。
* 它既可以观察 DOM 的所有类型变动，也可以指定只观察某一类变动。

### 使用

``` js
// 兼容处理
const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
// 定义需要监听的dom结构
let target = document.querySelector('demo')
// 定义监听的选项
let options = {
  attributes: true, // 监听属性的变动
  characterData: true, // 监听节点内容或节点文本的变动
  childList: true, // 监听子节点的变动
  subtree: true, // 将该观察器应用于该节点的所有后代节点
  attributeOldValue: true, // 观察attributes变动时，是否需要记录变动前的属性值。
  characterDataOldValue: true, // 观察characterData变动时，是否需要记录变动前的值。
  attributeFilter: ['class','src'] // 需要观察的特定属性
}

// 定义回调方法
let callback = (mutations, observer) => {
  // mutations: 变动数组
  // observer: 观察器实例
}

// 实例化
let observer = new MutationObserver(callback)
// 监听
observer.observe(target, options)
// 获取未处理的队列
observer.takeRecords()
// 取消监听
observer.disconnect()
```