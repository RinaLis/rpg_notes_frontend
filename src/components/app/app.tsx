import React, { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ExamplePage, Adventures, Login, Profile } from '@pages';
import { AppHeader } from '@components';
import { useDispatch } from '@store';
import { requestGetUser, requestLoginUser } from 'src/services/slices/user.slice';
import { requestGetPlayers, requestGetUserByLogin, requestInviteUser } from 'src/services/slices/players.slice';
import { requestCreateHero, requestUpdateHero } from 'src/services/slices/heroes.slice';
import { HeroCharacteristicsEnum } from '@utils-types';

export const App: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	// Определение старого фона при переходе по ссылке
	const backgroundLocation = location.state?.background || null;
	const closeModal = () => {
		navigate(-1); // возвращаемся назад
	};
	const dispatch = useDispatch();
	// const {user} = useSelector(getUserState)

	useEffect(() => {
		dispatch(
			requestLoginUser({
				email: 'anpast2018@gmail.com',
				password: '1234567890',
			})
		).then(() => {
			dispatch(requestGetUser());
		});
		// dispatch(requestCreateHero({
		// 	adventure_id: '8ce57dde-1893-4ee6-b21b-fdafc467fc57',
		// 	name: 'Крейси',
			
		// }));
		dispatch(requestUpdateHero({
			id: '06987a0b-6351-44e3-9d25-65ab09d96b78',
			name: 'Крейси',
			characteristics: [{
				code: HeroCharacteristicsEnum.Age,
				value: '28'
			}]
		}));
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
