import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import styles from './center-layout.module.scss';
import { CenterLayoutProps } from './type';

export const CenterLayout: React.FC<CenterLayoutProps> = ({ title, children }) => {
	return (
		<main className={clsx(styles.page, styles.page_fixed)}>
			<div className={styles.container}>
				<div className={styles.content}>
					{title && <h2 className={styles.content__title}>{title}</h2>}
					{children}
					<Outlet />
				</div>
			</div>
		</main>
	);
};
