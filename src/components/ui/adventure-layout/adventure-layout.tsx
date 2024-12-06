import { HeroList } from 'src/components/hero-list';
import { Outlet } from 'react-router-dom';
import { AsideLayoutUI } from '../aside-layout';
import { AdventureLayoutUIProps } from './type';

export const AdventureLayoutUI: React.FC<AdventureLayoutUIProps> = ({ children }) => {
	return (
		<AsideLayoutUI asideChildren={<HeroList />}>
			<Outlet />
		</AsideLayoutUI>
	);
};
// пока тут только HeroList но вообще будет свитч между героями и тредами
