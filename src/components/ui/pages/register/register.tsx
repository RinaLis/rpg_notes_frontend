import React from 'react';
import { Link } from 'react-router-dom';
import styles from './register-ui.module.scss';

export const RegisterUI: React.FC = () => {
	return (
		<main className={styles.registerSection}>
			<h1 className={styles.registerSection__title}>РЕГИСТРАЦИЯ</h1>
			<div>
				<form name="login" onSubmit={() => {}} className={styles.registerSection__formSection}>
					<div>
						<input type="text" placeholder="Имя" />
					</div>
					<div>
						<input type="text" placeholder="Email" />
					</div>
					<div>
						<input placeholder="Пароль" />
					</div>
					<div>
						<input placeholder="Подтверждение пароля" />
					</div>
					<div>
						<button
							className={styles.registerSection__button}
							type="submit"
							onClick={(e) => {
								e.preventDefault();
								alert('Уже?');
							}}
						>
							Регистрация
						</button>
						<div>
							Зарегистрированы?
							<Link to="/login">Войти</Link>
						</div>
					</div>
				</form>
			</div>
		</main>
	);
};
