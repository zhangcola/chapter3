/**
 * Created by Administrator on 2015/12/15.
 * express 实现会话认证
 */
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var crypto = require('crypto');

function hashPw(pwd) {
    return crypto.createHash('sha256').update(pwd).digest('base64').toString();
}

var app = express();
app.use(bodyParser());
app.use(cookieParser('MAGSTRING'));
app.use(session());

app.get('/restricted', function(req, res) {
    if (req.session.user) {
        res.send('<h1>' + req.session.success + '</h1><p>you have entere the restricted section</p><br>' +
        '<a href="/logout" >logout</a>');
    } else {
        req.session.error = 'Access Denied!';
        res.redirect('/login');
    }
});

app.get('/logout', function(req, res) {
    req.session.destroy(function() {
        res.redirect('/login');
    });
});

app.get('/login', function(req, res) {
    var response = '<form method="post">username : <input type="text" name="username" /><br>' +
            'password:<input type="password" name="password"/><br> ' +
            '<input type="submit" value="submit"> </form>';
    if(req.session.user) {
        res.redirect('/restricted');
    } else if(req.session.error) {
        response += '<h2>' + req.session.error +'</h2>';
    }
    res.type('html');
    res.send(response);
});

app.post('/login', function(req, res) {
    var user = {name:req.body.username, password:hashPw("myPass")};
    if ( user.password == hashPw(req.body.password.toString())) {
        req.session.regenerate(function() {
            req.session.user = user;
            req.session.success = 'Authenticated as ' + user.username;
            res.redirect('/restricted');
        });
    } else {
        req.session.regenerate(function() {
            req.session.error = 'Authentication Failed!';
            res.redirect('/restricted');
        });
      // res.redirect('/login');
    }
});

app.listen(82);