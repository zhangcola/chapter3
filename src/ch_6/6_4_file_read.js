/**
 * Created by Administrator on 2015/12/6.
 */
//普通方式读取文件
var fs = require('fs');
console.log('----------普通方式读取文件-------------');
var options = {encoding:'utf8', flag : 'r'};
fs.readFile('./config.txt', options, function(err, data){
    if(err) {
        console.log('Failed to read file ');
    } else {
        console.log('config loaded');
        console.log(data);
    }
})

//以同步方式读取文件
console.log('-------------以同步方式读取文件--------');
fd = fs.openSync('./config.txt', 'r');
var veggies = "";
do{
    var buf = new Buffer(5);
    buf.fill();
    var bytes = fs.readSync(fd, buf,null , 5);
    console.log('read %d bytes ', bytes);
    veggies += buf.toString();
}while(bytes > 0);
fs.closeSync(fd);
console.log('Veggies : '+ veggies);

//以异步方式读取文件
console.log('---------------一异步方式读取文件---------');
function readFruit(fd, fruits) {
    var buf = new Buffer(5);
    buf.fill();
    fs.read(fd, buf, 0, 5, function(err, bytes, data) {
        if (bytes > 0) {
            console.log('Read %d bytes' + bytes);
            fruits += data
            readFruit(fd, fruits);
        } else {
            fs.close(fd);
            console.log('Fruits : %s' + fruits);
        }
    });
}

fs.open('./config.txt', 'r', function(err, fn) {
    readFruit(fd, "");
})

//------以流式方式读取文件-------------
var fileReadStream = fs.createReadStream('./config.txt', options);
fileReadStream.on('data', function(chunk) {
    console.log('grains %s ' , chunk);
    console.log('Read %d bytes of data', chunk.length);
});
fileReadStream.on('close', function() {
    console.log('File Closed');
})