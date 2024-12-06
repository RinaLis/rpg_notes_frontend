import clsx from 'clsx';
import cubes2 from '@assets/images/beautifulCubes.png';
import cubes1 from '@assets/images/cubes.png';
import { ToggleUIProps } from './type';
import style from './toggle.module.scss';

export const Toggle: React.FC<ToggleUIProps> = ({ activeFirst, toggleActive }) => {
	return (
		<button className={clsx(style.toggle)} onClick={() => toggleActive(!activeFirst)}>
			<div className={clsx(style.toggle__option, activeFirst && style.toggle__option_active)}>
				<img src={cubes1} alt="игроки" className={style.toggle__image} />
			</div>
			<div className={style.toggle__text}>{activeFirst ? 'игроки' : 'треды'}</div>
			<div className={clsx(style.toggle__option, !activeFirst && style.toggle__option_active)}>
				<img src={cubes2} alt="треды" className={style.toggle__image} />
			</div>
		</button>
	);
};
