/**
 * Created by Administrator on 2015/12/6.
 */
buffer256 = new Buffer(256);
buffer256.fill(0);
buffer256.write("add some text");
console.log(buffer256.toString());
buffer256.write("more text " , 9,9);
console.log(buffer256.toString());
buffer256[18] = 43;
console.log(buffer256.toString);

//缓冲区分片
var numbers = new Buffer("123456789");
console.log(numbers.toString());
var slice = numbers.slice(3,6);
console.log(slice.toString());

//拼接缓冲区
var af = new Buffer("African Swallow? ");
var eu = new Buffer("European Swallow? ");
var question = new Buffer("Ari Speed Velocity of an ");
console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());
