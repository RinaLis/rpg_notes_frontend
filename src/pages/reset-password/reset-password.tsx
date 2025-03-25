import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ResetPasswordUI } from '@ui-pages';
import { useAppDispatch, useAppSelector } from '@store';
import { isAuthCheckedSelector, userErrorSelector, resetPassword } from '@slices';
import { schemaReset } from '@validation';

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

	const isLoading = useAppSelector(isAuthCheckedSelector);
	const responseError = useAppSelector(userErrorSelector);
	const dispatch = useAppDispatch();
	// Обработчик успешной отправки формы
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		dispatch(resetPassword({ ...data }));
	};

	// Сброс формы при успешной смене пароля
	useEffect(() => {
		if (!isLoading && !responseError) {
			reset();
		}
	}, [isLoading, responseError, reset]);
	return (
		<ResetPasswordUI
			onSubmit={handleSubmit(onSubmit)}
			register={register}
			errors={errors}
			error={responseError}
		/>
	);
};
