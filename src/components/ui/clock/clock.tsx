import { ClockUIProps } from './type';
import React from 'react';
export const ClockUI: React.FC<ClockUIProps> = ({ time }) => {
	return (
		<div>
			<h2>{time}</h2>
		</div>
	);
};
