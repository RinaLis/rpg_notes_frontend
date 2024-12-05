import { AsidePanel } from 'src/components/aside-panel';
import { AsideLayoutUIProps } from './type';
import styles from './aside-layout.module.scss';

export const AsideLayoutUI: React.FC<AsideLayoutUIProps> = ({ children, asideChildren }) => {
	return (
		<>
			<AsidePanel>{asideChildren}</AsidePanel>
			<main className={styles.main}>{children}</main>
		</>
	);
};
