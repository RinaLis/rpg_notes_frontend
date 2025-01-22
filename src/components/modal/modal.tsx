import { FC, memo, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalUI } from '@ui';
import { TModalProps } from './type';

let modalRoot = document.getElementById('modals');

if (!modalRoot) {
	modalRoot = document.createElement('div');
	modalRoot.setAttribute('id', 'modals');
	document.body.appendChild(modalRoot);
}

export const Modal: FC<TModalProps> = memo(({ title, onClose, children }) => {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleEsc);
		return () => {
			document.removeEventListener('keydown', handleEsc);
		};
	}, [onClose]);

	return ReactDOM.createPortal(
		<ModalUI title={title} onClose={onClose}>
			{children}
		</ModalUI>,
		modalRoot as HTMLDivElement
	);
});
