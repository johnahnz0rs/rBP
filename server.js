// set us up the server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// require j00r database
require('./server/config/database.js');


// serve react files from 'dist' directory
app.use(express.static(path.join(__dirname, '/client/build')));


// load and use j00r routes files
app.use(require('./server/config/routes.js'));
app.use(require('./server/config/catch-all.routes.js'));


// start server
app.listen(process.env.PORT || 5000, () => {
    console.log('johnahnz0rs is l33t on port 5000');
});