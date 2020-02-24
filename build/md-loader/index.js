const {
  stripScript,
  stripTemplate,
  stripStyle,
  deepStyle,
  genInlineComponentText
} = require('./util');
const md = require('./config');

module.exports = function(source) {
  const content = md.render(source);
  // 这个是获取内容的代码
  const startTag = '<!--element-demo:';
  const startTagLen = startTag.length;
  const endTag = ':element-demo-->';
  const endTagLen = endTag.length;

  let componenetsString = '';
  let id = 0; // demo 的 id
  let output = []; // 输出的内容
  let start = 0; // 字符串开始位置
  let styleOutput = `` // style的内容

  let commentStart = content.indexOf(startTag);
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  
  // 用来获取html模板
  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart));

    const commentContent = content.slice(commentStart + startTagLen, commentEnd);
    
    const html = stripTemplate(commentContent);
    const script = stripScript(commentContent);
    
    let demoComponentContent = genInlineComponentText(html, script);
    const demoComponentName = `element-demo${id}`;
    output.push(`<template slot="source"><${demoComponentName} /></template>`);
    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;
    
    let style = stripStyle(commentContent)

    if (style.trim() !== '') {
      // 区分style分区
      let startStyleTag = '<!--cpc-display-box-id:'
      let startStyleTagLen = startStyleTag.length
      let endStyleTag = ':cpc-display-box-id-->'
      let endStyleTagLen = endStyleTag.length

      let styleStart = commentContent.indexOf(startStyleTag)
      let styleEnd = commentContent.indexOf(endStyleTag, styleStart + startStyleTagLen)
      
      // 这里循环该块下面的style的id
      let styleContent = commentContent.slice(styleStart + startStyleTagLen, styleEnd)
      styleOutput += `\n.display-box-${styleContent.trim()} .show-component > div {
        ${deepStyle(stripStyle(commentContent))}
      }\n`
    }
    
    
    // 重新计算下一次的位置
    id++;
    start = commentEnd + endTagLen
    commentStart = content.indexOf(startTag, start)
    commentEnd = content.indexOf(endTag, commentStart + startTagLen)
  }
  // 用来获取display-box的id


  // 仅允许在 demo 不存在时，才可以在 Markdown 中写 script 标签
  // todo: 优化这段逻辑
  let pageScript = '';
  if (componenetsString) {
    pageScript = `<script> 
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`;
  } else if (content.indexOf('<script>') === 0) { // 硬编码，有待改善
    start = content.indexOf('</script>') + '</script>'.length;
    pageScript = content.slice(0, start);
  }

  output.push(content.slice(start));
  // 这里给style增加scoped可以固定在当下的vue组件中
  return `
    <template>
      <section class="content markdown-doc">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
    <style lang="less" scoped>
      ${styleOutput}
    </style>
  `;
};
