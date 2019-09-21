const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const config = {
    mode: 'development',
    entry: {
        main: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash:8].js',
    },
    devServer: {
        host: 'localhost',
        port: '8080',
        open: true, //自动拉起浏览器
        hot: true, //热加载
        historyApiFallback: {
            index: '/index.html' //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
        },
        //hotOnly:true
    },
    optimization: {
        splitChunks: {
        chunks: 'all', 
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
            vueDing: {
                test:/[\\/]node_modules[\\/](vue)|(vue-router)/,
                priority: 3,
            },
            vantDing: {
                test:/[\\/]node_modules[\\/](vant)/,
                priority: 2,
            },
            loadshlun: {
                test:/[\\/]node_modules[\\/](loadsh)/,
                priority: 1,
            },
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            }
        }
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true,
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        // 这里可以指定一个 publicPath
                        // 默认使用 webpackOptions.output中的publicPath
                        // publicPath: '../'
                      },
                    },
                    'css-loader',
                  ],
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 100,
                        // 把图片打包到dist目录下的assets文件下的images文件夹下
                        name: path.posix.join('assets', './images/[name]-[hash:5].[ext]'),
                      }
                    }
                  ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),

        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: path.posix.join('assets', 'css/[name].[contenthash].css'),
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            title: '您好吗webpack'
        }),
        // new BundleAnalyzerPlugin(),

 
    ]
};

module.exports = config;