// mock db:

const data = {
	bonus: {
		x: 50,
		y: 55
	},
	initialLocation: {
		activeLegID: 'FG',
		legProgress: '33'
	},
	stops: [
		{
			name: 'A',
			x: 20,
			y: 10
		},
		{
			name: 'B',
			x: 20,
			y: 20
		},
		{
			name: 'C',
			x: 25,
			y: 30
		},
		{
			name: 'D',
			x: 25,
			y: 80
		},
		{
			name: 'E',
			x: 30,
			y: 100
		},
		{
			name: 'F',
			x: 35,
			y: 80
		},
		{
			name: 'G',
			x: 35,
			y: 30
		},
		{
			name: 'H',
			x: 40,
			y: 20
		},
		{
			name: 'I',
			x: 40,
			y: 10
		},
		{
			name: 'J',
			x: 35,
			y: 15
		},
		{
			name: 'K',
			x: 25,
			y: 15
		},
		{
			name: 'L',
			x: 20,
			y: 10
		}
	],
	legs: [
		{
			startStop: 'A',
			endStop: 'B',
			speedLimit: 100,
			legID: 'AB'
		},
		{
			startStop: 'B',
			endStop: 'C',
			speedLimit: 60,
			legID: 'BC'
		},
		{
			startStop: 'C',
			endStop: 'D',
			speedLimit: 80,
			legID: 'CD'
		},
		{
			startStop: 'D',
			endStop: 'E',
			speedLimit: 120,
			legID: 'DE'
		},
		{
			startStop: 'E',
			endStop: 'F',
			speedLimit: 40,
			legID: 'EF'
		},
		{
			startStop: 'F',
			endStop: 'G',
			speedLimit: 40,
			legID: 'FG'
		},
		{
			startStop: 'G',
			endStop: 'H',
			speedLimit: 100,
			legID: 'GH'
		},
		{
			startStop: 'H',
			endStop: 'I',
			speedLimit: 100,
			legID: 'HI'
		},
		{
			startStop: 'I',
			endStop: 'J',
			speedLimit: 50,
			legID: 'IJ'
		},
		{
			startStop: 'J',
			endStop: 'K',
			speedLimit: 100,
			legID: 'JK'
		},
		{
			startStop: 'K',
			endStop: 'L',
			speedLimit: 60,
			legID: 'KL'
		}
	]
};

module.exports = data;
