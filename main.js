var express = require('express')
  , routes = require('./routes')
  , path = require('path')
  , http = require('http')

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '')));

app.use('/', routes);


module.exports = app;