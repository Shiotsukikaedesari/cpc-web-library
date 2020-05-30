## webpack构建工具-高级

### css兼容性处理
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

### 缓存