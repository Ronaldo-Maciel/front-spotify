const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].bundle.js',
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true
        }
      }
    }
  },

});
