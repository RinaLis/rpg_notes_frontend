import React from 'react';
import { Link } from 'react-router-dom';
import VictorianSvg from '@assets/victorian.svg';
import { Button, Input } from '@components';
import styles from './register.module.scss';

interface RegisterUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: any;
	errors: Record<string, any>;
}

export const RegisterUI: React.FC<RegisterUIProps> = ({ onSubmit, register, errors }) => {
	return (
		<main className={styles.registerSection}>
			<img className={styles.registerSection__img} src={VictorianSvg} alt="victorian" />
			<form name="Register" onSubmit={onSubmit} noValidate>
				<h1 className={styles.registerSection__title}>Регистрация</h1>
				<Input
					type="text"
					placeholder="Логин"
					register={register('login')}
					error={errors.login?.message}
				/>
				<Input
					type="email"
					placeholder="Email"
					register={register('email')}
					error={errors.email?.message}
				/>
				<Input
					type="password"
					placeholder="Пароль"
					register={register('password')}
					error={errors.password?.message}
				/>
				<Input
					type="text"
					placeholder="Подтверждение пароля"
					register={register('confirmPassword')}
					error={errors.confirmPassword?.message}
				/>
				<Button type="submit">Регистрация</Button>
				Зарегистрированы?
				<Link to="/login">Войти</Link>
			</form>
		</main>
	);
};
