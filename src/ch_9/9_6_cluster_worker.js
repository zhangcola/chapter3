/**
 * Created by Administrator on 2015/12/8.
 */
var cluster = require('cluster');
var http = require('http');

if(cluster.isWorker) {
    http.Server(function(req, res) {
        res.writeHead(200);
        res.end("process " + process.pid + " says hello");
        process.send("process " + process.pid + " handled request");
    }).listen(8492), function() {
        console.log("child server running on process " + process.pid);
    }
}