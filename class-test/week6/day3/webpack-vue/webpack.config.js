const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({template: './public/index.html'}), //JS或者CSS文件可以自动引入到html中
  ],
  resolve: {
    extensions: ['.js', '.css', '.vue'],  //配置后缀名
  },
  devServer: {
    port: 8888,
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, './'),
      watch: true
    }
  }
}