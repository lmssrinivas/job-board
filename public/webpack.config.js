const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

    entry: {
        vendor:'./js/vendor.js',
        app:'./js/app.js'
    },
    resolve: {
        extensions: ['.js', '.css', '.scss']
    },
    target: 'web',
    output: {
        path: path.resolve('./../dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './public',
        publicPath:'http://localhost:3000/dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template :'./index.html',
            filename:'index.html',
            inject:'body'
        }),
        new ExtractTextPlugin({
            filename: 'styles/main.css',
            allChunks: true
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

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
                test:/\.scss$/,
                loader:ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap')
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
            },
            {
                test: /\.(eot|ttf|svg|gif|png)$/,
                loader: "file-loader"
            }
        ]

    }

}
