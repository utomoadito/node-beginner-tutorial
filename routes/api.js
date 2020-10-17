const express = require('express');
const route = express.Router();
const { getUser } = require('../controllers/UserController.js');

route.get('/user', getUser);

module.exports = route;