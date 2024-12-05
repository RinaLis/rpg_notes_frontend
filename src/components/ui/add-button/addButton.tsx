import React from 'react';
import { Button } from '@components';
// import { ReactComponent as Icon } from '@assets/eyeinput.svg'; ← тут надо вставить актуальный SVG

import styles from './addButton.module.scss';

interface AddButtonProps {
	attachment: string | JSX.Element;
	onClick: () => void;
}
export const AddButton: React.FC<AddButtonProps> = ({ attachment, onClick }) => {
	return (
		<Button type="button" className={styles.addButton} onClick={onClick}>
			<div className={styles.addButton__iconContainer}>
				{/* Вот так вставляем актуальный SVG в разметку ↓ */}
				{/* <Icon className={styles.addButton__icon} /> */}
			</div>
			<span className={styles.addButton__attachment}>{attachment}</span>
		</Button>
	);
};

// Пример вызова компонента

// 	<AddButton
// 		attachment="Добавить игрока"
// 		onClick={() => {}}
// 	/>
