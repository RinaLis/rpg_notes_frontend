import { FC, useEffect } from 'react';
import { HeroCreateUI } from '@ui-pages';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { schemaCreateHero } from '@validation';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	clearCreatedHero,
	getCreatedHero,
	getCurrentAdventure,
	getHeroesError,
	getHeroesLoading,
	getUploadImageSelector,
	requestCreateHero,
	requestGetPlayers,
} from '@slices';
import { useAppDispatch, useAppSelector } from '@store';
import { HeroCharacteristic, HeroCharacteristicDTO, HeroCharacteristicsEnum } from '@utils-types';

type FormValues = yup.InferType<typeof schemaCreateHero>;

export const HeroCreate: FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schemaCreateHero),
	});

	const route = useNavigate();
	const dispatch = useAppDispatch();

	const currentAdventure = useAppSelector(getCurrentAdventure);
	const image = useAppSelector(getUploadImageSelector);
	const createdHero = useAppSelector(getCreatedHero);
	const isLoading = useAppSelector(getHeroesLoading);
	const responseError = useAppSelector(getHeroesError);

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		const characteristics = new Array<HeroCharacteristicDTO>();
		/* eslint-disable-next-line no-restricted-syntax */
		for (const [key, value] of Object.entries(HeroCharacteristicsEnum)) {
			const newKey: HeroCharacteristic = key as HeroCharacteristic;
			if (typeof data[value] === 'string') {
				characteristics.push({ code: HeroCharacteristicsEnum[newKey], value: data[value] });
			}
		}
		if (currentAdventure) {
			dispatch(
				requestCreateHero({
					image,
					adventure_id: currentAdventure.id,
					name: data.name,
					characteristics,
				})
			);
		}
	};

	useEffect(() => {
		if (!isLoading && currentAdventure && createdHero) {
			reset();
			dispatch(clearCreatedHero());
			dispatch(requestGetPlayers(currentAdventure?.id));

			route(`/adventure/${currentAdventure?.id}`);
		}
	}, [isLoading, responseError, createdHero, currentAdventure, reset, dispatch, route]);

	return (
		<HeroCreateUI onSubmit={handleSubmit(onSubmit)} register={register} error="" errors={errors} />
	);
};
