const path = require('path');

module.exports = {
  // target: inform webpack that we're building a bundle for node.js, rather than for the browser.
  target: 'node',
  // entry: tell webpack the root file of our server application.
  entry: './server.js',
  // output: tell where to put the output file that is generated.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'react',
                'stage-0',
                ['env', { targets: { browsers: ['last 2 versions'] } }]
              ]
            }
          }
        ]
      }
    ]
  }
};
