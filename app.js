
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Register
app.register('.haml', require('hamljs'));

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'haml');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  //app.use(app.logger({format:':method:url'}));
  app.use(express.static(__dirname + '/public'));

  app.use('view options', {
    layout: 'layout'
  });
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Helpers
app.helpers({
  ugo2_tag: '',
  ga_tag: ''
});

// Dynamic Helpers
app.dynamicHelpers({
  session: function(req, res){
    return req.session;
  }
});

// Routes
app.get('/', function(req, res){
  res.render('index', {
    title: 'TOP',
    description: 'Description',
    keywords: 'Keywords'
  });
});

app.get('/access', function(req, res){
  res.render('access', {
    title: 'Access Map',
    description: 'Description',
    keywords: 'Keywords'
  });
});

app.get('/gallery', function(req, res){
  res.render('gallery', {
    title: 'EIG Gallery',
    description: 'Description',
    keywords: 'Keywords'
  });
});

app.get('/inquiry', function(req, res){
  res.render('inquiry', {
    title: 'Inquiry or Mail',
    description: 'Description',
    keywords: 'Keywords'
  });
});

app.get('/overview', function(req, res){
  res.render('overview', {
    title: 'Company Overview',
    description: 'Description',
    keywords: 'Keywords'
  });
});

app.get('/process', function(req, res){
  res.render('process', {
    title: 'EIG Process',
    description: 'Description',
    keywords: 'Keywords'
  });
});

app.get('/recruit', function(req, res){
  res.render('recruit', {
    title: 'Recruitment',
    description: 'Description',
    keywords: 'Keywords'
  });
});

app.get('/privacy', function(req, res){
  res.render('privacy', {
    title: 'Privacy policy',
    description: 'Description',
    keywords: 'Keywords'
  });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
