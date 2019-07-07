# webpack学习笔记 @先先

- 安装webpack
  - sudo npm install webpack -g

- webpack作用

  - 实现模块化
  - 打包网页资源（将多个模块的JS打包成一个JS）
  - 压缩代码

- 通过命令行使用webpack

  - webpack -mode=developement <src.js> -o <dst.js>
  - **注意** 这里设置了两个参数-mode=development 和 -o

- 模块化

  - ES6提供了一种不同JS之间通信的方式（之后再补）

  - 在被引用的文件中使用

    `module.exports=`

  - 在调用其他文件的js中使用

    `require('path')`

  - 随后再执行上一步中的命令打包即可

- 初始化工程

  - 当工程文件规模逐渐扩大时执行

    `npm init`

  - 会生成一个package.json文件

- 安装CSS样式配置文件

  - 执行如下指令

    `sudo npm install css-loader style-loader`

  - 注意这*不是*一条全局指令，需要在待打包的工程文件路径下加载安装

  - 会在工程文件路径下生成一个node_modules文件夹

- 添加配置文件webpack.config.js

  - 为什么我们的工程文件名为webpack.common.js?

  - 使用配置文件的好处是可以简化在终端的控制操作

  - 只需在中端执行如下命令 

    `webpack`

- 工程文件夹的一般结构

  - src源代码文件夹
  - dist目标代码文件夹
  - Node_modules为css-loader和style-loader加载自动生成的文件
  - package.json为工程初始化生成的json文件
  - webpack文件夹用于存放webpack配置文件

- Webpack.config.js编写方法

  - 形式上表现为一个向外导出一个json的js文件

    `module.exports={...config}`

  - 该json中用属性表示配置项

    `entry` 表示待打包的源src

    `output` 表示打包产物输出

    - `path`  记录输出路径
    - `filename` 记录输出文件名

    `mode` 表示开发模式选项（对应终端命令中的-mode=）

    - `development`
    - `production` (default)

    `module` 可用与加载css-loader等

- 第三方库的引入方法

  - 例如引入jquery执行如下语句

    `sudo npm install jquery --save-dev`

  - package.json中会增加一个属性devDependencies

  - 在src中导入jq

    `let $=require('jquery')`

    以下可以按照正常jq语法进行编写

- 将项目打包到服务端

  - 在package.json中设置启动项“scripts”

    > "scripts" : {
    >
    > ​		"build" : "webpack"
    >
    > }

  - 随后可用如下命令代替webpack命令

    `npm run build`

  - 下载web-dev-server

    ` npm install web-dev-server --save-dev`

  - 在package.json中设置启动项“scripts”

    > "scripts" : {
    >
    > ​		"build" : "webpack",
    >
    > ​		"start" : "webpack-dev-server --entry ./src/js/show.js --output-filename ./dist/bundle.js" 
    >
    >  }

  - 在服务端启动项目

    `npm start`

