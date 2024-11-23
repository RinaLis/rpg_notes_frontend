import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './type';
import styles from './button.module.scss';

export const Button: React.FC<ButtonProps> = ({
	type = 'button', // Тип кнопки, по умолчанию обычная кнопка
	onClick, // Обработчик события onClick
	className, // Дополнительные классы
	disabled = false, // Управление состоянием disabled
	children, // Текст или элементы внутри кнопки
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={clsx(styles.button, className)} // Применяем стили, переданные через className
			disabled={disabled} // Включаем/выключаем кнопку
		>
			{children}
		</button>
	);
};
