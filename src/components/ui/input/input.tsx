import { FC, useRef } from 'react';
import clsx from 'clsx';
import { InputNames, InputProps } from './type';
import styles from './input.module.scss';

export const Input: FC<InputProps> = ({
	className,
	label, // Метка инпута
	type, // Тип инпута (например, текст, пароль)
	placeholder, // Плейсхолдер для инпута
	register, // Объект для регистрации инпута (используется, например, в React Hook Form)
	error, // Сообщение об ошибке
	icon, // Иконка, если задана
	сlassNameCustom = InputNames.info, // Кастомный класс для стилизации (по умолчанию info)
}) => {
	const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

	return (
		<div className={clsx(styles[`${сlassNameCustom}`], className)}>
			{/* Отображение метки, если она задана */}
			{label && (
				<label htmlFor={register.name} className={styles[`${сlassNameCustom}__label`]}>
					{label}
				</label>
			)}
			{/* обертка для общих стилей инпута */}
			<div
				className={clsx(styles[`${сlassNameCustom}__container`], {
					[styles[`${сlassNameCustom}__error`]]: error,
				})}
			>
				{сlassNameCustom !== InputNames.textarea ? (
					<input
						name={register.name}
						ref={(el) => {
							inputRef.current = el; // Устанавливаем ссылку на инпут
							register.ref(el); // Передаем ref в React Hook Form
						}}
						onChange={(e) => {
							register.onChange(e); // Обработка события изменения через React Hook Form
						}}
						onBlur={register.onBlur} // Обработка события потери фокуса через React Hook Form
						type={type} // Устанавливаем тип file для фото
						placeholder={placeholder} // Плейсхолдер, если задан
						className={clsx(styles[`${сlassNameCustom}__field`])} // Стили инпута
					/>
				) : (
					<textarea
						name={register.name}
						ref={(el) => {
							inputRef.current = el; // Устанавливаем ссылку на инпут
							register.ref(el); // Передаем ref в React Hook Form
						}}
						onChange={(e) => {
							register.onChange(e); // Обработка события изменения через React Hook Form
						}}
						onBlur={register.onBlur} // Обработка события потери фокуса через React Hook Form
						placeholder={placeholder} // Плейсхолдер, если задан
						className={clsx(styles[`${сlassNameCustom}__field`])} // Стили инпута
					/>
				)}

				{/* Отображение иконки, если задана */}
				{typeof icon === 'string' && (
					<img src={icon} alt="icon" className={clsx(styles[`${сlassNameCustom}__icon`])} />
				)}
			</div>
			{/* Отображение сообщения об ошибке, если есть */}
			{error && <span className={clsx(styles[`${сlassNameCustom}__errorMessage`])}>{error}</span>}
		</div>
	);
};
