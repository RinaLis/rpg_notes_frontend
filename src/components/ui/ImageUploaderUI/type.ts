export type ImageUploaderUIProps = {
	imageUrl: string | null; // URL загруженного изображения
	isUploading: boolean; // Состояние загрузки
	error: string | null; // Сообщение об ошибке
	onFileSelect: (file: File) => void; // Обработчик выбора файла
	onReset: () => void; // Обработчик сброса изображения
};
