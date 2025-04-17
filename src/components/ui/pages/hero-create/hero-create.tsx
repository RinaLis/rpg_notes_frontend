import { FC } from 'react';
import { ImageUploader } from '@components';
import { Input, Button, InputNames } from '@ui';
import { HeroCreateUIProps } from './type';
import stylesCommon from '../common.module.scss';
import styles from './hero-create.module.scss';

export const HeroCreateUI: FC<HeroCreateUIProps> = ({ register, onSubmit, error, errors }) => {
	return (
		<>
			<form name="hero-create" onSubmit={onSubmit} className={styles.heroForm} noValidate>
				<h2 className={styles.heroForm__title}>Создайте персонажа для приключения</h2>

				<div className={styles.heroForm__smallContainer}>
					<Input
						className={styles.heroForm__smallField}
						type="text"
						placeholder="Имя"
						register={register('name')}
						сlassNameCustom={InputNames.info}
						error={errors.name?.message}
					/>
					<Input
						className={styles.heroForm__smallField}
						type="text"
						placeholder="Возраст"
						register={register('age')}
						сlassNameCustom={InputNames.info}
						error={errors.age?.message}
					/>
					<Input
						className={styles.heroForm__smallField}
						type="text"
						placeholder="Происхождение"
						register={register('background')}
						сlassNameCustom={InputNames.info}
						error={errors.background?.message}
					/>
					<Input
						className={styles.heroForm__smallField}
						type="text"
						placeholder="Класс"
						register={register('class')}
						сlassNameCustom={InputNames.info}
						error={errors.class?.message}
					/>
					<Input
						className={styles.heroForm__smallField}
						type="text"
						placeholder="Раса"
						register={register('race')}
						сlassNameCustom={InputNames.info}
						error={errors.race?.message}
					/>
					<Input
						className={styles.heroForm__smallField}
						type="text"
						placeholder="Пол"
						register={register('gender')}
						сlassNameCustom={InputNames.info}
						error={errors.gender?.message}
					/>
				</div>
				<ImageUploader className={styles.heroForm__image} />
				<div className={styles.heroForm__bigContainer}>
					<Input
						className={styles.heroForm__bigField}
						type="textarea"
						placeholder="Характер"
						register={register('character')}
						сlassNameCustom={InputNames.textarea}
						error={errors.character?.message}
					/>
					<Input
						className={styles.heroForm__bigField}
						type="textarea"
						placeholder="Внешний вид"
						register={register('description')}
						сlassNameCustom={InputNames.textarea}
						error={errors.description?.message}
					/>
					<Input
						className={styles.heroForm__bigField}
						type="textarea"
						placeholder="Прочее"
						register={register('others')}
						сlassNameCustom={InputNames.textarea}
						error={errors.others?.message}
					/>
				</div>
				<Button type="submit" className={stylesCommon.button}>
					Создать
				</Button>
				<div className={styles.authForm__error}>{error && <span>{error}</span>}</div>
			</form>
		</>
	);
};
