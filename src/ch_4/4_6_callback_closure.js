/**
 * Created by Administrator on 2015/12/6.
 */
function logCar(logMsg , callback) {
    process.nextTick(function() {
        callback(logMsg);
    });
}

var cars = ['zzti', 'cola','pp'];
for(var i in cars) {
    var message = 'Saw a ' + cars[i];
    logCar(message, function() {
        //Callback 中访问父作用域的变量
        console.log('Normal Callback' + message);
    })
}

for(var i in cars) {
    var message = 'saw a ' + cars[i];
    (function(msg){
        logCar(msg, function() {
            console.log('Closure Callback ' + msg);
        })
    })(message);
}