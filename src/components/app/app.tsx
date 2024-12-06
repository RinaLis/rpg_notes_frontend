import React, { useEffect } from 'react';
import { useAppDispatch } from '@store';
import { requestLoginUser } from 'src/services/slices/user/actions';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

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
import { Modal } from '@components';
import styles from './app.module.scss';

// элементы описывают страницы приложения их необходимо выделить в отдельные компоненты
const CreateHero = () => <div>элемент описывает экран создания персонажа</div>;
const Invite = () => <div>элемент описывает содержимое модального окна приглашения персонаж</div>;
const Main = () => <div>элемент описывает основной контент главной страницы приключения</div>;
const AuthLayout = () => {
	return (
		<div>
			<p>элемент который мы размещаем на плашке</p>
			<Outlet />
		</div>
	);
};
const AdventureLayout = () => {
	return (
		<div>
			<p>общий лейаут всех страниц, связанных с конкретным приключением</p>
			<Outlet />
		</div>
	);
};

const CenterBlock = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<p>центральный блок</p>
			<Outlet />
		</div>
	);
};

export const App: React.FC = () => {
	const location = useLocation();

	// Определение старого фона при переходе по ссылке
	const backgroundLocation = location.state?.background || null;

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const closeModal = () => {
		navigate(-1); // возвращаемся назад
	};

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
				<Route path="/adventures" element={<Adventures />} />
				<Route path="/:adventure_id/create-hero" element={<CreateHero />} />
				<Route
					path="/:adventure_id/invite"
					element={
						<CenterBlock>
							<Invite />
						</CenterBlock>
					}
				/>
				<Route path="/profile" element={<Profile />} />

				<Route path="/auth" element={<AuthLayout />}>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="forgot-password" element={<ForgotPassword />} />
					<Route path="reset-password" element={<ResetPassword />} />
				</Route>

				<Route path="/:adventure_id" element={<AdventureLayout />}>
					<Route path="main" element={<Main />} />
				</Route>
			</Routes>

			{backgroundLocation && (
				<Routes>
					<Route
						path="/:adventure_id/invite"
						element={
							<Modal onClose={closeModal} title="Заголовок">
								<Invite />
							</Modal>
						}
					/>
				</Routes>
			)}
		</div>
	);
};
