/**
 * Created by Administrator on 2015/12/13.
 * 限制返回数目，字段，分页
 */
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect('mongodb://localhost:27017/', function(err, db) {
    var myDB = db.db("mydb");
    myDB.collection("word_stats", limitFind);
    setTimeout(function() {
        db.close();
    }, 3000);
/*
    myDB.collection("word_stats", function(err, collection) {
        pagedResults(err, collection, 0 ,10)
    });*/
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

function limitFind(err, words) {
    words.count({first : 'p'}, function(err, count) {
        console.log("Count of words starting with p : " + count);
    })

    words.find({first: 'p'}, function(err, cursor) {
        displayWords("Words starting with p : ", cursor);
    });

    words.find({first: 'p'}, {limit :5}, function(err, cursor) {
        displayWords("limit words starting with p :" , cursor);
    })
}

function limitFields(err, words) {
    words.findOne({word: 'the'}, {fields : {word : 1, size: 1, stats:1}}, function(err, item){
        console.log("including fields object :　");
        console.log(JSON.stringify(item, null , 2));
    })
}

function pagedResults(err, words, startIndex, pageSize) {
    words.find({first : 'v'},
        {limit : pageSize , skip:startIndex, sort:[['word', 1]]},
    function(err, cursor) {
        cursor.count(true, function(err, cursorCount) {
            displayWords("page Starting at " + startIndex , cursor);
            if(cursorCount == pageSize) {
                pagedResults(err, words,startIndex + pageSize , pageSize);
            } else {

            }
        });

    })
}