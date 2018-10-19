const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', function() {
   console.log(`*** mongoose connected on ${process.env.MONGODB_URI} ***`);
});
mongoose.connection.on('error', function(error) {
    console.log('*** mongoose connexion error ***', error);
});