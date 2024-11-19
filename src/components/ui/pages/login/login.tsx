import { FC } from 'react';
import { Link } from 'react-router-dom';

export const LoginUI: FC = () => {
	return (
		<main>
			<h1>ВХОД</h1>
			<div>
				<form name="login" onSubmit={() => {}}>
					<div>
						<input type="text" placeholder="Email" />
					</div>
					<div>
						<input placeholder="Пароль" />
					</div>
					<div>
						<button
							type="submit"
							onClick={(e) => {
								e.preventDefault();
								alert('submit');
							}}
						>
							Войти
						</button>
						<Link to="/register">Регистрация</Link>
						<Link to="/register">Забыли пароль?</Link>
					</div>
				</form>
			</div>
		</main>
	);
};
