/**
 * Created by Administrator on 2015/12/6.
 */
var events = require("events");

function CarShow() {
    events.EventEmitter.call(this);
    this.seeCar = function(make) {
        this.emit('sawCar', make);
    };
}

CarShow.prototype.__proto__=events.EventEmitter.prototype;

var show = new CarShow();
function logCar(make) {
    console.log('Saw a ' + make);
}

function logColorCar(make, color) {
    console.log('Saw a %s %s' , color, make);
}

show.on('sawCar', logCar);
show.addListener('sawCar', function(make){
    var colors = ['red','blue','black'];
    var color = colors[Math.floor(Math.random()*3)];
    logColorCar(make, color);
});

show.seeCar('ZZti');
show.seeCar("hahah");
show.seeCar("Audio");