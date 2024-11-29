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
	сlassNameCustom,
}) => {
	return (
		<div className={clsx(styles.input__container, сlassNameCustom || null)}>
			{/* Отображение метки, если она задана */}
			{label && (
				<label htmlFor={register.name} className={styles.input__label}>
					{label}
				</label>
			)}
			{/* обертка для общих стилей инпута */}
			<div
				className={clsx(styles.input, styles.input__wrapper, {
					[styles.input__error]: error,
				})}
			>
				<input
					name={register.name}
					ref={register.ref}
					onChange={register.onChange}
					onBlur={register.onBlur}
					type={type}
					placeholder={placeholder}
					className={styles.input__field}
				/>
				{typeof icon === 'string' && <img src={icon} alt="icon" className={styles.input__icon} />}
			</div>

			{error && <span className={styles.input__errorMessage}>{error}</span>}
		</div>
	);
};
