var webpackConfig = require('./webpack.config.js')
const path = require('path')

const testPath = path.resolve(__dirname, './test/')

module.exports = {
  devServer: {
    host: 'localhost',
    port: '8081'
  },
  devtool: '#inline-cheap-module-source-map',
  mode: webpackConfig.mode,
  plugins: webpackConfig.plugins,
  module: webpackConfig.module,
  entry : 'mocha-loader!./test/index.js',
  output: {
    filename: 'test.build.js',
    path: testPath,
    publicPath: 'http://localhost:8081'
  }
}