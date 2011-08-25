
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hamljs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
app.get('/', function(req, res){
  res.render('index', {
    title: 'Express',
    layout: false
  });
});

app.get('/access', function(req, res){
  res.render('access', {
    title: 'Express',
    layout: false
  });
});

app.get('/gallery', function(req, res){
  res.render('gallery', {
    title: 'Express',
    layout: false
  });
});

app.get('/inquiry', function(req, res){
  res.render('inquiry', {
    title: 'Express',
    layout: false
  });
});

app.get('/overview', function(req, res){
  res.render('overview', {
    title: 'Express',
    layout: false
  });
});

app.get('/process', function(req, res){
  res.render('process', {
    title: 'Express',
    layout: false
  });
});

app.get('/recruit', function(req, res){
  res.render('recruit', {
    title: 'Express',
    layout: false
  });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
