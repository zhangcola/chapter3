/**
 * Created by Administrator on 2015/12/13.
 * Monogodb 文档查询
 */
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect('mongodb://localhost:27017/', function(err, db) {
    var myDB = db.db("mydb");
    myDB.collection("word_stats", findItems);
    setTimeout(function() {
        db.close();
    }, 3000);
});

function displayWords(msg , cursor, pretty) {
  cursor.toArray(function(err, itemArr) {
      console.log("\n" + msg);
      var wordList = [];
      for (var i = 0 ; i < itemArr.length; i++) {
          wordList.push(itemArr[i]);
      }

      console.log(JSON.stringify(wordList, null , pretty));
      console.log("\n")
  });
};

function findItems(err, words) {
    words.find({first :{$in: ['a', 'b', 'c']}}, function(err, cursor) {
       displayWords("words starting with a , b or c :", cursor);
    });

    words.find({size :{$gt: 12}}, function(err, cursor) {
        displayWords("words size gt 12:", cursor);
    });

    words.find({size :{$mod: [2, 0]}}, function(err, cursor) {
        displayWords("words mod 2, 0 :", cursor);
    });

    words.find({letters :{$size: 12}}, function(err, cursor) {
        displayWords("words size eq 12 :", cursor);
    });

    words.find({$and:[{first :{$in: ['a', 'b', 'c']}},{last:{$in:['a','e','i','o','u']}}]}, function(err, cursor) {
        displayWords("words and conditions :", cursor);
    });

    words.find({"stats.vowels" : {$gt: 6}}, function(err, cursor) {
        displayWords("stats.vowels:", cursor);
    });

    words.find({letters :{$all: ['a','e','i','o','u']}}, function(err, cursor) {
        displayWords("words  with 5 all vowels:", cursor);
    });

    words.find({charsets :{$elemMatch:{$and:[{type: 'other'}, {chars : {$size:2}}]}}}, function(err, cursor) {
        displayWords("words  $elemMatch :", cursor);
    });

    words.count({first :{$in: ['a', 'b', 'c']}}, function(err, count) {
        console.log("words starting with a , b or c counts :", count);
    });
}