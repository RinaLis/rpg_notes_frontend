import React from 'react';

import { ForgotPasswordUI } from '@ui-pages';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { isAuthCheckedSelector, userErrorSelector } from 'src/services/slices/user/user.slice';
import { useAppDispatch, useAppSelector } from '@store';
import { requestSendCode } from 'src/services/slices/user/actions';
import { VerifyCodeType } from '@utils-types';
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
	const isLoading = useAppSelector(isAuthCheckedSelector);
	const responseError = useAppSelector(userErrorSelector);
	const dispatch = useAppDispatch();
	// Обработчик успешной отправки формы
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		dispatch(requestSendCode({ ...data, type: VerifyCodeType.Reset }));
	};
	// Сброс формы при успешной отправке кода
	React.useEffect(() => {
		if (!isLoading && !responseError) {
			reset();
		}
	}, [isLoading, responseError, reset]);

	return (
		<ForgotPasswordUI
			onSubmit={handleSubmit(onSubmit)}
			register={register}
			errors={errors}
			error={responseError}
		/>
	);
};
