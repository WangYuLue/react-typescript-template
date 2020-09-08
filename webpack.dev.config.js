const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  devtool: 'source-map',
  devServer: {
    hot: true,
    open: true,
    port: 3003,
    historyApiFallback: true,
    overlay: {
      errors: true
    }
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /.\/src\/environments\/index.ts/,
      path.resolve(__dirname, 'src/environments/environment.dev.ts')
    )
  ]
});

