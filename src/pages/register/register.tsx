import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RegisterUI } from '@ui-pages';
import { useAppDispatch, useAppSelector } from '@store';
import {
	isAuthCheckedSelector,
	userDataSelector,
	userErrorSelector,
	requestRegisterUser,
} from '@slices';
import { schemaRegister } from '@validation';

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

	const responseError = useAppSelector(userErrorSelector);
	const user = useAppSelector(userDataSelector);
	const isLoading = useAppSelector(isAuthCheckedSelector);
	const dispatch = useAppDispatch();
	// Обработчик успешной отправки формы
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		dispatch(requestRegisterUser({ ...data }));
	};
	// Сброс формы при успешной регистрации
	useEffect(() => {
		if (!isLoading && !responseError && user) {
			reset();
		}
	}, [isLoading, responseError, user, reset]);

	return (
		<RegisterUI
			onSubmit={handleSubmit(onSubmit)}
			register={register}
			errors={errors}
			error={responseError}
		/>
	);
};
