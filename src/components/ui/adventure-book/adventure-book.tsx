import clsx from 'clsx';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Frame } from '@assets/images/linesAdventure.svg';
import baseAdventure from '@assets/images/baseAdventure.png';

import { Button } from '../button';
import { AdventureBookUIProps } from './type';
import styles from './adventure-book.module.scss';

export const AdventureBookUI: FC<AdventureBookUIProps> = ({ adventure }) => {
	const [pageState, setPageState] = useState(1);

	return (
		<>
			<div className={styles.book} id="test-book">
				<div className={styles.book__pagesContainer}>
					<div className={clsx(styles.book__page)}>
						<div className={clsx(styles.book__content, styles.content, styles.content_left)}>
							<div className={styles.content__frame}>
								<Frame />
							</div>

							<img
								className={styles.content__image}
								src={adventure.image ? adventure.image : baseAdventure}
								alt={adventure.name}
							/>
							<div className={styles.content__frame}>
								<Frame />
							</div>
						</div>
					</div>
					<div
						className={clsx(
							styles.book__duplex,
							pageState === 1 ? styles.book__duplex_leafRight : styles.book__duplex_leafLeft
						)}
						id="test-duplex"
					>
						<div className={clsx(styles.book__page, styles.book__duplex__front)}>
							<div
								className={clsx(
									styles.book__content,
									styles.book__content_reverse,
									styles.content,
									styles.content_rightFirst
								)}
							>
								<div className={styles.content__title}>{adventure.name}</div>
								<div className={styles.content__subtitle}>Мастер: {adventure.owner.name}</div>
								<div className={styles.content__buttonContainer}>
									<Link to={`/adventure/${adventure.id}`} className={styles.content__button}>
										В приключение
									</Link>
									<Button className={clsx(styles.content__button)} onClick={() => setPageState(2)}>
										Подробнее
									</Button>
								</div>
							</div>
						</div>
						<div className={clsx(styles.book__page, styles.book__duplex__back)}>
							<div className={clsx(styles.book__content, styles.content, styles.content_left)}>
								<div className={styles.content__subtitle}>{adventure.name}</div>
								<img
									className={styles.content__image}
									src={adventure.image ? adventure.image : baseAdventure}
									alt={adventure.name}
								/>
								<div className={styles.content__buttonContainer}>
									<Button
										className={clsx(styles.content__button, styles.content__button_left)}
										onClick={() => setPageState(1)}
									>
										Назад
									</Button>
									<Link to={`/adventure/${adventure.id}`} className={styles.content__button}>
										В приключение
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className={clsx(styles.book__page, styles.book__page_back)}>
						<div
							className={clsx(styles.book__content, styles.book__content_reverse, styles.content)}
						>
							<div className={styles.content__text}>{adventure.description}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
