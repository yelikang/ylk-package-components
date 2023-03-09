
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    context: path.resolve(__dirname, '../'),
    cache: {
        type: 'filesystem',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [
                    path.resolve('src')
                ],
                options: {
                    presets: ['@babel/preset-env'],
                }
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset/resource',
            },
            {
                test: /\.(svg)(\?.*)?$/,
                type: 'asset/resource',
                exclude: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.jsx'],
        alias:{
            '@': path.resolve('src'),
            'lib': path.resolve('lib'),
            'packages':path.resolve('packages')
        }
    },
    externals: {
    }
}