import { defaultAvatarImg } from '@const';
import clsx from 'clsx';
import styles from './hero-plate.module.scss';
import { HeroPlateProps } from './type';

export const HeroPlate: React.FC<HeroPlateProps> = ({
	heroName,
	playerName,
	image,
	onClick,
	master,
	dead,
}) => (
	<button
		className={clsx(styles.plate, master && styles.plate_master, dead && styles.plate_dead)}
		onClick={onClick}
	>
		<div className={styles.plate__avatar}>
			{image ? (
				<img src={image} alt="User avatar" className={styles.plate__image} />
			) : (
				<img src={defaultAvatarImg} alt="Default avatar" className={styles.plate__image} />
			)}
		</div>
		<div className={styles.plate__text}>
			<div className={styles.plate__heroName}>{heroName}</div>
			<div className={styles.plate__playerName}>{playerName}</div>
		</div>
	</button>
);
