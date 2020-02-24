const { compileTemplate } = require('@vue/component-compiler-utils');
const compiler = require('vue-template-compiler');

function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

function deepStyle (style) {
  let result = style.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g, '').replace(/\s{2,}/g, '')
  let aniList = []
  // 先找出 animation
  let animation = result.indexOf('@')
  while(animation > -1) {
    let end = result.indexOf('}}') + 2
    // 方便一起加 }
    aniList.push(result.slice(animation, end - 1))
    result = result.slice(0, animation) + result.slice(end, result.length)
    animation = result.indexOf('@')
  }
  // 通过找 } 来进行代码分块
  let styleList = result.split('}')
  // 删除最后一个空元素
  styleList.splice(-1, 1)
  styleList = styleList.concat(aniList)
  styleList.forEach((elem, i, arr) => {
    // 区分动画
    if (elem[0] === '@') {
      arr[i] = `${elem}}`
    } else {
      arr[i] = `/deep/ ${elem}}`
    }
      
  })
  return styleList.join('')
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
function stripTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function pad(source) {
  return source
    .split(/\r?\n/)
    .map(line => `  ${line}`)
    .join('\n');
}

function genInlineComponentText(template, script) {
  // https://github.com/vuejs/vue-loader/blob/423b8341ab368c2117931e909e2da9af74503635/lib/loaders/templateLoader.js#L46
  const finalOptions = {
    source: `<div>${template}</div>`,
    filename: 'inline-component', // TODO：这里有待调整
    compiler
  };
  const compiled = compileTemplate(finalOptions);
  // tips
  if (compiled.tips && compiled.tips.length) {
    compiled.tips.forEach(tip => {
      console.warn(tip);
    });
  }
  // errors
  if (compiled.errors && compiled.errors.length) {
    console.error(
      `\n  Error compiling template:\n${pad(compiled.source)}\n` +
        compiled.errors.map(e => `  - ${e}`).join('\n') +
        '\n'
    );
  }
  let demoComponentContent = `
    ${compiled.code}
  `;
  // todo: 这里采用了硬编码有待改进
  script = script.trim();
  if (script) {
    script = script.replace(/export\s+default/, 'const democomponentExport =');
  } else {
    script = 'const democomponentExport = {}';
  }
  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })()`;
  return demoComponentContent;
}

module.exports = {
  stripScript,
  stripStyle,
  deepStyle,
  stripTemplate,
  genInlineComponentText
};
