/**
 * Created by Administrator on 2015/12/13.
 * 使用mongoose实现聚合
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
    Words.aggregate(
       [
           {$match: {first: {$in: ['a', 'e', 'i', 'o', 'u']}}},
           {$group: {_id: '$first', largest: {$max: "$size"}, smallest: {$min: "$size"}, total: {$sum: 1}}},
           {$sort: {_id: 1}}
       ],
        function(err, results) {
            console.log("\n Largest and smallest word sizes for words beginning with a vowel: ");
            console.log(results);
        }) ;
});