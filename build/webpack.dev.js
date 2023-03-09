const path = require('path');
const ip = require('ip');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge')
const FriendlyErrorsPlugin = require('@nuxt/friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const baseWebpackConfig = require('./webpack.base')
const utils = require('./utils');
const config = require('../config');


let devWebpackConfig = merge(baseWebpackConfig, {
    entry: path.resolve('./src/main.js'),
    mode: 'development',
    devtool: config.dev.devtool,
    devServer: {
        host: config.dev.host,
        port: config.dev.port,
        hot: true
    },
    stats: 'minimal',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('public/index.html'),
            filename: 'index.html',
            title:'组件库'
        })
    ],
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap,
            usePostCSS: true
        })
    }
})

module.exports = new Promise((resolve, reject) => {
    // 自动获取可用端口
    portfinder.basePort = devWebpackConfig.devServer.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            process.env.PORT = port;
            const protocol = devWebpackConfig.devServer.https ? 'https' : 'http';
            devWebpackConfig.devServer.port = port;
            devWebpackConfig.plugins.push(
                new FriendlyErrorsPlugin({
                    compilationSuccessInfo: {
                        messages: [
                            'App runing at: ',
                            `- Local: ${protocol}://localhost:${port}`,
                            `- Network: ${protocol}://${ip.address()}:${port}`,
                        ],
                    },
                    onErrors: utils.createNotifierCallback()
                })
            );
            resolve(devWebpackConfig);
        }
    });
});