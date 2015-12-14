/**
 * Created by Administrator on 2015/12/13.
 * 使用mongoose删除文档
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
    Words.find({word: /grat.*/}, function(err, docs) {
        console.log("\nBefore delete: ");
        for(var i in docs) {
            console.log(docs[i].word);
        }

        var query = Words.remove();
      //  query.where('word').regex("/grat.*/");
        query.exec(function(err, results) {
            console.log("\n %d Documents Deleted: " , results.length);
            Words.find({word: /grat.*/}, function(err, docs) {
                console.log("\nAfter delete: ");
                for (var i in docs) {
                    console.log(docs[i].word);
                }
                mongoose.disconnect();
            });
        })
    });
});
