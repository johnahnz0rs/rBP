const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
    // console.log('***** catch-all.routes *****');
    // console.log('***** route', request.url, ' not found; sending index.html ******');
    console.log('*** hmm something went awry, my friend, because this is catch-all-routes ***');
    response.sendFile(path.join(__dirname, '../../build/index.html'));
});

module.exports = router;