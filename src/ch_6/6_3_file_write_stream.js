/**
 * Created by Administrator on 2015/12/6.
 */
var fs = require('fs');
var grains = ['wheat', 'rice', 'oats'];
var options = {encoding : 'utf8', flag:'w'};
var fileWriteStream = fs.createWriteStream('./config.txt',options);
fileWriteStream.on('close', function(){
    console.log('file closed');
});

while(grains.length) {
    var grain = grains.pop() + " ";
    fileWriteStream.write(grain);
    console.log("wrote :%s", grain);
}
fileWriteStream.end();