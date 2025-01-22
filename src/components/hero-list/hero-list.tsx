import { HeroListUI } from '@ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@store';
import { userDataSelector } from 'src/services/slices/user/user.slice';
import { getCurrentAdventure } from 'src/services/slices/adventures/adventures.slice';
import { getHeroes } from 'src/services/slices/heroes/heroes.slice';

export const HeroList: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const onAddHero = () => {
		navigate(`invite`, { state: { background: location } }); // вместо 'invite' нужен нормальный путь
	};

	const currentUser = useAppSelector(userDataSelector);
	const currentAdventure = useAppSelector(getCurrentAdventure);
	const master = currentAdventure?.owner;
	const heroes = useAppSelector(getHeroes);

	if (!currentAdventure || !currentUser || !master) {
		return null;
	}

	if (currentUser?.id === master?.id) {
		return <HeroListUI master={master} heroes={heroes ?? []} onAdd={onAddHero} />;
	}
	return <HeroListUI master={master} heroes={heroes ?? []} />;
};
