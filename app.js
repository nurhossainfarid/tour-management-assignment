const express = require('express');
const app = express();
const cors = require('cors');
// const data = require('./data/tour.json');
// const fs = require('fs');

// middleware
app.use(cors({ origin: "https://whispering-gorge-00111.herokuapp.com/"}));
app.use(express.json());

// initial server start
app.get('/', (req, res, next) => {
    res.send('Wow server started successfully!!!!');
});

// routes
const tourRouter = require('./routes/tour.route')

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1', tourRouter);

module.exports = app;