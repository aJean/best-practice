/**
 * @file local compile
 */

const Config = require('webpack-chain');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

// webpack-chain
const config = new Config();

config.mode('development').devtool('none');

config.node.set('fs', 'empty').set('net', 'empty').set('tls', 'empty').set('dns', 'empty').set('module', 'empty');

config.optimization.minimize(false).splitChunks({
  chunks: 'initial',
  cacheGroups: {
    vendor: {
      test: /[\\/]node_modules[\\/]/,
      name: 'vendor',
      priority: 2,
      minChunks: 1
    }
  }
});

// entries
config.entry('dva').add('./src/dva/dva.tsx');
config.entry('jsp').add('./src/jsplumb/app.tsx');
config.entry('hook').add('./src/component/app.tsx');
// config.entry('redux').add('./src/redux/app.tsx');
// config.entry('gclient').add('./src/graphql/app.ts');
// config.entry('wbc').add('./src/component/webcomponent.ts');
// config.entry('mobx-imitate').add('./src/mobx-imitate/app.ts');
// config.entry('redux-imitate').add('./src/redux-imitate/app.tsx');
// config.entry('router').add('./src/router/index.tsx');

config.output.filename('[name].js').chunkFilename('[name].js').path(path.resolve(__dirname, 'dist/assets'));

// rules
config.module
  .rule('img')
  .test(/\.(eot|woff|woff2|ttf|svg|png|jpg)$/)
  .use('url-loader')
  .loader('url-loader?limit=30000&name=[name].[ext]');

config.module
  .rule('ts')
  .test(/\.(ts|tsx)/)
  .exclude.add(/dist|node_modules/)
  .end()
  .use('ts-loader')
  .loader('ts-loader');

const extract = ExtractTextPlugin.extract([{ loader: 'css-loader' }, { loader: 'less-loader' }]);
const less = config.module
  .rule('less')
  .test(/\.less$/)
  .exclude.add(/dist|node_modules/)
  .end();
extract.forEach(obj => less.use(obj.loader).loader(obj.loader, obj.options));

// plugins
config.plugin('extractLess').use(ExtractTextPlugin, [{ filename: '[name].css' }]);

config
  .plugin('html1')
  .use(HtmlWebpackPlugin, [{ filename: '../page/dva.html', template: 'template/page.html', chunks: ['dva'] }]);

config.plugin('html2')
  .use(HtmlWebpackPlugin, [{ filename: '../page/jsp.html', template: 'template/page.html', chunks: ['jsp'] }]);
  
config.plugin('html3') 
  .use(HtmlWebpackPlugin, [{ filename: '../page/hook.html', template: 'template/page.html', chunks: ['hook'] }]);

config.plugin('progress').use(WebpackBar);

config.stats({
  assets: true,
  modules: false,
  timings: true
});

config.resolve.extensions.merge(['.mjs', '.js', '.json', '.ts', '.tsx']);

module.exports = config.toConfig();
