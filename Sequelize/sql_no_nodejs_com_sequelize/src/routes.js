const express = require('express');
const UserController = require('./Controllers/UserController');
const AddressesController = require('./Controllers/AddressesController');
const TechController = require('./Controllers/TechController');
const ReportController = require('./Controllers/ReportController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/users/:user_id/addresses', AddressesController.store);
routes.get('/users/:user_id/addresses', AddressesController.index);

routes.post('/users/:user_id/techs', TechController.store);
routes.get('/users/:user_id/techs', TechController.index);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;