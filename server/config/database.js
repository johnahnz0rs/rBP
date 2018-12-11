const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoURI = process.env.mongoURI;




mongoose.connection.on('connected', function() {
    console.log(`*** mongoose connected on ${mongoURI} ***`);
});
mongoose.connection.on('error', function(error) {
    console.log('*** mongoose connexion error ***', error);
});

mongoose.connect(mongoURI, {useNewUrlParser: true});
