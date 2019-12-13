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
        // 需要区分css，js，html的高亮
        // 利用md-loader提供的工具函数
        let html = highlight(stripTemplate(token.content), 'html')
        let strip = highlight(stripScript(token.content), 'js')
        let css = highlight(stripStyle(token.content), 'css')
      return `<template slot="highlight">${html}${strip}${css}</template>`;
    } else if (!!token.info && token.info !== " ") {
      // 不是展示代码的code也加上高亮
      return highlight(token.content, token.info.trim())
    }
    return defaultRender(tokens, idx, options, env, self)
  };
};
