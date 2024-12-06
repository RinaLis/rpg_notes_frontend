import { HeroList } from 'src/components/hero-list';
import { Outlet } from 'react-router-dom';
import { AsideLayoutUI } from '../aside-layout';

export const AdventureLayout: React.FC = () => {
	return (
		<AsideLayoutUI asideChildren={<HeroList />}>
			<Outlet />
		</AsideLayoutUI>
	);
};
// пока тут только HeroList но вообще будет свитч между героями и тредами
