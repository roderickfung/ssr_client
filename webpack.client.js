const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.config.js');

const config = {
  // entry: tell webpack the root file of our server application.
  entry: './client.js',
  // output: tell where to put the output file that is generated.
  output: {
    filename: 'bundle.client.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(base, config);
