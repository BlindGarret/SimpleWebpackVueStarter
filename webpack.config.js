const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const NODE_ENV = process.env.NODE_ENV

const setPath = function (folderName) {
  return path.join(__dirname, folderName)
}

const buildForLocal = () => {
  return (NODE_ENV === 'development')
}

const extractHtml = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: true,
  template: setPath('src/tpl/tpl.ejs'),
  minify: {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    removeComments: true,
    removeEmptyAttributes: true
  },
  environment: process.env.NODE_ENV,
  isLocalBuild: buildForLocal(),
  imgPath: (!buildForLocal()) ? 'assets' : 'src/assets'
})

const config = {
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all'
    }
  },
  resolveLoader: {
    modules: [setPath('node_modules')]
  },
  mode: buildForLocal() ? 'development' : 'production',
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  plugins: [
    extractHtml,
    new MiniCssExtractPlugin({
      filename: 'css/styles.[hash].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (NODE_ENV === 'development' || NODE_ENV === 'staging'),
        NODE_ENV: '"' + NODE_ENV + '"'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: !buildForLocal()
          ? [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ] : [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]',
          userRelativePath: buildForLocal()
        }
      }
    ]
  }
}

module.exports = config
