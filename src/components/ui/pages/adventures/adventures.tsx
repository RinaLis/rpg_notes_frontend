import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store';
import { requestGetAdventure } from 'src/services/slices/adventures/actions';
import { getCurrentAdventure } from 'src/services/slices/adventures/adventures.slice';
import { requestLoginUser } from 'src/services/slices/user/actions';
import { AdventureBookUI } from '../../adventure-book/adventure-book';

export const AdventuresUI: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			requestLoginUser({
				email: 'anpast2018@gmail.com',
				password: '1234567890',
			})
		);
		dispatch(requestGetAdventure('8ce57dde-1893-4ee6-b21b-fdafc467fc57'));
	}, [dispatch]);

	const adventure = useAppSelector(getCurrentAdventure);

	if (!adventure) return null;
	return <AdventureBookUI adventure={adventure} onClick={() => {}} />;
};
