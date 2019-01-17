import React from 'react';
import './Leg.css';

export default function Leg(props) {
	return (
		<polyline
			id={props.id}
			points={props.points}
			style={{
				fill: 'white',
				stroke: `${props.active ? 'green' : 'red'}`,
				strokeWidth: '2'
			}}
		/>
	);
}
