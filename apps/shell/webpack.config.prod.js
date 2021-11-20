/* eslint-disable @typescript-eslint/no-var-requires */
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
  console.log(env);
  console.log(argv);
  return {
    entry: './src/index',
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
          },
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'shell',
        filename: 'remoteEntry.js',
        remotes: {
          ui: 'ui@[uiUrl]/remoteEntry.js',
          utils: 'utils@[utilsUrl]/remoteEntry.js',
        },
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
          'react-router-dom': {
            singleton: true,
            // eager: true,
            requiredVersion: deps['react-router-dom'],
          },
        },
      }),
      new ExternalTemplateRemotesPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['main'],
      }),
    ],
  };
};
