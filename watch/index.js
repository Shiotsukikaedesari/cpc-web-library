
const path = require('path')
const {writeFile, watchFile} = require('./main')

let notesWatchPath = path.resolve(__dirname, '../src/views/notes')
let notesOutputPath = path.resolve(__dirname, '../src/router/router-notes.js')

let styleWatchPath = path.resolve(__dirname, '../src/views/style')
let styleOutputPath = path.resolve(__dirname, '../src/router/router-style.js')

let guideWatchPath = path.resolve(__dirname, '../src/views/guide')
let guideOutputPath = path.resolve(__dirname, '../src/router/router-guide.js')

let componentsWatchPath = path.resolve(__dirname, '../src/views/components')
let componentsOutputPath = path.resolve(__dirname, '../src/router/router-components.js')

let effectWatchPath = path.resolve(__dirname, '../src/views/effect')
let effectOutputPath = path.resolve(__dirname, '../src/router/router-effect.js')

let threeWatchPath = path.resolve(__dirname, '../src/views/three')
let threeOutputPath = path.resolve(__dirname, '../src/router/router-three.js')

writeFile(notesWatchPath, notesOutputPath)
writeFile(styleWatchPath, styleOutputPath)
writeFile(guideWatchPath, guideOutputPath)
writeFile(componentsWatchPath, componentsOutputPath)
writeFile(effectWatchPath, effectOutputPath)
writeFile(threeWatchPath, threeOutputPath)

watchFile(notesWatchPath, notesOutputPath)
watchFile(styleWatchPath, styleOutputPath)
watchFile(guideWatchPath, guideOutputPath)
watchFile(componentsWatchPath, componentsOutputPath)
watchFile(effectWatchPath, effectOutputPath)
watchFile(threeWatchPath, threeOutputPath)
