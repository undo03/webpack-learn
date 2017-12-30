## webpack 逐步深入

### 初窥门径
   1. 初始化项目
```javascript
    npm init -y
```
   2. 安装webpack  
```javascript
    npm install webpack --dev 
```
   3. 配置webpack执行命令
   -- package.json文件中配置脚本
```javascript
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "bundle": "webpack --config webpack.config.js"
      }
```
   4. 写配置文件 -- webpack.config.js
   
   
### 配合框架react使用
   1. 安装react react-dom
```javascript
    npm install react react-dom --save
```
   2. 安装js预处理器
```javascript
    npm install babel-loader babel-core -D
    npm install babel-preset-react -D
```

### 开发服务器
```javascript
    npm install webpack-dev-server -dev
```
    这个开发服务器功能很强大，可以为我们代码运行提供一个服务器，可以代码热更新，在开服务的时候，会执行制定的配置文件中的项目配置，会将打包出来的文件放入内存中，每次代码更新都会重新加载，
    可以设置浏览器自动打开，可设置该服务运行的端口
package.json中配置脚本
```javascript
    "scripts": {
        "dev": "webpack-dev-server --config webpack.config.js"
      }    
```
webpack.config.js中配置服务
```javascript
     devServer: {
            open: true,
            port: 8888
        }
```

### 打包css
```javascript
    npm install ccs-loader style-loader --dev
```
配置css-loader加载器
   
加载顺序sass/scss/less => css => style

webpack.config.js配置
```javascript
    rules: [
                {
                    test: /\.js$/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            presets: ['react']
                        }
                    }]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
```
### 处理图片 file-loader / url-loader
```javascript
    npm install file-loader url-loader -D
```
    url-loader 是 file-loader 的升级版，使用url-loader就不再需要file-loader了，file-loader会将图片资源的地址进行打包，在引用图片的地方也会更改成相应的打包后的地址， url-loader则是将图片资源编译成字符串保存，可以设置编译图片的大小，超出大小则使用file-loader的逻辑
    
    
### sass less 文件加载
     sass分为 .sass 和 .scss结尾的两种文件
     sass需要安装 sass-loader node-sass
     less需要安装 less-loader less
```javascript
    npm install sass-loader node-sass less-loader less --save-dev
```
    css 模块化加载，需要在webpack中配置 css-loader的配置属性，module属性默认是false，不模块，设置true开启模块，localIdentName属性，定义编译后的类名命名规则
```javascript
     {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        {
                            loader: "css-loader",
                            options: {
                                module: true,
                                localIdentName: '[local]_[hash:base64:4]',
                                // localIdentName: '[path]-[name]-[local]_[hash:base64:4]'
                            },
                        },
                        'less-loader'
                    ],
                    exclude: [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, 'src/common')
                    ]
                },
                {
                    test: /\.less$/,
                    use: ['style-loader','css-loader','less-loader'],
                    include: [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, 'src/common')
                    ]
                }
```

### 编译es6 es7
    babel 核心编译工具 babel-core 上面已经安装，编译es7 es7 react 等需要预设，es2015 是es6 的标准，stage-0是最新的es标准，包括了还未正式发布的试用标准
```javascript
    npm i -D babel-preset-es2015 babel-preset-react babel-preset-stage-0
```

### 其他插件
   1. clean-webpack-plugin 每次webpack打包的时候清理之前打的包
```javascript
    npm i -D clean-webpack-plugin
```
   2. 打包出来的资源分文件整理