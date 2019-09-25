const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');


function resolve(dir) {
    console.log( process.env.NODE_ENV, '环境变量', path.join(__dirname, './', dir));
    return path.join(__dirname, './', dir);
}

const devMode = process.env.NODE_ENV !== 'production';

const config = {
    mode: process.env.NODE_ENV,
    entry: {
        main: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // 使用chunkhash，不使用hash，这样可以起到缓存js的作用。（注意：热更新(HMR)不能和[chunkhash]同时使用。
        //因此开发环境不能使用chunkhash，改换hash。因为[chunkhash]只建议在生成环境使用，开发环境会增加编译时间）
        filename: 'js/[name]-['+ (devMode ? 'hash' : 'chunkhash') +':8].js',
        // publicPath表示打包后的文件的根目录路径(表示的是打包生成的index.html文件里面引用资源的前缀)
        // 假如原本index.html插入的js文件路径为/assets/js/xxxx.js，设置publicPath为./static/的话，则js文件的路径将会变为./static/assets/js/xxxx.js
        // publicPath只有在index.html第一次插入的js资源或者css资源路径有效，对路由跳转后的页面的图片资源的路径不生效
        publicPath: devMode ? '/' : './',
    },
    externals: {
        vue: 'Vue',
        jquery: 'jQuery',
        "lodash": {
            commonjs: "lodash",//如果我们的库运行在Node.js环境中，import _ from 'lodash'等价于const _ = require('lodash')
            commonjs2: "lodash",//同上
            amd: "lodash",//如果我们的库使用require.js等加载,等价于 define(["lodash"], factory);
            root: "_"//如果我们的库在浏览器中使用，需要提供一个全局的变量‘_’，等价于 var _ = (window._) or (_);
        }
    },
    devtool: devMode ? "source-map" : 'none',
    devServer: {
        // contentBase: path.join(__dirname, './dist/assets'),
        // publicPath: '/',// 如果没有设置，则使用output.publicPath的值
        host: 'localhost',
        port: '8088',
        open: true, //自动拉起浏览器
        hot: true, //热加载
        historyApiFallback: {// 当vue-router设置了mode为history，不配置该设置的话，在开发环境手动刷新页面，会导致not found 404的错误。
            //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
            rewrites: [{ from: /.*/, to: path.posix.join('/', 'index.html') }], // 所以页面在刷新的时候都使用/index.html
        },
        //hotOnly:true
    },
    optimization: {
        // usedExports: true,
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
            // vueDing: {
            //     test:/[\\/]node_modules[\\/](vue)|(vue-router)/,
            //     priority: 3,
            //     chunks: 'initial',
            // },
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
                // options: {//如果有这个设置则不用再添加.babelrc文件进行配置
                //     "babelrc": false,// 不采用.babelrc的配置
                //     "plugins": [
                //         "dynamic-import-webpack"
                //     ]
                // }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                devMode ? 'style-loader' : {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      hmr: process.env.NODE_ENV === 'development',
                    },
                  },
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
                ],
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
                        publicPath: devMode ? '/' : './dist/', //如果不设置publicPath，那么打包后的图片路径将是./assets/images/xxxx.jpg。
                        // 如果publicPath: './dist/'，则打包后的图片路径将是./dist/assets/images/xxxx.jpg。publicPath表示的是打包生成的index.html文件里面引用资源的前缀
                      },
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),

        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './dist/index.html'), // 手动配置转换后的index.html打包后的位置
            template: './index.html',
            staticPath: './',
            title: '您好吗webpack'
        }),
        // new webpack.DefinePlugin({
        //     // 注意：此处 webpack.dev.js 中写 'development' ，webpack.prod.js 中写 'production'
        //     "process.env": JSON.stringify('development')
        // }),
        // new BundleAnalyzerPlugin(),

        // 配合externals配置项使用
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './static'),
                to: './static',
                ignore: ['.*'],
            },
        ]),
 
    ]
};

!devMode && config.plugins.push(
    new MiniCssExtractPlugin({
        // 把css拆分出来，打包到dist目录下的assets文件夹下的css文件夹下
        // filename属性它会根据output.path的路径为根目录，然后做相对路径查找。
        // 例如：当前的output.path为/dist/js/,而filename: path.posix.join('../', './assets/css/[name].[contenthash].css')，
        //则css打包出来的位置是相对于/dist/js目录下，先../,相对目录也就是到了/dist,再在/dist目录下执行./assets/css/，
        //最后也就是把css打包到了/dist/assets/css/
        filename: devMode ? '[name].css' : path.posix.join('./', './assets/css/[name].[contenthash].css'),
    })
);

module.exports = config;