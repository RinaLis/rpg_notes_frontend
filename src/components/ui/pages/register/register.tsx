import React from 'react';
import { Link } from 'react-router-dom';
import VictorianSvg from '@assets/victorian.svg';
import styles from './register.module.scss';

export const RegisterUI: React.FC = () => {
	return (
		<main className={styles.registerSection}>
			<img className={styles.registerSection__img} src={VictorianSvg} alt="victorian" />
			<div>
				<form className={styles.registerSection__formSection} name="login" onSubmit={() => {}}>
					<div>
						<h1 className={styles.registerSection__title}>РЕГИСТРАЦИЯ</h1>
						<input className={styles.registerSection__input} type="text" placeholder="Имя" />
					</div>
					<div>
						<input className={styles.registerSection__input} type="text" placeholder="Email" />
					</div>
					<div>
						<input className={styles.registerSection__input} placeholder="Пароль" />
					</div>
					<div>
						<input className={styles.registerSection__input} placeholder="Подтверждение пароля" />
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
					</div>
					Зарегистрированы?
					<Link to="/login">Войти</Link>
				</form>
			</div>
		</main>
	);
};
