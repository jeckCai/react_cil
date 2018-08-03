const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Moment = require('moment');
const GenerateAssetPlugin = require('generate-asset-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var ProjectAppName = 'ECHEP';
var Out = 'update/';
var Ent = 'src/';
var nodeModulesPath = './node_modules';
var Config = require('./config.js');
// 获取版本号
var Version = Config.b_v + '.' + Config.m_v;

module.exports = {
    module: {
        rules: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['react','es2015']
            }
        }, {
            test: /\.html$/,
            use: 'html-loader'
        }, {
            test: /\.css$/,
            // use:ExtractTextWebpackPlugin.extract({
            //     use:'css-loader',
            //     fallback:'style-loader'
            // })
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 1000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 1,
                name: 'fonts/[name].[hash:7].[ext]'
            }
        }]
    },
    ////// 入口 
    entry: {
        index: ['./' + Ent + 'main.js'],
        vendor: ['react','react-dom','react-router','antd-mobile']
        
    },
    output: {
        path: path.resolve(__dirname, Out),
        filename: '[name].bundle.js',
    },
    resolve: {
        alias: {}
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            },
            inject: true,
            hash: true,
            cache: true,
            filename: 'index.html',
            template: './index.html.tpl'
        }),
        new HtmlReplaceWebpackPlugin([{
            pattern: '@@version',
            replacement: Version
        }]),
        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendor', 
            filename: 'vendor.bundle.js' 
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new ExtractTextWebpackPlugin({filename:'css/[name].css',allChunks: true}),

    ],
    devServer: {
        host: 'localhost',
        hot: true,
        open: true,
        inline: true,
        compress: true,
        contentBase: path.resolve(__dirname, Out),
        // publicPath: Out,
        proxy: {
            '/vpn': {
                target: 'http://192.168.1.27:1111/',
                changeOrigin: true,
                pathRewrite: {
                    '^/vpn': ''
                }
            },
            '/dev':{
                target:'http://192.168.1.27:1111',
                changeOrigin:true,
                pathRewrite:{
                    '^/dev':''
                }
            }
        }
    }
};
// 开发
if (process.env.NODE_ENV === 'development') {
    module.exports.devtool = '#cheap-module-source-map';  // #cheap-module-source-map
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.HotModuleReplacementPlugin()
    ])
}
// 发布
else if (process.env.NODE_ENV === 'production') {

    // 生成文件名
    var filename = ProjectAppName + '_' +
        Config.key + '_' +
        Version + '_' +
        Moment().format('YYYYMMDDHmmss') + '.zip';

    // 记录上传文件的名字
    Config.url = filename;

    //生成项目json
    var createJson = function(compilation) {
        var tpl = {
            "resultCode": 1,
            "data": {
                "keys": [Config.key],
                "data": [Config]
            }
        };

        return JSON.stringify(tpl);
    };

    module.exports.devtool = '#source-map';   //source-map  false  不调试
    module.exports.plugins = (module.exports.plugins || []).concat([
         new CleanWebpackPlugin([Out]),
        new webpack.optimize.UglifyJsPlugin({
            output:{
                comments:false
            },
            compress: {
                warnings: false
            }
        }),
        new ZipPlugin({
            filename: filename
        }),
        new GenerateAssetPlugin({
            filename: ProjectAppName + '.json',
            fn: (compilation, cb) => {
                cb(null, createJson(compilation));
            },
            extraFiles: []
        })
    ]);

} // 查看依赖
else if (process.env.NODE_ENV === 'list-build') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new BundleAnalyzerPlugin()
    ])
}