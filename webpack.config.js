/**
 * @file local compile
 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: '[name].css'
});

module.exports = {
    mode: 'development',
    devtool: 'none',
    node: {
        fs: "empty",
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        module: 'empty'
    },
    optimization: {
        minimize: false
    },
    entry: {
        imitate: './src/redux-imitate/app.tsx',
        redux: './src/redux/app.tsx',
        gclient: './src/graphql/app.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'r',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this',
    },
    module: {
        rules: [{
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            loader: 'url-loader?limit=30000&name=[name].[ext]'
        }, {
            test: /\.(ts|tsx)/,
            use: 'ts-loader',
            exclude: /dist|node_modules/
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract([
                {loader: 'css-loader', options: {minimize: true}},
                {loader: 'less-loader'}
            ])
        }]
    },
    plugins: [extractLess],
    resolve: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx']
    }
};