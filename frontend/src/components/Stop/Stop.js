import React from 'react';
import './stop.css';

export default function Stop(props) {
	return (
		<div
			className={`stop ${props.active ? `active` : ''}`}
			style={{ top: props.y * 5, left: props.x * 5 }}
		/>
	);
}
