import React from 'react';
import clsx from 'clsx';
import { InputProps } from './type';
import styles from './input.module.scss';

export const Input: React.FC<InputProps> = ({
	label,
	type,
	placeholder,
	register,
	error,
	icon,
}) => {
	return (
		<div className={styles.input__container}>
			{/* Отображение метки, если она задана */}
			{label && (
				<label htmlFor={register.name} className={styles.input__label}>
					{label}
				</label>
			)}
			<input
				name={register.name}
				ref={register.ref}
				onChange={register.onChange}
				onBlur={register.onBlur}
				type={type}
				placeholder={placeholder}
				className={clsx(styles.input, { [styles.input__error]: error })}
			/>
			{typeof icon === 'string' && <img src={icon} alt="icon" className={styles.input__icon} />}
			{/* Сообщение об ошибке, если она есть */}
			{error && <span className={styles.input__errorMessage}>{error}</span>}
		</div>
	);
};
