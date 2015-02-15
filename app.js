var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var hbase = require('hbase');
var assert= require('assert');
//var client = hbase({host:'localhost', port:8090});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.use('/platform', function(req, res, next){
	res.writeHead(200, {"Content-Type": "application/json"});
        pieData = [{"value":100, "color":"#F7464A", "highlight":"#FF5A5E","label":"member"},{"value":200,"color":"#46BFBD","hightlight": "#5AD3D1","label":"billing"}];
	res.end(JSON.stringify(pieData));
	//res.send('hello my world');
});

app.use('/hbase', function(req,res,next){

   var client = hbase({host:'localhost', port:8090});
   client.getTables(function(err, tables){
  	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(tables);          
   });

});

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


module.exports = app;
