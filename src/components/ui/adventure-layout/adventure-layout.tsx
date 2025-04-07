import { HeroList, ThreadPlateList } from '@components';
import { Outlet } from 'react-router-dom';
import { AsideLayoutUI, ToggleSectionUI } from '@ui';

export const AdventureLayout: React.FC = () => {
	return (
		<AsideLayoutUI
			asideChildren={<ToggleSectionUI section1={<HeroList />} section2={<ThreadPlateList />} />}
		>
			<Outlet />
		</AsideLayoutUI>
	);
};
// пока тут только HeroList но вообще будет свитч между героями и тредами
