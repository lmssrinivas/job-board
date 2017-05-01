const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {

    entry: {
        vendor:'./js/vendor.js',
        app:'./js/app.js',
    },
    target: 'web',
    output: {
        path: path.resolve('./../dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        new HtmlWebpackPlugin({
            template :'./index.html',
            filename:'index.html',
            inject:'body'
        }),

        new CopyWebpackPlugin([
            {
                from:'./images', to:'images'
            },
            {
                from:'./node_modules/jquery/**'
            },
            {
                from:'./node_modules/bootstrap/**'
            },
            {
                from:'./node_modules/font-awesome/**'
            },
            {
                from:'./node_modules/ContentTools/**'
            }
        ])
    ],
    module: {

        loaders: [

            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /(\css)$/,
                loader: ['style', 'css']
            },

            {
                test: /\.(woff|woff2)$/,
                loader: 'url?prefix=font&limit=5000'
            },
            {
                test: /\.(eot|ttf|svg|gif|png)$/,
                loader: "file-loader"
            }
        ]

    }

}
