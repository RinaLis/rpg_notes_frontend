import React from 'react';

import { LoginUI } from '@ui-pages';

export const Login: React.FC = () => {
	const validate = {
		login: (value: string) =>
			value.length < 3 ? 'Имя пользователя должно быть не менее 3 символов' : null,

		email: (value: string) => (!/\S+@\S+\.\S+/.test(value) ? 'Введите корректный email' : null),

		password: (value: string) =>
			value.length < 6 ? 'Пароль должен быть не менее 6 символов' : null,
	};
	return <LoginUI validate={validate} />;
};
