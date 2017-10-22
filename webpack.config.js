const path = require('path');
const webpack = require('webpack');

module.exports = {
  // devtool: 'source-map', delay to compile :()
  entry:  {
    entry_3: [
      'react-hot-loader/patch',
      path.resolve(__dirname, 'polls/static/polls/js/entry_3.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'polls/static/polls/js/dist'),
    filename: '[name].min.js',
    publicPath: 'http://localhost:9000/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              plugins: [
                'react-hot-loader/babel'
              ],
            },
          }
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
    // publicPath: 'http://localhost:9000/',
    // contentBase: path.join(__dirname, 'polls/static/polls/js'),
    stats: { colors: true },
    port: 9000,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8000',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With',
      'Access-Control-Allow-Credentials': 'true'
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
