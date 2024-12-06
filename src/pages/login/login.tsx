import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginUI } from '@ui-pages';
import { schemaLogin } from '../../utils/validation';

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
