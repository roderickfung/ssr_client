const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // target: inform webpack that we're building a bundle for node.js, rather than for the browser.
  target: 'node',
  // entry: tell webpack the root file of our server application.
  entry: './server.js',
  // output: tell where to put the output file that is generated.
  output: {
    filename: 'bundle.server.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(base, config);
