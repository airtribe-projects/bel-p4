console.log("hello");

for(let i=0;i<100;i++) {
    console.log("inside loop");
}

process.nextTick(function() {
    console.log("Inside next tick function");
})

console.log("end");