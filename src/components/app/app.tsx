import React from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ExamplePage } from '@pages';
import { LoginUI } from '../ui/pages/login/login';
import { Home } from '../ui/pages/home/home';
import { Clock } from '../clock/clock';

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
			<Clock />
			<Link to="/example">Go to Example Page</Link>

			<Routes location={backgroundLocation || location}>
				<Route path="/example" element={<ExamplePage />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginUI />} />
			</Routes>
		</>
	);
};
