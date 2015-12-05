/**
 * Created by Administrator on 2015/12/5.
 */
var censor = require("censorify");
console.log(censor.getCensorWords());
console.log(censor.censor("haha hehe zhang baba, my text"));
censor.addCensorWord("test");
console.log(censor.getCensorWords());
console.log(censor.censor("A versy gloomy day"));