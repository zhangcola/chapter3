/**
 * Created by Administrator on 2015/12/13.
 * 使用MongoClient 链接mongodb数据库
 * (新版本的mongodb库不能使用该方式，open函数没了)
 */
var MongoClient = require('mongodb').MongoClient;
Server = require("mongodb").Server;

var client = new MongoClient(new Server('localhost', 27017, {
    socketOptions : {connectionTimeoutMS:500},
    poolSize : 5,
    auto_reconnect : true},
    {
        numberOfRetries : 3,
        retryMilliSeconds : 500
    }
));

client.open(function(err, client) {
    if(err) {
        console.log("connection Failed Via Client Object");
    } else {
        var db = client.db("mydb");
        if (db) {
            console.log("Connected Via Client Object...");
            db.authenticate("zhang", "123456", function(err, results) {
                if (err) {
                    console.log("Authenticate failed...");
                    client.closest();
                    console.log("Connection closed...");
                } else {
                    console.log("Authenticated via client object...");
                    db.logout(function(err, result) {
                        if (!err) {
                            console.log("logged out via client object...");
                        }
                        client.close();
                        console.log("connection closed...");
                    })
                }
            })
        }
    }
})