const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // include: [
        //   path.resolve(__dirname, 'client'),
        // ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        // css, sass or scss
        test: /\.(css|s[ac]ss)$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'],
      },
    ],
    // loaders: [
    //   { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
    // ],
  },
  devServer: {
    compress: true,
    port: 8080,
    hot: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        // secure: false,
      },
    },
  },
};
