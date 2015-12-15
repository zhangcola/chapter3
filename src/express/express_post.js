/**
 * Created by Administrator on 2015/12/15.
 * express body-parser中间件
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());

app.get("/", function(req, res) {
    var response = '<form method="post"> first: <input type="text" name="first"><br>' +
            'last:<input type="text" name="last"><br>' +
            '<input type="submit" value="Submit" /></form>';
    res.send(response);
});

app.post("/",function(req , res) {
    var response = '<form method="post"> first: <input type="text" name="first"><br>' +
        'last:<input type="text" name="last"><br>' +
        '<input type="submit" value="Submit" /></form>'+
        '<h1>hello '+ req.body.first +'</h1>';
    res.type('html');
    res.end(response);
    console.log(req.body);
});
app.listen(82);
