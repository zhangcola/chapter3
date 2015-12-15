/**
 * Created by Administrator on 2015/12/15.
 * Express Request
 */

var express = require('express');
var app = express();

app.listen(82);
app.get('/user/:userid', function(req, res) {
    console.log("\n url : " + req.originalUrl);
    console.log("\n protocol : " + req.protocol);
    console.log("\n ip: " + req.ipaddr);
    console.log("\n path :" + req.path);
    console.log("\n Host: " + req.hostname);
    console.log("\n Method : " + req.method);
    console.log("\n Query :"　+ JSON.stringify(req.query));
    console.log("\n Fresh: " + req.fresh);
    console.log("\n Stale: " + req.stale);
    console.log("\n Secure :" + req.secure);
    console.log("\n Connection:" + req.get('connection'));
    console.log("\n UTF8:" + req.acceptsCharset('utf8'));
    console.log("\n Headers: " + JSON.stringify(req.headers, null ,2));
    res.send("user request");
});
