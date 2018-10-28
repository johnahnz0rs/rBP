const controller = require('../controllers/controllers.js');
const router = require('express').Router();

module.exports = router
    .get('/lol', controller.lol)
;
