import { FC, useEffect, useState } from 'react';

import { AdventuresUI } from '@ui-pages';
import { useAppDispatch, useAppSelector } from '@store';
import { getAdventures, getUserState, isAdventuresLoading, requestUserAdventures } from '@slices';
import { Preloader } from '@ui';
import { TOption } from 'src/components/ui/select/types';

const selectOptions = [
	{ label: 'Все', value: 'all' },
	{ label: 'Создатель', value: 'GM' },
	{ label: 'Игрок', value: 'player' },
];

export const Adventures: FC = () => {
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(isAdventuresLoading);
	const adventures = useAppSelector(getAdventures);
	const userId = useAppSelector(getUserState).user?.id;

	const [filterOption, setFilterOption] = useState('all');

	const filterAdventures = () => {
		if (filterOption === 'all') {
			return adventures;
		}
		if (filterOption === 'GM') {
			return adventures ? adventures.filter((n) => n.owner.id === userId) : null;
		}
		if (filterOption === 'player') {
			return adventures ? adventures.filter((n) => n.owner.id !== userId) : null;
		}
		return null;
	};

	const showedAdventures = filterAdventures();

	const onFilterChange = (option: TOption | null) => {
		if (option) {
			setFilterOption(option.value);
		}
	};

	useEffect(() => {
		dispatch(requestUserAdventures());
	}, [dispatch]);

	if (isLoading) {
		return <Preloader title="Посидите у костра, ваши приключения загружаются" />;
	}

	return (
		<AdventuresUI
			adventures={showedAdventures}
			onFilterChange={onFilterChange}
			options={selectOptions}
		/>
	);
};
