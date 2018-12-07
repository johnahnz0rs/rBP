const controller = require('../controllers/controllers.js');
const router = require('express').Router();

module.exports = router
    .get('/lol', controller.lol)
    .post('/api/login', controller.login)
    .post('/api/register', controller.register)
;
