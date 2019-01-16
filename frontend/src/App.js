import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Stop from './components/Stop';
import Leg from './components/Leg';
class App extends Component {
	state = {};
	componentDidMount() {
		let data = {};
		axios
			.all([
				axios.get('http://localhost:8080/legs'),
				axios.get('http://localhost:8080/stops'),
				axios.get('http://localhost:8080/driver')
			])
			.then(
				axios.spread((legs, stops, initialLocation) => {
					data.legs = legs.data;
					data.stops = stops.data;
					data.driver = initialLocation.data;
					this.setState({
						data: data
					});
				})
			)
			.catch((e) => console.log(e));
	}

	renderStops() {
		return this.state.data.stops.map((stop) => {
			return (
				<Stop
					key={stop.name + stop.x + stop.y}
					x={stop.x}
					y={stop.y}
					name={stop.name}
					active={`${
						this.state.data.driver.x === stop.x &&
						this.state.data.driver.y === stop.y
							? true
							: false
					}`}
				/>
			);
		});
	}

	renderLegs() {
		return (
			<svg style={{ marginLeft: '2.5px', marginTop: '2.5px' }}>
				{this.state.data.legs.map((leg) => {
					const pointOne = this.findLegCoordinates(leg.startStop);
					const pointTwo = this.findLegCoordinates(leg.endStop);
					return <Leg points={`${pointOne} ${pointTwo}`} />;
				})}
			</svg>
		);
	}

	// input stop name and returns leg coordinate
	findLegCoordinates(stopName) {
		const stop = this.state.data.stops.find((element) => {
			return element.name === stopName;
		});
		return `${stop.x * 5},${stop.y * 5}`;
	}

	render() {
		if (this.state.data) {
			return (
				<div className="App">
					{this.renderStops()}
					{this.renderLegs()}
				</div>
			);
		}
		return <div>loading</div>;
	}
}

export default App;
