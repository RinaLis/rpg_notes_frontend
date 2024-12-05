import { defaultAvatarImg } from '@const';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import styles from './hero-plate.module.scss';
import { HeroPlateProps } from './type';

export const HeroPlate: React.FC<HeroPlateProps> = ({
	heroName,
	playerName,
	image,
	master,
	dead,
	id,
}) => {
	const location = useLocation();
	return (
		<Link
			className={clsx(styles.plate, master && styles.plate_master, dead && styles.plate_dead)}
			to={`/hero/${id}`} // тут нужен нормальный путь
			state={{ background: location }}
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
		</Link>
	);
};
