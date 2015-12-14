/**
 * Created by Administrator on 2015/12/14.
 * mongoose 验证框架
 */

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);

//验证字段
Words.schema.path('word').validate(function(value) {
   return value.length > 0;
}, "Word is too small");

Words.schema.path('word').validate(function(value) {
    return value.length<20;
}, "word is to big");

mongoose.connection.once('open', function() {
    var newWord = new Words({
        word: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        first: 'z',
        last: 'z',
        size : "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz".length
    });

    newWord.save(function(err) {
        //输出验证信息
        console.log(err.errors.word.message);  //在加入验证函数时定义的字符串
        console.log(String(err.errors.word));
        console.log(err.errors.word.type);  //验证错误类型
        console.log(err.errors.word.path);  //验证失败的对象路径
        console.log(err.errors.word.value);  //验证失败的值
        console.log(err.name);     //错误名称
        console.log(err.message);  //错误消息

        mongoose.disconnect();
    });
});
