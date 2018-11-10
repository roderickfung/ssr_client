const path = require('path');

module.exports = {
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
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      helpers: path.resolve(__dirname, 'helpers/'),
      lib: path.resolve(__dirname, 'lib/'),
      src: path.resolve(__dirname, 'src/')
    }
  }
};
