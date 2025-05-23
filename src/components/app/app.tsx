import React from 'react';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import {
	Adventures,
	Login,
	Profile,
	Register,
	ForgotPassword,
	ResetPassword,
	Page404,
} from '@pages';
import { AdventureLayout, AppHeaderUI, AuthLayout, CenterLayout } from '@ui';

import { Modal, ProtectedRoute } from '@components';
import styles from './app.module.scss';
import { AdventureChecks } from '../adventure-checks';

// элементы описывают страницы приложения их необходимо выделить в отдельные компоненты
const CreateHero = () => <div>элемент описывает экран создания персонажа</div>;
const Invite = () => <div>элемент описывает содержимое модального окна приглашения персонаж</div>;
const Main = () => <div>элемент описывает основной контент главной страницы приключения</div>;

export const App: React.FC = () => {
	const location = useLocation();

	// Определение старого фона при переходе по ссылке
	const backgroundLocation = location.state?.background || null;

	const navigate = useNavigate();
	const closeModal = () => {
		navigate(-1); // возвращаемся назад
	};

	return (
		<div className={styles.app}>
			<AppHeaderUI />
			<Routes location={backgroundLocation || location}>
				<Route
					path="/auth"
					// все роуты внутри только для неавторизованных пользователей
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
						<Route path="invite" element={<Invite />} />
					</Route>
				</Route>

				<Route
					path="/adventures"
					element={
						<ProtectedRoute>
							<Adventures />
						</ProtectedRoute>
					}
				/>

				<Route
					path="/profile"
					element={
						<ProtectedRoute>
							<CenterLayout>
								<Profile />
							</CenterLayout>
						</ProtectedRoute>
					}
				/>

				<Route path="*" element={<Page404 text="Страницы нет. 404." />} />
			</Routes>

			{backgroundLocation && (
				<Routes>
					<Route
						path="/adventure/:adventure_id/invite"
						element={
							<Modal onClose={closeModal} title="Пригласить игрока">
								<Invite />
							</Modal>
						}
					/>
					<Route
						path="/adventure/:adventure_id/addthread"
						element={
							<Modal onClose={closeModal} title="Создать тред">
								<Invite />
							</Modal>
						}
					/>
				</Routes>
			)}
		</div>
	);
};
