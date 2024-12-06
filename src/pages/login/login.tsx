import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginUI } from '@ui-pages';
import { useAppDispatch, useAppSelector } from '@store';
import { requestLoginUser } from 'src/services/slices/user/actions';
import { userErrorSelector } from 'src/services/slices/user/user.slice';
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

	const responseErrors = useAppSelector(userErrorSelector);
	const dispatch = useAppDispatch();
	// Обработчик успешной отправки формы
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		dispatch(requestLoginUser({ ...data }));
		if (responseErrors) return;
		reset();
	};
	return (
		<LoginUI
			onSubmit={handleSubmit(onSubmit)}
			register={register}
			errors={errors}
			error={responseErrors}
		/>
	);
};
