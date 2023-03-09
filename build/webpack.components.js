const path = require('path');
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base')
const utils = require('./utils');
const config = require('../config');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        // 组件重命名判断
        'c-input': './packages/c-input',
        'c-select': './packages/c-select'
    },
    output: {
        // 单个组件输出到lib目录
        path: path.resolve(__dirname, '../lib'),
        filename: '[name]/index.js',
        library: {
            type: 'commonjs2',
            export: 'default'
        },
        // clean: true,
    },
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/style/index.css',
            chunkFilename: `[id]/style/index.css`
        })
    ]
})