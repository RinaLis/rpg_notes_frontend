import { MouseEvent, useEffect, useState } from 'react';
import { ExampleComponentUI } from '@ui';

export const ExampleComponent: React.FC = () => {
	// Тут вся логика компонента
	const [digit, setDigit] = useState(0);
	// удобно что обработчик может принимать MouseEvent из React
	const onClick = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		const x = target.getBoundingClientRect().left + target.clientWidth / 2;
		setDigit(Math.floor(x + Math.random() * (window.innerWidth - x)));
	};

	return <ExampleComponentUI digit={digit} onClick={onClick} />;
};
