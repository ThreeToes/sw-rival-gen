/**
 * Created by poiso_000 on 26/07/2016.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/ts/app.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module:{
        loaders: [
            { test: /\.ts$/, loaders: ['ts', 'angular2-template-loader'] },
            { test: /\.html$/, loader: 'html' },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),

        new HtmlWebpackPlugin({
            template: 'src/html/index.html'
        })
    ]
};