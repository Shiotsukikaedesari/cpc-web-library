## webpack构建工具

### 学习地址

[B站-https://www.bilibili.com/video/BV1e7411j7T5](https://www.bilibili.com/video/BV1e7411j7T5)

### 依赖环境
* Node 10
* Webpack 4.26以上

### webpack下载安装
`npm I webpack-cli –g`

### webpack基础打包

* 开发环境  `webpack entrysrc –o outsrc –mode=development`
* 生产环境  `webpack entrysrc –o outsrc –mode==production`

### webpack的基础功能点
* 能打包能编译ES6模块
* 能自动识别js文件与json文件

### webpack配置文件
* 固定命名：webpack.config.js
* 使用commonjs语法
* 由于打包构建工具是通过nodejs
* 通过module.exports暴露
``` js
 // node的path库中引入resolve拼接绝对路径方法
const {resolve} = require('path')
module.exports = {
  entry: 'main.js', // 入口文件配置，通过入口文件构建依赖关系树构建。
  output: { // 输出文件配置
    filename: 'demo.js' //输出名
    path: resolve(__dirname, 'dist')//输出路径
  }, 
  // loader配置，为webpack加载其他格式文件
  module: {
    relues: [
      // 详细loader配置
      {
        // 通过正则匹配相应文件
        test: /\.css$/,
        // 所使用的loader，use的处理顺序是从后往前
        use: [
          // npm i style-laoder -d
          'style-laoder', // 2 创建style标签，将js中的样式资源插入，将style插入到head中
          // npm i css-loader -d
          'css-loader' // 1 将css文件编译为commonjs模块加入js，编译的css内容为字符串形式
          ]
      }
    ]
  },
  // plugins的配置，为打包、渲染等进行优化
  plugins: [
    // 详细plugins配置
  ],
  // 打包模式
  mode: 'development',
  //mode: 'production'
}
```

### loader相关配置
* 需要下载

#### less文件laoder配置
``` js
// loader配置，为webpack加载其他格式文件
module: {
  relues: [
    // 详细loader配置
    {
      // 通过正则匹配相应文件
      test: /\.less$/,
      // 所使用的loader，use的处理顺序是从后往前
      use: [
        // npm i style-laoder -D
        'style-laoder', // 3 创建style标签，将js中的样式资源插入，将style插入到head中
        // npm i css-loader -D
        'css-loader', // 2 将css文件编译为commonjs模块加入js，编译的css内容为字符串形式
        // npm i less -D  npm i less-loader -D
        'less-loader' // 1 将less文件编译成css文件
        ]
    }
  ]
}
```

### pllugins相关配置
* 需要下载
* 需要引入

#### HTML插件配置
``` js
const HtmlWebpackPlugin = require('html-webpack-plugin')
// plugins的配置，为打包、渲染等进行优化
plugins: [
  // 详细plugins配置
  // npm i html-webpack-plugin -D
  new HtmlWebpackPlugin({ // 默认会创建一个html文件，引入打包输出的所有资源
    template: './index.html' // 规定一个html文件模板并引入打包输出的所有资源
  })
]
```