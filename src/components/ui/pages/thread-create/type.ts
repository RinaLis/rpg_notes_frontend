import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { schemaCreateThread } from '@validation';
import * as yup from 'yup';

type FormValues = yup.InferType<typeof schemaCreateThread>;

export type ThreadCreateProps = {
	onSubmit: (e: React.FormEvent) => void;
	register: UseFormRegister<FormValues>;
	errors: FieldErrors<FormValues>;
	error: string | null;
};
