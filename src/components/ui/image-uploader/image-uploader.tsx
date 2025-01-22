import React from 'react';
import clsx from 'clsx';
import styles from './image-uploader.module.scss'; // Импорт стилей
import { ImageUploaderUIProps } from './type';

export const ImageUploaderUI: React.FC<ImageUploaderUIProps> = ({
	imageUrl,
	isUploading,
	error,
	className,
	onFileSelect,
	onReset,
}) => {
	// Обработчик выбора файла
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			onFileSelect(event.target.files[0]);
		}
	};

	return (
		<div className={clsx(styles.photo, className)}>
			<div className={styles.photo__textContainer}>
				{/* Текстовое сообщение об ошибке или загрузке */}
				{isUploading && <p className={styles.photo__status}>Загрузка...</p>}
				{error && <p className={styles.photo__error}>{error}</p>}
			</div>
			<div className={styles.photo__container}>
				{imageUrl ? (
					<>
						{/* Отображаем загруженное изображение */}
						<img src={imageUrl} alt="Uploaded preview" className={styles.photo__image} />

						{/* Кнопка сброса */}
						<button
							className={styles.photo__resetButton}
							onClick={onReset}
							aria-label="Сбросить изображение"
						/>
					</>
				) : (
					<input
						type="file"
						accept="image/*" // Разрешаем только изображения
						onChange={handleInputChange}
						className={styles.photo__field}
						disabled={isUploading} // Блокируем во время загрузки
						aria-label="Загрузить изображение"
					/>
				)}
			</div>
		</div>
	);
};
