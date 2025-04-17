import { FC, useEffect } from 'react';
import { ThreadCreateUI } from '@ui-pages';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { schemaCreateThread } from '@validation';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	getCurrentAdventure,
	requestCreateThread,
	getCreatedThread,
	getTreadsIsLoading,
	getThreadError,
	clearUploadImageId,
	getUploadImageSelector,
} from '@slices';
import { useAppDispatch, useAppSelector } from '@store';
import { ThreadType } from '@utils-types';
import { useNavigate } from 'react-router-dom';

type FormValues = yup.InferType<typeof schemaCreateThread>;

export const ThreadCreate: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schemaCreateThread),
	});

	const dispatch = useAppDispatch();
	const route = useNavigate();

	const currentAdventure = useAppSelector(getCurrentAdventure);
	const createdThread = useAppSelector(getCreatedThread);
	const isLoading = useAppSelector(getTreadsIsLoading);
	const responseError = useAppSelector(getThreadError);
	const image = useAppSelector(getUploadImageSelector);

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		let type = ThreadType.Public;
		if (data.type === true) {
			type = ThreadType.Private;
		}
		if (currentAdventure) {
			dispatch(requestCreateThread({ image, adventure_id: currentAdventure?.id, ...data, type }));
		}
	};

	useEffect(() => {
		if (!isLoading && !responseError && createdThread) {
			reset();
			dispatch(clearUploadImageId());
			// dispatch(clearCreatedAdventure());

			route(`/adventure/${createdThread.adventure_path_id}/thread/${createdThread.id}`);
		}
	}, [isLoading, responseError, createdThread, reset, dispatch, route]);

	return (
		<ThreadCreateUI
			onSubmit={handleSubmit(onSubmit)}
			register={register}
			error=""
			errors={errors}
		/>
	);
};
