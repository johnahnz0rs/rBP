const controller = require('../controllers/controllers.js');
const router = require('express').Router();

module.exports = router
    .get('/lol', controller.lol)
    .get('/api/bulletjournal/:userId/:year/:dayOfYear', controller.getOneBulletJournalEntry)
    .post('/api/login', controller.login)
    .post('/api/register', controller.register)
    .post('/api/bulletjournal/new', controller.createNewBulletJournalEntry)
    .put('/api/bulletjournal/:id', controller.updateBulletJournal)
    // .put('/api/closesection/:bJId', controller.closeASection)
;
