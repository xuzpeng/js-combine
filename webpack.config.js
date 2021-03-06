const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path');

const modName = 'js-combine';

module.exports = {
  mode: "production",
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: `${modName}.js`,
    library: modName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist'),
    // libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范, 这个加了会导致引入不了，导致require的值为undefined
    globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true
    })
  ]
}
