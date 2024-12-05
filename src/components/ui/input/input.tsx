import React, { useState } from 'react';
import clsx from 'clsx';
import { InputNames, InputProps } from './type';
import styles from './input.module.scss';

export const Input: React.FC<InputProps> = ({
	label, // Метка инпута
	type, // Тип инпута (например, текст, пароль)
	placeholder, // Плейсхолдер для инпута
	register, // Объект для регистрации инпута (используется, например, в React Hook Form)
	error, // Сообщение об ошибке
	icon, // Иконка, если задана
	сlassNameCustom = InputNames.info, // Кастомный класс для стилизации (по умолчанию info)
}) => {
	const [preview, setPreview] = useState<string | null>(null); // Состояние для хранения превью изображения
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	// Обработчик изменения файла
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0]; // Берем первый выбранный файл
			const reader = new FileReader(); // Создаем FileReader для чтения файла

			// Обработка завершения чтения файла
			reader.onload = (e) => {
				if (e.target?.result) {
					setPreview(e.target.result as string); // Устанавливаем превью
				}
			};

			reader.readAsDataURL(file); // Читаем файл как Data URL
		}
	};

	// Обработчик сброса превью
	const handleReset = () => {
		setPreview(null); // Сбрасываем превью
		if (inputRef.current) {
			inputRef.current.value = ''; // Сбрасываем значение в инпуте
		}
	};

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
				{/* Если задан кастомный класс "photo" и есть превью, отображаем превью */}
				{сlassNameCustom === InputNames.photo && preview ? (
					<>
						<img src={preview} alt="Preview" className={styles[`${сlassNameCustom}__image`]} />
						<button
							type="button"
							className={styles[`${сlassNameCustom}__resetButton`]}
							onClick={handleReset}
							aria-label="Удалить изображение"
						/>
					</>
				) : (
					<input
						name={register.name}
						ref={(el) => {
							inputRef.current = el; // Устанавливаем ссылку на инпут
							register.ref(el); // Передаем ref в React Hook Form
						}}
						onChange={(e) => {
							register.onChange(e); // Обработка события изменения через React Hook Form
							if (сlassNameCustom === InputNames.photo) handleFileChange(e); // Обработка загрузки файла
						}}
						onBlur={register.onBlur} // Обработка события потери фокуса через React Hook Form
						type={сlassNameCustom === InputNames.photo ? 'file' : type} // Устанавливаем тип file для фото
						placeholder={placeholder} // Плейсхолдер, если задан
						className={clsx(styles[`${сlassNameCustom}__field`])} // Стили инпута
						accept={сlassNameCustom === InputNames.photo ? 'image/*' : undefined} // Принимаем только изображения
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
