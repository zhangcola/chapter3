/**
 * Created by Administrator on 2015/12/13.
 * 增加和删除集合
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
    var newDB = db.db("newDB");
    newDB.collections(function(err, collectionNames) {
        console.log("Initial collections: ");
        console.log(collectionNames);
        newDB.createCollection("newCollection", function(err, collection) {
            newDB.collections(function(err, collectionNames) {
                console.log("New collections: ");
                console.log(collectionNames);
            });

            newDB.dropCollection("newCollection", function(err, results) {
                newDB.collections(function(err, collectionNames) {
                    console.log("After collections: ");
                    console.log(collectionNames);
                });
            })
        });
    });
});
