
import React, { useEffect } from 'react';
import { useAppDispatch } from '@store';
import { requestLoginUser } from 'src/services/slices/user/actions';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

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

export const App: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	// Определение старого фона при переходе по ссылке
	const backgroundLocation = location.state?.background || null;
	const closeModal = () => {
		navigate(-1); // возвращаемся назад
	};
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			requestLoginUser({
				email: 'anpast2018@gmail.com',
				password: '1234567890',
			})
		);
	}, [dispatch]);
	return (
		<>
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
		</>
	);
};
