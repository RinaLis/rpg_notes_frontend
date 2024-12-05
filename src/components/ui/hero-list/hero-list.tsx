import clsx from 'clsx';
import { HeroPlate } from '../hero-plate';
import { HeroListUIProps } from './type';
import styles from './hero-list.module.scss';
import { AddButton } from '../add-button';

export const HeroListUI: React.FC<HeroListUIProps> = ({ master, heroes, onAdd }) => {
	return (
		<section className={clsx(styles.container)}>
			<div className={clsx(styles.master)}>
				<h4 className={clsx(styles.master__title)}>Мастер</h4>
				<div className={clsx(styles.master__plate)}>
					<HeroPlate playerName={master.name} image={master.avatar} master id={master.id} />
				</div>
			</div>
			<div className={clsx(styles.heroes)}>
				<h4 className={clsx(styles.heroes__title)}>Герои</h4>
				<div className={clsx(styles.heroes__list)}>
					{heroes.map((hero) => (
						<div key={hero.id} className={clsx(styles.heroes__plate)}>
							<HeroPlate
								playerName={hero.username}
								heroName={hero.name}
								image={hero.image}
								id={hero.id}
								dead={!hero.is_alive}
							/>
						</div>
					))}
				</div>
				{onAdd && (
					<div className={clsx(styles.heroes__add)}>
						<AddButton attachment="Добавить игрока" onClick={onAdd} />
					</div>
				)}
			</div>
		</section>
	);
};
