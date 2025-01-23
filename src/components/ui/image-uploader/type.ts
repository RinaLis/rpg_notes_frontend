export type ImageUploaderUIProps = {
	imageUrl: string | null; // URL загруженного изображения
	isUploading: boolean; // Состояние загрузки
	error: string | null; // Сообщение об ошибке
	className?: string; // Задаем размеры
	onFileSelect: (file: File) => void; // Обработчик выбора файла
	onReset: (evt: MouseEvent) => void; // Обработчик сброса изображения
};
