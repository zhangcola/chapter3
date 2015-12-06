/**
 * Created by Administrator on 2015/12/6.
 */
//检查文件是否存在
var fs = require('fs');
fs.exists('./config.txt', function(exists) {
    console.log(exists? 'path exists' : 'not exists');
})