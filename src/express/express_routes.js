/**
 * Created by Administrator on 2015/12/14.
 * Express 中实现路由参数
 */
var express = require('express');
var url = require('url');
var app = express();
app.listen(82);

app.get('/', function(req, res) {
    res.send('Get index');
});

app.get('/find', function(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var response = "Find Book Author : " + query.author + " Title : " + query.title;
    console.log("\n Query url :" + req.originalUrl);
    res.send(response);
});

app.get(/^\/book\/(\w+)\:(\w+)?$/, function(req, res) {
    var response = 'Get book : charpter: ' + req.params[0] + " page: " + req.params[1];
    console.log('\n Regex Url : ' + req.originalUrl);
    console.log(response);
    res.send(response);
});

app.get('/user/:userid', function(req, res) {
    var response = 'Get user: ' + req.param('userid');
    console.log('\n Param URL : ' + req.originalUrl);
    console.log(response);
    res.send(response);

});

app.param('userid', function(req, res, next, value) {
    console.log('\n Request received with userid: ' + value);
    next();
});
