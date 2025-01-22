import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import smile from '@assets/images/sadFace.png';
import { AdventuresUIProps } from './type';
import styles from './adventures.module.scss';
import { Select } from '../../select';
import { AdventureCardUI } from '../../adventure-card';

export const AdventuresUI: FC<AdventuresUIProps> = memo(
	({ adventures, onFilterChange, options }) => (
		<div className={styles.content}>
			<div className={styles.content__buttonContainer}>
				<Link to="/create-adventure" className={styles.content__createButton}>
					Создать
				</Link>
				<Select
					options={options}
					onChange={onFilterChange}
					placeholder="Фильтровать"
					classNameProp={styles.content__select}
				/>
			</div>
			{adventures ? (
				<div className={`${styles.content__adventures}`}>
					{adventures.map((adventure) => (
						<AdventureCardUI adventure={adventure} key={adventure.id} />
					))}
				</div>
			) : (
				<div className={styles.content__noAdventures}>
					<img
						className={styles.content__image}
						src={smile}
						alt="Мы не нашли приключений по вашему запросу"
					/>
					<div className={styles.content__title}>Мы не нашли приключений по вашему запросу</div>
				</div>
			)}
		</div>
	)
);
