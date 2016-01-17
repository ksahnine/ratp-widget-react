var path = require('path');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: [
    path.resolve(ROOT_PATH, 'app/main'),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.css$/,
              loaders: [ 'style', 'css' ]
          },
          {
              test: /\.jsx?$/,
              loaders: [ 'babel' ],
              include: path.resolve(ROOT_PATH, 'app')
          }
      ]
  }
};
