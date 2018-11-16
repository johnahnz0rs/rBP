const mongoose = require('mongoose');


const mongoURI = process.env.mongoURI;

mongoose.connect(mongoURI, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {
    console.log(`*** mongoose connected on ${mongoURI} ***`);
});
mongoose.connection.on('error', function(error) {
    console.log('*** mongoose connexion error ***', error);
});

mongoose.Promise = global.Promise;