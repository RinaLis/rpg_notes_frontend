import { useAppDispatch, useAppSelector } from '@store';
import { Navigate, useLocation } from 'react-router-dom';
import { Preloader } from '@ui';
import { useEffect } from 'react';
import { getUserApi } from '@api';
import { getUserState } from 'src/services/slices/user/user.slice';
import { ProtectedRouteProps } from './type';

export const ProtectedRoute = ({ onlyUnAuth, children }: ProtectedRouteProps) => {
	const { isLoading, user } = useAppSelector((state) => getUserState(state));
	const dispatch = useAppDispatch();
	const location = useLocation();

	useEffect(() => {
		const refreshToken = localStorage.getItem('refreshToken');
		if (!user && refreshToken) {
			// Если нет пользователя и refresh токен есть, пробуем обновить пользователя по refresh токену
			dispatch(getUserApi);
		}
	}, [dispatch, user]);

	// Если идёт загрузка данных о пользователе, показываем прелоадер
	if (isLoading) {
		return <Preloader title="Проверяем авторизацию" />;
	}

	// Если страница защищена только для неавторизованных пользователей и пользователь уже авторизован
	if (onlyUnAuth && user) {
		const from = location.state?.from || { pathname: '/adventures' };
		return <Navigate replace to={from} />;
	}

	// Если страница защищена для авторизованных пользователей, но пользователь не авторизован
	if (!onlyUnAuth && !user) {
		return <Navigate replace to="/auth/login" state={{ from: location }} />;
	}

	// Если всё хорошо, отображаем дочерние компоненты
	return children;
};
