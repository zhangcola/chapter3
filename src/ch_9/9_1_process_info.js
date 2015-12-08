/**
 * Created by Administrator on 2015/12/8.
 */
var util = require('util');
console.log('Current Dir ' + process.cwd());
console.log('Enviroment Setting ' + JSON.stringify(process.env));
console.log('node args ' + process.argv);
console.log('Execution Path : ' + process.execPath);
console.log('Execution args : ' + JSON.stringify(process.execArgv));
console.log('Node Version :' + process.version);
console.log('Module Versions: ' + JSON.stringify(process.versions));

console.log('Process Id' + process.pid);
console.log('Process Title ' + process.title);
console.log('Process Platform : ' + process.platform);
console.log('Memory Usage :' + util.inspect(process.memoryUsage()));