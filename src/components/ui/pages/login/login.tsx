import { FC } from 'react';
import { Input, Button } from '@components';
import { NavLink } from 'react-router-dom';
import VictorianSvg from '@assets/victorian.svg';
import eyeInput from '@assets/eyeInput.svg';
import pen from '@assets/pen.svg';
import styles from './login.module.scss';

interface LoginUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: any;
	errors: Record<string, any>;
}

export const LoginUI: FC<LoginUIProps> = ({ onSubmit, register, errors }) => {
	return (
		<main className={styles.login}>
			<div className={styles.login__formСontainer}>
				<img className={styles.login__img} src={VictorianSvg} alt="victorian" />
				<form name="login" onSubmit={onSubmit} className={styles.login__form} noValidate>
					<h2>Вход</h2>
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
					<Button type="submit">Войти</Button>
					<div className={styles.login__linkContainer}>
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
