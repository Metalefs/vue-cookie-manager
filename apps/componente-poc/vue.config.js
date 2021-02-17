const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    devServer: {
      host: '127.0.0.1',
      port: 8080,
      public: 'localhost:8080',
    },
    css: {
      extract: false,
    },
    configureWebpack: {
      optimization: {
        splitChunks: false // makes there only be 1 js file - leftover from earlier attempts but doesn't hurt
      },
      output: {
        filename: 'cookieManager.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html', // this is important - a template file to use for insertion
          inlineSource: '.(js|css)$' // embed all javascript and css inline
        }),
        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
      ]
    }
}