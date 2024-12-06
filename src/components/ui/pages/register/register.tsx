import React from 'react';
import { Link } from 'react-router-dom';

import eyeInput from '@assets/eyeInput.svg';

import { Button, Input } from '@components';
import clsx from 'clsx';
import styles from '../common.module.scss';
import { InputNames } from '../../input/type';

interface RegisterUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: any;
	errors: Record<string, any>;
}

export const RegisterUI: React.FC<RegisterUIProps> = ({ onSubmit, register, errors }) => {
	return (
		<main className={clsx(styles.page, styles.page_fixed, styles.page_centered)}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.content__title}>Регистрация</h2>
					<form name="register" onSubmit={onSubmit} className={styles.authForm} noValidate>
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
						<div className={styles.authForm__linkContainer}>
							<div className={styles.question}>
								<div className={styles.question__text}>Зарегистрированы?</div>

								<Link to="/auth/login" className={styles.question__link}>
									Войти
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};
