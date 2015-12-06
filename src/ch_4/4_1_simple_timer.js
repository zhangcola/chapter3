/**
 * Created by Administrator on 2015/12/5.
 */
function simpleTimeOut(consoleTimer) {
    console.timeEnd(consoleTimer);
}

console.time("twoSencond");
setTimeout(simpleTimeOut, 2000 , "twoSencond");
console.time("oneSecond");
setTimeout(simpleTimeOut,1000,"oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeOut,5000,"fiveSecond");
