import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@store';

import { getCurrentAdventure, getThreads, getTreadsIsLoading, userDataSelector } from '@slices';
import { ThreadPlateListUI } from '@ui';

export const ThreadPlateList: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const onAddThread = () => {
		navigate(`addthread`, { state: { background: location } }); // вместо 'addthread' нужен нормальный путь
	};

	const currentUser = useAppSelector(userDataSelector);
	const currentAdventure = useAppSelector(getCurrentAdventure);

	const threads = useAppSelector(getThreads);
	const isLoading = useAppSelector(getTreadsIsLoading);

	if (!currentAdventure || !currentUser || threads === null) {
		return null;
	}
	if (isLoading) {
		return <div>Loading...</div>; // заменить на загрузку
	}

	return <ThreadPlateListUI threads={threads} onAdd={onAddThread} />;
};
