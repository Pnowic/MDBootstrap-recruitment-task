var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: {
        main: path.join(__dirname, 'jsx', 'app.jsx')
    },
    output: {
        path: path.join(__dirname, '/docs'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "/docs"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2', 'react'],
                        plugins: ['transform-class-properties', 'transform-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|svg|gif|woff|otf)$/,
                use: {loader: 'file-loader'}
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            hash: false
        }),
        new ExtractTextPlugin('style.css'),
        new ExtractTextPlugin({
         filename: 'style.css',

        })

    ]
}
