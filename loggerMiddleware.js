const express = require('express');
const app = express();

function logger(req, res, next) {
    console.log('Request received: ', req.method, req.url);
}

app.use(logger);

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('server has started');
})