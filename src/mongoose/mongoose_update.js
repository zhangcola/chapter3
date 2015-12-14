/**
 * Created by Administrator on 2015/12/13.
 * 使用mongoose更新文档
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
    //使用save方式修改
   var query = Words.findOne().where('word', 'book');
    query.exec(function(err, doc) {
        console.log("\n Is document new : " + doc.isNew);
        console.log("\n Before document save :" + JSON.stringify(doc));


        doc.set('word', 'Book');
        doc.set('first', 'B');
        console.log("\n modified Fields : ");
        console.log(doc.modifiedPaths());
        doc.save(function(err) {
            Words.findOne({word: 'Book'}, function(err, doc) {
                console.log("\n After save: " + JSON.stringify(doc));
               // mongoose.disconnect();
            })
        })
    });

    //使用update方式修改(多个)
    Words.find({word : /grati.*/}, function(err, docs) {
        console.log("\n Before update: ");
        for(var i in docs) {
            console.log(docs[i].word + " : " + docs[i].size);
        }

        var query = Words.update({word : /grati.*/}, {$set: {size: 0}});
        query.setOptions({multi: true});
        query.where('word').regex(/grati.*/);
        query.exec(function(err, results) {
            Words.find({word : /grati.*/}, function(err, docs){
                console.log("\n After update: ");
                for(var i in docs) {
                    console.log(docs[i].word + " : " + docs[i].size);
                }

                mongoose.disconnect();
            });

        });
    })
});
