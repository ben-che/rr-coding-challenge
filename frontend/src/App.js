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
						data: data,
						legProgress: data.driver.legProgress / 100
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
			<svg
				style={{
					marginLeft: '2.5px',
					marginTop: '2.5px',
					height: '100%',
					width: '100%'
				}}
			>
				{this.state.data.legs.map((leg) => {
					const pointOne = this.findLegCoordinates(leg.startStop);
					const pointTwo = this.findLegCoordinates(leg.endStop);
					return (
						<Leg
							key={leg.legID}
							id={leg.legID}
							points={`${pointOne} ${pointTwo}`}
						/>
					);
				})}
				{this.renderDriverLocation()}
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

	// rendering current location of driver
	renderDriverLocation() {
		const points = this.renderDriverProgress(
			this.state.data.driver.activeLegID
		);
		return (
			<circle
				cx={points.cx}
				cy={points.cy}
				r="5"
				stroke="black"
				strokeWidth="3"
				fill="black"
			/>
		);
	}

	renderDriverProgress(legID) {
		const p1 = this.state.data.stops.find((element) => {
			return element.name === legID[0];
		});
		const p2 = this.state.data.stops.find((element) => {
			return element.name === legID[1];
		});

		const xDiff = p2.x - p1.x;
		const yDiff = p2.y - p1.y;

		return {
			cx: xDiff * 5 * this.state.legProgress + p1.x * 5,
			cy: yDiff * 5 * this.state.legProgress + p1.y * 5
		};
	}

	// Rendering the form to change active leg and driver's progress
	renderForm() {
		return (
			<div>
				<form>
					<select
						onChange={(e) => {
							this.handleSelectChange(e);
						}}
					>
						{this.state.data.legs.map((leg) => {
							return <option value={leg.legID}>{leg.legID}</option>;
						})}
					</select>
					<input placeholder="enter progress percent here" />
				</form>
			</div>
		);
	}

	// fns to control form state
	handleSelectChange(e) {
		let newLocation = this.state.data;
		newLocation.driver.activeLegID = e.target.value;
		this.setState({ data: newLocation });
	}

	render() {
		if (this.state.data) {
			return (
				<div className="App">
					{this.renderStops()}
					{this.renderLegs()}
					{this.renderForm()}
				</div>
			);
		}
		return <div>loading</div>;
	}
}

export default App;
