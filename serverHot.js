const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  // publicPath: 'http://localhost:9000/',
  stats: {
		colors: true
	},
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8000',
    'Access-Control-Allow-Methods': 'GET,OPTIONS,HEAD,PUT,POST,DELETE,PATCH',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With',
    'Access-Control-Allow-Credentials': 'true'
  }
}));

app.use(require('webpack-hot-middleware')(compiler, {
  dynamicPublicPath: true,
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));


const PORT = 9000;
app.listen(PORT, function() {
  console.log('Server HOT - listen: ', PORT);
});