import React from 'react';
import VictorianSvg from '@assets/victorian.svg';
import styles from './reset-password.module.scss';

export const ResetPasswordUI: React.FC = () => {
	return (
		<main className={styles.resetPasswordSection}>
			<img className={styles.resetPasswordSection__img} src={VictorianSvg} alt="victorian" />
			<div className={styles.resetPasswordSection__formSection}>
				<h2 className={styles.resetPasswordSection__title}>Восстановление пароля</h2>
				<input
					className={styles.resetPasswordSection__input}
					type="email"
					placeholder="Введите новый пароль"
				/>
				<input
					className={styles.resetPasswordSection__input}
					type="email"
					placeholder="Подтверждение пароля"
				/>
				<input
					className={styles.resetPasswordSection__input}
					type="email"
					placeholder="Введите код из письма"
				/>
				<button className={styles.resetPasswordSection__button}>Сохранить</button>
			</div>
		</main>
	);
};
