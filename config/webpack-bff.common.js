const path = require('./paths');

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.nodeModulesPath],
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  output: {
    filename: 'server.js',
    path: path.bffOutputPath
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node'
};