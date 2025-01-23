import { FC, useEffect } from 'react';
import { AdventureCreateUI } from '@ui-pages';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { schemaCreateAdventure } from 'src/utils/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	getAdventuresIsLoading,
	requestCreateAdventure,
	getCreatedAdventure,
	getAdventureError,
	clearCreatedAdventure,
} from '@slices';
import { useAppDispatch, useAppSelector } from '@store';
import { clearUploadImageId, getUploadImageSelector } from 'src/services/slices/images';

type FormValues = yup.InferType<typeof schemaCreateAdventure>;

export const AdventureCreate: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schemaCreateAdventure),
	});

	const route = useNavigate();
	const dispatch = useAppDispatch();

	const newAdventure = useAppSelector(getCreatedAdventure);
	const isLoading = useAppSelector(getAdventuresIsLoading);
	const responseError = useAppSelector(getAdventureError);
	const image = useAppSelector(getUploadImageSelector);

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		dispatch(requestCreateAdventure({ image, ...data }));
	};

	useEffect(() => {
		if (!isLoading && !responseError && newAdventure) {
			reset();
			dispatch(clearUploadImageId());
			dispatch(clearCreatedAdventure());

			route(`/adventure/${newAdventure.id}`);
		}
	}, [isLoading, responseError, newAdventure, reset, dispatch, route]);

	return (
		<AdventureCreateUI
			onSubmit={handleSubmit(onSubmit)}
			register={register}
			error=""
			errors={errors}
		/>
	);
};
