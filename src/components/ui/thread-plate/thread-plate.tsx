import { defaultAvatarImg } from '@const';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import styles from './thread-plate.module.scss';
import { ThreadPlateProps } from './type';

export const ThreadPlate: React.FC<ThreadPlateProps> = ({ name, image, id }) => {
	const location = useLocation();
	return (
		<Link
			className={clsx(styles.plate)}
			to={`/tread/${id}`} // тут нужен нормальный путь
			state={{ background: location }}
		>
			<div className={styles.plate__picture}>
				{image ? (
					<img src={image} alt="картинка треда" className={styles.plate__image} />
				) : (
					<img
						src={defaultAvatarImg}
						alt="стандартная картника треда"
						className={styles.plate__image}
					/>
				)}
			</div>
			<div className={styles.plate__text}>
				<div className={styles.plate__name}>{name}</div>
			</div>
		</Link>
	);
};
