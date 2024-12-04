import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ResetPasswordUI } from '@ui-pages';
import { schemaReset } from '../../utils/validation';

// Типизация формы, основанная на yup-схеме
type FormValues = yup.InferType<typeof schemaReset>;
export const ResetPassword: React.FC = () => {
	// Инициализация react-hook-form с валидацией через yup
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schemaReset),
	});

	// Обработчик успешной отправки формы
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(`Запишите свой пароль: ${data.password}`);
		reset();
	};
	return <ResetPasswordUI onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />;
};
