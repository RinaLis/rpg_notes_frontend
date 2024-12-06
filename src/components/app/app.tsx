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
import { AdventureLayout, AppHeaderUI, AuthLayout } from '@ui';
import { requestGetAdventure, requestUserAdventures } from 'src/services/slices/adventures/actions';
import { requestCreateThread } from 'src/services/slices/threads/actions';
import { ThreadType } from '@utils-types';
import { Modal, ProtectedRoute } from '@components';
import styles from './app.module.scss';
import { AdventureChecks } from '../adventure-checks';

// элементы описывают страницы приложения их необходимо выделить в отдельные компоненты
const CreateHero = () => <div>элемент описывает экран создания персонажа</div>;
const Invite = () => <div>элемент описывает содержимое модального окна приглашения персонаж</div>;
const Main = () => <div>элемент описывает основной контент главной страницы приключения</div>;

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

	return (
		<div className={styles.app}>
			<AppHeaderUI />
			<Routes location={backgroundLocation || location}>
				<Route path="/example" element={<ExamplePage />} />
				<Route path="/adventures" element={<Adventures />} />

				<Route
					path="/:adventure_id/invite"
					element={
						<CenterBlock>
							<Invite />
						</CenterBlock>
					}
				/>
				<Route path="/profile" element={<Profile />} />

				<Route
					path="/auth"
					element={
						<ProtectedRoute onlyUnAuth>
							<AuthLayout />
						</ProtectedRoute>
					}
				>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="forgot-password" element={<ForgotPassword />} />
					<Route path="reset-password" element={<ResetPassword />} />
				</Route>

				<Route
					path="/adventure/:adventure_id"
					// все роуты внутри только для авторизованных пользователей
					// проверка приключения и что пользователь в нем участвует
					element={
						<ProtectedRoute>
							<AdventureChecks />
						</ProtectedRoute>
					}
				>
					<Route path="create-hero" element={<CreateHero />} />
					<Route
						path=""
						// элементы внутри этого роута будут отображаться внутри AdventureLayout
						element={<AdventureLayout />}
					>
						<Route path="" element={<Main />} />
					</Route>
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
