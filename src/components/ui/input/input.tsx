import clsx from 'clsx';
import { InputUIProps } from './type';
import styles from './input.module.scss';

export const InputUI: React.FC<InputUIProps> = ({
	type,
	label,
	name,
	value,
	placeholder,
	onChange,
	onBlur,
	error,
}) => (
	<div className={styles.inputContainer}>
		{label && <label htmlFor={name}>{label}</label>}
		<input
			type={type}
			id={name}
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			className={clsx('input-field', { 'input-error': error })}
		/>
		{error && <span className="error-message">{error}</span>}
	</div>
);
