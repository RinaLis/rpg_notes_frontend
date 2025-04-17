import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { schemaInvitePlayer } from '@validation';
import * as yup from 'yup';

type FormValues = yup.InferType<typeof schemaInvitePlayer>;

export type InvitePlayersProps = {
	onSubmit: (e: React.FormEvent) => void;
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>;
	error: string | null;
};
