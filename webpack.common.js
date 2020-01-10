const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin= require('clean-webpack-plugin');

module.exports = {
  entry: {
    main:'./src/index.js'
  },
  output: {
    path: path.join(__dirname ,'dist'),
    publicPath: '/',
    filename: '[name].[hash:4].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader','eslint-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: [{
          loader:'style-loader'
        },{
          loader:'css-loader'
        },{
          loader:'sass-loader'
        }]
      },
      {
        test: /\.(jpg|png)$/,
        loaders: [
          'url-loader?limit=10000!?name=dist/[hash:4].[ext]',
        ],
      }
    
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: path.join(__dirname ,'dist/index.html')
    }),
  ],
};
