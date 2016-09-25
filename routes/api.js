//dependencies
var express = require('express');
var router = express.Router();

//models
var Users = require('../models/users');
var Notifs = require('../models/notifs');

//routes
Users.methods(['get', 'put', 'post', 'delete']);
Users.register(router, '/users');
Notifs.methods(['get', 'put', 'post', 'delete']);
Notifs.register(router, '/notifs');

//return router
module.exports = router;

