import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store';
import { requestGetAdventure } from 'src/services/slices/adventures/actions';
import { isAuthCheckedSelector, userDataSelector } from 'src/services/slices/user/user.slice';
import { requestGetHeroesByAdventureAndUser } from 'src/services/slices/heroes/actions';
import {
	getAdventuresIsLoading,
	getCurrentAdventure,
} from 'src/services/slices/adventures/adventures.slice';

import { requestGetThreadsByAdventure } from 'src/services/slices/threads/actions';
import { ExamplePage } from '../../pages/example-page';
import { AdventureLayoutUI, AdventureLayoutUIProps } from '../ui/adventure-layout';

export const AdventureLayout: React.FC<AdventureLayoutUIProps> = ({ children }) => {
	const { id } = useParams<{ id: string }>(); // id должен называться  быть  как в путях в роуте
	const dispatch = useAppDispatch();
	const currentUser = useAppSelector(userDataSelector);
	const userLoading = useAppSelector(isAuthCheckedSelector);
	const adventureLoading = useAppSelector(getAdventuresIsLoading);
	const currentAdventure = useAppSelector(getCurrentAdventure);

	// запрос приключения по id
	useEffect(() => {
		if (!id) {
			return;
		}
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

	if (!id) {
		return <ExamplePage />; // заменить на страницу 404
	}

	if (userLoading || adventureLoading) {
		// заменить на загрузку
		return (
			<div>
				Loading...{id}...{userLoading} ... {adventureLoading}
			</div>
		);
	}

	if (!currentAdventure) {
		return <div>Adventure not found</div>; // заменить на страницу 404
	}

	return <AdventureLayoutUI>{children}</AdventureLayoutUI>;
};
