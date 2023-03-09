
const path = require('path');
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base')
const utils = require('./utils');
const config = require('../config');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    entry: './packages/index.js',
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.js',
        library: {
            type: 'commonjs2',
            export: 'default'
        },
        // clean:true
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
            filename: 'theme/index.css',
            chunkFilename: `theme/index.css`
        })
    ]
})