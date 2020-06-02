## webpack构建工具-高级
### sourceMap源代码到构建代码的映射技术
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