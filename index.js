const express = require('express');
const app = express();
var path = require('path');


app.get('/hello', (req, res) => {
    console.log('Hello..!!');
    res.send('Hello..1!!');
});


app.listen(2000, (err) => {
    if (err) {
        console.log(`Error in startig server: ${err}`);
    }
    console.log('Server listening on port 2000...');
});