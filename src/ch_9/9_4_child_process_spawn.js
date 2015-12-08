/**
 * Created by Administrator on 2015/12/8.
 */
var spawn =  require('child_process').spawn;
var option = {
    env : {user: 'brad'},
    detached : false,
    stdio : ['pipe','pipe', 'pipe']
};

var child = spawn('netstat', ['-e']);
child.stdout.on('data', function(data) {
    console.log(data.toString());
});

child.stderr.on('data', function(data) {
    console.log(data.toString());
});

child.on('exit', function(code) {
    console.log('child exited with code', code);
})