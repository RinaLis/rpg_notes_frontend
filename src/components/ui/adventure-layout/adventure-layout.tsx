import { HeroList } from 'src/components/hero-list';
import { AsideLayoutUI } from '../aside-layout';
import { AdventureLayoutUIProps } from './type';

export const AdventureLayoutUI: React.FC<AdventureLayoutUIProps> = ({ children }) => {
	return <AsideLayoutUI asideChildren={<HeroList />}>{children}</AsideLayoutUI>;
};
// пока тут только HeroList но вообще будет свитч между героями и тредами
