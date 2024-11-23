import React from 'react';
import { Link } from 'react-router-dom';
import VictorianSvg from '@assets/victorian.svg';
import { Button, Input } from '@components';
import styles from './forgot-password.module.scss';

interface ForgotPasswordUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: any;
	errors: Record<string, any>;
}

export const ForgotPasswordUI: React.FC<ForgotPasswordUIProps> = ({
	onSubmit,
	register,
	errors,
}) => {
	return (
		<main className={styles.forgotPasswordSection}>
			<img className={styles.forgotPasswordSection__img} src={VictorianSvg} alt="victorian" />
			<form
				className={styles.forgotPasswordSection__formSection}
				name="forgotPassword"
				onSubmit={onSubmit}
				noValidate
			>
				<h2 className={styles.forgotPasswordSection__title}>Восстановление пароля</h2>
				<Input
					type="email"
					placeholder="Email"
					register={register('email')}
					error={errors.email?.message}
				/>{' '}
				<Button type="submit" className={styles.forgotPasswordSection__button}>
					Восстановить
				</Button>
				<h3>Вспомнили пароль?</h3>
				<Link to="/Login">Войти</Link>
			</form>
		</main>
	);
};
