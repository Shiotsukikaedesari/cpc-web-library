const watch = require('node-watch')
const fs = require('fs')
const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')

console.log(path.resolve(__dirname, '../test/write/write.js'))

watch('test', { recursive: true }, function (evt, name) {
  let writeStream = fs.createWriteStream(path.resolve(__dirname, '../test/write/write.js'), { flags: 'w+' })
  writeStream.write(`写入数据`)
})
