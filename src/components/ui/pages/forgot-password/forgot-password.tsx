import React from 'react';
import { Link } from 'react-router-dom';

export const ForgotPasswordUI: React.FC = () => {
	return (
		<main>
			<div>
				<h3>Восстановление пароля</h3>
				<form>
					<div>
						<input type="email" />
					</div>
					<div>
						<Link to="/forgot-password">Восстановить</Link>
					</div>
				</form>
				<div>
					Вспомнили пароль?
					<Link to="/Login">Войти</Link>
				</div>
			</div>
		</main>
	);
};
