import { MouseEvent } from 'react';

export type ExampleComponentUIProps = {
	digit: number;
	onClick: (e: MouseEvent) => void;
};
