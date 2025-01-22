import clsx from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import baseAdventure from '@assets/images/baseAdventure.png';

import { AdventureCardUIProps } from './type';
import styles from './adventure-card.module.scss';

export const AdventureCardUI: FC<AdventureCardUIProps> = ({ adventure }) => {
	return (
		<Link to={`/adventure/${adventure.id}`}>
			<figure className={clsx(styles.card)}>
				<img
					className={styles.card__img}
					src={adventure.image ? adventure.image : baseAdventure}
					alt={adventure.name}
				/>
				<figcaption className={styles.card__body}>
					<h5 className={styles.card__title}>{adventure.name}</h5>
					<p className={styles.card__text}>{adventure.description}</p>
				</figcaption>
			</figure>
		</Link>
	);
};
