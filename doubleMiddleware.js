const express = require('express');
const app = express();

function middle1(req, res, next) {
    console.log('First middleware');
    next();
}

function middle2(req, res, next) {
    console.log('Second middleware');
    next();
}

app.use(middle2);
app.use(middle1);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('server has started');
})