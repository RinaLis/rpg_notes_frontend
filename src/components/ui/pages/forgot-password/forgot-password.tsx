import React from 'react';
import { Link } from 'react-router-dom';
import VictorianSvg from '@assets/victorian.svg';
import pen from '@assets/pen.svg';
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
		<main className={styles.forgotPassword}>
			<div className={styles.forgotPassword__formСontainer}>
				<img className={styles.forgotPassword__img} src={VictorianSvg} alt="victorian" />
				<form
					className={styles.forgotPassword__form}
					name="forgotPassword"
					onSubmit={onSubmit}
					noValidate
				>
					<h2 className={styles.forgotPassword__title}>Восстановление пароля</h2>
					<Input
						type="email"
						placeholder="Email"
						register={register('email')}
						error={errors.email?.message}
						icon={pen}
					/>{' '}
					<Button type="submit" className={styles.forgotPassword__button}>
						Восстановить
					</Button>
					<div className={styles.forgotPassword__linkContainer}>
						<h3>Вспомнили пароль?</h3>
						<Link to="/Login">Войти</Link>
					</div>
				</form>
			</div>
		</main>
	);
};
