import clsx from 'clsx';
import { useState } from 'react';
import { ToggleSectionUIProps } from './type';
import style from './toggle-section.module.scss';
import { Toggle } from '../toggle';

export const ToggleSectionUI: React.FC<ToggleSectionUIProps> = ({ section1, section2 }) => {
	const [activeFirst, toggleActive] = useState(true);
	return (
		<section className={style.section}>
			<div className={clsx(style.section__switch)}>
				<Toggle activeFirst={activeFirst} toggleActive={toggleActive} />
			</div>

			<div className={clsx(style.section__content)}>
				<div className={clsx(style.section__item, activeFirst && style.section__item_active)}>
					{section1}
				</div>
				<div className={clsx(style.section__item, !activeFirst && style.section__item_active)}>
					{section2}
				</div>
			</div>
		</section>
	);
};
