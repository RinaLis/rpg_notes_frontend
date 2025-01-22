import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@ui';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from '../common.module.scss';
import { InputNames } from '../../input/type';

interface FormValues {
	email: string;
}

interface ForgotPasswordUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>;
	error: string | null;
}

export const ForgotPasswordUI: React.FC<ForgotPasswordUIProps> = ({
	onSubmit,
	register,
	errors,
	error,
}) => {
	return (
		<form className={styles.authForm} name="forgotPassword" onSubmit={onSubmit} noValidate>
			<h2 className={styles.authForm__title}>Восстановление пароля</h2>
			<Input
				type="email"
				placeholder="Email"
				register={register('email')}
				error={errors.email?.message}
				сlassNameCustom={InputNames.auth}
			/>
			<Button type="submit" className={styles.button}>
				Восстановить
			</Button>
			<div className={styles.authForm__error}>{error && <span>{error}</span>}</div>
			<div className={styles.authForm__linkContainer}>
				<div className={styles.question}>
					<div className={styles.queston__text}>Вспомнили пароль?</div>
					<Link to="/auth/Login" className={styles.question__link}>
						Войти
					</Link>
				</div>
			</div>
		</form>
	);
};
