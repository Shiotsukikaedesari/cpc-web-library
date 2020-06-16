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

  // 写入变量
  let header = ''
  let exportDefault = `\nexport default\n`
  // 加入根
  header += utils.getConstString(path.basename(watchPath) + '.vue')
  exportDefault += `{
  path: '${path.basename(watchPath)}',
  name: '${path.basename(watchPath)}',
  component: ${utils.greaHump(path.basename(watchPath))},
  redirect: '/${path.basename(watchPath)}/intro',
  children: [\n`
  // 遍历函数
  let loopPathDir = watchPath => {
    // 统一路径格式
    watchPath = watchPath.replace(/\\/g, '/')
    let dir = fs.readdirSync(watchPath, {withFileTypes: true})
    let filePath = ''
    if (watchPath.indexOf(headerPath) !== -1) {
      filePath = watchPath.slice(watchPath.indexOf(headerPath) + headerPath.length)
    }
    dir.forEach(elem => {
      if (elem.isFile()) {
        // 获取vue文件路径
        if (path.extname(elem.name) === '.vue') {
          // 拼接const
          let vueFilePath = `${filePath}/${elem.name}`
          header += utils.getConstString(vueFilePath)
          // 拼接子项
          let basename = path.basename(elem.name, '.vue')
          let childrenStr = `    {\n` +
          `      path: '/${vueFilePath}',\n` +
          `      name: '${basename}',\n` +
          `      component: ${utils.greaHump(basename)}\n` +
          `    },\n`
          exportDefault += childrenStr
        }
      } else {
        loopPathDir(path.resolve(watchPath, elem.name))
      }
    })
  }

  print.info('开始扫描...\n')
  loopPathDir(watchPath)

  // 变量完成拼接
  exportDefault = exportDefault.slice(0, -2)
  exportDefault += `\n  ]\n}\n`
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
let notesWatchPath = path.resolve(__dirname, '../test/views/notes')
let notesOutputPath = path.resolve(__dirname, '../write/router-notes.js')

let styleWatchPath = path.resolve(__dirname, '../test/views/style')
let styleOutputPath = path.resolve(__dirname, '../write/router-style.js')
writeFile(notesWatchPath, notesOutputPath)
writeFile(styleWatchPath, styleOutputPath)

watchFile(notesWatchPath, notesOutputPath)
watchFile(styleWatchPath, styleOutputPath)
