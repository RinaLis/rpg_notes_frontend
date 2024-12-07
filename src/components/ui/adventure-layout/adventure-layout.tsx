import { HeroList } from 'src/components/hero-list';
import { Outlet } from 'react-router-dom';
import { ThreadPlateList } from 'src/components/thread-plate-list';
import { AsideLayoutUI } from '../aside-layout';
import { ToggleSectionUI } from '../toggle-section';

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
