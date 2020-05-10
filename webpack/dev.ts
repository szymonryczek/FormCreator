import webpack from 'webpack';
import 'webpack-dev-server';
import merge from 'webpack-merge';
import dotenv from 'dotenv';
import common from './common';

const { parsed: dotenvParsed } = dotenv.config();

const config = merge.smart(common, {
  entry: ['react-hot-loader/patch', './src/index'],
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: dotenvParsed?.API_URL,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

export default config;
