const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');


function resolve(dir) {
    console.log( process.env.NODE_ENV, '环境变量', path.join(__dirname, './', dir));
    return path.join(__dirname, './', dir);
}

const config = {
    mode: 'development',
    entry: {
        main: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[hash:8].js',
        // publicPath表示打包后的文件的根目录路径(表示的是打包生成的index.html文件里面引用资源的前缀)
        // 假如原本index.html插入的js文件路径为/assets/js/xxxx.js，设置publicPath为./static/的话，则js文件的路径将会变为./static/assets/js/xxxx.js
        // publicPath只有在index.html第一次插入的js资源或者css资源路径有效，对路由跳转后的页面的图片资源的路径不生效
        publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    },
    devtool: process.env.NODE_ENV === 'development' ? "source-map" : 'none',
    devServer: {
        // contentBase: path.join(__dirname, './dist/assets'),
        publicPath: '/',// 如果没有设置，则使用output.publicPath的值
        host: 'localhost',
        port: '8888',
        open: true, //自动拉起浏览器
        hot: true, //热加载
        historyApiFallback: {// 当vue-router设置了mode为history，不配置该设置的话，在开发环境手动刷新页面，会导致not found 404的错误。
            //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
            rewrites: [{ from: /.*/, to: path.posix.join('/', 'index.html') }], // 所以页面在刷新的时候都使用/index.html
        },
        //hotOnly:true
    },
    optimization: {
        splitChunks: {
        chunks: 'async',
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
                chunks: 'initial',
            },
            vantDing: {
                test:/[\\/]node_modules[\\/](vant)/,
                priority: 2, // 优先级，假如cacheGroups里面存在多个组的test都匹配成功的话，优先级越高的奏效
                chunks: 'initial',
            },
            axios: {
                test:/[\\/]node_modules[\\/](axios)/,
                priority: 1,
                chunks: 'all',
                minChunks: 1,
            },
            // vendors: {
            //     test: /[\\/]node_modules[\\/]/,
            //     priority: -10
            // },
            // default: {
            //     minChunks: 2,
            //     priority: -20,
            //     reuseExistingChunk: true
            // }
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
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
            },
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        // 这里可以指定一个 publicPath
                        // 默认使用 webpackOptions.output中的publicPath
                        // publicPath: '../../'
                      },
                    },
                    'css-loader',
                    'postcss-loader',
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         plugins: [require('autoprefixer')],
                    //         browser: ['last 10 versions'],
                    //     },
                    // }
                    
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
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 1000,
                        // 把图片打包到dist目录下的assets文件下的images文件夹下
                        // name属性它会根据output.path的路径为根目录，然后做相对路径查找。
                        // 例如：当前的output.path为/dist/js/,而name: path.posix.join('../', './assets/images/[name]-[hash:5].[ext]')，
                        //则图片打包出来的位置是相对于/dist/js目录下，先../,相对目录也就是到了/dist/assets,再在/dist/assets目录下执行./assets/images/，
                        //最后也就是把图片打包到了/dist/assets/images/
                        name: path.posix.join('./', './assets/images/[name]-[hash:5].[ext]'),
                        publicPath: process.env.NODE_ENV === 'development' ? '/' : './dist/', //如果不设置publicPath，那么打包后的图片路径将是./assets/images/xxxx.jpg。
                        // 如果publicPath: './dist/'，则打包后的图片路径将是./dist/assets/images/xxxx.jpg。publicPath表示的是打包生成的index.html文件里面引用资源的前缀
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
            // 把css拆分出来，打包到dist目录下的assets文件夹下的css文件夹下
            // filename属性它会根据output.path的路径为根目录，然后做相对路径查找。
            // 例如：当前的output.path为/dist/js/,而filename: path.posix.join('../', './assets/css/[name].[contenthash].css')，
            //则css打包出来的位置是相对于/dist/js目录下，先../,相对目录也就是到了/dist,再在/dist目录下执行./assets/css/，
            //最后也就是把css打包到了/dist/assets/css/
            filename: path.posix.join('./', './assets/css/[name].[contenthash].css'),
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './dist/index.html'), // 手动配置转换后的index.html打包后的位置
            template: './index.html',
            title: '您好吗webpack'
        }),
        // new webpack.DefinePlugin({
        //     // 注意：此处 webpack.dev.js 中写 'development' ，webpack.prod.js 中写 'production'
        //     "process.env": JSON.stringify('development')
        // })
        // new BundleAnalyzerPlugin(),

 
    ]
};

module.exports = config;