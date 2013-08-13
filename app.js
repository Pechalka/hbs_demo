
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();


 var ECT = require('ect');
 var ectRenderer = ECT({ watch: true, root: path.join(__dirname, 'views') });
 app.engine('.html', ectRenderer.render);
 app.set('view engine', 'html');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.render('index', { is_production : process.argv[2] == 'production'}); // node app.js production
})

http.createServer(app).listen(3000, function(){
  console.log('Express server listening on port 3000');
});
