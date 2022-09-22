const express = require('express');
const app = express();
const cors = require('cors');
// const data = require('./data/tour.json');
// const fs = require('fs');

// middleware
app.use(express.json());
app.use(cors());

// initial server start
app.get('/', (req, res, next) => {
    res.send('Wow server started successfully!!!!');
});

// routes
const tourRouter = require('./routes/tour.route')

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1', tourRouter);

module.exports = app;