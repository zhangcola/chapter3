/**
 * Created by Administrator on 2015/12/8.
 */
var cluster = require('cluster');
var http = require('http');
if(cluster.isMaster) {
    cluster.on('fork', function(worker) {
        console.log('Worker ' + worker.id + " created");
    });

    cluster.on('listening', function(worker, address) {
        console.log("Worker " + worker.id + " is listening on " + address.address + ": " + address.port);
    });

    cluster.setupMaster({
        exec:"./9_6_cluster_worker.js"});
    var numCups = require('os').cpus().length;
    for (var i = 0 ; i < numCups ; i++) {
        if( i >= 4) {
            break;
        }
        cluster.fork();
    }
    Object.keys(cluster.workers).forEach(function(id) {
        cluster.workers[id].on('message', function(message) {
            console.log(message);
        })
    });
}