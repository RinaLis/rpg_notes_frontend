import { ReactComponent as RightSVG } from '@assets/right.svg';
import clsx from 'clsx';
import { ArrowButtonProps } from './type';
import styles from './arrow-button.module.scss';

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => (
	<button
		className={clsx(
			styles.button,
			direction === 'left' && styles.button_left,
			direction === 'right' && styles.button_right
		)}
		onClick={onClick}
	>
		<RightSVG />
	</button>
);
