import clsx from 'clsx';
import { ImageUploader } from '@components';
import { Input, InputNames, Button, Checkbox } from '@ui';
import stylesCommon from '../common.module.scss';
import styles from './thread-create.module.scss';
import { ThreadCreateProps } from './type';

export const ThreadCreateUI: React.FC<ThreadCreateProps> = ({
	register,
	onSubmit,
	error,
	errors,
}) => {
	return (
		<form name="thread" onSubmit={onSubmit} className={styles.adventureForm} noValidate>
			<div className={styles.adventureForm__picture}>
				<ImageUploader className={styles.adventureForm__image} />
			</div>
			<div className={styles.adventureForm__text}>
				<Input
					className={styles.adventureForm__input}
					type="name"
					placeholder="Название треда"
					register={register('name')}
					сlassNameCustom={InputNames.info}
					error={errors.name?.message}
				/>
				<Input
					className={styles.adventureForm__input}
					type="description"
					placeholder="Описание треда"
					register={register('description')}
					сlassNameCustom={InputNames.info}
					error={errors.description?.message}
				/>
				<Checkbox
					name="PrivateThread"
					className={styles.adventureForm__checkbox}
					label="Приватный тред"
					register={register('type')}
				/>
			</div>
			<Button type="submit" className={clsx(stylesCommon.button, styles.adventureForm__button)}>
				Создать
			</Button>
			<div className={styles.authForm__error}>{error && <span>{error}</span>}</div>
		</form>
	);
};
