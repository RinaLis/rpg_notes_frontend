import React from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

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
	return (
		<>
			<AppHeaderUI />
			<Link to="/example">Go to Example Page</Link>
			<Routes location={backgroundLocation || location}>
				<Route path="/example" element={<ExamplePage />} />
				<Route
					path="/login"
					element={
						// <ProtectedRoute>
						<Login />
						// <ProtectedRoute>
					}
				/>
				<Route path="/adventures" element={<Adventures />} />
				<Route
					path="/profile"
					element={
						// <ProtectedRoute>
						<Profile />
						// </ProtectedRoute>
					}
				/>
				<Route path="/register" element={<Register />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Routes>
		</>
	);
};
