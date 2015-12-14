/**
 * Created by Administrator on 2015/12/13.
 * 使用mongoose实现一个模式
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var wordSchema = new Schema(
    {
        word : {type : String , index : 1, required : true , unique : true},
        first : {type : String , index : 1},
        last : String ,
        size : Number,
        Letters : [String],
        stats : {
            vowels : Number, consonants : Number
        },
        charsets : [{type:String, chars:[String]}]
    },
    {collection: 'word_stats'}
);

wordSchema.methods.startsWith = function(letter) {
    return this.first == letter;
};

exports.wordSchema = wordSchema;
console.log("Required Path: ");
console.log(wordSchema.requiredPaths());
console.log("Indexes: ");
console.log(wordSchema.indexes());
