// set up the server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt-as-promised');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// require j00r database
require('./server/config/database.js');
// require('./server/models/job.js');
// require('./server/models/user.js');


// serve angular files from 'dist' directory
app.use(express.static(path.join(__dirname, '/build')));


// load and use j00r routes file
app.use('/api', require('./server/config/routes.js'));
// catch any other routes that don't match routes.js
app.use(require('./server/config/catch-all.routes.js'));


// start server
app.listen(8000, function() {
    console.log('johnahnz0rs is l33t on port 8000');
});