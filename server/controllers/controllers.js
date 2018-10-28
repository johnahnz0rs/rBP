/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    lol: function(req, res) {
        console.log('lol', req.body);
        res.json({lol: 'lol'});
    },
};
