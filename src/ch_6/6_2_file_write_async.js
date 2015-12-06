/**
 * Created by Administrator on 2015/12/6.
 */
var fs = require('fs');
var fruitBowl = ['apple','orange','banana', 'grapes'];
function writeFruit(fd) {
    if(fruitBowl.length) {
        var fruit = fruitBowl.pop() + " ";
        fs.write(fd, fruit, null, null, function(err , bytes) {
            if(err) {
                console.log('file write failed');
            } else {
                console.log('wrote : %s %d bytes', fruit, bytes);
                writeFruit(fd);
            }
        });
    }else {
        fs.close(fd);
    }
}

fs.open('./config.txt', 'w', function(err, fd) {
    writeFruit(fd);
})