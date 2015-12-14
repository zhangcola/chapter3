/**
 * Created by Administrator on 2015/12/13.
 * 使用mongoose 添加文档
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
    var newWord1 = new Words({
        word : 'gratifaction',
        first : 'g',
        last : 'n',
        size : 12,
        letters: ['g', 'r', 'a', 't', 'i','f', 'a', 'c', 't', 'i', 'o', 'n'],
        stats : {vowels:5 , consonants:7}
    });

    console.log("Is document new ? " + newWord1.isNew);
    //使用save方式保存
    newWord1.save(function(err, doc) {
        console.log("\n save document " + doc);
    });

    var newWord2 = new Words({
        word : 'googled',
        first : 'g',
        last : 'd',
        size : 7,
        letters: ['g', 'o', 'o', 'g', 'l','e', 'd'],
        stats : {vowels:3 , consonants:4}
    });

    var newWord3 = new Words({
        word : 'selfie',
        first : 's',
        last : 'e',
        size : 6,
        letters: ['s', 'e', 'l', 'f', 'i','e'],
        stats : {vowels:3 , consonants:3}
    });

    //使用create方式保存
    Words.create([newWord2, newWord3], function(err) {
        for (var i = 1; i < arguments.length; i++) {
            console.log("\n Created document " + arguments[i]);
        }
        mongoose.disconnect();
    });
});
