import { FC } from 'react';
import { ImageUploader } from '@components';
import { AdventureCreateUIProps } from './type';
import { InputNames } from '../../input/type';
import { Input } from '../../input';
import { Button } from '../../button';
import stylesCommon from '../common.module.scss';
import styles from './adventure-create.module.scss';

export const AdventureCreateUI: FC<AdventureCreateUIProps> = ({
	register,
	onSubmit,
	error,
	errors,
}) => {
	return (
		<>
			<form name="adventure" onSubmit={onSubmit} className={styles.adventureForm} noValidate>
				<h2 className={styles.adventureForm__title}>Создание приключения</h2>

				<Input
					className={styles.adventureForm__name}
					type="text"
					placeholder="Название"
					register={register('name')}
					сlassNameCustom={InputNames.info}
					error={errors.name?.message}
				/>
				<ImageUploader className={styles.adventureForm__image} />
				<Input
					className={styles.adventureForm__description}
					type="textarea"
					placeholder="Краткое описание"
					register={register('description')}
					сlassNameCustom={InputNames.textarea}
					error={errors.description?.message}
				/>
				<Input
					className={styles.adventureForm__text}
					type="textarea"
					placeholder="Полное описание"
					register={register('text')}
					сlassNameCustom={InputNames.textarea}
					error={errors.text?.message}
				/>

				<Button type="submit" className={stylesCommon.button}>
					Создать
				</Button>
				<div className={styles.authForm__error}>{error && <span>{error}</span>}</div>
			</form>
		</>
	);
};
