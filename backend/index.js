const data = require('./data');

const express = require('express');
const cors = require('cors');

const app = express();

console.log(data);
app.use(cors());

// get route to retrieve legs:
app.get('/legs', function(req, res, next) {
	console.log('');
});

// get route to retrieve stops:
app.get('/stops', function(req, res, next) {
	console.log('');
});

// get route for current position of driver:
app.get('/driver', function(req, res, next) {
	console.log('');
});

// update driver position:
app.put('/driver', function(req, res, next) {
	console.log('');
});

app.listen(8080, function() {
	console.log('server successfully listening on port 8080');
});
