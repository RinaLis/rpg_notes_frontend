import React from 'react';
import { Link } from 'react-router-dom';
import eyeInput from '@assets/icons/eyeInput.svg';
import { Button, Input, InputNames } from '@ui';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from '../common.module.scss';

interface FormValues {
	password: string;
	confirmPassword: string;
	code: string;
}
interface ResetPasswordUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>;
	error: string | null;
}

export const ResetPasswordUI: React.FC<ResetPasswordUIProps> = ({
	onSubmit,
	register,
	errors,
	error,
}) => {
	return (
		<form name="resetPassword" onSubmit={onSubmit} className={styles.authForm} noValidate>
			<h2 className={styles.authForm__title}>Смена пароля</h2>
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
				register={register('code')}
				error={errors.code?.message}
				сlassNameCustom={InputNames.auth}
			/>
			<Button type="submit" className={styles.button}>
				Сохранить
			</Button>
			<div className={styles.authForm__error}>{error && <span>{error}</span>}</div>
			<div className={styles.authForm__linkContainer}>
				<div className={styles.question}>
					<div className={styles.queston__text}>Вспомнили пароль?</div>
					<Link to="/auth/Login" className={styles.question__link}>
						Войти
					</Link>
				</div>
			</div>
		</form>
	);
};
