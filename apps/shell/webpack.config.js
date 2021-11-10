/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, 'dist'),
    port: 3001,
    liveReload: false,
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            require.resolve('react-refresh/babel'),
            '@babel/plugin-transform-runtime',
          ],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      exposes: {
        // "./Button": "./src/Button",
        // "./Heading": "./src/Heading",
      },
      remotes: {
        utils: 'utils@[utilsUrl]/remoteEntry.js',
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main'],
    }),
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/, /bootstrap\.js$/],
    }),
  ],
};
