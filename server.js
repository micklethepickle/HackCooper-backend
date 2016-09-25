//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mongodb
mongoose.connect('mongodb://localhost/whosonbreak_backend')

//express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());


//routes
app.use('/api', require('./routes/api'))

//start server
app.listen(3000);