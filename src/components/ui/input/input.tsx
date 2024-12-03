import React from 'react';
import clsx from 'clsx';
import { InputNames, InputProps } from './type';
import styles from './input.module.scss';

export const Input: React.FC<InputProps> = ({
	label,
	type,
	placeholder,
	register,
	error,
	icon,
	сlassNameCustom = InputNames.info,
}) => {
	return (
		<div className={clsx(styles[`${сlassNameCustom}__container`])}>
			{/* Отображение метки, если она задана */}
			{label && (
				<label htmlFor={register.name} className={styles[`${сlassNameCustom}__label`]}>
					{label}
				</label>
			)}
			{/* обертка для общих стилей инпута */}
			<div
				className={clsx(styles[`${сlassNameCustom}`], {
					[styles[`${сlassNameCustom}__error`]]: error,
				})}
			>
				<input
					name={register.name}
					ref={register.ref}
					onChange={register.onChange}
					onBlur={register.onBlur}
					type={type}
					placeholder={placeholder}
					className={clsx(styles[`${сlassNameCustom}__field`])}
				/>
				{typeof icon === 'string' && (
					<img src={icon} alt="icon" className={clsx(styles[`${сlassNameCustom}__icon`])} />
				)}
			</div>

			{error && <span className={clsx(styles[`${сlassNameCustom}__errorMessage`])}>{error}</span>}
		</div>
	);
};
