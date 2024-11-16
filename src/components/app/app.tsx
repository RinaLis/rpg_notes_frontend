import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Adventures, Login, Profile } from '@pages';
import { AppHeader } from '@components';

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
			<AppHeader />
			<Routes location={backgroundLocation || location}>
				<Route path="/login" element={
					// <ProtectedRoute>
					<Login />
					// <ProtectedRoute>
					} />
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

export default App;
