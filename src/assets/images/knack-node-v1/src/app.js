const routes = require('./routes/twilio-routes');
const express = require('express');
const app = express();

app.use('/api/v1/twilio', routes);

app.get('/api/v1/twilio/user', function (req, res, next) {
    res.status(200).json({aaa: 'aaa', bbb: 'bbb'})
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept", "Authorization");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

module.exports = app;
