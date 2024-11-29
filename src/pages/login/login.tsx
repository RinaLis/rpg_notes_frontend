import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginUI } from '@ui-pages';

// Схема валидации через yup
const schemaLogin = yup
	.object({
		name: yup
			.string()
			.max(20, 'Название должно быть не более 20 символов')
			.required('Введите название'),
		login: yup.string().min(3, 'Логин должен быть не менее 3 символов').required('Введите логин'),
		email: yup.string().email('Некорректный email').required('Введите email'),
		password: yup
			.string()
			.min(6, 'Пароль должен быть не менее 6 символов')
			.required('Введите пароль'),
	})
	.required();

// Типизация формы, основанная на yup-схеме
type FormValues = yup.InferType<typeof schemaLogin>;

export const Login: React.FC = () => {
	// Инициализация react-hook-form с валидацией через yup
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schemaLogin),
	});

	// Обработчик успешной отправки формы
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log('Форма отправлена:', data);
		reset();
	};
	return <LoginUI onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />;
};
