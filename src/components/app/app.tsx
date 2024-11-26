import React, { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ExamplePage, Adventures, Login, Profile } from '@pages';
import { AppHeader } from '@components';
import { useAppDispatch } from '@store';
import { requestLoginUser } from 'src/services/slices/user/actions';

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
			</Routes>
		</>
	);
};
