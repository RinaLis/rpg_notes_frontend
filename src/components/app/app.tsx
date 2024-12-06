import React, { useEffect } from 'react';
import { useAppDispatch } from '@store';
import { requestLoginUser } from 'src/services/slices/user/actions';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
	ExamplePage,
	Adventures,
	Login,
	Profile,
	Register,
	ForgotPassword,
	ResetPassword,
} from '@pages';
import { AppHeaderUI } from '@ui';
import { requestGetAdventure, requestUserAdventures } from 'src/services/slices/adventures/actions';
import { requestCreateThread } from 'src/services/slices/threads/actions';
import { ThreadType } from '@utils-types';
import styles from './app.module.scss';

export const App: React.FC = () => {
	const location = useLocation();

	// Определение старого фона при переходе по ссылке
	const backgroundLocation = location.state?.background || null;

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			requestLoginUser({
				email: 'anpast2018@gmail.com',
				password: '1234567890',
			})
		);
		// запрос всех приключений юзера
		dispatch(requestUserAdventures());

		// запорс приключения по id , существующий id
		dispatch(requestGetAdventure('8ce57dde-1893-4ee6-b21b-fdafc467fc57'));

		// несуществующий id но где должны быть цифры там цифры , а где буквы там буквы
		// работает нормально, ошибка в сторе
		dispatch(requestGetAdventure('8ce57dde-1893-4ee6-b21b-fdafc467fc58'));

		// несуществующий id но вместо последней цифры стоит буква
		// бек нам возращает 422, это ловит костыль в request.ts
		dispatch(requestGetAdventure('8ce57dde-1893-4ee6-b21b-fdafc467fc5q'));
		// cоздать тред в приключении
		dispatch(
			requestCreateThread({
				adventure_id: '8ce57dde-1893-4ee6-b21b-fdafc467fc57',
				name: 'test',
				type: ThreadType.Public,
			})
		);
	}, [dispatch]);

	return (
		<div className={styles.app}>
			<AppHeaderUI />
			<Routes location={backgroundLocation || location}>
				<Route path="/example" element={<ExamplePage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/adventures" element={<Adventures />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/register" element={<Register />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Routes>
		</div>
	);
};
