import React from 'react';

import { Clock } from '../clock/clock';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { LoginUI } from '../ui/pages/login/login';
import { Home } from '../ui/pages/home/home';

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
			<Routes location={backgroundLocation || location}>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginUI />} />
			</Routes>
		</>
	);
};

export default App;
