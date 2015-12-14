/**
 * Created by Administrator on 2015/12/13.
 * 使用mongoose查找文档
 */

var mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost:27017/words");
var wordSchema = require('./word_schema.js').wordSchema;

//编译word模式
var Words = mongoose.model('Words', wordSchema);
setTimeout(function() {
    mongoose.disconnect();
}, 3000);

mongoose.connection.once('open', function() {
    var query = Words.count().where('first').in(['a','e','i', 'o', 'u']);
    query.where('last').in(['a', 'e', 'i', 'o', 'u']);
    query.exec(function(err, count) {
        console.log("\n There are " +count + " words that starts and end with a vowel");
    });

    query.find().limit(5).sort({size : -1});
    query.exec(function(err, docs) {
        console.log("\n longest 5 words that start and end with a vowel ") ;
        for(var i in docs) {
            console.log(docs[i].word);
        }
    });

    query = Words.find();
    query.mod('size', 2, 0);
    query.where('size').gt(6);
    query.limit(10);
    query.select({word: 1, size: 1});
    query.exec(function(err, docs) {
        console.log("\n words with even lengths and longer than 5 leggers : ");
        for(var i in docs) {
            console.log(docs[i].word);
        }
    })
});