/**
 * Created by Administrator on 2015/12/5.
 */
var fs = require("fs");
fs.stat("nexttick.js" , function(err, stats) {
    if(!stats) {
        console.log("next tick.js not exists") ;
    }
});

setImmediate(function() {
    console.log("Immediate Timer 1 Executed");
});

setImmediate(function() {
    console.log("Immediate Timer 2 Executed");
});

process.nextTick(function() {
    console.log("Next tick 1 executed");
});

process.nextTick(function() {
    console.log("Next tick 2 executed");
});





