const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.join(__dirname, 'input.txt'), 'utf-8');
const writeableStream = fs.createWriteStream(path.join(__dirname, 'output.txt'), 'utf-8');

let i =0;
readableStream.on('data', (chunk) => {
    console.log(`Recevied chunk of data ${i}`, chunk.length);
    setTimeout(() => {
        writeableStream.write(chunk);
    }, 2000);
    i++;
});

writeableStream.on('finish', () => {
    console.log("Write operation has finished");
})