/**
 * Created by Administrator on 2015/12/13.
 * Mongodb 分组查询
 */

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
   var myDB = db.db("mydb");
    myDB.collection("word_stats", groupItems);
    setTimeout(function() {
        db.close();
    }, 3000);
});

function groupItems(err, words) {
    words.group(['first', 'last'],
        {
            first: 'o', last:{$in: ['a', 'e', 'i', 'o', 'u']}
        },
        {"count" : 0},
        function(obj , prev) {
            prev.count++;
        },
        true,
        function(err, results) {
            console.log("\n 'o' wrods grouped by first and last " + "letter that end with a vowel: ");
            console.log(results);
        });
}