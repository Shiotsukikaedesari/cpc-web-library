const hljs = require('highlight.js')
const {
  stripScript,
  stripStyle,
  stripTemplate,
  genInlineComponentText
} = require('./util')
// 高亮函数
let highlight = (str, lang) => {
  if (lang && hljs.getLanguage(lang)) {
      return '<pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              '</code></pre>'
  }
}
// demo高亮
let demoHighlight = (content) => {
  // 需要区分css，js，html的高亮
  // 利用md-loader提供的工具函数
  let html = highlight(stripTemplate(content), 'html')
  let script = highlight(stripScript(content), 'js').slice(24, -13)
  let css = highlight(stripStyle(content), 'css').slice(24, -13)
  let container = `${html}`
  if (script.trim()) {
    container = container.slice(0, -13) + '<br><br><span class="hljs-tag">&lt;script&gt;</span><br>' +
    script +
    '<br><span class="hljs-tag">&lt;/script&gt;</span></code></pre>'
  }
  if (css.trim()) {
    container = container.slice(0, -13) + '<br><br><span class="hljs-tag">&lt;style&gt;</span><br>' +
    css +
    '<br><span class="hljs-tag">&lt;/style&gt;</span></code></pre>'
  }
  return `<template slot="highlight">${container}</template>`
}
// 覆盖默认的 fence 渲染策略
module.exports = md => {
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1];
    const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);
    if (token.info.trim() === 'html' && isInDemoContainer) {
        // 在node层直接进行高亮渲染
        return demoHighlight(token.content)

    } else if (!!token.info && token.info !== " ") {
      // 不是展示代码的code也加上高亮
      return highlight(token.content, token.info.trim())
    }
    return defaultRender(tokens, idx, options, env, self)
  };
};
