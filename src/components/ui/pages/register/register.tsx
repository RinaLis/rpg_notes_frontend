import React from 'react';
import { NavLink } from 'react-router-dom';
import VictorianSvg from '@assets/victorian.svg';
import eyeInput from '@assets/eyeInput.svg';
import pen from '@assets/pen.svg';
import { Button, Input } from '@components';
import styles from './register.module.scss';

interface RegisterUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: any;
	errors: Record<string, any>;
}

export const RegisterUI: React.FC<RegisterUIProps> = ({ onSubmit, register, errors }) => {
	return (
		<main className={styles.register}>
			<div className={styles.register__formСontainer}>
				<img className={styles.register__img} src={VictorianSvg} alt="victorian" />
				<form name="register" onSubmit={onSubmit} className={styles.register__form} noValidate>
					<h2>Регистрация</h2>
					<Input
						type="text"
						placeholder="Логин"
						register={register('login')}
						error={errors.login?.message}
						icon={pen}
					/>
					<Input
						type="email"
						placeholder="Email"
						register={register('email')}
						error={errors.email?.message}
						icon={pen}
					/>
					<Input
						type="password"
						placeholder="Пароль"
						register={register('password')}
						error={errors.password?.message}
						icon={eyeInput}
					/>
					<Input
						type="text"
						placeholder="Подтверждение пароля"
						register={register('confirmPassword')}
						error={errors.confirmPassword?.message}
						icon={eyeInput}
					/>
					<Button className={styles.register__button} type="submit">
						Регистрация
					</Button>
					<h3>Зарегистрированы?</h3>
					<div className={styles.register__linkContainer}>
						<div>
							<NavLink to="/login">Войти</NavLink>
						</div>
					</div>
				</form>
			</div>
		</main>
	);
};
