console.log("hello");

for(let i=0;i<100;i++) {
    console.log("inside loop");
}

process.nextTick(function() {
    console.log("Inside next tick function");
});


const timeout = Date.now();
setTimeout(function() {
    const delay = Date.now() - timeout;
    console.log(`Inside the set timeout function and is being executed in ${delay}`);
}, 0);

Promise.resolve().then(res => {
    console.log("resolved");
});

setImmediate(function() {
    console.log("Inside immediate");

});

console.log("end");
