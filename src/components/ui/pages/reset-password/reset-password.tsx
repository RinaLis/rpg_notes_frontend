import React from 'react';
import VictorianSvg from '@assets/victorian.svg';
import { Button, Input } from '@components';
import styles from './reset-password.module.scss';

interface ResetPasswordUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: any;
	errors: Record<string, any>;
}

export const ResetPasswordUI: React.FC<ResetPasswordUIProps> = ({ onSubmit, register, errors }) => {
	return (
		<main className={styles.resetPasswordSection}>
			<img className={styles.resetPasswordSection__img} src={VictorianSvg} alt="victorian" />
			<form
				className={styles.resetPasswordSection__formSection}
				name="resetPassword"
				onSubmit={onSubmit}
			>
				<h2 className={styles.resetPasswordSection__title}>Восстановление пароля</h2>
				<Input
					type="password"
					placeholder="Введите новый пароль"
					register={register('password')}
					error={errors.password?.message}
				/>
				<Input
					type="text"
					placeholder="Подтверждение пароля"
					register={register('confirmPassword')}
					error={errors.confirmPassword?.message}
				/>
				<Input
					type="text"
					placeholder="Введите код из письма"
					register={register('сode')}
					error={errors.сode?.message}
				/>
				<Button className={styles.resetPasswordSection__button}>Сохранить</Button>
			</form>
		</main>
	);
};
