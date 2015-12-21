/**
 * Created by Administrator on 2015/12/16.
 */
var express = require('express');
var app = express();
app.use('/', express.static('./'));
app.use('/public/images/', express.static("../../public/images/"));
app.listen(82);