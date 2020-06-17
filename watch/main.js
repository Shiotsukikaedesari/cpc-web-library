const watch = require('node-watch')
const fs = require('fs')
const path = require('path')
const print = require('./print')
const utils = require('./utils')

// 根目录
// let rootPath = path.resolve(__dirname, '../')
// 目标目录
let headerPath = 'views/'
// 文件读写
let writeFile = (watchPath, outputPath) => {
  print.info(`读取位置：${watchPath}\n`)
  print.info(`写入位置：${outputPath}\n`)
  // 根目录名
  let rootDir = path.basename(watchPath)
  // 写入变量
  let header = ''
  let exportDefault = `\nexport default\n`
  // 区分three模块
  if (rootDir === 'three') {
    exportDefault += `\n[\n`
  } else {
    // 加入根
    header += utils.getConstString(rootDir + '.vue')
    exportDefault += `{
  path: '/${rootDir}',
  name: '${rootDir}',
  component: ${utils.greaHump(rootDir)},
  redirect: '/${rootDir}/intro',
  children: [\n`
  }

  // 遍历函数
  let loopPathDir = dirPath => {
    // 统一路径格式
    dirPath = dirPath.replace(/\\/g, '/')
    let dir = fs.readdirSync(dirPath, {withFileTypes: true})
    let filePath = ''
    if (dirPath.indexOf(headerPath) !== -1) {
      filePath = dirPath.slice(dirPath.indexOf(headerPath) + headerPath.length)
    }
    dir.forEach(elem => {
      if (elem.isFile()) {
        // 获取vue文件路径
        if (path.extname(elem.name) === '.vue') {
          // 拼接const
          header += utils.getConstString(`${filePath}/${elem.name}`)
          // 拼接子项
          let basename = path.basename(elem.name, '.vue')
          let childrenStr = `    {\n` +
          `      path: '/${rootDir}/${basename}',\n` +
          `      name: '${basename}',\n` +
          `      component: ${utils.greaHump(basename)}\n` +
          `    },\n`
          if (rootDir === 'three') {
            childrenStr = `  {\n` +
          `    path: '/${rootDir}/${basename}',\n` +
          `    name: '${basename}',\n` +
          `    component: ${utils.greaHump(basename)}\n` +
          `  },\n`
          }
          exportDefault += childrenStr
        }
      } else {
        loopPathDir(path.resolve(dirPath, elem.name))
      }
    })
  }

  print.info('开始扫描...\n')
  loopPathDir(watchPath)

  // 变量完成拼接
  // 区分three模块
  exportDefault = exportDefault.slice(0, -2)
  if (rootDir === 'three') {
    exportDefault += `\n]\n`
  } else {
    exportDefault += `\n  ]\n}\n`
  }
  // 开始写入文件
  let writeStream = fs.createWriteStream(outputPath, { flags: 'w+', emitClose: true })
  print.info(`开始写入文件...\n`)
  writeStream.write(header + exportDefault)
  print.succeed(`${outputPath}写入成功！\n`)
}
// 文件监听
let watchFile = (watchPath, outputPath) => {
  print.info(`正在监听：${watchPath}\n`)
  print.info(`写入位置：${outputPath}\n`)
  watch(watchPath, { recursive: true }, function (evt, name) {
    print.info(`监听变动文件：${name}->${evt}`)
    writeFile(watchPath, outputPath)
  })
}

print.start('正在运行...')

module.exports = {
  writeFile,
  watchFile
}
