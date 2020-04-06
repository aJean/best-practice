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
        // redux: './src/redux/app.tsx',
        // gclient: './src/graphql/app.ts',
        // dva: './src/dva/app.tsx',
        // jsp: './src/jsplumb/app.tsx',
        // component: './src/component/app.tsx',
        // 'wbc': './src/component/webcomponent.ts',
        // 'mobx-imitate': './src/mobx-imitate/app.ts',
        // 'redux-imitate': './src/redux-imitate/app.tsx',
        'router': './src/router/index.tsx'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'dist/assets'),
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
                {loader: 'css-loader'},
                {loader: 'less-loader'}
            ])
        }]
    },
    plugins: [extractLess],
    resolve: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx']
    }
};