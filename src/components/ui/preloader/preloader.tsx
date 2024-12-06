import styles from './preloader.module.scss';
import { PreloaderProps } from './type';

export const Preloader: React.FC<PreloaderProps> = ({ title }) => {
	const parts = 50;
	return (
		<div className={styles.preloader}>
			<div className={styles.fire}>
				<div className={styles.fire__flameContainer}>
					{[...Array(parts)].map(() => (
						<div className={styles.fire__flame} />
					))}
				</div>
				<div className={styles.fire__logs} />
			</div>
			<h2 className={styles.preloader__header}>{title}</h2>
		</div>
	);
};
