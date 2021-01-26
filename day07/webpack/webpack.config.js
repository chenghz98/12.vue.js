const path = require('path')

//导入包
const HtmlWebpackPlugin = require('html-webpack-plugin')
//创建对象
const htmlPlugin = new HtmlWebpackPlugin({
  //设置生成预览页面的模板文件
  template: './src/index.html',
  //设置生成的预览页面名称
  filename: 'index.html'
})
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const vuePlugin = new VueLoaderPlugin()
module.exports = {
  mode: 'development',
  // 设置入口文件路径
  entry: path.join(__dirname, 'src/index.js'),
  // 设置出口文件
  output: {
    // 设置路径
    path: path.join(__dirname, 'dist'),
    // 设置文件名
    filename: 'handle.js'
  },
  plugins: [htmlPlugin, vuePlugin],
  module: {
    rules: [
      {
        //test设置需要匹配的文件类型，支持正则
        test: /\.css$/,
        //use表示该文件类型需要调用的loader
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        // limit 用来设置字节数，小于等于 limit 值的图片，会转成 base64 格式
        // 注意针对的是背景图片
        use: 'url-loader?limit=16940'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        // exclude为排除项，意思是不要处理 node_modules 中的 js 文件
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}
