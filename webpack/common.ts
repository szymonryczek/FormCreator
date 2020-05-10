import webpack from 'webpack';
import path from 'path';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const srcPath = path.resolve('.', 'src');

const config: webpack.Configuration = {
  entry: './src/index',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~': srcPath,
    },
  },
  output: {
    path: path.resolve('build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.([jt])sx?$/,
        exclude: /\/core-js|node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpe?g|gif|ttf|woff2?|eot)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/form-creator.png',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};

export default config;
