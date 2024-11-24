import React from 'react';
import VictorianSvg from '@assets/victorian.svg';
import pen from '@assets/pen.svg';
import { Button, Input } from '@components';
import styles from './reset-password.module.scss';

interface ResetPasswordUIProps {
	onSubmit: (e: React.FormEvent) => void;
	register: any;
	errors: Record<string, any>;
}

export const ResetPasswordUI: React.FC<ResetPasswordUIProps> = ({ onSubmit, register, errors }) => {
	return (
		<main className={styles.resetPassword}>
			<div className={styles.resetPassword__formСontainer}>
				<img className={styles.resetPassword__img} src={VictorianSvg} alt="victorian" />
				<form
					name="resetPassword"
					onSubmit={onSubmit}
					className={styles.resetPassword__form}
					noValidate
				>
					<h2 className={styles.resetPassword__title}>Восстановление пароля</h2>
					<Input
						type="password"
						placeholder="Введите новый пароль"
						register={register('password')}
						error={errors.password?.message}
						icon={pen}
					/>
					<Input
						type="text"
						placeholder="Подтвердите пароль"
						register={register('confirmPassword')}
						error={errors.confirmPassword?.message}
						icon={pen}
					/>
					<Input
						type="text"
						placeholder="Введите код из письма"
						register={register('confirm')}
						error={errors.confirm?.message}
						icon={pen}
					/>
					<Button type="submit" className={styles.resetPasswordSection__button}>
						Сохранить
					</Button>
				</form>
			</div>
		</main>
	);
};
