import React from 'react';
import { Link } from 'react-router-dom';
import VictorianSvg from '@assets/victorian.svg';
import styles from './forgot-password.module.scss';

export const ForgotPasswordUI: React.FC = () => {
	return (
		<main className={styles.forgotPasswordSection}>
			<img className={styles.forgotPasswordSection__img} src={VictorianSvg} alt="victorian" />
			<div className={styles.forgotPasswordSection__formSection}>
				<h2 className={styles.forgotPasswordSection__title}>Восстановление пароля</h2>
				<input className={styles.forgotPasswordSection__input} type="email" placeholder="Email" />
				<button className={styles.forgotPasswordSection__button}>ВОССТАНОВИТЬ</button>
				<h3>Вспомнили пароль?</h3>
				<Link to="/Login">Войти</Link>
			</div>
		</main>
	);
};
