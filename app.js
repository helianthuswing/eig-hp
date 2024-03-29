
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer(express.logger());

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
});

var description_str = "株式会社イイアイジイは、テクニカルイラスト(TI)，立体製図，3次元イラスト，図面入力，サービスマニュアルの作成，プレゼンテーション用資料，デジタルコンテンツ，設計・製図をおこなっています。外部協力者も募集中！EIGは伝える技術の見える化を推進します。"
var keywords_str = "イイアイジイ,EIG,TI,テクニカルイラスト,立体製図,3次元イラスト,取扱説明書,プレゼンテーション,募集,求人,Flash,イラストレーター,設計,製図,マルチメディア,DTP,カタログ作成,CAD"

// Dynamic Helpers
app.dynamicHelpers({
  session: function(req, res){
    return req.session;
  }
});

// Routes
app.get('/', function(req, res){
  res.render('index', {
    title: '株式会社EIG',
    description: description_str,
    keywords: keywords_str,
    layout: false
  });
});

app.get('/company', function(req, res){
  res.render('company', {
    title: '株式会社EIG : 会社概要',
    description: description_str,
    keywords: keywords_str
  });
});

app.get('/business', function(req, res){
  res.render('business', {
    title: '株式会社EIG : 業務内容',
    description: description_str,
    keywords: keywords_str
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
    title: '株式会社EIG : お問い合わせ',
    description: description_str,
    keywords: keywords_str
  });
});

app.get('/recruit', function(req, res){
  res.render('recruit', {
    title: '株式会社EIG : リクルート',
    description: description_str,
    keywords: keywords_str
  });
});

app.get('/privacy', function(req, res){
  res.render('privacy', {
    title: '株式会社EIG : 個人情報保護方針',
    description: description_str,
    keywords: keywords_str
  });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
