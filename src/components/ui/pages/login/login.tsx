import { FC } from 'react';
import { Input, Button } from '@components';
import { Link } from 'react-router-dom';

import eyeInput from '@assets/icons/eyeInput.svg';

import clsx from 'clsx';
import styles from '../common.module.scss';

interface LoginUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: any;
	errors: Record<string, any>;
}

export const LoginUI: FC<LoginUIProps> = ({ onSubmit, register, errors }) => {
	return (
		<main className={clsx(styles.page, styles.page_fixed, styles.page_centered)}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.content__title}>Вход</h2>
					<form name="login" onSubmit={onSubmit} className={styles.authForm} noValidate>
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
							icon={eyeInput}
						/>

						<Button type="submit" className={styles.button}>
							Войти
						</Button>
						<div className={styles.authForm__linkContainer}>
							<div className={styles.question}>
								<Link to="/register" className={styles.question__link}>
									Регистрация
								</Link>
							</div>
							<div className={styles.question}>
								<Link to="/forgot-password" className={styles.question__link}>
									Забыли пароль?
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};
