/**
 * Created by Administrator on 2015/12/13.
 * 使用MongoClient链接Mongodb数据库，新版本的mongoClient可以使用
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://zhang:123456@localhost:27017/mydb";
MongoClient.connect(url,
    {
        db: { w:1 , native_parser:false},
        server : {
            poolSize:5,
            socketOptions: { connectionTimeOutMS: 500},
            auto_reconnect: true
        },
        replSet:{},
        mongos : {}
    }, function(err, db) {
        if (err) {
            console.log("connection failed via connection String...");
        } else {
            console.log("connected success...");
            db.logout(function(err,result) {
                if (!err) {
                    console.log("Logged out success...");
                }
                db.close();
                console.log("connection closed...");
            });
        }
    }
)