const express = require('express');
const bodyParser = require('body-parser');
const routes = require('express').Router();
const airQuality = require('./controllers/airQualityController');
const app = express();
app.use(routes);
app.use(bodyParser.json());

const PORT = 3000;

routes.get('/', (req, res) => {
    return res.status(200).send('Welcome to air quality application');
})

routes.use('/airQualities', airQuality);

app.listen(PORT, (err) => {
    if(err) {
        console.log('server has failed');
    } else {
        console.log('server has started');
    }
});



