import React from 'react';

import { ForgotPasswordUI } from '@ui-pages';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Схема валидации через yup
const schema = yup
	.object({
		email: yup.string().email('Некорректный email').required('Введите email'),
	})
	.required();

// Типизация формы, основанная на yup-схеме
type FormValues = yup.InferType<typeof schema>;

export const ForgotPassword: React.FC = () => {
	// Инициализация react-hook-form с валидацией через yup
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	// Обработчик успешной отправки формы
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(`На ${data.email} отправлено письмо с ссылой на восстановление пароля`);
		reset();
	};
	return <ForgotPasswordUI onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />;
};
