import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import styles from './auth-layout.module.scss';
import { AuthLayoutProps } from './type';

export const AuthLayout: React.FC<AuthLayoutProps> = ({ title }) => {
	return (
		<main className={clsx(styles.page, styles.page_fixed, styles.page_centered)}>
			<div className={styles.container}>
				<div className={styles.content}>
					{title && <h2 className={styles.content__title}>{title}</h2>}
					<Outlet />
				</div>
			</div>
		</main>
	);
};
