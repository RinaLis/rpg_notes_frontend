import React from 'react';
import clsx from 'clsx';
import { InputProps } from './type';
import styles from './input.module.scss';

export const Input: React.FC<InputProps> = ({ label, type, placeholder, register, error }) => {
	return (
		<div className={styles.inputContainer}>
			{/* Отображение метки, если она задана */}
			{label && (
				<label htmlFor={register.name} className={styles.label}>
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
				className={clsx(styles.input, { [styles.inputError]: error })}
			/>
			{/* Сообщение об ошибке, если она есть */}
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};
