/**
 * @file local compile
 */

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const extractLess = new ExtractTextPlugin({
  filename: '[name].css'
});

module.exports = {
  mode: 'development',
  devtool: 'none',
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    module: 'empty'
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          priority: 2,
          minChunks: 1
        }
      }
    }
  },
  entry: {
    // redux: './src/redux/app.tsx',
    // gclient: './src/graphql/app.ts',
    dva: './src/dva/dva.tsx',
    jsp: './src/jsplumb/app.tsx',
    hook: './src/component/app.tsx'
    // 'wbc': './src/component/webcomponent.ts',
    // 'mobx-imitate': './src/mobx-imitate/app.ts',
    // 'redux-imitate': './src/redux-imitate/app.tsx',
    // 'router': './src/router/index.tsx'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist/assets')
  },
  module: {
    rules: [
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name].[ext]'
      },
      {
        test: /\.(ts|tsx)/,
        use: 'ts-loader',
        exclude: /dist|node_modules/
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract([{ loader: 'css-loader' }, { loader: 'less-loader' }])
      }
    ]
  },
  plugins: [
    extractLess,
    new HtmlWebpackPlugin({ filename: '../page/dva.html', template: 'template/page.html', chunks: ['dva'] }),
    new HtmlWebpackPlugin({ filename: '../page/jsp.html', template: 'template/page.html', chunks: ['jsp'] }),
    new HtmlWebpackPlugin({ filename: '../page/hook.html', template: 'template/page.html', chunks: ['hook'] }),
    new WebpackBar()
  ],
  stats: {
    assets: true,
    modules: false,
    timings: true
  },
  resolve: {
    extensions: ['.mjs', '.js', '.json', '.ts', '.tsx']
  }
};
