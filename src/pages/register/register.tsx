import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RegisterUI } from '@ui-pages';

// Схема валидации через yup
const schemaRegister = yup
	.object({
		login: yup.string().min(3, 'Логин должен быть не менее 3 символов').required('Введите логин'),
		email: yup.string().email('Некорректный email').required('Введите email'),
		password: yup
			.string()
			.min(6, 'Пароль должен быть не менее 6 символов')
			.required('Введите пароль'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Пароли не совпадают')
			.required('Повторите пароль'),
	})
	.required();

// Типизация формы, основанная на yup-схеме
type FormValues = yup.InferType<typeof schemaRegister>;

export const Register: React.FC = () => {
	// Инициализация react-hook-form с валидацией через yup
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schemaRegister),
	});

	// Обработчик успешной отправки формы
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log('Форма отправлена:', data);
		reset();
	};
	return <RegisterUI onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />;
};
