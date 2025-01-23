import clsx from 'clsx';

import { ThreadPlateListUIProps } from './type';
import styles from './thread-plate-list.module.scss';
import { AddButton } from '../add-button';
import { ThreadPlate } from '../thread-plate/thread-plate';

export const ThreadPlateListUI: React.FC<ThreadPlateListUIProps> = ({ threads, onAdd }) => {
	return (
		<section className={clsx(styles.threads)}>
			<div className={clsx(styles.threads__list)}>
				{threads.length > 0 &&
					threads.map((thread) => (
						<div key={thread.id} className={clsx(styles.threads__plate)}>
							<ThreadPlate name={thread.name} image={thread.image} id={thread.id} />
						</div>
					))}
			</div>
			<div className={clsx(styles.threads__add)}>
				<AddButton attachment="Создать тред" onClick={() => {}} />
			</div>
		</section>
	);
};
