import clsx from 'clsx';

import { AsidePanelUIProps } from './type';
import styles from './aside-panel.module.scss';
import { ArrowButton } from '../arrow-button';

export const AsidePanelUI: React.FC<AsidePanelUIProps> = ({
	children,
	isOpen,
	onClick,
	overlayRef,
}) => {
	return (
		<>
			<div className={clsx(styles.overlay, isOpen && styles.overlay_open)} ref={overlayRef} />
			<div className={clsx(styles.controls, isOpen && styles.controls_open)}>
				<ArrowButton direction={isOpen ? 'left' : 'right'} onClick={onClick} />
			</div>
			<aside className={clsx(styles.aside, isOpen && styles.aside_open)}>
				<div className={clsx(styles.aside__content)}>{children}</div>
			</aside>
		</>
	);
};
