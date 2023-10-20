const {airQualityCallback, airQualityPromise} = require('./airQualityHelper');

console.log("hello");
let url = 'https://api.openaq.org/v2/latest';

for(let i=0;i<100;i++) {
    console.log("inside loop");
}
process.nextTick(function() {
    console.log("Inside next tick function");
    let nows = Date.now();
    while(Date.now() - nows < 100) {

    }
});
const timeout = Date.now();
setTimeout(function() {
    const delay = Date.now() - timeout;
    console.log(`Inside the set timeout function and is being executed in ${delay}`);
}, 2000);


airQualityPromise(url).then((data) => {
    console.log(`Promose is being resolved ${data}`);
}).catch(err => {
    console.log(err);
});

airQualityCallback(url, (data) => {
    console.log(`callback is being called and data is ${data}`);
});

for(let i=0;i<100;i++) { 
    Promise.resolve().then(res => {
        console.log("resolved");
    });
}
setImmediate(function() {
    console.log("Inside immediate");

});

console.log("end");
