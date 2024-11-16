import React from 'react';
import { ClockUIProps } from './type';

export const ClockUI: React.FC<ClockUIProps> = ({ time }) => {
	return (
		<div>
			<h2>{time}</h2>
		</div>
	);
};
