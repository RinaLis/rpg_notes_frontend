import { FC, useEffect, useState } from 'react';
import { ImageUploaderUI } from '@ui'; // Импорт визуального компонента
import { useAppDispatch, useAppSelector } from '@store';
import {
	clearUploadImageId,
	getImageErrorSelector,
	getUploadImageSelector,
	isImageLoadingSelector,
	requestDeleteImage,
	requestSendImage,
} from 'src/services/slices/images';

export const ImageUploader: FC<{ className: string }> = ({ className }) => {
	const dispatch = useAppDispatch();
	const imageId = useAppSelector(getUploadImageSelector);
	const isLoading = useAppSelector(isImageLoadingSelector);
	const error = useAppSelector(getImageErrorSelector);

	const [imageUrl, setImageUrl] = useState<string | null>(null); // URL для отображения картинки

	useEffect(() => {
		if (imageId) {
			setImageUrl(`http://45.151.31.138/media/get/?id=${imageId}`);
		} else {
			setImageUrl(null);
		}
	}, [imageId]);

	// Обработчик загрузки файла
	const handleFileUpload = async (file: File) => {
		// Создаем FormData для передачи файла
		const formData = new FormData();
		formData.append('file', file); // добавляем файл в FormData

		// Отправляем запрос на сервер для загрузки файла
		dispatch(requestSendImage(formData));
	};
	const handleReset = (evt: MouseEvent) => {
		evt.preventDefault();
		if (imageId) {
			dispatch(requestDeleteImage(imageId));
			dispatch(clearUploadImageId());
		}
	};
	return (
		<ImageUploaderUI
			className={className}
			imageUrl={imageUrl}
			isUploading={isLoading}
			error={error}
			onFileSelect={handleFileUpload}
			onReset={handleReset}
		/>
	);
};
