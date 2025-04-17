import clsx from 'clsx';
import { Input, InputNames, Button } from '@ui';
import stylesCommon from '../common.module.scss';
import styles from './invite-players.module.scss';
import { InvitePlayersProps } from './type';

export const InvitePlayersUI: React.FC<InvitePlayersProps> = ({
	register,
	onSubmit,
	error,
	errors,
}) => {
	return (
		<form name="invite" onSubmit={onSubmit} className={styles.adventureForm} noValidate>
			<div className={styles.adventureForm__text}>
				<Input
					className={styles.adventureForm__input}
					type="name"
					placeholder="Логин игрока"
					register={register('login')}
					сlassNameCustom={InputNames.info}
					error={errors.login?.message}
				/>
			</div>
			<Button type="submit" className={clsx(stylesCommon.button, styles.adventureForm__button)}>
				Пригласить
			</Button>
			<div className={styles.authForm__error}>{error && <span>{error}</span>}</div>
		</form>
	);
};
