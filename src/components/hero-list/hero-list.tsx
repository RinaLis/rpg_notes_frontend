import { HeroListUI } from '@ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@store';
import { userDataSelector } from 'src/services/slices/user/user.slice';
import { HeroListProps } from './type';

export const HeroList: React.FC<HeroListProps> = ({ master, heroes }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const onAddHero = () => {
		navigate(`invite`, { state: { background: location } }); // вместо '/invite' нужен нормальный путь
	};
	//

	const currentUser = useAppSelector(userDataSelector);

	if (currentUser?.id === master.id) {
		return <HeroListUI master={master} heroes={heroes} onAdd={onAddHero} />;
	}
	return <HeroListUI master={master} heroes={heroes} />;
};
