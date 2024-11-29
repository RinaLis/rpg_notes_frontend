import React from 'react';
import clsx from 'clsx';
import { Button } from '@components';
// import { ReactComponent as Icon } from '@assets/eyeinput.svg'; ← тут надо вставить актуальный SVG

import styles from './addButton.module.scss';

interface AddButtonProps {
	attachment: string | JSX.Element;
	onClick: () => void;
}
export const AddButton: React.FC<AddButtonProps> = ({ attachment, onClick }) => {
	return (
		<div className={styles.addButtonContainer}>
			<Button
				type="button"
				className={clsx(styles.button, styles.button__addButton)}
				onClick={onClick}
			>
				<div className={styles.button__addButtonIconContainer}>
					{/* Вот так вставляем актуальный SVG в разметку ↓ */}
					{/* <Icon className={styles.button__addButtonIcon} /> */}
				</div>
				<span className={styles.button__addButtonAttachment}>{attachment}</span>
			</Button>
		</div>
	);
};

// Пример вызова компонента
// 	<AddButton
// 		attachment="Добавить игрока"
// 		onClick={() => {}}
// 	/>
// </div>
