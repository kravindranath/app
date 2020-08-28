const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    devtool: 'inline-source-map', //for debugging in error console
    entry: './src/client.js',
    mode: 'development',
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.html']
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
            template: 'templates/main.html'
        })
    ]
};