var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const mongoose = require('mongoose');

var sighting = require('./controllers/sighting.js');

var app = express();
app.use(bodyParser.json());

mongoose.connect( "mongodb://localhost:27017/menu");
mongoose.connection.once( "open", () => console.log( "Mongoose connected"));


var port = 3000;

const sightingRoutes = require( "./controllers/sightingRoutes" );
sightingRoutes(app);

// app.post('/api/sighting', function(req, res) {
//   console.log('POST sighting');
//   res.end();
// });
//
// app.get('/api/sighting', function(req, res) {
//   console.log('GET sighting');
//   res.end();
// });
//
// app.delete('/api/sighting', function(req, res) {
//   console.log('DELETE sighting');
//   res.end();
// });
//
// app.put('/api/sighting', function(req, res) {
//   console.log('PUT sighting');
//   res.end();
// });




app.listen(port, function() {
  console.log("Started server on port", port);
});
