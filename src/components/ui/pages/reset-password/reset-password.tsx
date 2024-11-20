import React from 'react';
import { Link } from 'react-router-dom';

export const ResetPasswordUI: React.FC = () => {
	return (
		<main>
			<div>
				<h3>Восстановление пароля</h3>
				<form name="login">
					<div className="pb-6">
						<input name="password" />
					</div>
					<div>
						<input type="text" placeholder="Введите код из письма" />
					</div>
					<div>
						<button>Сохранить</button>
					</div>
				</form>
				<div>
					Вспомнили пароль?
					<Link to="/login">Войти</Link>
				</div>
			</div>
		</main>
	);
};
