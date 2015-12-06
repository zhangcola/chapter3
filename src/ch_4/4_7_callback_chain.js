/**
 * Created by Administrator on 2015/12/6.
 */
function logCar(car , callback) {
    console.log("Saw a %s" , car);
    if(cars.length) {
        process.nextTick(function() {
            callback();
        });
    }
}

function logCar(cars) {
    var car = cars.pop();
    logCar(car , function() {
        logCar(car);
    });
}

var cars = ['a','b','c','d'];
logCar(cars);