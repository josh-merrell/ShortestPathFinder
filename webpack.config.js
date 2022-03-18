const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./client/index.js', './client/styles.css'],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({ 
    template: 'index.html',
    filename: './index.html'
  })],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build' ),
      publicPath: '/build',
    },
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }        
      },
    }, {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }]
  }
};