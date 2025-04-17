import React, { useEffect } from 'react';

import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store';

import { Page404 } from '@pages';
import {
	getPlayers,
	getPlayersIsLoading,
	requestGetPlayers,
	requestGetAdventure,
	requestGetThreadsByAdventure,
	requestGetHeroesByAdventureAndUser,
	isAuthCheckedSelector,
	userDataSelector,
	getAdventuresIsLoading,
	getCurrentAdventure,
} from '@slices';

export const AdventureChecks: React.FC = () => {
	const location = useLocation();
	const { adventure_id: id } = useParams<{ adventure_id: string }>(); // id должен называться  быть  как в путях в роуте
	const dispatch = useAppDispatch();
	const currentUser = useAppSelector(userDataSelector);
	const userLoading = useAppSelector(isAuthCheckedSelector);
	const adventureLoading = useAppSelector(getAdventuresIsLoading);
	const currentAdventure = useAppSelector(getCurrentAdventure);
	const players = useAppSelector(getPlayers);
	const playersIsLoading = useAppSelector(getPlayersIsLoading);
	const usersHeroes = players?.find((player) => player.user.id === currentUser?.id)?.heroes || null;

	useEffect(() => {
		if (!id) {
			return;
		}
		// запрос приключения по id
		dispatch(requestGetAdventure(id));
	}, [dispatch, id]);

	// запрос героев по приключению и юзеру
	useEffect(() => {
		if (currentAdventure?.id && currentUser) {
			dispatch(
				requestGetHeroesByAdventureAndUser({
					adventure_id: currentAdventure.id,
					user_id: currentUser.id,
				})
			);
		}
	}, [dispatch, currentAdventure, currentUser]);

	// запрос тредов по приключению
	useEffect(() => {
		if (currentAdventure?.id) {
			dispatch(requestGetThreadsByAdventure(currentAdventure.id));
		}
	}, [dispatch, currentAdventure?.id]);

	useEffect(() => {
		if (currentAdventure?.id) {
			dispatch(requestGetPlayers(currentAdventure?.id));
		}
	}, [dispatch, currentAdventure?.id]);

	if (!id) {
		return <Page404 />;
	}

	if (userLoading || adventureLoading || playersIsLoading) {
		// заменить на загрузку
		return <div>Loading...</div>;
	}
	// если приключение не найдено
	if (!currentAdventure) {
		return <Page404 text="Приключение не найдено" />;
	}

	// можно будет убрать как будет защищенный путь
	if (!currentUser) {
		return <Page404 text="Пользователь не найден" />;
	}
	// если герои есть и хоть один из них используется
	// или если юзер мастер
	if (usersHeroes?.some((hero) => hero.is_used) || currentAdventure.owner.id === currentUser.id) {
		return <Outlet />;
	}
	// Проверяем, не находимся ли мы уже на странице создания героя
	const isCreateHeroPage = location.pathname.includes('create-hero');

	// если списка для героев нет
	if (!usersHeroes) {
		return <Page404 text="Кажется вас еще не пригласили в это приключение" />; // не работаетS
		// return <Navigate replace to="*" state={{ from: location }} />;  // работает
	}

	if (!isCreateHeroPage) {
		return <Navigate replace to={`/adventure/${id}/create-hero`} state={{ from: location }} />;
	}
	return <Outlet />;
};
