import { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { schemaInvitePlayer } from '@validation';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	clearInvitedUser,
	getCurrentAdventure,
	getInvitedUser,
	getPlayersError,
	getPlayersIsLoading,
	requestInviteUser,
} from '@slices';
import { useAppDispatch, useAppSelector } from '@store';
import { useNavigate } from 'react-router-dom';
import { InvitePlayersUI } from '@ui-pages';

type FormValues = yup.InferType<typeof schemaInvitePlayer>;

export const InvitePlayers: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schemaInvitePlayer),
	});

	const dispatch = useAppDispatch();
	const route = useNavigate();

	const currentAdventure = useAppSelector(getCurrentAdventure);
	const invitedUser = useAppSelector(getInvitedUser);
	const isLoading = useAppSelector(getPlayersIsLoading);
	const responseError = useAppSelector(getPlayersError);

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		if (currentAdventure) {
			dispatch(requestInviteUser({ adventure_id: currentAdventure?.id, ...data }));
		}
	};

	useEffect(() => {
		if (!isLoading && currentAdventure && invitedUser) {
			reset();
			dispatch(clearInvitedUser());

			route(`/adventure/${currentAdventure?.id}`);
		}
	}, [isLoading, responseError, invitedUser, currentAdventure, reset, dispatch, route]);

	return (
		<InvitePlayersUI
			onSubmit={handleSubmit(onSubmit)}
			register={register}
			error=""
			errors={errors}
		/>
	);
};
