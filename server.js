/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
var app = express();
app.configure(function(){
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/'));
  app.use(express.static(path.join(__dirname, '')));
});

//Configure
app.configure('development', function(){
  app.use(express.errorHandler());
});

app.configure('test', function(){
    app.use(express.errorHandler());
});

app.all('/', function(req, res, next) {
  next();
 });

app.get('/', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Max-Age", "999999");
    res.sendfile('index.html');
});

//This is to start the server
exports.start = function(config, readyCallback)
{
    if (!this.server){
        this.server = app.listen(process.env.PORT || config.port, function(){
            console.log('Server is running on port %d in %s mode', config.port, app.settings.env);

            if (readyCallback)
            {
                readyCallback();
            }
        });
    }
};

exports.close = function(){
    this.server.close();
}

