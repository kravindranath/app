const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map', //for debugging in error console
    entry: './src/index.js',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.?(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' //important to serve everything from app folder
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: 'views/layouts/main.hbs'
        })
    ]
};