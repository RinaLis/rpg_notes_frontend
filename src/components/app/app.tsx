import React from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ExamplePage, Adventures, Login, Profile, Register } from '@pages';
import { AppHeader } from '@components';

export const App: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	// Определение старого фона при переходе по ссылке
	const backgroundLocation = location.state?.background || null;
	console.log('aaaaa');
	const closeModal = () => {
		navigate(-1); // возвращаемся назад
	};
	return (
		<>
			<AppHeader />
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
			</Routes>
		</>
	);
};
