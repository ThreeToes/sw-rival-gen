/**
 * Created by poiso_000 on 26/07/2016.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/main/ts/polyfills.ts',
        'vendor': './src/main/ts/vendor.ts',
        'app': './src/main/ts/app.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module:{
        loaders: [
            { test: /\.ts$/, loaders: ['ts', 'angular2-template-loader'] },
            { test: /\.html$/, loader: 'html' },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
        ]
    },
    output:{
        filename: '[name].js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/main/html/index.html'
        }),

        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name].css", {allChunks: false})
    ]
};