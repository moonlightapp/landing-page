//Install express server
const express = require('express');
const path = require('path');
var forceSsl = require('force-ssl-heroku');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/moonlight'));
app.use(forceSsl);

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/moonlight/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
