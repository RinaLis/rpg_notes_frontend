import React from 'react';
import { InputUI } from '@ui'; // Компонент для отображения
import { useForm } from 'src/hooks/useForm';
import { InputProps } from '../ui/input/type';

export const Input: React.FC<InputProps> = ({
	name,
	type = 'text',
	label = '',
	placeholder = '',
	className = '',
	validate,
}) => {
	// Используем кастомный хук useForm
	const { values, errors, handleChange, validateField } = useForm({ [name]: '' });

	// Обработчик для события onBlur (валидация)
	const handleBlur = () => {
		validateField(name, values[name], validate);
	};

	return (
		<InputUI
			type={type}
			label={label}
			name={name}
			value={values[name]}
			placeholder={placeholder}
			onChange={handleChange}
			onBlur={handleBlur}
			error={errors[name] || ''}
			className={className}
		/>
	);
};
