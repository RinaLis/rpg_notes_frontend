import { Button } from '@components';
import React from 'react';
import { ReactComponent as Frame } from '@assets/eyeinput.svg';
import clsx from 'clsx';
import styles from './adventures.module.scss';

export const AdventuresUI: React.FC = () => {
	return (
		<div className={styles.adventures}>
			<Button
				type="button"
				className={clsx(styles.button, styles.button__addPlayer)}
				onClick={() => {
					console.log('dell player');
				}}
			>
				<div className={styles.button__addPlayerIconContainer}>
					<Frame className={styles.button__addPlayerIcon} />
				</div>
				<span className={styles.button__addPlayerText}>добавить игрока</span>
			</Button>
		</div>
	);
};
