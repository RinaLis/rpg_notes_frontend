import React from 'react';
import { useState, useEffect } from 'react';
import { ClockUI } from '../ui/clock/clock';

export const Clock: React.FC = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const сlockUpdate = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
		return () => {
			clearInterval(сlockUpdate);
		};
	}, []);

	return <ClockUI time={time} />;
};
