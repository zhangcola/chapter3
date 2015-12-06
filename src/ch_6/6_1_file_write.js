/**
 * Created by Administrator on 2015/12/6.
 */
var fs = require('fs');
var config = {
    maxFile : 20,
    maxConnection : 16,
    rootPath : "/webroot"
};

var configText = JSON.stringify(config);
var options = {encoding : 'utf-8', flag : 'w'};
fs.writeFile('./config.txt', configText, options, function(err) {
    if(err) {
        console.log('config write failed');
    }else {
        console.log('config saved');
    }
});