import React from 'react';

import { ForgotPasswordUI } from '@ui-pages';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { schemaForgot } from '../../utils/validation';

// Типизация формы, основанная на yup-схеме
type FormValues = yup.InferType<typeof schemaForgot>;

export const ForgotPassword: React.FC = () => {
	// Инициализация react-hook-form с валидацией через yup
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schemaForgot),
	});

	// Обработчик успешной отправки формы
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(`На ${data.email} отправлено письмо с ссылой на восстановление пароля`);
		reset();
	};
	return <ForgotPasswordUI onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />;
};
