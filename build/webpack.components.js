const path = require('path');
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base')
const utils = require('./utils');
const config = require('../config');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    entry: utils.getComponentEntrys('../packages'),
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
            filename: 'theme/[name].css',
            chunkFilename: `theme/[name].css`
        })
    ]
})