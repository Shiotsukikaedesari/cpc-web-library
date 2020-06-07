## webpack构建工具-高级

## sourceMap源代码到构建代码的映射技术
* `source-map` 外部map文件，提示错误信息精确到源码行列
* `inline-source-map` 内联map文件在每个构建文件尾部生成map，提示错误信息精确到源码行列
* `eval-source-map` 内联map文件，在构建文件的每个eval的构建函数中，提示错误信息精确到源码行列
* `hidden-source-map` 外部map文件，提示错误信息不匹配源码位置
* `nosources-source-map` 外部map文件，提示错误信息，不提供源码
* `cheap-source-map` 外部map文件，提示错误信息，精确到源码行
* `cheap-module-source-map` 外部map文件，提示错误信息精确到源码行列

构建速度
* `eval-cheap-souce-map`
* `eval-souce-map`

调试
* `souce-map`
* `cheap-module-souce-map`
* `cheap-souce-map`

## oneOf文件匹配单一loader

* 注意oneOf中不允许多项配置配置同类文件

``` js
module: {
  rules: [
    {
      oneOf: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        ...
      ]
    }
  ]
}
```

## hash值
* hash： webpack打包时候生成的hash
* chunkhash：根据chunk生成hash值，如果打包来源同一个chunk（入口文件），hash值就一样
* contenthash：根据文件内容生成hash,不同文件hash不一样

## tree shaking去除无用代码
* 打包会自动去除没有使用的代码
* 必须使用ES6模块化
* 开启production环境

``` js
// package.json
"sideEffects": false // 所有代码都可进行tree shaking
"sideEffects": ["*.css"] // 屏蔽css文件不进行tree shaking
```

## code split代码分割
* 多入口
``` js
entry: {
  demo1: 'demo1.js',
  demo2: 'demo2.js',
}
```

* 单独打包mode_modules打包成chunk
``` js
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
```

* import懒加载导入语法
``` js
// /* webpackChunkName: 'test' */ -> 告诉webpack这个模块打包名字
// /* webpackPrefetch: true  */ -> 告诉weboack预先加载该资源，浏览器空闲加载
import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then().catch()
```

## PWA渐进式网络开发应用程序（离线可访问）
* work-webpack-plugin
* 需要注册serviceworker
* 存在兼容性问题
``` js
const WorkWebpackPlugin = require('work-webpack-plugin')
plugins: [
  new WorkWebpackPlugin.GenerateSW({ // 默认会创建一个html文件，引入打包输出的所有资源
  clientsClaim: true, // 帮助serviceWorker快速启动，删除旧的serviceworker
  skipWaiting: true
  })
]

// 入口文件
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // 注册serviceWorker
    navigator.serviceWorker.register('./service-worker.js').then().catch()
  })
}
```

##  thread-loader多进程打包
* 将此loader放置于其他loader解析后，开启多进程打包
* 进程开启需要时间
* 进程通信需要时间
``` js
module: {
  rules: [
    {
      test: /\.js$/,
      use: [
        // npm i thread-loader -D
        {
          loader: 'thread-loader',
          options: {
            workers: 2 // 规定进程数
          }
        },
        {
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
  ]
}

// packgage.json
"eslintConfig": {
  "extends": "airbnb-base"
}
```

## externals忽略npm包
``` js
externals: {
  jquery: 'jQuery'
}
```

## dll动态链接库
* 将三方库打包成另外的chunk
* 需新建另外一个js配置-webpack.dll.js
* webpack --config webpack.dll.js

``` js
const webpack = require('webpack')
module.exports = {
  entry: {
    // name: 打包的库
    jqyery: ['jquery', ...]
  },
  output: {
    filename: '[name],js',
    path: resolve(__dirname, 'dll'),
    library: '[name]_[hash]' // 打包的库暴露出去的内容命名
  },
  plugins: [
    // 打包生成一个mainfest.json提供映射关系
    new webpack.DllPlugin({
      name: '[name]_[hash],' // 映射库暴露的内容
      path: resolve(__dirname, 'dll/mainfest.json') // 输出路径
    })
  ]
}
```

* webpack.config.js
``` js
const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
plugins: [
  // 告诉webpack那些库不用打包，并用哪些配置
  new webpack.DllReferencePlugin({
    manifest: resolve(__dirname, 'dll/mainfest.json')
  }),
  // 将某个文件打包输出并在html中自动引入
  new AddAssetHtmlWebpackPlugin({
    filepath: resolve(__dirname, 'dll/jquery.js')
  })
]
```