const express = require('express');

const routes = express.Router();

const HomeController = require('../controllers/HomeController');

routes.get('/', HomeController.index);

module.exports = routes;