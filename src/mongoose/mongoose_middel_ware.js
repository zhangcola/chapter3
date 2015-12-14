/**
 * Created by Administrator on 2015/12/14.
 * 使用mongoose实现中间件
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/words');
var wordSchema = require('./word_schema.js').wordSchema;
var Words = mongoose.model('Words', wordSchema);

Words.schema.pre('init', function(next) {
    console.log('A new word is about to be initialized from the db');
    next();
});

Words.schema.pre('validate', function (next) {
    console.log('%s is about to be validated' , this.word);
    next();
});

Words.schema.pre('save', function(next) {
    console.log('%s is about to be Saved ', this.word);
    console.log('Setting size to %d', this.word.length);
    this.size = this.word.length;
    next();
});

Words.schema.pre('remove', function(next) {
   console.log('%s is about to be removed', this.word);
    next();
});

Words.schema.post('init', function(next) {
    console.log('A new word is has been initialized from the db');
});

Words.schema.post('validate', function (next) {
    console.log('$s has been  validated' , this.word);
});

Words.schema.post('save', function(next) {
    console.log('%s has been Saved ', this.word);
});

Words.schema.post('remove', function(next) {
    console.log('%s has been removed', this.word);
});

mongoose.connection.once('open', function() {
    var newWord = new Words({
        word : 'newword',
        first : 't',
        last : 'd',
        size : 'newword'.length
    });

    console.log("\n Saving...");
    newWord.save(function(err) {
       console.log("\nFinding...") ;
        newWord.remove(function(err) {
            mongoose.disconnect();
        })
    });
});