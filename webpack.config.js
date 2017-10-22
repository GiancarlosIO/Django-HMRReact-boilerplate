const path = require('path');

module.exports = {
  entry: {
    entry_1: path.resolve(__dirname, 'polls/static/polls/js/entry_1.js'),
    entry_2: path.resolve(__dirname, 'polls/static/polls/js/entry_2.js'),
    entry_3: path.resolve(__dirname, 'polls/static/polls/js/entry_3.js'),
  },
  output: {
    path: path.resolve(__dirname, 'polls/static/polls/js/dist'),
    filename: '[name].min.js',
    publicPath: 'http://localhost:9000/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /.(jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
            },
          }
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'polls/static/polls/js/dist'),
    port: 9000,
  }
};
