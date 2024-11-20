import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './login-ui.module.scss';

export const LoginUI: FC = () => {
	return (
		<main className={styles.loginSection}>
			<h1>ВХОД</h1>
			<div>
				<form name="login" onSubmit={() => {}}>
					<div>
						<input type="text" placeholder="Email" />
					</div>
					<div>
						<input placeholder="Пароль" />
					</div>
					<div className={styles.loginSection__buttonsSection}>
						<button
							className={styles.loginSection__button}
							type="submit"
							onClick={(e) => {
								e.preventDefault();
								alert('submit');
							}}
						>
							Войти
						</button>
						<Link to="/register">Регистрация</Link>
						<Link to="/forgot-password">Забыли пароль?</Link>
					</div>
				</form>
			</div>
		</main>
	);
};
