//Install express server
const express = require('express');
const path = require('path');
const app = express();
 
app.use(express.static('./dist/parliament-meeting'));
app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res) {
    res.sendFile('index.html', {root: 'dist/parliament-meeting'});
});
 
console.log('Console listening');