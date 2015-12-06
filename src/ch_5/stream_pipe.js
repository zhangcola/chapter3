/**
 * Created by Administrator on 2015/12/6.
 */
var stream = require("stream");
var util = require("util");
util.inherits(Reader , stream.Readable);
util.inherits(Writer, stream.Writable);

function Reader(opt) {
    stream.Readable.call(this, opt);
    this._index = 1;
}

Reader.prototype._read = function(size) {
    var i = this._index++;
    if(i > 10) {
        this.push(null);
    } else {
        this.push("Item" + i.toString());
    }
};

function Writer(opt) {
    stream.Writable.call(this, opt);
    this._index =1 ;
}

Writer.prototype._writer = function(data , encoding, callback) {
    console.log(data.toString());
    callback();
}

var r = new Reader();
var w = new Writer();

try{
    r.pipe(w);
}catch (err){

}
