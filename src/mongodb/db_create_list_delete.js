/**
 * Created by Administrator on 2015/12/13.
 * 数据库创建和删除
 */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url,
    {
        db: {w: 1, native_parser: false},
        server: {
            poolSize: 5,
            socketOptions: {connectionTimeOutMS: 500},
            auto_reconnect: true
        },
        replSet: {},
        mongos: {}
    }, function (err, db) {
        if (err) {
            console.log("connection failed via connection String...");
        } else {
            var adminDB = db.admin();
            adminDB.listDatabases(function (err, databases) {
                console.log("Before Add DataBase List: ");
                console.log(databases);
            });

            var newDB = db.db("newDB");
            newDB.createCollection("newCollection", function (err, collection) {
                if (!err) {
                    console.log("New Database and Collection Created");
                    adminDB.listDatabases(function (err, databases) {
                        console.log("After Add DataBase List: ");
                        console.log(databases);
                        db.db("newDB").dropDatabase(function (err, results) {
                            if (!err) {
                                console.log("Database Dropped...");
                                setTimeout(function () {
                                    adminDB.listDatabases(function (err, databases) {
                                        var found = false;
                                        for (var i = 0; i < results.databases.length; i++) {
                                            if (results.databases[i].name == "newDB") {
                                                found = true;
                                            }

                                            if (!found) {
                                                console.log("After delete database list...");
                                                console.log(results);
                                            }
                                            db.close();
                                        }

                                    });
                                }, 5000);
                            }
                        });
                    });

                }
            });
        }
    }
);
