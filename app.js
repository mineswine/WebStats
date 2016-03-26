// Load environment variables
require('dotenv').load();

// Load dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var webpack = require("webpack");
var app = express();


// Load server routes
var index = require('./src/server/routes/index');
var sockets = require('./src/server/sockets/api');

// Load Webpack config
var packConfig = require('./webpack.config');
var compiler = webpack(packConfig);


// Webpack middleware to allow webpack to automatically rebundle on changes
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: packConfig.output.publicPath
}));

// Webpack middleware to automatically refresh pages on changes
app.use(require("webpack-hot-middleware")(compiler));


// View engine setup
app.set('views', path.join(__dirname, 'views')); // Mount path to view folder
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Setup for publicly accessible assets
app.use(express.static(path.join(__dirname, 'public')));


// Mount Routes
app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// Start up sockets




module.exports = app;
