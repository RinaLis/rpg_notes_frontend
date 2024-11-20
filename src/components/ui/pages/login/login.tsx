import { FC } from 'react';
import { Input } from '@components';
import { NavLink } from 'react-router-dom';
import styles from './login.module.scss';

type LoginUIProps = {
	validate:
		| {
				login?: (value: string) => string | null;
				email?: (value: string) => string | null;
				password?: (value: string) => string | null;
		  }
		| undefined;
};

export const LoginUI: FC<LoginUIProps> = ({ validate = undefined }) => {
	return (
		<main className={styles.login}>
			<div className={styles.loginForm}>
				<h2 className={styles.loginTitle}>Вход</h2>
				<form name="login" onSubmit={() => {}} className={styles.loginForm}>
					<Input type="text" name="login" placeholder="Логин" validate={validate?.login} />
					<Input type="email" name="email" placeholder="Email" validate={validate?.email} />
					<Input
						type="password"
						name="password"
						placeholder="Пароль"
						validate={validate?.password}
					/>
					<div>
						<button
							type="submit"
							onClick={(e) => {
								e.preventDefault();
								alert('submit');
							}}
							className={styles.loginButton}
						>
							Войти
						</button>
					</div>
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
