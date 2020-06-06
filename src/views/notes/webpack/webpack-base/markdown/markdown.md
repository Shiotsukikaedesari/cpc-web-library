## webpack构建工具-基础

## 学习地址

[https://www.bilibili.com/video/BV1e7411j7T5](https://www.bilibili.com/video/BV1e7411j7T5)

## 官方文档
[https://webpack.docschina.org/](https://webpack.docschina.org/)
## 依赖环境
* Node 10
* Webpack 4.26以上

## webpack下载安装
`npm I webpack-cli –g`

## webpack基础打包

* 开发环境  `webpack entrysrc –o outsrc –mode=development`
* 生产环境  `webpack entrysrc –o outsrc –mode==production`

## webpack的基础功能点
* 能打包能编译ES6模块
* 能自动识别js文件与json文件
* 生产环境会自动压缩js代码

## webpack配置文件
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
  devServer: {}, // 开发服务器devServer
  devtool: 'source-map' // 构建代码源码映射
}
```

## loader相关配置
* 需要下载

### css文件loader配置
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

### less文件laoder配置
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

### 图片文件laoder配置
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

### 其他文件laoder配置
``` js
// loader配置，为webpack加载其他格式文件
module: {
  rules: [
    // 详细loader配置
    {
      // 通过正则排除正则以外的资源
      exclude: /\.(css|js|html)$/,
      // npm i flue-loader -D
      loader: 'file-loader', // 原封不动输出资源
      options: { // loader的一般配置
        name: '[hash:10].[ext]', // 取图片名前10位加文件原来的扩展名
        outputPath: 'media' // 指定打包的位置
      }
    }
  ]
}
```

### eslinit-laoder配置
* 需要设置规则：package.json中eslintConfig中设置-airbnb
* 下载：`exlint-config-airbnb-base`、`eslint`、`eslint-plugin-import`
``` js
// loader配置，为webpack加载其他格式文件
module: {
  rules: [
    // 详细loader配置
    {
      test: /\.js$/,
      exclude: /node_modules/, // 排除不需要检查的文件
      // npm i eslint-loader -D
      enforce: 'pre', // 优先执行loader
      loader: 'eslint-loader',
      options: { // loader的一般配置
      fix: true // 自动修复eslint错误
      }
    }
  ]
}

// packgage.json
"eslintConfig": {
  "extends": "airbnb-base"
}
```

### postcss-loader配置
* css兼容性处理
* postcss-loader、postcss-preset-env
* 安装： `npm i prostcss-loader postcss-preset-env -D`
``` js
process.env.NODE_ENV = 'development' // 设置node的环境变量为开发环境 默认为 production
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
        'css-loader', // 1 将css文件编译为commonjs模块加入js，编译的css内容为字符串形式
        {
          loader: 'postcss-loader',
          opotions: {
            ident: 'postcss', // 固定写法
            // 帮助postcss在package.json中的broserlist里面的配置，通过配置加载相应的css样式
            plugins: () => [require('postcss-preset-env')()]
          }
        }
        ]
    }
  ]
}

// package.json
// 读取的环境值需要根据node环境便来：process.env.NODE_ENV = development
"browserslist": {
  "development": [
    "last 1 chrome version", // 兼容最近一个谷歌浏览器版本
    "last 1 firefox version",
    ...
  ],
  "production": [
    ">0.2%", // 大于99.8%的浏览器兼容
    "not dead", // 不兼容ie10等已经不存在的浏览器
    "not op_mini all" // 不兼容op_mini的浏览器
  ]
}
```


### babel-laoder配置
* 兼容性处理
* 需要下载： `babel-loader`、`@babel/core`
* 基本js兼容性处理库：`@babel/preset-env`
* 全部js兼容处理： `@babel/polyfill` -- 只用在入口位置引用此库就行，较为暴力，体积较大
* 按需js兼容性处理： `core.js`
``` js
// loader配置，为webpack加载其他格式文件
module: {
  rules: [
    // 详细loader配置
    {
      test: /\.js$/,
      // npm i babel-loader -D
      loader: 'babel-loader',
      exclude: /node_modules/, // 排除不需要检查的文件
      options: { // loader的一般配置
        // npm i @babel/preset-env -D
        // 预设，指示babel做怎么样的兼容处理
        presets: [
          '@babel/preset-env'，
          {
            // 按需加载兼容性处理
            useBuiltIns: 'usage',
            // 指定core-js版本
            corejs: {
              version: 3
            },
            // 指定兼容性做到哪个版本浏览器
            targets: {
              chorme: '60',
              ie: '9',
              firefox: '60'
              ...
            },
            cacheDirectory: true // 开启babel缓存，第二次构建时，读取缓存 
          }
          ]
      }
    }
  ]
}

// packgage.json
"eslintConfig": {
  "extends": "airbnb-base"
}
```

## pllugins相关配置
* 需要下载
* 需要引入

### HTML插件配置
* 自动生成或者按照模板生成html文件，引入打包文件
``` js
const HtmlWebpackPlugin = require('html-webpack-plugin')
// plugins的配置，为打包、渲染等进行优化
plugins: [
  // 详细plugins配置
  // npm i html-webpack-plugin -D
  new HtmlWebpackPlugin({ // 默认会创建一个html文件，引入打包输出的所有资源
    template: './index.html', // 规定一个html文件模板并引入打包输出的所有资源
    // 压缩html代码配置
    minify: {
      collapseWhitespace: true, // 移除空格
      removeComment: true // 移除注释
    }
  })
]
```

### min-css-extract插件配置
* 将css独立成文件
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

### optimize-css-assets-webpack-plugin插件配置
* 压缩css打包代码
* 安装：`npm i optimize-css-assets-webpack-plugin -D`
``` js
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// plugins的配置，为打包、渲染等进行优化
plugins: [
  // 详细plugins配置
  new OptimizeCssAssetsWebpackPlugin()
]
```

## devServer开发服务器
* 进行相关自动化操作-编译、打开浏览器、刷新...
* 只会在内存中编译打包，不会有任何输出
* 下载：`npm i webpack-dev-server -D`
* 运行：`npx webpack-dev-server`

``` js
devServer: {
  contentBase: resolve(__dirname, 'dist'), // 运行目录，打包后的目录
  comporess: true, // 是否启动Gzip压缩
  port: 3000, // 端口号
  open: true, // 自动打开本地默认浏览器
  hot: true // 开启HMR功能 只更行修模块改部分的代码
}
```