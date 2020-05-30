## webpack构建工具-基础

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
    rules: [
      // 详细loader配置
      {
        // 通过正则匹配相应文件
        test: /\.xxx/,
        // 所使用的loader，use的处理顺序是从后往前
        use: []
      }
    ]
  },
  // plugins的配置，为打包、渲染等进行优化
  plugins: [
    // 详细plugins配置
  ],
  // 打包模式
  mode: 'development',//mode: 'production'
  // 其他配置项
  DevServer: {} // 开发服务器devServer
}
```

### loader相关配置
* 需要下载

#### css文件loader配置
``` js 
// loader配置，为webpack加载其他格式文件
module: {
  rules: [
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
}
```

#### less文件laoder配置
``` js
// loader配置，为webpack加载其他格式文件
module: {
  rules: [
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

#### 图片文件laoder配置
``` js
// loader配置，为webpack加载其他格式文件
module: {
  rules: [
    // 详细loader配置
    {
      // 通过正则匹配相应文件
      test: /\.(jpg|png|gif)$/,
      // npm i url-loader file-loader -D * url-loader是依赖于flie-loader运行
      // 此loader处理不了html中的图片名转换
      loader: 'url-loader', // 使用一个loader的时候直接写loader
      options: { // loader的一般配置
        // 优点： 减少请求数量
        // 确定： 图片体积会变大
        limit: 8 * 1024, // 图片大小小于8k，就会被base64处理
        esModule: false, // 默认使用es6模块解析 关闭默认
        name: '[hash:10].[ext]' // 取图片名前10位加文件原来的扩展名
        outputPath: 'image' // 指定打包的位置
      }
    },
    test: /\.html$/,
    // npm i html-loader -D
    // 默认commonjs解析
    loader: 'html-loader' // 处理html文件的img图片，引入img从而被url-loader处理
  ]
}
```

#### 其他文件laoder配置
``` js
// loader配置，为webpack加载其他格式文件
module: {
  rules: [
    // 详细loader配置
    {
      // 通过正则排除正则以外的资源
      exclude: /\.(css|js|html)$/,
      // npm i flue-loaser -D
      loader: 'file-loader', // 原封不动输出资源
      options: { // loader的一般配置
        name: '[hash:10].[ext]', // 取图片名前10位加文件原来的扩展名
        outputPath: 'media' // 指定打包的位置
      }
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

#### min-css-extract插件配置
* 此插件要配合自身loader使用，不使用style-laoder
``` js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// plugins的配置，为打包、渲染等进行优化
module: {
  rules: [
    // 详细loader配置
    {
      // 通过正则匹配相应文件
      test: /\.css$/,
      // 所使用的loader，use的处理顺序是从后往前
      use: [
        MiniCssExtractPlugin.loader, // 提取js中的css为单独文件
        // npm i css-loader -d
        'css-loader' // 1 将css文件编译为commonjs模块加入js，编译的css内容为字符串形式
        ]
    }
  ]
},
plugins: [
  // 详细plugins配置
  // npm i mini-css-extract-plugin -D
  new MiniCssExtractPlugin({ // 会提取js中的css单独创建css文件
    filename: '路径+文件名' // 输出该文件到此路径下
  })
]
```

#### optimize-css-assets-webpack-plugin插件配置
* 压缩css
* 安装：`npm i optimize-css-assets-webpack-plugin -D`
``` js
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// plugins的配置，为打包、渲染等进行优化
plugins: [
  // 详细plugins配置
  new OptimizeCssAssetsWebpackPlugin()
]
```

### devServer开发服务器
* 进行相关自动化操作-编译、打开浏览器、刷新...
* 只会在内存中编译打包，不会有任何输出
* 下载：`npm i webpack-dev-server -D`
* 运行：`npx webpack-dev-server`

``` js
devServer: {
  contentBase: resolve(__dirname, 'dist'), // 运行目录，打包后的目录
  comporess: true, // 是否启动Gzip压缩
  port: 3000, // 端口号
  open: true // 自动打开本地默认浏览器
}
```