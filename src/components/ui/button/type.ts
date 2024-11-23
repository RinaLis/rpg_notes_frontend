export interface ButtonProps {
	type?: 'button' | 'submit' | 'reset'; // Тип кнопки
	onClick?: React.MouseEventHandler<HTMLButtonElement>; // Обработчик клика
	className?: string; // Дополнительные классы для стилизации
	disabled?: boolean; // Состояние кнопки (активна/неактивна)
	children: React.ReactNode; // Контент внутри кнопки
}
