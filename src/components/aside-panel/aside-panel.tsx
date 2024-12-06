import { useEffect, useRef, useState } from 'react';
import { AsidePanelUI } from '../ui/aside-panel/aside-panel';
import { AsidePanelProps } from '../ui/aside-panel/type';

export const AsidePanel: React.FC<AsidePanelProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Если панель не открыта, то ничего не делаем!
		if (!isOpen) {
			return undefined;
		}
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			// Если кликнули на Overlay,  то закрываем панель
			if (target instanceof Node && overlayRef.current?.contains(target)) {
				setIsOpen(false);
			}
		};

		// Добавляем обработчик события
		window.addEventListener('click', handleClick);
		// Удаляем обработчик события при изменении зависимостей
		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, [isOpen]);

	return (
		<AsidePanelUI
			isOpen={isOpen}
			onClick={() => {
				setIsOpen(!isOpen);
			}}
			overlayRef={overlayRef}
		>
			{children}
		</AsidePanelUI>
	);
};
