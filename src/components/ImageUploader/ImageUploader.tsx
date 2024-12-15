import React, { useState } from 'react';
import { uploadImageApi, deleteImageApi } from '@api'; // Импорт API
import { AxiosError } from 'axios';
import { ImageUploaderUI } from '@ui'; // Импорт визуального компонента

export const ImageUploader: React.FC = () => {
	const [imageUrl, setImageUrl] = useState<string | null>(null); // URL для отображения картинки
	const [isUploading, setIsUploading] = useState(false);
	const [errorLoad, setError] = useState<string | null>(null);
	const [imageId, setImageId] = useState<string>('');

	// Обработчик загрузки файла
	const handleFileUpload = async (file: File) => {
		setIsUploading(true);
		setError(null);

		try {
			// Создаем FormData для передачи файла
			const formData = new FormData();
			formData.append('file', file); // добавляем файл в FormData

			// Отправляем запрос на сервер для загрузки файла
			const uploadResponse = await uploadImageApi(formData);
			setImageId(uploadResponse.id); // Сохраняем ID загруженного файла в состояний

			// Устанавливаем URL для отображения
			setImageUrl(`http://45.151.31.138/media/get/?id=${uploadResponse.id}`);
		} catch (error) {
			// Обработка ошибки с правильной типизацией
			if (error instanceof AxiosError) {
				// Это ошибка axios, обрабатываем ее
				setError(error.response?.data?.detail || 'Ошибка при загрузке изображения');
			} else {
				// Для других типов ошибок
				setError('Произошла ошибка при загрузке изображения');
			}
		} finally {
			setIsUploading(false);
		}
	};
	const handleReset = () => {
		deleteImageApi(imageId);
		setImageUrl(null);
		setError(null);
	};
	return (
		<ImageUploaderUI
			imageUrl={imageUrl}
			isUploading={isUploading}
			error={errorLoad}
			onFileSelect={handleFileUpload}
			onReset={handleReset}
		/>
	);
};
