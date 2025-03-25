import React from 'react';
import { Link } from 'react-router-dom';

import eyeInput from '@assets/icons/eyeInput.svg';

import { Button, Input, InputNames } from '@ui';

import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from '../common.module.scss';

interface FormValues {
	login: string;
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}
interface RegisterUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>;
	error: string | null;
}

export const RegisterUI: React.FC<RegisterUIProps> = ({ onSubmit, register, errors, error }) => {
	return (
		<form name="register" onSubmit={onSubmit} className={styles.authForm} noValidate>
			<h2 className={styles.authForm__title}>Регистрация</h2>
			<Input
				type="text"
				placeholder="Логин"
				register={register('login')}
				error={errors.login?.message}
				сlassNameCustom={InputNames.auth}
			/>
			<Input
				type="email"
				placeholder="Email"
				register={register('email')}
				error={errors.email?.message}
				сlassNameCustom={InputNames.auth}
			/>
			<Input
				type="text"
				placeholder="Имя"
				register={register('name')}
				error={errors.login?.message}
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
			<Input
				type="text"
				placeholder="Подтверждение пароля"
				register={register('confirmPassword')}
				error={errors.confirmPassword?.message}
				icon={eyeInput}
				сlassNameCustom={InputNames.auth}
			/>
			<Button className={styles.button} type="submit">
				Регистрация
			</Button>
			<div className={styles.authForm__error}>{error && <span>{error}</span>}</div>
			<div className={styles.authForm__linkContainer}>
				<div className={styles.question}>
					<div className={styles.question__text}>Зарегистрированы?</div>

					<Link to="/auth/login" className={styles.question__link}>
						Войти
					</Link>
				</div>
			</div>
		</form>
	);
};
