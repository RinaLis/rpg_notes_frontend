import React from 'react';
import { Link } from 'react-router-dom';
import eyeInput from '@assets/eyeInput.svg';
import { Button, Input } from '@components';
import clsx from 'clsx';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from '../common.module.scss';
import { InputNames } from '../../input/type';

interface FormValues {
	password: string;
	confirmPassword: string;
	confirmCode: string;
}
interface ResetPasswordUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>;
}

export const ResetPasswordUI: React.FC<ResetPasswordUIProps> = ({ onSubmit, register, errors }) => {
	return (
		<main className={clsx(styles.page, styles.page_fixed, styles.page_centered)}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.content__title}>Восстановление пароля</h2>
					<form name="resetPassword" onSubmit={onSubmit} className={styles.authForm} noValidate>
						<Input
							type="password"
							placeholder="Введите новый пароль"
							register={register('password')}
							error={errors.password?.message}
							icon={eyeInput}
							сlassNameCustom={InputNames.auth}
						/>
						<Input
							type="text"
							placeholder="Подтвердите пароль"
							register={register('confirmPassword')}
							error={errors.confirmPassword?.message}
							icon={eyeInput}
							сlassNameCustom={InputNames.auth}
						/>
						<Input
							type="text"
							placeholder="Введите код из письма"
							register={register('confirmCode')}
							error={errors.confirmCode?.message}
							сlassNameCustom={InputNames.auth}
						/>
						<Button type="submit" className={styles.button}>
							Сохранить
						</Button>
						<div className={styles.authForm__linkContainer}>
							<div className={styles.question}>
								<div className={styles.queston__text}>Вспомнили пароль?</div>
								<Link to="/Login" className={styles.question__link}>
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
