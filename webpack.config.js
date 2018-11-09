const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const multi = require('multi-loader');

module.exports = {
    entry: {
        main: ['whatwg-fetch', 'babel-polyfill', './src/main.js'],
        // vendor: ["react", "react-dom", "react-router"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: "assets/js/main.js",
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        // publicPath: "/", // webpack打包出来的资源的基础目录设置，必须以 / 结尾 ，一般直接一个 /
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 输出的html文件名,把index.html 放在外层
            template: 'src/index.html', // 打包文件依赖的模板
        }),
        new CleanWebpackPlugin(['dist']), //dist就是需要清理的文件目录
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],// babel 会自动加载.babelrc中个预设和使用的插件
                exclude: [
                    path.resolve(__dirname,'node_modules')
                ]
                // babel-plugin-transform-decorators-legacy 插件@连接方式
            },
            // 处理css中的url，会自动引入需要的模块
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            module: true,
                            localIdentName: '[local]',
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
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            module: true,
                            localIdentName: '[local]'
                        },
                    },
                    'sass-loader'
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.(sass|scss)/,
                use: ['style-loader','css-loader','sass-loader'],
                include: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            //  file-loader 会把资源移动到输出目录，返回最终使用的url
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [
                    
                    {
                        loader: multi(
                            'url-loader?limit=8192&name=assets/img/[name].[ext].webp!webp-loader?{quality: 75}',
                            'url-loader?limit=8192&name=assets/img/[name].[ext]'
                        )
                    }
                ],
            },
            // file-loader处理字体文件的引入
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: 'assets/fonts/[name].[ext]'
                    }
                }]
            }
        ]
    },
    devServer: {
        open: true,
        port: 8888,
        // 服务器打包输出路径
        publicPath: '/',
        // contentBase: './dist/assets', // 当没找到基础路径下的文件时去该路径下查找
    }
};