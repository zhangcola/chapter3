/**
 * Created by Administrator on 2015/12/14.
 */
var express = require('express');
var app = express();
var http = require('http');
var https = require('https');
var fs = require('fs');
/*var options = {
    host:'127.0.0.1',
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.crt')
};*/

http.createServer(app).listen(82);
//https.createServer(options, app).listen(443);
app.get('/', function(req, resp) {
    resp.send('Hello From Express');
});