import styles from './modal-overlay.module.scss';

export const ModalOverlayUI = ({ onClick }: { onClick: () => void }) => (
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
	<div className={styles.overlay} onClick={onClick} data-cy="modal-overlay" />
);
