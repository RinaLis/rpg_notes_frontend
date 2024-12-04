import { FC, memo } from 'react';

import { ModalOverlayUI } from '@ui';
import { ReactComponent as CloseIcon } from '@assets/plus.svg';
import styles from './modal.module.scss';
import { TModalUIProps } from './type';

export const ModalUI: FC<TModalUIProps> = memo(({ title, onClose, children }) => (
	<>
		<div className={styles.modal} data-cy="modal">
			<div className={styles.header}>
				<button
					className={styles.button}
					type="button"
					data-cy="modal-close-button"
					onClick={onClose}
				>
					<CloseIcon />
				</button>
				<h3 className={styles.title}>{title}</h3>
			</div>
			<div className={styles.content}>{children}</div>
		</div>
		<ModalOverlayUI onClick={onClose} />
	</>
));
