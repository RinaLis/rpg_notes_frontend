import { ReactComponent as DeleteIcon } from '@assets/delete.svg';
import { defaultAvatarImg } from '@const';
import clsx from 'clsx';
import styles from './hero-plate.module.scss';
import { HeroPlateProps } from './type';

export const HeroPlate: React.FC<HeroPlateProps> = ({ heroName, playerName, image, onDelete }) => (
	<div className={styles.plate}>
		<div className={styles.plate__avatar}>
			{image ? (
				<img src={image} alt="User avatar" className={styles.plate__image} />
			) : (
				<img src={defaultAvatarImg} alt="Default avatar" className={styles.plate__image} />
			)}
		</div>
		<div className={styles.plate__text}>
			<div className={styles.plate__heroName}>{heroName}</div>
			<div className={clsx(styles.plate__playerName, !heroName && styles.plate__playerName_master)}>
				{playerName}
			</div>
		</div>

		{onDelete ? (
			<button type="button" className={styles.plate__deleteButton} onClick={onDelete}>
				<div className={styles.plate__delete}>
					<DeleteIcon />
				</div>
			</button>
		) : null}
	</div>
);
