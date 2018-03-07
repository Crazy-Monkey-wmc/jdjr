const webpack = require('webpack')
module.exports = {
  baseUrl: './',
  devServer: {
    port: 8080,
    open: true
  },
  vueLoader: {
    loaders: {
      css: [{
          loader: 'vue-style-loader',
          options: {
            shadowMode: false,
            sourceMap: false
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            minimize: false
          }
        },
        {
          loader: 'px2rem-loader',
          options: {
            remUnit: 40,
            remPrecision: 8
          }
        }
      ],
      scss: [{
          loader: 'vue-style-loader',
          options: {
            shadowMode: false,
            sourceMap: false
          }
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: false,
            minimize: false
          }
        },
        {
          loader: 'px2rem-loader',
          options: {
            remUnit: 40,
            remPrecision: 8
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: false
          }
        }
      ],
    }
  }
}