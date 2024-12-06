import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@ui';
import clsx from 'clsx';
import styles from '../common.module.scss';
import { InputNames } from '../../input/type';

interface ForgotPasswordUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: any;
	errors: Record<string, any>;
}

export const ForgotPasswordUI: React.FC<ForgotPasswordUIProps> = ({
	onSubmit,
	register,
	errors,
}) => {
	return (
		<main className={clsx(styles.page, styles.page_fixed, styles.page_centered)}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.content__title}>Восстановление пароля</h2>

					<form className={styles.authForm} name="forgotPassword" onSubmit={onSubmit} noValidate>
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
						<div className={styles.authForm__linkContainer}>
							<div className={styles.question}>
								<div className={styles.queston__text}>Вспомнили пароль?</div>
								<Link to="/auth/Login" className={styles.question__link}>
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
