const watch = require('node-watch')
const fs = require('fs')
const path = require('path')
const print = require('./print')
const utils = require('./utils')

// 根目录
let rootPath = path.resolve(__dirname, '../')

// 文件读写
let writeFile = (watchPath, outputPath) => {
  print.info(`读取位置：${watchPath}，写入位置：${outputPath}`)
  // 获取入参
  let header = ''
  let exportDefault = `\nexport default\n`
  // 加入根
  header += utils.getConstString(path.basename(watchPath) + '.vue')
  // 遍历函数
  let loopPathDir = watchPath => {
    let dir = fs.readdirSync(watchPath, {withFileTypes: true})
    print.info(`正在遍历：${watchPath}`)
    dir.forEach(elem => {
      console.log(elem)
      if (elem.isFile()) {

      } else {
        loopPathDir(path.resolve(watchPath, elem.name))
      }
    })
    // console.log(dir)
  }
  loopPathDir(watchPath)
  let writeStream = fs.createWriteStream(outputPath, { flags: 'a+', emitClose: true })
  writeStream.write(header + exportDefault)
}
// 文件监听
let watchFile = (watchPath, outputPath) => {
  printInfo(`正在监听：${watchPath}，写入位置：${outputPath}`)
  watch(watchPath, { recursive: true }, function (evt, name) {
    printInfo(`${name}：${evt}`)
    writeStream.write(`写入数据`)
  })
}

print.start('正在运行...')
// writeFile(path.resolve(__dirname, '../test/views/notes'), path.resolve(__dirname, '../write/router-notes.js'))
writeFile(path.resolve(__dirname, '../test/views/style'), path.resolve(__dirname, '../write/router-style.js'))
