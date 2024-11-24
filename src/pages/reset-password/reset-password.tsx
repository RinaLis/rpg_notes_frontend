import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ResetPasswordUI } from '@ui-pages';

// Схема валидации через yup
const schemaReset = yup
	.object({
		password: yup
			.string()
			.min(6, 'Пароль должен быть не менее 6 символов')
			.required('Введите пароль'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Пароли не совпадают')
			.required('Повторите пароль'),
		confirm: yup
			.string()
			.min(3, 'Код должен быть не менее 3 символов')
			.max(9, 'Код должен быть не более 9 символов')
			.required('Введите код из письма'),
	})
	.required();

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
