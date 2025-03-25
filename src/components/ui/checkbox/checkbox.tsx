import { FC, useRef } from 'react';
import clsx from 'clsx';
import { CheckboxProps } from './type';
import styles from './checkbox.module.scss';

export const Checkbox: FC<CheckboxProps> = ({
	name,
	className,
	label, // Метка инпута
	register, // Объект для регистрации инпута (используется, например, в React Hook Form)
}) => {
	const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

	return (
		<label htmlFor={name} className={clsx(styles.checkbox, styles.styleE, className)}>
			<input
				name={register.name}
				id={name}
				ref={(el) => {
					inputRef.current = el; // Устанавливаем ссылку на инпут
					register.ref(el); // Передаем ref в React Hook Form
				}}
				onChange={(e) => {
					register.onChange(e); // Обработка события изменения через React Hook Form
				}}
				onBlur={register.onBlur} // Обработка события потери фокуса через React Hook Form
				type="checkbox" // Устанавливаем тип file для фото
				className={styles.checkbox__input} // Стили инпута/>
			/>
			<div className={styles.checkbox__checkmark} />
			<div className={styles.checkbox__label}>{label}</div>
		</label>
	);
};
