const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/user', (req, res) => {
    const {name, email} = req.body;
    console.log('Recevied user', name, email);
    res.send('User receieved');
});

app.listen(3000, () => {
    console.log('server has started');
})