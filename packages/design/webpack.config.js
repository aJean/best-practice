const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'none',
  optimization: {
    minimize: false,
  },
  entry: {
    decorator: './src/decorator/example.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            'babel-plugin-parameter-decorator',
            '@babel/plugin-proposal-object-rest-spread'
          ],
        },
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract([
          { loader: 'css-loader', options: { minimize: true } },
          { loader: 'less-loader' },
        ]),
      },
    ],
  },
  plugins: [new ExtractTextPlugin('vdom.css')],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  }
};
