/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const getExposes = require('./src/getExposes');
const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
  console.log(env);
  console.log(argv);
  return {
    devtool: 'source-map',
    optimization: {
      minimize: true,
    },
    output: {
      publicPath: 'auto',
      clean: true,
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json', '.tsx', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
        },
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
          },
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'ui',
        filename: 'remoteEntry.js',
        exposes: getExposes(),
        remotes: {},
        shared: {
          ...deps,
          react: {
            singleton: true,
            eager: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
      new ExternalTemplateRemotesPlugin(),
    ],
  };
};
