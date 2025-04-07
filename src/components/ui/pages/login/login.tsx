import { FC } from 'react';
import { Input, InputNames, Button } from '@ui';
import { Link } from 'react-router-dom';

import eyeInput from '@assets/icons/eyeInput.svg';

import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from '../common.module.scss';

interface FormValues {
	email: string;
	password: string;
}
interface LoginUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>;
	error: string | null;
}

export const LoginUI: FC<LoginUIProps> = ({ onSubmit, register, errors, error }) => {
	return (
		<>
			<form name="login" onSubmit={onSubmit} className={styles.authForm} noValidate>
				<h2 className={styles.authForm__title}>Вход</h2>

				<Input
					type="email"
					placeholder="Email"
					register={register('email')}
					error={errors.email?.message}
					сlassNameCustom={InputNames.auth}
				/>
				<Input
					type="password"
					placeholder="Пароль"
					register={register('password')}
					error={errors.password?.message}
					icon={eyeInput}
					сlassNameCustom={InputNames.auth}
				/>

				<Button type="submit" className={styles.button}>
					Войти
				</Button>
				<div className={styles.authForm__error}>{error && <span>{error}</span>}</div>

				<div className={styles.authForm__linkContainer}>
					<div className={styles.question}>
						<Link to="/auth/register" className={styles.question__link}>
							Регистрация
						</Link>
					</div>
					<div className={styles.question}>
						<Link to="/auth/forgot-password" className={styles.question__link}>
							Забыли пароль?
						</Link>
					</div>
				</div>
			</form>
		</>
	);
};
