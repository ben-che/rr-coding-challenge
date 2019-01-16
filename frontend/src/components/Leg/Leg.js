import React from 'react';
import './Leg.css';

export default function Leg(props) {
	return (
		<polyline
			points={props.points}
			style={{ fill: 'white', stroke: 'red', strokeWidth: '2' }}
		/>
	);
}
