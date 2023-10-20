console.log("hello");

for(let i=0;i<100;i++) {
    console.log("inside loop");
}

process.nextTick(function() {
    console.log("Inside next tick function");
    let current = Date.now();
    while(Date.now() - current < 1000) {

    }
});

const timeout = Date.now();
setTimeout(function() {
    const delay = Date.now() - timeout;
    console.log(`Inside the set timeout function and is being executed in ${delay}`);
}, 0);


console.log("end");