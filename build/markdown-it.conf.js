const markdownItAnchor = require('markdown-it-anchor')
const hljs = require('highlight.js')

// 转移一下锚点
let slugify = (str) => {
  return require('transliteration').slugify(str)
}

module.exports = {
    use: [
      [markdownItAnchor, {
        level: [1, 2, 3], // 添加超链接锚点的标题级别
        slugify,
        permalink: true, // 开启标题锚点功能
        permalinkBefore: true, // 在标题前创建锚点
        permalinkSymbol: '#'
      }],
    ],
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
                  hljs.highlight(lang, str, true).value +
                  '</code></pre>';
        } catch (__) {}
      }
    }
  }