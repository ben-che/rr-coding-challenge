// mocking a db read
const data = require('./data');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(data);
app.use(cors());

let driverInfo = data.initialLocation;
let bonusInfo = data.bonus;

// get route to retrieve legs:
app.get('/legs', function(req, res, next) {
	res.json(data.legs);
});

// get route to retrieve stops:
app.get('/stops', function(req, res, next) {
	res.json(data.stops);
});

// get route for current position of driver:
app.get('/driver', function(req, res, next) {
	res.json(driverInfo);
});

// update driver position:
app.put('/driver', function(req, res, next) {
	// mocking a db write
	driverInfo = req.body;
	res.json(driverInfo);
});

// bonus driver get and puts:
app.get('/bonusdriver', function(req, res, next) {
	res.json(bonusInfo);
});

app.put('/bonusdriver', function(req, res, next) {
	bonusInfo = req.body;
	res.json(bonusInfo);
});

app.listen(8080, function() {
	console.log('server successfully listening on port 8080');
});
