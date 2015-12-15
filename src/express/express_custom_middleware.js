/**
 * Created by Administrator on 2015/12/15.
 * express自定义中间件
 */

var express = require('express');
var app = express();
function queryRemove(req, res, next) {
    console.log('\n Before URL :');
    console.log(req.url);
    req.url = req.url.split('?')[0];
    console.log('\n After url :');
    console.log(req.url);
    next();
};

app.use(queryRemove);
app.get('/no/query', function(req, res) {
    res.send('test');
});

app.listen(82);
