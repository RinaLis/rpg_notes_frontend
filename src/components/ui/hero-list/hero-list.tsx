import clsx from 'clsx';
import { HeroPlate } from '../hero-plate';
import { HeroListUIProps } from './type';
import styles from './hero-list.module.scss';
import { AddButton } from '../add-button';

export const HeroListUI: React.FC<HeroListUIProps> = ({ master, heroes, onAdd }) => {
	return (
		<section className={clsx(styles.players)}>
			<h4 className={clsx(styles.players__title)}>Мастер</h4>
			<div className={clsx(styles.players__masterPlate)}>
				<HeroPlate playerName={master.name} image={master.avatar} master id={master.id} />
			</div>
			<h4 className={clsx(styles.players__title)}>Герои</h4>
			<div className={clsx(styles.players__heroesList)}>
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
			<div className={clsx(styles.players__add)}>
				{onAdd && <AddButton attachment="Добавить игрока" onClick={onAdd ?? (() => {})} />}
			</div>
		</section>
	);
};
