/**
 * Created by Administrator on 2015/12/13.
 * Mongodb 聚合统计
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
    var myDB = db.db("mydb");
    myDB.collection("word_stats", aggregateItems);
    setTimeout(function() {
        db.close();
    }, 3000);
});

function aggregateItems(err, words) {
    words.aggregate(
      [
          {$match : {first : {$in :['a', 'e', 'i', 'o', 'u']}}},
          {$group :{_id : "$first", largest: {$max: "$size"}, smallest: {$min: "$size"}, total: {$sum : 1}}},
          {$sort: {_id : 1}}
      ],
        function(err , results) {
            console.log("largst and smallest word sizes for words beginning with a vowel : ");
            console.log(results);
        }

    );
}