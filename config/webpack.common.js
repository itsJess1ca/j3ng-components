const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ENV, IS_PRODUCTION, APP_VERSION, IS_DEV, dir } = require('./helpers');

module.exports = function(options = {}) {
  return {
    context: dir(),
    resolve: {
      extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
      modules: [
        'node_modules',
        dir('src'),
        dir('demo')
      ]
    },
    output: {
      path: dir('dist'),
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        ENV,
        IS_PRODUCTION,
        APP_VERSION,
        IS_DEV,
        HMR: options.HMR
      }),
      new CopyWebpackPlugin([
        { from: 'assets', to: 'assets' }
      ]),
      new webpack.LoaderOptionsPlugin({
        options: {
          context: dir(),
          tslint: {
            emitErrors: false,
            failOnHint: false,
            resourcePath: 'src'
          },
          postcss: function() {
            return [ autoprefixer ];
          }
        }
      })
    ]
  };

};
