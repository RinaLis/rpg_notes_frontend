import { FC } from 'react';
import { Input, Button } from '@components';
import { NavLink } from 'react-router-dom';
import VictorianSvg from '@assets/victorian.svg';
import styles from './login.module.scss';

interface LoginUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: any;
	errors: Record<string, any>;
}

export const LoginUI: FC<LoginUIProps> = ({ onSubmit, register, errors }) => {
	return (
		<main className={styles.login}>
			<div className={styles.loginFormСontainer}>
				<img className={styles.loginImg} src={VictorianSvg} alt="victorian" />
				<form name="login" onSubmit={onSubmit} className={styles.loginForm} noValidate>
					<h2 className={styles.loginTitle}>Вход</h2>
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
					<Button type="submit" className={styles.loginButton}>
						Войти
					</Button>
					<div className={styles.loginLinkContainer}>
						<div>
							<NavLink to="/register">Регистрация</NavLink>
						</div>
						<div>
							<NavLink to="/forgot-password">Забыли пароль?</NavLink>
						</div>
					</div>
				</form>
			</div>
		</main>
	);
};
