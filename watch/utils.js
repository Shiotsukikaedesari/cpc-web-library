const path = require('path')

const greaHump = word => {
  if (word.includes('-')) {
    word = word.split('-')
    let str = ''
    word.forEach((elem, i, arr) => {
      str += elem.slice(0, 1).toLocaleUpperCase() + elem.slice(1)
    })
    return str
  } else {
    return word.slice(0, 1).toLocaleUpperCase() + word.slice(1)
  }
}

// 传入vue文件地址生成 const
const getConstString = (filePath) => {
  let word = path.basename(filePath, '.vue')
  return `const ${greaHump(word)} = () => import('@/views/${filePath.slice(0, -4)}')\n`
}

module.exports = {
  greaHump,
  getConstString
}
