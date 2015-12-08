/**
 * Created by Administrator on 2015/12/6.
 */
var net = require('net');
function getConnection(connName) {
    var client = net.connect({port: 8107, host: 'localhost'}, function () {
        console.log(connName + 'Connected');
        console.log('    local = %s:%s', this.localAddress, this.localPort);
        console.log('    remote = %s:%s', this.remoteAddress, this.remotePort);
        this.setTimeout(5000);
        this.setEncoding('utf8');
        this.on('data', function (data) {
            console.log(connName + " from server: " + data.toString());
        });

        this.on('end', function () {
            console.log(connName + ' Client disconnected');
        });

        this.on('error', function (err) {
            console.log('socket error:' + JSON.stringify(err));
        });

        this.on('timeout', function () {
            console.log('Socket time out');
        });

        this.on('close', function() {
            console.log('Socket close');
        });

        this.end();

    });


    return client;
}

function writeData(socket, data){
    var sucess = !socket.write(data);
    if(!sucess) {
        (function(socket, data) {
            socket.once('drain', function() {
                writeData(socket, data);
            });
        })(socket, data);
    }
}

var zzti = getConnection("zzti");
var cola = getConnection('cola')
var zhang = getConnection('zhang');

writeData(zzti , "zzit");
writeData(cola , "cola");
writeData(zhang , "zhang");