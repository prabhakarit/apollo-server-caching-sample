const CleanWebpackPlugin  = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('./paths');

const common = require('./webpack-bff.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  entry: [path.bffEntryPath],
  externals: [nodeExternals({})],
  mode: 'production',
  plugins: [new CleanWebpackPlugin()]
});