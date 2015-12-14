/**
 * Created by Administrator on 2015/12/13.
 * Mongoose 链接数据库
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/mydb");
mongoose.connection.on('open', function() {
    console.log(mongoose.connection.collection);
    mongoose.connection.db.listCollections().toArray(function(err, names) {
        if (err) {
            console.log(err);
        }
        else {
            names.forEach(function(e,i,a) {
                mongoose.connection.db.dropCollection(e.name);
                console.log("--->>", e.name);
            });
        }
    });
})